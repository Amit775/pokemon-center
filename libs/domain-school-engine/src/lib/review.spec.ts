import { ancestorsOf, isUnlocked, unlockedLessons } from './curriculum';
import { MASTERY_MIN_ATTEMPTS, emptyRecord, isMastered, recordAttempt, type Attempt, type MasteryRecord } from './mastery';
import { buildPlacementTest, placementUnlocks } from './placement';
import { curriculum } from './registry';
import { LEITNER_INTERVAL_DAYS, isDue, leitnerBox, overdueRatio, reviewWeight, weakestFirst } from './review';
import { createRng } from './rng';
import { MOVES, NATURES } from './testing/reference.fixture';
import { MODERN_CHART } from './testing/type-chart.fixture';
import type { GameContext, ReferenceData } from './types';

const at = (day: string) => `${day}T12:00:00.000Z`;

const attempt = (correct: boolean, atISO: string): Attempt => ({ correct, deepestHintTier: null, atISO });

function record(lessonId: string, correct: boolean, count: number, atISO: string): MasteryRecord {
	let result = emptyRecord(lessonId);
	for (let i = 0; i < count; i++) result = recordAttempt(result, attempt(correct, atISO));
	return result;
}

const perfect = (atISO: string) => record('l', true, MASTERY_MIN_ATTEMPTS, atISO);
const failing = (atISO: string) => record('l', false, MASTERY_MIN_ATTEMPTS, atISO);

describe('leitnerBox', () => {
	it('puts a confidently known lesson in the slowest box', () => {
		expect(leitnerBox(perfect(at('2026-07-01')))).toBe(4);
	});

	it('puts a failing lesson in the fastest box', () => {
		expect(leitnerBox(failing(at('2026-07-01')))).toBe(0);
	});
});

describe('overdueRatio', () => {
	it('is 0 immediately after practice on a slow-box lesson', () => {
		expect(overdueRatio(perfect(at('2026-07-01')), at('2026-07-01'))).toBe(0);
	});

	it('reaches 1 exactly when the interval elapses', () => {
		const known = perfect(at('2026-07-01'));
		const interval = LEITNER_INTERVAL_DAYS[leitnerBox(known)];
		const due = new Date(Date.parse(at('2026-07-01')) + interval * 86_400_000).toISOString();
		expect(overdueRatio(known, due)).toBeCloseTo(1);
	});

	it('treats a failing lesson as always due', () => {
		// Box 0 has a zero interval: something just got wrong should come straight back.
		expect(isDue(failing(at('2026-07-01')), at('2026-07-01'))).toBe(true);
	});
});

describe('reviewWeight', () => {
	const now = at('2026-07-10');

	it('favours a never-attempted lesson over a freshly mastered one', () => {
		expect(reviewWeight(undefined, now)).toBeGreaterThan(reviewWeight(perfect(now), now));
	});

	it('favours a weak lesson over a strong one, all else equal', () => {
		expect(reviewWeight(failing(now), now)).toBeGreaterThan(reviewWeight(perfect(now), now));
	});

	it('grows as a lesson goes stale', () => {
		const known = perfect(at('2026-07-01'));
		expect(reviewWeight(known, at('2026-07-20'))).toBeGreaterThan(reviewWeight(known, at('2026-07-02')));
	});

    it('never drops to zero, so finished lessons still resurface', () => {
		expect(reviewWeight(perfect(now), now)).toBeGreaterThan(0);
	});

	it('stops growing once a lesson is far past due', () => {
		// Ten times overdue is not ten times more urgent than twice overdue.
		const known = perfect(at('2026-01-01'));
		expect(reviewWeight(known, at('2026-07-01'))).toBe(reviewWeight(known, at('2027-07-01')));
	});
});

describe('decay', () => {
	it('never un-masters a lesson, however stale', () => {
		// The load-bearing promise of open question 2: time changes how often a lesson is
		// offered, never whether it is considered learned.
		const known = perfect(at('2020-01-01'));
		expect(isMastered(known)).toBe(true);
		expect(reviewWeight(known, at('2026-07-10'))).toBeGreaterThan(reviewWeight(known, at('2020-01-01')));
	});

	it('never re-locks a lesson whose prereq has gone stale', () => {
		const lesson = { id: 'x', moduleId: 'm', title: 'x', summary: '', prereqs: ['basics'], generatorId: 'g' };
		expect(isUnlocked(lesson, new Set(['basics']))).toBe(true);
	});
});

