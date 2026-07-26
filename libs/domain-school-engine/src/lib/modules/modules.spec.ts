import { hasRequired } from '../reference';
import { MOVES, NATURES, fullReference } from '../testing/reference.fixture';
import type { ExerciseGenerator, GameContext, MoveRef } from '../types';
import { damageGenerators, expectedDamage, expectedDamageGenerator, priorityGenerator, stabGenerator } from './damage';
import { statsGenerators, natureByEffectGenerator, natureEffectGenerator, statChangeGenerator } from './stats';
import { ailmentChanceGenerator, ailmentSourceGenerator, recoilGenerator, statusGenerators } from './status';

const ctx: GameContext = { versionGroup: null, generation: null };
const SEEDS = Array.from({ length: 150 }, (_, i) => i * 6151 + 29);

const bySlug = new Map(MOVES.map((move) => [move.slug, move]));
const moveOf = (slug: string): MoveRef => bySlug.get(slug) as MoveRef;

const allNew: ExerciseGenerator[] = [...damageGenerators, ...statusGenerators, ...statsGenerators];

/* ---------------------------------------------- invariants every generator must hold */

describe.each(allNew.map((g) => [g.id, g] as const))('%s', (_id, generator: ExerciseGenerator) => {
	it('declares the reference sections it reads', () => {
		expect(generator.requires.length).toBeGreaterThan(0);
		expect(hasRequired(fullReference, generator)).toBe(true);
	});

	it('refuses to run when its reference data is absent', () => {
		// A generator quietly producing a malformed question from missing data is the failure
		// mode worth being loud about.
		expect(() => generator.generate(1, {}, ctx)).toThrow(/missing reference data/);
	});

	it('is deterministic — the same seed reproduces the exercise exactly', () => {
		for (const seed of SEEDS.slice(0, 25)) {
			expect(generator.generate(seed, fullReference, ctx)).toEqual(generator.generate(seed, fullReference, ctx));
		}
	});

	it('never generates an ambiguous question', () => {
		for (const seed of SEEDS) {
			const exercise = generator.generate(seed, fullReference, ctx);
			const correct = exercise.candidates.filter((c) => c.correct);
			expect(correct).toHaveLength(1);

			const answerValue = correct[0].value;
			expect(exercise.candidates.filter((c) => !c.correct && Object.is(c.value, answerValue))).toEqual([]);
		}
	});

	it('offers all four hint tiers in order', () => {
		for (const seed of SEEDS.slice(0, 40)) {
			const { hints } = generator.generate(seed, fullReference, ctx);
			expect(hints.map((h) => h.tier)).toEqual([1, 2, 3, 4]);
			expect(hints.every((h) => h.text.trim().length > 0)).toBe(true);
		}
	});

	it('never eliminates the right answer in the T2 narrowing hint', () => {
		for (const seed of SEEDS) {
			const exercise = generator.generate(seed, fullReference, ctx);
			// Quoted labels, not substrings: one label is often a prefix of another.
			const quoted = [...(exercise.hints.find((h) => h.tier === 2)?.text ?? '').matchAll(/"([^"]+)"/g)].map((m) => m[1]);
			expect(quoted.length).toBeGreaterThan(0);
			for (const label of quoted) {
				expect(exercise.candidates.find((c) => c.label === label)?.correct).toBe(false);
			}
		}
	});

	it('produces a real prompt, four options and a stable id', () => {
		for (const seed of SEEDS.slice(0, 40)) {
			const exercise = generator.generate(seed, fullReference, ctx);
			expect(exercise.prompt.length).toBeGreaterThan(10);
			expect(exercise.candidates).toHaveLength(4);
			expect(exercise.id).toBe(`${generator.lessonId}:${seed}`);
			expect(exercise.explanation.length).toBeGreaterThan(5);
		}
	});
});

/* ---------------------------------------------- M2 Damage Math */

describe('expectedDamage', () => {
	it('discounts power by accuracy', () => {
		expect(expectedDamage(moveOf('fire-blast'))).toBeCloseTo(93.5);
		expect(expectedDamage(moveOf('surf'))).toBe(90);
	});

	it('treats a null accuracy as never missing', () => {
		expect(expectedDamage({ ...moveOf('surf'), accuracy: null })).toBe(90);
	});
});

describe('expectedDamageGenerator', () => {
	it('the marked answer really does have the highest expected damage', () => {
		for (const seed of SEEDS) {
			const exercise = expectedDamageGenerator.generate(seed, fullReference, ctx);
			const scores = exercise.candidates.map((c) => expectedDamage(moveOf(c.value as string)));
			const answerScore = expectedDamage(moveOf(exercise.candidates.find((c) => c.correct)?.value as string));
			expect(answerScore).toBe(Math.max(...scores));
			// And strictly so — a tie would make two options defensible.
			expect(scores.filter((s) => s === answerScore)).toHaveLength(1);
		}
	});

	it('teaches the method on a non-answer in its T3 hint', () => {
		for (const seed of SEEDS.slice(0, 40)) {
			const exercise = expectedDamageGenerator.generate(seed, fullReference, ctx);
			const answerLabel = exercise.candidates.find((c) => c.correct)?.label ?? '';
			expect(exercise.hints[2].text).not.toContain(answerLabel);
		}
	});
});

