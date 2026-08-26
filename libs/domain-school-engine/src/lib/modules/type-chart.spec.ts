import { GEN1_CHART, MODERN_CHART, buildChart } from '../testing/type-chart.fixture';
import type { ExerciseGenerator, GameContext, ReferenceData } from '../types';
import {
	dualEffectiveness,
	dualTypeMultipliersGenerator,
	effectiveness,
	immunitiesGenerator,
	singleTypeEffectivenessGenerator,
	typeChartGenerators,
} from './type-chart';

/* ------------------------------------------------------------------ fixtures */

const modernRef: ReferenceData = { typeChart: MODERN_CHART };
const gen1Ref: ReferenceData = { typeChart: GEN1_CHART };
const modernCtx: GameContext = { versionGroup: null, generation: null };
const gen1Ctx: GameContext = { versionGroup: 'red-blue', generation: 1 };

const SEEDS = Array.from({ length: 200 }, (_, index) => index * 7919 + 13);

/* ------------------------------------------------------------------ lookups */

describe('effectiveness', () => {
	it('reads the chart', () => {
		expect(effectiveness(MODERN_CHART, 'water', 'fire')).toBe(2);
		expect(effectiveness(MODERN_CHART, 'fire', 'water')).toBe(0.5);
		expect(effectiveness(MODERN_CHART, 'electric', 'ground')).toBe(0);
		expect(effectiveness(MODERN_CHART, 'normal', 'normal')).toBe(1);
	});

	it('defaults to neutral for types the chart never mentions', () => {
		// Mirrors the API's COALESCE(damage_factor, 100) rather than crashing on sparse data.
		expect(effectiveness(MODERN_CHART, 'nonsense', 'fire')).toBe(1);
		expect(effectiveness(MODERN_CHART, 'fire', 'nonsense')).toBe(1);
	});
});

describe('dualEffectiveness', () => {
	it('multiplies both defending types', () => {
		expect(dualEffectiveness(MODERN_CHART, 'fire', 'grass', 'steel')).toBe(4);
		expect(dualEffectiveness(MODERN_CHART, 'ice', 'dragon', 'flying')).toBe(4);
		expect(dualEffectiveness(MODERN_CHART, 'electric', 'ground', 'water')).toBe(0);
	});

	it('produces the neutral trap that single-type intuition misses', () => {
		// Both "good" types, and yet: 0.5 x 2 = 1.
		expect(dualEffectiveness(MODERN_CHART, 'grass', 'grass', 'ground')).toBe(1);
	});
});

/* ------------------------------------------------------------------ generators */

describe.each(typeChartGenerators.map((typeChartGenerator) => [typeChartGenerator.id, typeChartGenerator] as const))('%s', (_id, generator: ExerciseGenerator) => {
	it('is deterministic — the same seed reproduces the exercise exactly', () => {
		for (const seed of SEEDS.slice(0, 25)) {
			expect(generator.generate(seed, modernRef, modernCtx)).toEqual(generator.generate(seed, modernRef, modernCtx));
		}
	});

	it('never generates an ambiguous question', () => {
		// The guarantee from docs/school-plan.md: two defensible answers would destroy trust
		// faster than difficulty ever could. assertUnambiguous throws inside generate(),
		// so simply generating across the space is the assertion.
		for (const seed of SEEDS) {
			const exercise = generator.generate(seed, modernRef, modernCtx);
			const correct = exercise.candidates.filter((candidate) => candidate.correct);
			expect(correct).toHaveLength(1);

			const answerValue = correct[0].value;
			const clashes = exercise.candidates.filter((candidate) => !candidate.correct && Object.is(candidate.value, answerValue));
			expect(clashes).toEqual([]);
		}
	});

	it('offers all four hint tiers in order', () => {
		for (const seed of SEEDS.slice(0, 50)) {
			const { hints } = generator.generate(seed, modernRef, modernCtx);
			expect(hints.map((hint) => hint.tier)).toEqual([1, 2, 3, 4]);
			expect(hints.every((hint) => hint.text.length > 0)).toBe(true);
		}
	});

	it('never eliminates the right answer in the T2 narrowing hint', () => {
		for (const seed of SEEDS) {
			const exercise = generator.generate(seed, modernRef, modernCtx);
			// Quoted labels, not substrings: one label is often a prefix of another.
			const quoted = [...(exercise.hints.find((hint) => hint.tier === 2)?.text ?? '').matchAll(/"([^"]+)"/g)].map((entry) => entry[1]);
			expect(quoted.length).toBeGreaterThan(0);
			for (const label of quoted) {
				expect(exercise.candidates.find((candidate) => candidate.label === label)?.correct).toBe(false);
			}
		}
	});

	it('agrees its indefinite article with the type name', () => {
		// "a Ice-type move" reads as broken English in a product whose whole job is teaching.
		for (const seed of SEEDS) {
			const { prompt } = generator.generate(seed, modernRef, modernCtx);
			expect(prompt).not.toMatch(/\ba (?=[AEIOU])/);
			expect(prompt).not.toMatch(/\ban (?![AEIOU])/);
		}
	});

	it('produces a real prompt and at least two options', () => {
		for (const seed of SEEDS.slice(0, 50)) {
			const exercise = generator.generate(seed, modernRef, modernCtx);
			expect(exercise.prompt.length).toBeGreaterThan(10);
			expect(exercise.candidates.length).toBeGreaterThanOrEqual(2);
			expect(exercise.id).toBe(`${generator.lessonId}:${seed}`);
		}
	});

	it('confines itself to the era it was given', () => {
		// The whole point: with a generation-1 chart, types that did not exist yet cannot appear —
		// not by filtering, but because they are simply absent from the data.
		for (const seed of SEEDS) {
			const exercise = generator.generate(seed, gen1Ref, gen1Ctx);
			const surface = [exercise.prompt, exercise.explanation, ...exercise.candidates.map((candidate) => candidate.label), ...exercise.hints.map((hint) => hint.text)].join(' ');
			expect(surface).not.toMatch(/\bDark\b|\bSteel\b|\bFairy\b/);
		}
	});
});

