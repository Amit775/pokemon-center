import { assertUnambiguous } from '../ambiguity';
import type { CurriculumModule } from '../curriculum';
import { eliminationHint } from '../hints';
import { requireRef } from '../reference';
import { createRng } from '../rng';
import { drawWithUniqueBest, sampleDistinctBy } from '../sampling';
import { eraNote, humanize } from '../text';
import type { Candidate, EvolutionRef, Exercise, ExerciseGenerator, GameContext, GrowthRateRef, Hint, ReferenceData } from '../types';

/**
 * M7 — Progression.
 *
 * The playthrough half of the game: how things evolve, which TM is which, and how long a
 * species takes to level. Per docs/school-plan.md open question 4, School owns the *drilling*
 * here and the Pokedex owns the reference — these questions deliberately do not try to
 * reproduce an evolution chain page.
 */

/**
 * Human-readable evolution condition.
 *
 * The prose is authored (it is presentation); every fact in it comes from the row. Conditions
 * are appended in a fixed order so two evolutions with the same requirements always produce the
 * same string — which is what lets the ambiguity check compare them meaningfully.
 */
export function describeEvolution(evolution: EvolutionRef): string {
	const parts: string[] = [];

	switch (evolution.trigger) {
		case 'level-up':
			parts.push(evolution.minLevel === null ? 'Level up' : `Level ${evolution.minLevel}`);
			break;
		case 'trade':
			parts.push('Trade');
			break;
		case 'use-item':
			parts.push(evolution.triggerItem === null ? 'Use an item' : `Use a ${humanize(evolution.triggerItem)}`);
			break;
		case 'shed':
			parts.push('Shed its skin with a spare Poké Ball');
			break;
		default:
			parts.push(humanize(evolution.trigger));
	}

	if (evolution.tradeSpecies !== null) parts.push(`for a ${humanize(evolution.tradeSpecies)}`);
	if (evolution.heldItem !== null) parts.push(`holding a ${humanize(evolution.heldItem)}`);
	if (evolution.minHappiness !== null) parts.push('with high friendship');
	if (evolution.knownMove !== null) parts.push(`knowing ${humanize(evolution.knownMove)}`);
	if (evolution.location !== null) parts.push(`at ${humanize(evolution.location)}`);
	if (evolution.timeOfDay !== null) parts.push(`during the ${evolution.timeOfDay}`);

	return parts.join(' ');
}

export const evolutionMethodGenerator: ExerciseGenerator = {
	id: 'progression.evolution-method',
	lessonId: 'progression.evolution-methods',
	requires: ['evolutions'],
	generate(seed: number, ref: ReferenceData, context: GameContext): Exercise {
		const rng = createRng(seed);
		const evolutions = requireRef(ref, 'evolutions', this.lessonId);
		if (evolutions.length < 4) throw new Error(`[${this.lessonId}] need at least 4 evolution steps`);

		// Distinct by description: two steps that both read "Trade" are the same answer twice.
		const drawn = sampleDistinctBy(rng, evolutions, 4, describeEvolution, this.lessonId);
		const answer = rng.pick(drawn);

		const candidates: Candidate<string>[] = drawn.map((evolution) => ({
			id: `${evolution.from}->${evolution.to}`,
			label: describeEvolution(evolution),
			value: describeEvolution(evolution),
			correct: evolution === answer,
		}));
		assertUnambiguous(this.lessonId, candidates);

		const hints: Hint[] = [
			{ tier: 1, text: 'Evolution is triggered by a level, an item, a trade, or something rarer — friendship, a time of day, a place.' },
			{ tier: 2, text: eliminationHint(candidates) },
			{
				tier: 3,
				text:
					answer.trigger === 'level-up' && answer.minHappiness === null
						? 'This one needs nothing but experience.'
						: `The trigger is "${humanize(answer.trigger)}" — the rest is the condition attached to it.`,
			},
			{ tier: 4, text: `${humanize(answer.from)} becomes ${humanize(answer.to)} by: ${describeEvolution(answer)}.` },
		];

		return {
			id: `${this.lessonId}:${seed}`,
			lessonId: this.lessonId,
			seed,
			prompt: `How does ${humanize(answer.from)} evolve into ${humanize(answer.to)}?`,
			candidates,
			hints,
			explanation: `${humanize(answer.from)} → ${humanize(answer.to)}: ${describeEvolution(answer)}${eraNote(context.versionGroup)}.`,
		};
	},
};

