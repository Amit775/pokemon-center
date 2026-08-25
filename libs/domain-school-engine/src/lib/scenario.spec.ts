import { buildCoverageScenario, coverageGaps, superEffectiveCount, COVERAGE_PICK } from './modules/coverage';
import { MATCHUP_LESSON_ID, buildMatchupScenario, pickMatchupDefender, type MatchupCandidate } from './modules/matchup';
import { combinations, qualityOf } from './scenario';
import { MOVES } from './testing/reference.fixture';
import { MODERN_CHART } from './testing/type-chart.fixture';
import type { GameContext, ReferenceData } from './types';

const context: GameContext = { versionGroup: null, generation: null };
const ref: ReferenceData = { typeChart: MODERN_CHART, moves: MOVES };
const SEEDS = Array.from({ length: 60 }, (_, i) => i * 4517 + 11);

describe('combinations', () => {
	it('produces every k-subset exactly once', () => {
		const all = [...combinations([1, 2, 3, 4], 2)];
		expect(all).toHaveLength(6);
		expect(new Set(all.map((c) => c.join(','))).size).toBe(6);
	});

	it('yields nothing when k exceeds the pool', () => {
		expect([...combinations([1, 2], 3)]).toEqual([]);
		expect([...combinations([1, 2], 0)]).toEqual([]);
	});
});

describe('qualityOf', () => {
	it('is a ratio, clamped to 0..1', () => {
		expect(qualityOf(5, 10)).toBe(0.5);
		expect(qualityOf(10, 10)).toBe(1);
		expect(qualityOf(-3, 10)).toBe(0);
		expect(qualityOf(20, 10)).toBe(1);
	});

	it('treats an unreachable optimum as full marks rather than dividing by zero', () => {
		expect(qualityOf(0, 0)).toBe(1);
	});
});

/* ---------------------------------------------- M6 Coverage */

describe('superEffectiveCount', () => {
	it('counts defending types hit for more than neutral damage', () => {
		// Ground hits Fire, Electric, Poison, Rock and Steel for 2x.
		expect(superEffectiveCount(MODERN_CHART, ['ground'])).toBe(5);
	});

	it('does not double-count a type two picks both beat', () => {
		const fire = superEffectiveCount(MODERN_CHART, ['fire']);
		expect(superEffectiveCount(MODERN_CHART, ['fire', 'fire'])).toBe(fire);
	});

	it('grows or holds as picks are added, never shrinks', () => {
		const one = superEffectiveCount(MODERN_CHART, ['water']);
		const two = superEffectiveCount(MODERN_CHART, ['water', 'grass']);
		expect(two).toBeGreaterThanOrEqual(one);
	});
});

describe('coverageGaps', () => {
	it('is the complement of what is covered', () => {
		const picks = ['fire', 'water'];
		expect(coverageGaps(MODERN_CHART, picks)).toHaveLength(MODERN_CHART.types.length - superEffectiveCount(MODERN_CHART, picks));
	});
});

describe('buildCoverageScenario', () => {
	it('is deterministic', () => {
		for (const seed of SEEDS.slice(0, 10)) {
			const a = buildCoverageScenario(seed, ref, context);
			const b = buildCoverageScenario(seed, ref, context);
			expect(a.options).toEqual(b.options);
			expect(a.prompt).toBe(b.prompt);
		}
	});

	it('offers one move per attacking type, so no pick is a duplicate of another', () => {
		for (const seed of SEEDS) {
			const scenario = buildCoverageScenario(seed, ref, context);
			const types = scenario.options.map((o) => o.detail?.split(' · ')[0]);
			expect(new Set(types).size).toBe(scenario.options.length);
		}
	});

	it('grades the optimal set as full quality', () => {
		for (const seed of SEEDS) {
			const scenario = buildCoverageScenario(seed, ref, context);
			const result = scenario.grade(scenario.grade([]).optimalIds);
			expect(result.quality).toBe(1);
			expect(result.achieved).toBe(result.optimal);
		}
	});

	it('never claims a selection beats the brute-forced optimum', () => {
		// The optimum is computed over every combination, so nothing can exceed it. If this
		// ever fails, the grader and the optimum have drifted apart.
		for (const seed of SEEDS) {
			const scenario = buildCoverageScenario(seed, ref, context);
			for (const combo of combinations(scenario.options, COVERAGE_PICK)) {
				const result = scenario.grade(combo.map((o) => o.id));
				expect(result.achieved).toBeLessThanOrEqual(result.optimal);
				expect(result.quality).toBeLessThanOrEqual(1);
			}
		}
	});

	it('rates a deliberately redundant pick below the optimum', () => {
		const scenario = buildCoverageScenario(SEEDS[0], ref, context);
		const optimal = scenario.grade(scenario.grade([]).optimalIds);
		const single = scenario.grade([scenario.options[0].id]);
		expect(single.achieved).toBeLessThan(optimal.achieved);
	});

	it('refuses to run without both a chart and moves', () => {
		expect(() => buildCoverageScenario(1, { typeChart: MODERN_CHART }, context)).toThrow(/missing reference data: moves/);
		expect(() => buildCoverageScenario(1, { moves: MOVES }, context)).toThrow(/missing reference data: typeChart/);
	});
});