describe('weakestFirst', () => {
	it('ranks the lesson most in need of practice first', () => {
		const now = at('2026-07-10');
		const records = [
			{ ...perfect(now), lessonId: 'known' },
			{ ...failing(now), lessonId: 'shaky' },
		];
		expect(weakestFirst(['known', 'shaky'], records, now)[0].lessonId).toBe('shaky');
	});

	it('puts never-attempted lessons near the top', () => {
		const now = at('2026-07-10');
		const ranked = weakestFirst(['fresh', 'known'], [{ ...perfect(now), lessonId: 'known' }], now);
		expect(ranked[0].lessonId).toBe('fresh');
	});
});

describe('rng.pickWeighted', () => {
	it('respects the weights over many draws', () => {
		const rng = createRng(99);
		const counts = { a: 0, b: 0 };
		for (let i = 0; i < 2000; i++) {
			counts[rng.pickWeighted(['a', 'b'] as const, (item) => (item === 'a' ? 9 : 1))]++;
		}
		expect(counts.a).toBeGreaterThan(counts.b * 5);
	});

	it('never returns a zero-weighted item when a positive one exists', () => {
		const rng = createRng(7);
		for (let i = 0; i < 200; i++) {
			expect(rng.pickWeighted(['skip', 'take'] as const, (item) => (item === 'take' ? 1 : 0))).toBe('take');
		}
	});

	it('falls back to uniform when everything weighs nothing', () => {
		expect(['a', 'b']).toContain(createRng(1).pickWeighted(['a', 'b'], () => 0));
	});

	it('rejects an empty pool', () => {
		expect(() => createRng(1).pickWeighted([], () => 1)).toThrow(/empty pool/);
	});
});

/* ---------------------------------------------- placement */

const ref: ReferenceData = { typeChart: MODERN_CHART, moves: MOVES, natures: NATURES };
const context: GameContext = { versionGroup: null, generation: null };

describe('ancestorsOf', () => {
	it('collects prerequisites transitively', () => {
		expect(ancestorsOf(curriculum, 'damage.stab')).toContain('damage.expected-damage');
	});

	it('is empty for a root lesson', () => {
		expect(ancestorsOf(curriculum, 'type-chart.single-type-effectiveness').size).toBe(0);
	});
});

describe('buildPlacementTest', () => {
	it('is deterministic', () => {
		const a = buildPlacementTest(42, ref, context).map((q) => q.exercise.id);
		expect(buildPlacementTest(42, ref, context).map((q) => q.exercise.id)).toEqual(a);
	});

	it('asks about every playable exercise lesson exactly once', () => {
		const test = buildPlacementTest(42, ref, context);
		const ids = test.map((q) => q.lessonId);
		expect(new Set(ids).size).toBe(ids.length);
		expect(ids.length).toBeGreaterThanOrEqual(10);
	});

	it('excludes simulations, which grade on a scale rather than yes/no', () => {
		const ids = buildPlacementTest(42, ref, context).map((q) => q.lessonId);
		expect(ids).not.toContain('coverage.four-move-coverage');
		expect(ids).not.toContain('matchup.best-counter');
	});

	it('offers only lessons whose reference data is present', () => {
		const chartOnly = buildPlacementTest(42, { typeChart: MODERN_CHART }, context);
		expect(chartOnly.every((q) => q.lessonId.startsWith('type-chart.'))).toBe(true);
	});
});

describe('placementUnlocks', () => {
	it('opens the lesson passed and everything beneath it', () => {
		const granted = placementUnlocks(['damage.stab']);
		expect(granted).toContain('damage.stab');
		expect(granted).toContain('damage.expected-damage');
	});

	it('grants nothing when nothing was answered correctly', () => {
		expect(placementUnlocks([]).size).toBe(0);
	});

	it('unlocks without claiming mastery', () => {
		// Passing one question should stop the graph gating you; it is not the sustained
		// evidence isMastered requires, and pretending otherwise would corrupt the signal
		// every adaptive feature reads.
		const granted = placementUnlocks(['type-chart.single-type-effectiveness']);
		const lesson = { id: 'type-chart.immunities', moduleId: 'type-chart', title: '', summary: '', prereqs: ['type-chart.single-type-effectiveness'], generatorId: 'g' };

		expect(isUnlocked(lesson, new Set(), false, granted)).toBe(true);
		expect(isMastered(emptyRecord('type-chart.single-type-effectiveness'))).toBe(false);
	});

	it('opens a whole module when its deepest lesson is passed', () => {
		const granted = placementUnlocks(['type-chart.dual-type-multipliers', 'damage.stab', 'damage.priority']);
		const open = unlockedLessons(curriculum, new Set(), false, granted).map((l) => l.id);
		expect(open).toContain('type-chart.single-type-effectiveness');
		expect(open).toContain('damage.expected-damage');
	});
});