export const machineNumberGenerator: ExerciseGenerator = {
	id: 'progression.machine-number',
	lessonId: 'progression.tm-numbers',
	requires: ['machines'],
	generate(seed: number, ref: ReferenceData, context: GameContext): Exercise {
		const rng = createRng(seed);
		const machines = requireRef(ref, 'machines', this.lessonId);
		if (machines.length < 4) throw new Error(`[${this.lessonId}] need at least 4 machines`);

		const drawn = sampleDistinctBy(rng, machines, 4, (machine) => machine.move, this.lessonId);
		const answer = rng.pick(drawn);

		const candidates: Candidate<string>[] = drawn.map((machine) => ({
			id: machine.move,
			label: humanize(machine.move),
			value: machine.move,
			correct: machine.move === answer.move,
		}));
		assertUnambiguous(this.lessonId, candidates);

		// The version group is always named: a TM number means nothing across games.
		const game = humanize(answer.versionGroup);

		const hints: Hint[] = [
			{ tier: 1, text: `TM numbering is per game — the same number teaches something different in ${game} than elsewhere.` },
			{ tier: 2, text: eliminationHint(candidates) },
			{ tier: 3, text: `It is a ${answer.number <= 50 ? 'lower-numbered' : 'higher-numbered'} TM in ${game}.` },
			{ tier: 4, text: `TM${answer.number} in ${game} is ${humanize(answer.move)}.` },
		];

		return {
			id: `${this.lessonId}:${seed}`,
			lessonId: this.lessonId,
			seed,
			prompt: `In ${game}, which move does TM${answer.number} teach?`,
			candidates,
			hints,
			explanation: `TM${answer.number} in ${game} teaches ${humanize(answer.move)}.`,
		};
	},
};

const expToHundred = (rate: GrowthRateRef): number => rate.experienceToLevel100;

export const growthRateGenerator: ExerciseGenerator = {
	id: 'progression.growth-rate',
	lessonId: 'progression.growth-curves',
	requires: ['growthRates'],
	generate(seed: number, ref: ReferenceData, context: GameContext): Exercise {
		const rng = createRng(seed);
		const rates = requireRef(ref, 'growthRates', this.lessonId);
		if (rates.length < 4) throw new Error(`[${this.lessonId}] need at least 4 growth rates`);

		const { drawn, best } = drawWithUniqueBest(rng, rates, 4, expToHundred, this.lessonId);

		const candidates: Candidate<string>[] = drawn.map((rate) => ({
			id: rate.slug,
			label: humanize(rate.slug),
			value: rate.slug,
			correct: rate.slug === best.slug,
		}));
		assertUnambiguous(this.lessonId, candidates);

		const cheapest = [...drawn].sort((first, second) => expToHundred(first) - expToHundred(second))[0];

		const hints: Hint[] = [
			{ tier: 1, text: 'A growth curve decides how much experience level 100 costs — the spread between the cheapest and dearest is nearly threefold.' },
			{ tier: 2, text: eliminationHint(candidates) },
			{ tier: 3, text: `For scale, ${humanize(cheapest.slug)} needs ${expToHundred(cheapest).toLocaleString('en-US')} experience.` },
			{ tier: 4, text: `${humanize(best.slug)} needs ${expToHundred(best).toLocaleString('en-US')} — the most here.` },
		];

		return {
			id: `${this.lessonId}:${seed}`,
			lessonId: this.lessonId,
			seed,
			prompt: 'Which of these growth curves needs the most experience to reach level 100?',
			candidates,
			hints,
			explanation: drawn
				.map((rate) => `${humanize(rate.slug)} ${expToHundred(rate).toLocaleString('en-US')}`)
				.join('; '),
		};
	},
};

export const progressionGenerators = [evolutionMethodGenerator, machineNumberGenerator, growthRateGenerator];

export const progressionModule: CurriculumModule = {
	id: 'progression',
	title: 'Progression',
	summary: 'The playthrough knowledge: what evolves how, which TM is which, and how long a level takes.',
	lessons: [
		{
			id: 'progression.evolution-methods',
			moduleId: 'progression',
			title: 'Evolution methods',
			summary: 'Levels, stones, trades, friendship, time of day — the conditions that are easy to half-remember and easy to get wrong.',
			prereqs: [],
			generatorId: 'progression.evolution-method',
		},
		{
			id: 'progression.tm-numbers',
			moduleId: 'progression',
			title: 'TM numbers',
			summary: 'Which machine teaches what, in the game you are actually playing.',
			prereqs: [],
			generatorId: 'progression.machine-number',
		},
		{
			id: 'progression.growth-curves',
			moduleId: 'progression',
			title: 'Growth curves',
			summary: 'Two species at the same level can be nearly a million experience apart.',
			prereqs: [],
			generatorId: 'progression.growth-rate',
		},
	],
};
