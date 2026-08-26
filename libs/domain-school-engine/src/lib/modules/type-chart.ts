import { assertUnambiguous } from '../ambiguity';
import type { CurriculumModule } from '../curriculum';
import { eliminationHint } from '../hints';
import { requireRef } from '../reference';
import { createRng } from '../rng';
import { article, eraNote, title } from '../text';
import type { Candidate, Exercise, ExerciseGenerator, GameContext, Hint, ReferenceData, TypeChart } from '../types';

/**
 * M1 — Type Chart.
 *
 * Every question here is derived from the era-resolved chart passed in, which is what makes
 * "learn the generation-1 type chart" work: with a generation-1 chart, Dark and Steel simply are not in
 * `types`, so they can never be generated as an option or an answer. No filtering needed.
 */

/** Neutral default mirrors the API's own `COALESCE(te.damage_factor, 100)` in the coverage query. */
export function effectiveness(chart: TypeChart, attacking: string, defending: string): number {
	const row = chart.factor[attacking] as Record<string, number> | undefined;
	if (!row) return 1;
	return (row[defending] as number | undefined) ?? 1;
}

export function dualEffectiveness(chart: TypeChart, attacking: string, first: string, second: string): number {
	return effectiveness(chart, attacking, first) * effectiveness(chart, attacking, second);
}

function multiplierLabel(multiplier: number): string {
	switch (multiplier) {
		case 0:
			return 'No effect (0×)';
		case 0.25:
			return '¼× — doubly resisted';
		case 0.5:
			return '½× — not very effective';
		case 1:
			return '1× — neutral';
		case 2:
			return '2× — super effective';
		case 4:
			return '4× — doubly weak';
		default:
			return `${multiplier}×`;
	}
}

const toCandidate = (multiplier: number, answer: number): Candidate<number> => ({
	id: `x${multiplier}`,
	label: multiplierLabel(multiplier),
	value: multiplier,
	correct: multiplier === answer,
});

/** How a defending type fares across the whole era — true of the data, silent on the answer. */
function defenderProfile(chart: TypeChart, defending: string): string {
	let weak = 0;
	let resists = 0;
	let immune = 0;
	for (const attacking of chart.types) {
		const factor = effectiveness(chart, attacking, defending);
		if (factor > 1) weak++;
		else if (factor === 0) immune++;
		else if (factor < 1) resists++;
	}
	return `In this era ${title(defending)} is weak to ${weak} type(s), resists ${resists}, and is immune to ${immune}.`;
}

const SINGLE_OUTCOMES = [0, 0.5, 1, 2];
const DUAL_OUTCOMES = [0, 0.25, 0.5, 1, 2, 4];

export const singleTypeEffectivenessGenerator: ExerciseGenerator = {
	id: 'type-chart.single',
	lessonId: 'type-chart.single-type-effectiveness',
	requires: ['typeChart'],
	generate(seed: number, ref: ReferenceData, context: GameContext): Exercise {
		const rng = createRng(seed);
		const chart = requireRef(ref, 'typeChart', this.lessonId);
		const attacking = rng.pick(chart.types);
		const defending = rng.pick(chart.types);
		const answer = effectiveness(chart, attacking, defending);

		const outcomes = SINGLE_OUTCOMES.includes(answer) ? SINGLE_OUTCOMES : [...SINGLE_OUTCOMES, answer];
		const candidates = rng.shuffle(outcomes).map((m) => toCandidate(m, answer));
		assertUnambiguous(this.lessonId, candidates);

		const hints: Hint[] = [
			{ tier: 1, text: 'A single-type matchup lands on one of four outcomes: no effect, not very effective, neutral, or super effective.' },
			{ tier: 2, text: eliminationHint(candidates) },
			{ tier: 3, text: defenderProfile(chart, defending) },
			{ tier: 4, text: `${title(attacking)} against ${title(defending)} is ${multiplierLabel(answer)}.` },
		];

		return {
			id: `${this.lessonId}:${seed}`,
			lessonId: this.lessonId,
			seed,
			prompt: `How effective is ${article(attacking)} ${title(attacking)}-type move against ${article(defending)} ${title(defending)}-type Pokémon?`,
			candidates,
			hints,
			explanation: `${title(attacking)} → ${title(defending)} = ${multiplierLabel(answer)}${eraNote(context.versionGroup)}.`,
		};
	},
};

