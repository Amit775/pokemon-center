import type { ExerciseGenerator, GameContext, ReferenceData, TypeChart } from '../types';
import {
	dualEffectiveness,
	dualTypeMultipliersGenerator,
	effectiveness,
	immunitiesGenerator,
	singleTypeEffectivenessGenerator,
	typeChartGenerators,
} from './type-chart';

/* ------------------------------------------------------------------ fixtures */

const MODERN_TYPES = [
	'normal', 'fire', 'water', 'electric', 'grass', 'ice', 'fighting', 'poison', 'ground',
	'flying', 'psychic', 'bug', 'rock', 'ghost', 'dragon', 'dark', 'steel', 'fairy',
];

/** Sparse: only non-neutral matchups, exactly how `type_efficacy` is meaningful. */
const MODERN_EXCEPTIONS: Record<string, Record<string, number>> = {
	normal: { rock: 0.5, ghost: 0, steel: 0.5 },
	fire: { fire: 0.5, water: 0.5, grass: 2, ice: 2, bug: 2, rock: 0.5, dragon: 0.5, steel: 2 },
	water: { fire: 2, water: 0.5, grass: 0.5, ground: 2, rock: 2, dragon: 0.5 },
	electric: { water: 2, electric: 0.5, grass: 0.5, ground: 0, flying: 2, dragon: 0.5 },
	grass: { fire: 0.5, water: 2, grass: 0.5, poison: 0.5, ground: 2, flying: 0.5, bug: 0.5, rock: 2, dragon: 0.5, steel: 0.5 },
	ice: { fire: 0.5, water: 0.5, grass: 2, ice: 0.5, ground: 2, flying: 2, dragon: 2, steel: 0.5 },
	fighting: { normal: 2, ice: 2, poison: 0.5, flying: 0.5, psychic: 0.5, bug: 0.5, rock: 2, ghost: 0, dark: 2, steel: 2, fairy: 0.5 },
	poison: { grass: 2, poison: 0.5, ground: 0.5, rock: 0.5, ghost: 0.5, steel: 0, fairy: 2 },
	ground: { fire: 2, electric: 2, grass: 0.5, poison: 2, flying: 0, bug: 0.5, rock: 2, steel: 2 },
	flying: { electric: 0.5, grass: 2, fighting: 2, bug: 2, rock: 0.5, steel: 0.5 },
	psychic: { fighting: 2, poison: 2, psychic: 0.5, dark: 0, steel: 0.5 },
	bug: { fire: 0.5, grass: 2, fighting: 0.5, poison: 0.5, flying: 0.5, psychic: 2, ghost: 0.5, dark: 2, steel: 0.5, fairy: 0.5 },
	rock: { fire: 2, ice: 2, fighting: 0.5, ground: 0.5, flying: 2, bug: 2, steel: 0.5 },
	ghost: { normal: 0, psychic: 2, ghost: 2, dark: 0.5 },
	dragon: { dragon: 2, steel: 0.5, fairy: 0 },
	dark: { fighting: 0.5, psychic: 2, ghost: 2, dark: 0.5, fairy: 0.5 },
	steel: { fire: 0.5, water: 0.5, electric: 0.5, ice: 2, rock: 2, steel: 0.5, fairy: 2 },
	fairy: { fire: 0.5, fighting: 2, poison: 0.5, dragon: 2, dark: 2, steel: 0.5 },
};

function buildChart(types: string[], exceptions: Record<string, Record<string, number>>): TypeChart {
	const factor: Record<string, Record<string, number>> = {};
	for (const attacking of types) {
		const source = exceptions[attacking] as Record<string, number> | undefined;
		const row: Record<string, number> = {};
		for (const defending of types) {
			row[defending] = (source?.[defending] as number | undefined) ?? 1;
		}
		factor[attacking] = row;
	}
	return { types, factor };
}

const modernChart = buildChart(MODERN_TYPES, MODERN_EXCEPTIONS);

/**
 * Gen-1 stand-in: Dark, Steel and Fairy did not exist, and Ghost famously did nothing to
 * Psychic. The real values arrive from `type_efficacy_past` once S0 lands — this fixture
 * only has to prove the engine is era-driven rather than era-aware.
 */
const GEN1_TYPES = MODERN_TYPES.filter((t) => !['dark', 'steel', 'fairy'].includes(t));
const gen1Chart = buildChart(GEN1_TYPES, { ...MODERN_EXCEPTIONS, ghost: { normal: 0, psychic: 0, ghost: 2 } });

const modernRef: ReferenceData = { typeChart: modernChart };
const gen1Ref: ReferenceData = { typeChart: gen1Chart };
const modernCtx: GameContext = { versionGroup: null, generation: null };
const gen1Ctx: GameContext = { versionGroup: 'red-blue', generation: 1 };

const SEEDS = Array.from({ length: 200 }, (_, i) => i * 7919 + 13);

/* ------------------------------------------------------------------ lookups */