describe('priorityGenerator', () => {
	it('the answer is the only move above priority 0', () => {
		for (const seed of SEEDS) {
			const exercise = priorityGenerator.generate(seed, fullReference, ctx);
			const answer = moveOf(exercise.candidates.find((c) => c.correct)?.value as string);
			const others = exercise.candidates.filter((c) => !c.correct).map((c) => moveOf(c.value as string));
			expect(answer.priority).toBeGreaterThan(0);
			for (const other of others) expect(other.priority).toBeLessThan(answer.priority);
		}
	});
});

describe('stabGenerator', () => {
	it('exactly one option shares the type named in the prompt', () => {
		for (const seed of SEEDS) {
			const exercise = stabGenerator.generate(seed, fullReference, ctx);
			const askedType = /for an? (\w+)-type/.exec(exercise.prompt)?.[1]?.toLowerCase();
			expect(askedType).toBeDefined();

			const matching = exercise.candidates.filter((c) => moveOf(c.value as string).type === askedType);
			expect(matching).toHaveLength(1);
			expect(matching[0].correct).toBe(true);
		}
	});
});

/* ---------------------------------------------- M3 Status */

describe('ailmentSourceGenerator', () => {
	it('the answer inflicts the named ailment and no distractor does', () => {
		for (const seed of SEEDS) {
			const exercise = ailmentSourceGenerator.generate(seed, fullReference, ctx);
			const answer = moveOf(exercise.candidates.find((c) => c.correct)?.value as string);
			expect(answer.ailment).toBeTruthy();

			for (const wrong of exercise.candidates.filter((c) => !c.correct)) {
				expect(moveOf(wrong.value as string).ailment).not.toBe(answer.ailment);
			}
		}
	});
});

describe('ailmentChanceGenerator', () => {
	it('asks only about moves whose ailment is genuinely chance-based', () => {
		// chance 0 means "always" in this dataset; asking "how often?" about those is nonsense.
		for (const seed of SEEDS) {
			const exercise = ailmentChanceGenerator.generate(seed, fullReference, ctx);
			const answer = exercise.candidates.find((c) => c.correct)?.value as number;
			expect(answer).toBeGreaterThan(0);
			expect(MOVES.some((m) => m.ailmentChance === answer)).toBe(true);
		}
	});
});

describe('recoilGenerator', () => {
	it('only the answer costs its user HP', () => {
		for (const seed of SEEDS) {
			const exercise = recoilGenerator.generate(seed, fullReference, ctx);
			const answer = moveOf(exercise.candidates.find((c) => c.correct)?.value as string);
			expect(answer.drain).toBeLessThan(0);

			for (const wrong of exercise.candidates.filter((c) => !c.correct)) {
				expect(moveOf(wrong.value as string).drain).toBeGreaterThanOrEqual(0);
			}
		}
	});
});

/* ---------------------------------------------- M4 Stats & Natures */

const NEUTRAL = NATURES.filter((n) => n.increased === n.decreased).map((n) => n.slug);

describe('nature generators', () => {
	it('never offer a neutral nature, in either direction', () => {
		// Hardy/Docile/Serious/Bashful/Quirky all do nothing, so any question involving them
		// would have five equally defensible answers.
		expect(NEUTRAL).toHaveLength(5);

		for (const seed of SEEDS) {
			for (const generator of [natureEffectGenerator, natureByEffectGenerator]) {
				const exercise = generator.generate(seed, fullReference, ctx);
				for (const candidate of exercise.candidates) {
					expect(NEUTRAL).not.toContain(candidate.id);
				}
				expect(exercise.prompt).not.toMatch(new RegExp(NEUTRAL.join('|'), 'i'));
			}
		}
	});

	it('natureByEffect names a stat pair that exactly one nature satisfies', () => {
		for (const seed of SEEDS) {
			const exercise = natureByEffectGenerator.generate(seed, fullReference, ctx);
			const answer = NATURES.find((n) => n.slug === exercise.candidates.find((c) => c.correct)?.value);
			const sameEffect = NATURES.filter((n) => n.increased === answer?.increased && n.decreased === answer?.decreased);
			expect(sameEffect).toHaveLength(1);
		}
	});
});

describe('statChangeGenerator', () => {
	it('offers four genuinely different stat changes', () => {
		for (const seed of SEEDS) {
			const exercise = statChangeGenerator.generate(seed, fullReference, ctx);
			const signatures = new Set(exercise.candidates.map((c) => c.value as string));
			expect(signatures.size).toBe(4);
		}
	});

	it('the answer matches the move named in the prompt', () => {
		for (const seed of SEEDS) {
			const exercise = statChangeGenerator.generate(seed, fullReference, ctx);
			const answerSlug = exercise.candidates.find((c) => c.correct)?.id as string;
			const [change] = moveOf(answerSlug).statChanges;
			expect(exercise.candidates.find((c) => c.correct)?.value).toBe(`${change.stat}:${change.change}`);
		}
	});
});