/* ---------------------------------------------- M5 Matchup */

const candidate = (slug: string, score: number): MatchupCandidate => ({
	slug,
	bestMove: 'surf',
	bestMoveType: 'water',
	effectiveness: 2,
	score,
});

const CANDIDATES = Array.from({ length: 15 }, (_, i) => candidate(`mon-${i}`, 200 - i * 7));

describe('pickMatchupDefender', () => {
	it('is deterministic and always names real types', () => {
		for (const seed of SEEDS) {
			const picked = pickMatchupDefender(seed, MODERN_CHART);
			expect(pickMatchupDefender(seed, MODERN_CHART)).toEqual(picked);
			expect(picked.length).toBeGreaterThanOrEqual(1);
			expect(picked.length).toBeLessThanOrEqual(2);
			for (const type of picked) expect(MODERN_CHART.types).toContain(type);
		}
	});

	it('never repeats a type in a dual-type defender', () => {
		for (const seed of SEEDS) {
			const picked = pickMatchupDefender(seed, MODERN_CHART);
			expect(new Set(picked).size).toBe(picked.length);
		}
	});

	it('produces both single and dual defenders across seeds', () => {
		const sizes = new Set(SEEDS.map((seed) => pickMatchupDefender(seed, MODERN_CHART).length));
		expect(sizes).toEqual(new Set([1, 2]));
	});
});

describe('buildMatchupScenario', () => {
	it('always offers the genuinely best counter', () => {
		// "Pick the best counter" is unanswerable if the best one is not on the list.
		for (const seed of SEEDS) {
			const scenario = buildMatchupScenario(seed, ['water', 'flying'], CANDIDATES, context);
			expect(scenario.options.map((o) => o.id)).toContain('mon-0');
		}
	});

	it('grades the best counter as full quality and rank 1', () => {
		for (const seed of SEEDS) {
			const scenario = buildMatchupScenario(seed, ['water'], CANDIDATES, context);
			const result = scenario.grade(['mon-0']);
			expect(result.quality).toBe(1);
			expect(result.rank).toBe(1);
		}
	});

	it('gives partial credit for a near miss rather than zero', () => {
		const scenario = buildMatchupScenario(SEEDS[0], ['water'], CANDIDATES, context);
		const runnerUp = scenario.options.map((o) => o.id).filter((id) => id !== 'mon-0')[0];
		const result = scenario.grade([runnerUp]);

		expect(result.quality).toBeGreaterThan(0);
		expect(result.quality).toBeLessThan(1);
		expect(result.rank).toBeGreaterThan(1);
	});

	it('scores an empty selection as zero without throwing', () => {
		const scenario = buildMatchupScenario(SEEDS[0], ['water'], CANDIDATES, context);
		expect(scenario.grade([]).quality).toBe(0);
	});

	it('refuses to build from too few counters', () => {
		expect(() => buildMatchupScenario(1, ['water'], CANDIDATES.slice(0, 3), context)).toThrow(/need 6/);
	});

	it('is a single-pick scenario on the matchup lesson', () => {
		const scenario = buildMatchupScenario(SEEDS[0], ['water'], CANDIDATES, context);
		expect(scenario.pick).toBe(1);
		expect(scenario.lessonId).toBe(MATCHUP_LESSON_ID);
	});
});

/* ---------------------------------------------- shared shape */

describe.each([
	['coverage', () => buildCoverageScenario(SEEDS[3], ref, context)],
	['matchup', () => buildMatchupScenario(SEEDS[3], ['water', 'flying'], CANDIDATES, context)],
] as const)('%s scenario', (_name, build) => {
	it('offers all four hint tiers in order', () => {
		const { hints } = build();
		expect(hints.map((h) => h.tier)).toEqual([1, 2, 3, 4]);
		expect(hints.every((h) => h.text.trim().length > 0)).toBe(true);
	});

	it('asks for a sane number of picks from a larger option set', () => {
		const scenario = build();
		expect(scenario.pick).toBeGreaterThanOrEqual(1);
		expect(scenario.options.length).toBeGreaterThan(scenario.pick);
	});

	it('reports an optimal selection matching its pick count', () => {
		const scenario = build();
		expect(scenario.grade([]).optimalIds).toHaveLength(scenario.pick);
	});
});