describe('effectiveness', () => {
	it('reads the chart', () => {
		expect(effectiveness(modernChart, 'water', 'fire')).toBe(2);
		expect(effectiveness(modernChart, 'fire', 'water')).toBe(0.5);
		expect(effectiveness(modernChart, 'electric', 'ground')).toBe(0);
		expect(effectiveness(modernChart, 'normal', 'normal')).toBe(1);
	});

	it('defaults to neutral for types the chart never mentions', () => {
		// Mirrors the API's COALESCE(damage_factor, 100) rather than crashing on sparse data.
		expect(effectiveness(modernChart, 'nonsense', 'fire')).toBe(1);
		expect(effectiveness(modernChart, 'fire', 'nonsense')).toBe(1);
	});
});

describe('dualEffectiveness', () => {
	it('multiplies both defending types', () => {
		expect(dualEffectiveness(modernChart, 'fire', 'grass', 'steel')).toBe(4);
		expect(dualEffectiveness(modernChart, 'ice', 'dragon', 'flying')).toBe(4);
		expect(dualEffectiveness(modernChart, 'electric', 'ground', 'water')).toBe(0);
	});

	it('produces the neutral trap that single-type intuition misses', () => {
		// Both "good" types, and yet: 0.5 x 2 = 1.
		expect(dualEffectiveness(modernChart, 'grass', 'grass', 'ground')).toBe(1);
	});
});

/* ------------------------------------------------------------------ generators */

describe.each(typeChartGenerators.map((g) => [g.id, g] as const))('%s', (_id, generator: ExerciseGenerator) => {
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
			const correct = exercise.candidates.filter((c) => c.correct);
			expect(correct).toHaveLength(1);

			const answerValue = correct[0].value;
			const clashes = exercise.candidates.filter((c) => !c.correct && Object.is(c.value, answerValue));
			expect(clashes).toEqual([]);
		}
	});

	it('offers all four hint tiers in order', () => {
		for (const seed of SEEDS.slice(0, 50)) {
			const { hints } = generator.generate(seed, modernRef, modernCtx);
			expect(hints.map((h) => h.tier)).toEqual([1, 2, 3, 4]);
			expect(hints.every((h) => h.text.length > 0)).toBe(true);
		}
	});

	it('never eliminates the right answer in the T2 narrowing hint', () => {
		for (const seed of SEEDS) {
			const exercise = generator.generate(seed, modernRef, modernCtx);
			const answer = exercise.candidates.find((c) => c.correct);
			const t2 = exercise.hints.find((h) => h.tier === 2);
			expect(t2?.text).not.toContain(answer?.label);
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
		// The whole point: with a gen-1 chart, types that did not exist yet cannot appear —
		// not by filtering, but because they are simply absent from the data.
		for (const seed of SEEDS) {
			const exercise = generator.generate(seed, gen1Ref, gen1Ctx);
			const surface = [exercise.prompt, exercise.explanation, ...exercise.candidates.map((c) => c.label), ...exercise.hints.map((h) => h.text)].join(' ');
			expect(surface).not.toMatch(/\bDark\b|\bSteel\b|\bFairy\b/);
		}
	});
});

describe('singleTypeEffectivenessGenerator', () => {
	it('always answers with a real single-type outcome', () => {
		for (const seed of SEEDS) {
			const answer = singleTypeEffectivenessGenerator.generate(seed, modernRef, modernCtx).candidates.find((c) => c.correct);
			expect([0, 0.5, 1, 2]).toContain(answer?.value);
		}
	});
});

describe('dualTypeMultipliersGenerator', () => {
	it('answers with a product of two single-type factors', () => {
		for (const seed of SEEDS) {
			const answer = dualTypeMultipliersGenerator.generate(seed, modernRef, modernCtx).candidates.find((c) => c.correct);
			expect([0, 0.25, 0.5, 1, 2, 4]).toContain(answer?.value);
		}
	});

	it('asks about two different defending types', () => {
		for (const seed of SEEDS.slice(0, 50)) {
			// "Water/Water" would be nonsense; sample() without replacement prevents it.
			const prompt = dualTypeMultipliersGenerator.generate(seed, modernRef, modernCtx).prompt;
			const pair = /against a (\w+)\/(\w+) /.exec(prompt);
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
			const answer = exercise.candidates.find((c) => c.correct)?.value as string;
			expect(attacking).toBeDefined();
			expect(effectiveness(modernChart, attacking as string, answer)).toBe(0);
		}
	});

	it('every distractor actually takes damage', () => {
		for (const seed of SEEDS) {
			const exercise = immunitiesGenerator.generate(seed, modernRef, modernCtx);
			const attacking = /immune to (\w+)-type/.exec(exercise.prompt)?.[1]?.toLowerCase() as string;
			for (const distractor of exercise.candidates.filter((c) => !c.correct)) {
				expect(effectiveness(modernChart, attacking, distractor.value as string)).not.toBe(0);
			}
		}
	});

	it('surfaces the gen-1 Ghost/Psychic bug when handed a gen-1 chart', () => {
		expect(effectiveness(gen1Chart, 'ghost', 'psychic')).toBe(0);
		expect(effectiveness(modernChart, 'ghost', 'psychic')).toBe(2);
	});

	it('refuses a chart with no immunities rather than looping forever', () => {
		const flat = buildChart(['alpha', 'beta'], {});
		expect(() => immunitiesGenerator.generate(1, { typeChart: flat }, modernCtx)).toThrow(/no immunities/);
	});
});