export const dualTypeMultipliersGenerator: ExerciseGenerator = {
	id: 'type-chart.dual',
	lessonId: 'type-chart.dual-type-multipliers',
	requires: ['typeChart'],
	generate(seed: number, ref: ReferenceData, context: GameContext): Exercise {
		const rng = createRng(seed);
		const chart = requireRef(ref, 'typeChart', this.lessonId);
		const attacking = rng.pick(chart.types);
		const [first, second] = rng.sample(chart.types, 2);
		const firstFactor = effectiveness(chart, attacking, first);
		const secondFactor = effectiveness(chart, attacking, second);
		const answer = firstFactor * secondFactor;

		const pool = DUAL_OUTCOMES.filter((m) => m !== answer);
		const candidates = rng.shuffle([answer, ...rng.sample(pool, 3)]).map((m) => toCandidate(m, answer));
		assertUnambiguous(this.lessonId, candidates);

		const hints: Hint[] = [
			{ tier: 1, text: 'Dual types multiply: work out each type’s factor separately, then combine them.' },
			{ tier: 2, text: eliminationHint(candidates) },
			{
				tier: 3,
				// Deliberately stops one step short — performing the multiply is the skill being drilled.
				text: `${title(attacking)} → ${title(first)} is ${firstFactor}×, and ${title(attacking)} → ${title(second)} is ${secondFactor}×. Now combine them.`,
			},
			{ tier: 4, text: `${firstFactor} × ${secondFactor} = ${answer}, so ${multiplierLabel(answer)}.` },
		];

		return {
			id: `${this.lessonId}:${seed}`,
			lessonId: this.lessonId,
			seed,
			prompt: `How effective is ${article(attacking)} ${title(attacking)}-type move against ${article(first)} ${title(first)}/${title(second)} Pokémon?`,
			candidates,
			hints,
			explanation: `${firstFactor}× × ${secondFactor}× = ${answer}× — ${multiplierLabel(answer)}${eraNote(context.versionGroup)}.`,
		};
	},
};

export const immunitiesGenerator: ExerciseGenerator = {
	id: 'type-chart.immunity',
	lessonId: 'type-chart.immunities',
	requires: ['typeChart'],
	generate(seed: number, ref: ReferenceData, context: GameContext): Exercise {
		const rng = createRng(seed);
		const chart = requireRef(ref, 'typeChart', this.lessonId);

		const immunePairs: [string, string][] = [];
		for (const attacking of chart.types) {
			for (const defending of chart.types) {
				if (effectiveness(chart, attacking, defending) === 0) immunePairs.push([attacking, defending]);
			}
		}
		if (immunePairs.length === 0) {
			throw new Error('[type-chart.immunities] the supplied chart contains no immunities');
		}

		const [attacking, defending] = rng.pick(immunePairs);
		const nonImmune = chart.types.filter((t) => effectiveness(chart, attacking, t) !== 0);
		const superEffective = chart.types.filter((t) => effectiveness(chart, attacking, t) > 1).map(title);

		const options = rng.shuffle([defending, ...rng.sample(nonImmune, 3)]);
		const candidates: Candidate<string>[] = options.map((slug) => ({
			id: slug,
			label: title(slug),
			value: slug,
			correct: slug === defending,
		}));
		assertUnambiguous(this.lessonId, candidates);

		const hints: Hint[] = [
			{ tier: 1, text: 'Immunity is zero damage — not merely a resistance. Three of these take at least some damage.' },
			{ tier: 2, text: eliminationHint(candidates) },
			{
				tier: 3,
				text: superEffective.length
					? `${title(attacking)} is super effective against ${superEffective.join(', ')} — none of which is the answer.`
					: `${title(attacking)} is not super effective against anything in this era.`,
			},
			{ tier: 4, text: `${title(defending)} takes no damage from ${title(attacking)}.` },
		];

		return {
			id: `${this.lessonId}:${seed}`,
			lessonId: this.lessonId,
			seed,
			prompt: `Which of these types is completely immune to ${title(attacking)}-type moves?`,
			candidates,
			hints,
			explanation: `${title(attacking)} → ${title(defending)} = 0×${eraNote(context.versionGroup)}.`,
		};
	},
};

export const typeChartGenerators = [singleTypeEffectivenessGenerator, dualTypeMultipliersGenerator, immunitiesGenerator];

export const typeChartModule: CurriculumModule = {
	id: 'type-chart',
	title: 'Type Chart',
	summary: 'The 18×18 matrix every other decision rests on — and the one that changed most between generations.',
	lessons: [
		{
			id: 'type-chart.single-type-effectiveness',
			moduleId: 'type-chart',
			title: 'Single-type effectiveness',
			summary: 'One attacking type against one defending type: super effective, neutral, resisted, or nothing at all.',
			prereqs: [],
			generatorId: 'type-chart.single',
		},
		{
			id: 'type-chart.immunities',
			moduleId: 'type-chart',
			title: 'Immunities',
			summary: 'The handful of matchups that deal literally zero damage — the ones that lose games when forgotten.',
			prereqs: ['type-chart.single-type-effectiveness'],
			generatorId: 'type-chart.immunity',
		},
		{
			id: 'type-chart.dual-type-multipliers',
			moduleId: 'type-chart',
			title: 'Dual-type multipliers',
			summary: 'Two defending types multiply, producing 4× and ¼× outcomes that single-type intuition misses.',
			prereqs: ['type-chart.single-type-effectiveness'],
			generatorId: 'type-chart.dual',
		},
	],
};
