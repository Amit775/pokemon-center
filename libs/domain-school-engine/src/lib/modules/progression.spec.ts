import { hasRequired } from '../reference';
import { EVOLUTIONS, GROWTH_RATES, MACHINES, fullReference } from '../testing/reference.fixture';
import type { EvolutionRef, ExerciseGenerator, GameContext } from '../types';
import {
	describeEvolution,
	evolutionMethodGenerator,
	growthRateGenerator,
	machineNumberGenerator,
	progressionGenerators,
} from './progression';

const ctx: GameContext = { versionGroup: null, generation: null };
const SEEDS = Array.from({ length: 120 }, (_, i) => i * 5231 + 17);

const evolutionTo = (species: string): EvolutionRef => EVOLUTIONS.find((e) => e.to === species) as EvolutionRef;

describe('describeEvolution', () => {
	it('describes a plain level-up', () => {
		expect(describeEvolution(evolutionTo('charizard'))).toBe('Level 36');
	});

	it('describes a stone', () => {
		expect(describeEvolution(evolutionTo('vaporeon'))).toBe('Use a Water Stone');
	});

	it('describes a bare trade', () => {
		expect(describeEvolution(evolutionTo('machamp'))).toBe('Trade');
	});

	it('distinguishes a held-item trade from a bare one', () => {
		// Machoke and Onix both "trade"; only the held item tells them apart, and a describer
		// that dropped it would make the two indistinguishable as answers.
		expect(describeEvolution(evolutionTo('steelix'))).toBe('Trade holding a Metal Coat');
		expect(describeEvolution(evolutionTo('steelix'))).not.toBe(describeEvolution(evolutionTo('machamp')));
	});

	it('distinguishes a trade-for-species from a plain trade', () => {
		expect(describeEvolution(evolutionTo('escavalier'))).toBe('Trade for a Shelmet');
	});

	it('combines friendship with a time of day', () => {
		expect(describeEvolution(evolutionTo('espeon'))).toBe('Level up with high friendship during the day');
	});

	it('keeps friendship-only distinct from friendship-plus-time', () => {
		expect(describeEvolution(evolutionTo('crobat'))).toBe('Level up with high friendship');
		expect(describeEvolution(evolutionTo('crobat'))).not.toBe(describeEvolution(evolutionTo('espeon')));
	});

	it('describes a location requirement', () => {
		expect(describeEvolution(evolutionTo('magnezone'))).toBe('Level up at Mt Coronet');
	});

	it('falls back readably on an unknown trigger', () => {
		const odd = { ...evolutionTo('charizard'), trigger: 'three-critical-hits', minLevel: null };
		expect(describeEvolution(odd)).toBe('Three Critical Hits');
	});
});

describe.each(progressionGenerators.map((g) => [g.id, g] as const))('%s', (_id, generator: ExerciseGenerator) => {
	it('declares the reference sections it reads', () => {
		expect(generator.requires.length).toBeGreaterThan(0);
		expect(hasRequired(fullReference, generator)).toBe(true);
	});

	it('refuses to run when its reference data is absent', () => {
		expect(() => generator.generate(1, {}, ctx)).toThrow(/missing reference data/);
	});

	it('is deterministic', () => {
		for (const seed of SEEDS.slice(0, 20)) {
			expect(generator.generate(seed, fullReference, ctx)).toEqual(generator.generate(seed, fullReference, ctx));
		}
	});

	it('never generates an ambiguous question', () => {
		for (const seed of SEEDS) {
			const exercise = generator.generate(seed, fullReference, ctx);
			const correct = exercise.candidates.filter((c) => c.correct);
			expect(correct).toHaveLength(1);
			expect(exercise.candidates.filter((c) => !c.correct && Object.is(c.value, correct[0].value))).toEqual([]);
		}
	});

	it('offers all four hint tiers in order', () => {
		for (const seed of SEEDS.slice(0, 30)) {
			const { hints } = generator.generate(seed, fullReference, ctx);
			expect(hints.map((h) => h.tier)).toEqual([1, 2, 3, 4]);
			expect(hints.every((h) => h.text.trim().length > 0)).toBe(true);
		}
	});

	it('never eliminates the right answer in the T2 narrowing hint', () => {
		for (const seed of SEEDS) {
			const exercise = generator.generate(seed, fullReference, ctx);
			// Compare the *quoted* labels rather than substrings: one option's label is often a
			// prefix of another ("Level up with high friendship" vs "…during the day"), so a
			// substring check reports eliminations that never happened.
			const quoted = [...(exercise.hints.find((h) => h.tier === 2)?.text ?? '').matchAll(/"([^"]+)"/g)].map((m) => m[1]);
			expect(quoted.length).toBeGreaterThan(0);
			for (const label of quoted) {
				expect(exercise.candidates.find((c) => c.label === label)?.correct).toBe(false);
			}
		}
	});

	it('produces four options and a stable id', () => {
		for (const seed of SEEDS.slice(0, 30)) {
			const exercise = generator.generate(seed, fullReference, ctx);
			expect(exercise.candidates).toHaveLength(4);
			expect(exercise.id).toBe(`${generator.lessonId}:${seed}`);
		}
	});
});

describe('evolutionMethodGenerator', () => {
	it('the answer really is that species pair’s condition', () => {
		for (const seed of SEEDS) {
			const exercise = evolutionMethodGenerator.generate(seed, fullReference, ctx);
			const pair = /How does (\w[\w' -]*) evolve into (\w[\w' -]*)\?/.exec(exercise.prompt);
			expect(pair).not.toBeNull();

			const answerLabel = exercise.candidates.find((c) => c.correct)?.label;
			const match = EVOLUTIONS.filter((e) => describeEvolution(e) === answerLabel);
			expect(match.length).toBeGreaterThan(0);
		}
	});
});

describe('machineNumberGenerator', () => {
	it('names the game, because a TM number means nothing without one', () => {
		for (const seed of SEEDS) {
			const exercise = machineNumberGenerator.generate(seed, fullReference, ctx);
			expect(exercise.prompt).toMatch(/^In .+, which move does TM\d+ teach\?$/);
		}
	});

	it('the answer is the move that machine actually teaches', () => {
		for (const seed of SEEDS) {
			const exercise = machineNumberGenerator.generate(seed, fullReference, ctx);
			const number = Number(/TM(\d+)/.exec(exercise.prompt)?.[1]);
			const answer = exercise.candidates.find((c) => c.correct)?.value;
			expect(MACHINES.find((m) => m.number === number)?.move).toBe(answer);
		}
	});

	it('never offers the same move twice', () => {
		for (const seed of SEEDS) {
			const values = machineNumberGenerator.generate(seed, fullReference, ctx).candidates.map((c) => c.value);
			expect(new Set(values).size).toBe(values.length);
		}
	});
});

describe('growthRateGenerator', () => {
	it('the marked answer really is the most expensive curve offered', () => {
		for (const seed of SEEDS) {
			const exercise = growthRateGenerator.generate(seed, fullReference, ctx);
			const costOf = (slug: unknown) => GROWTH_RATES.find((r) => r.slug === slug)?.experienceToLevel100 ?? 0;
			const costs = exercise.candidates.map((c) => costOf(c.value));
			const answerCost = costOf(exercise.candidates.find((c) => c.correct)?.value);

			expect(answerCost).toBe(Math.max(...costs));
			expect(costs.filter((c) => c === answerCost)).toHaveLength(1);
		}
	});
});