describe('singleTypeEffectivenessGenerator', () => {
	it('always answers with a real single-type outcome', () => {
		for (const seed of SEEDS) {
			const answer = singleTypeEffectivenessGenerator.generate(seed, modernRef, modernCtx).candidates.find((candidate) => candidate.correct);
			expect([0, 0.5, 1, 2]).toContain(answer?.value);
		}
	});
});

describe('dualTypeMultipliersGenerator', () => {
	it('answers with a product of two single-type factors', () => {
		for (const seed of SEEDS) {
			const answer = dualTypeMultipliersGenerator.generate(seed, modernRef, modernCtx).candidates.find((candidate) => candidate.correct);
			expect([0, 0.25, 0.5, 1, 2, 4]).toContain(answer?.value);
		}
	});

	it('asks about two different defending types', () => {
		for (const seed of SEEDS.slice(0, 50)) {
			// "Water/Water" would be nonsense; sample() without replacement prevents it.
			const prompt = dualTypeMultipliersGenerator.generate(seed, modernRef, modernCtx).prompt;
			const pair = /against an? (\w+)\/(\w+) /.exec(prompt);
			expect(pair).not.toBeNull();
			expect(pair?.[1]).not.toBe(pair?.[2]);
		}
	});
});

describe('immunitiesGenerator', () => {
	it('the correct answer really is a zero-damage matchup', () => {
		for (const seed of SEEDS) {
			const exercise = immunitiesGenerator.generate(seed, modernRef, modernCtx);
			const attacking = /immune to (\w+)-type/.exec(exercise.prompt)?.[1]?.toLowerCase();
			const answer = exercise.candidates.find((candidate) => candidate.correct)?.value as string;
			expect(attacking).toBeDefined();
			expect(effectiveness(MODERN_CHART, attacking as string, answer)).toBe(0);
		}
	});

	it('every distractor actually takes damage', () => {
		for (const seed of SEEDS) {
			const exercise = immunitiesGenerator.generate(seed, modernRef, modernCtx);
			const attacking = /immune to (\w+)-type/.exec(exercise.prompt)?.[1]?.toLowerCase() as string;
			for (const distractor of exercise.candidates.filter((candidate) => !candidate.correct)) {
				expect(effectiveness(MODERN_CHART, attacking, distractor.value as string)).not.toBe(0);
			}
		}
	});

	it('surfaces the generation-1 Ghost/Psychic bug when handed a generation-1 chart', () => {
		expect(effectiveness(GEN1_CHART, 'ghost', 'psychic')).toBe(0);
		expect(effectiveness(MODERN_CHART, 'ghost', 'psychic')).toBe(2);
	});

	it('refuses a chart with no immunities rather than looping forever', () => {
		const flat = buildChart(['alpha', 'beta'], {});
		expect(() => immunitiesGenerator.generate(1, { typeChart: flat }, modernCtx)).toThrow(/no immunities/);
	});
});
