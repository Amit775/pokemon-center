import type { CurriculumModule } from '../curriculum';
import { requireRef } from '../reference';
import { createRng } from '../rng';
import { sampleDistinctBy } from '../sampling';
import { combinations, qualityOf, type Scenario, type ScenarioOption, type ScenarioResult } from '../scenario';
import { eraNote, humanize, title } from '../text';
import type { GameContext, Hint, MoveRef, ReferenceData, TypeChart } from '../types';
import { effectiveness } from './type-chart';

/**
 * M6 — Coverage (Simulation).
 *
 * Computed entirely from the already-loaded type chart rather than the R4 `coverage` resolver.
 * That resolver answers "what does this fixed set of moves hit?", which is the Pokedex's
 * question. School's question is "which four *should* you take?", and answering it needs the
 * coverage of every candidate combination — 210 of them for ten options. Round-tripping each
 * would be absurd; locally it is sub-millisecond, which is also what lets the grid update live
 * as the learner picks.
 */

export const COVERAGE_PICK = 4;
const OPTIONS_OFFERED = 10;

/** How many defending types this set of attacking types hits for super-effective damage. */
export function superEffectiveCount(chart: TypeChart, attackingTypes: readonly string[]): number {
	return chart.types.filter((defending) => attackingTypes.some((attacking) => effectiveness(chart, attacking, defending) > 1)).length;
}

/** The defending types nothing in this set hits for extra damage — the gaps worth naming. */
export function coverageGaps(chart: TypeChart, attackingTypes: readonly string[]): string[] {
	return chart.types.filter((defending) => !attackingTypes.some((attacking) => effectiveness(chart, attacking, defending) > 1));
}

function bestCombination(chart: TypeChart, moves: readonly MoveRef[]): { ids: string[]; score: number } {
	let bestIds: string[] = [];
	let bestScore = -1;

	for (const combo of combinations(moves, COVERAGE_PICK)) {
		const score = superEffectiveCount(
			chart,
			combo.map((move) => move.type),
		);
		if (score > bestScore) {
			bestScore = score;
			bestIds = combo.map((move) => move.slug);
		}
	}

	return { ids: bestIds, score: bestScore };
}

export function buildCoverageScenario(seed: number, ref: ReferenceData, ctx: GameContext): Scenario {
	const lessonId = 'coverage.four-move-coverage';
	const chart = requireRef(ref, 'typeChart', lessonId);
	const moves = requireRef(ref, 'moves', lessonId);
	const rng = createRng(seed);

	// One move per attacking type, and only types this era actually has — two Fire moves would
	// make a choice that looks meaningful but is not.
	const attacking = moves.filter((move) => move.damageClass !== 'status' && move.power !== null && chart.types.includes(move.type));
	if (attacking.length < OPTIONS_OFFERED) {
		throw new Error(`[${lessonId}] only ${attacking.length} attacking moves available, need ${OPTIONS_OFFERED}`);
	}

	const offered = sampleDistinctBy(rng, attacking, OPTIONS_OFFERED, (move) => move.type, lessonId);
	const byId = new Map(offered.map((move) => [move.slug, move]));
	const optimum = bestCombination(chart, offered);

	const options: ScenarioOption[] = offered.map((move) => ({
		id: move.slug,
		label: humanize(move.slug),
		detail: `${title(move.type)} · ${move.power} power`,
	}));

	// An option that appears in no optimal set is safe to strike out; one that appears in the
	// optimum is safe to recommend. Both are derived, not authored.
	const redundant = offered.find((move) => !optimum.ids.includes(move.slug));
	const essential = offered.find((move) => optimum.ids.includes(move.slug));

	const hints: Hint[] = [
		{
			tier: 1,
			text: `Coverage is about breadth, not power: how many of the ${chart.types.length} types can you hit for super-effective damage? Two moves that beat the same types waste a slot.`,
		},
		{ tier: 2, text: redundant ? `${humanize(redundant.slug)} is not part of the best answer here.` : 'Look for overlap between your picks.' },
		{ tier: 3, text: essential ? `A best answer includes ${humanize(essential.slug)} (${title(essential.type)}).` : 'Spread your picks across distant types.' },
		{
			tier: 4,
			text: `One optimal set is ${optimum.ids.map(humanize).join(', ')}, reaching ${optimum.score} of ${chart.types.length} types.`,
		},
	];

	return {
		id: `${lessonId}:${seed}`,
		lessonId,
		seed,
		prompt: `Choose ${COVERAGE_PICK} moves that together hit as many of the ${chart.types.length} types as possible for super-effective damage.`,
		pick: COVERAGE_PICK,
		options,
		hints,
		grade(selected: readonly string[]): ScenarioResult {
			const types = selected.map((id) => byId.get(id)?.type).filter((type): type is string => type !== undefined);
			const achieved = superEffectiveCount(chart, types);
			const gaps = coverageGaps(chart, types);

			return {
				quality: qualityOf(achieved, optimum.score),
				achieved,
				optimal: optimum.score,
				optimalIds: optimum.ids,
				summary:
					achieved === optimum.score
						? `${achieved} of ${chart.types.length} types covered — the best available here${eraNote(ctx.versionGroup)}.`
						: `${achieved} of ${chart.types.length} covered; the best available was ${optimum.score}. Missed: ${gaps
								.slice(0, 6)
								.map(title)
								.join(', ')}${gaps.length > 6 ? '…' : ''}${eraNote(ctx.versionGroup)}.`,
			};
		},
	};
}

export const coverageModule: CurriculumModule = {
	id: 'coverage',
	title: 'Coverage',
	summary: 'Choosing four moves that between them leave as little as possible able to wall you.',
	lessons: [
		{
			id: 'coverage.four-move-coverage',
			moduleId: 'coverage',
			title: 'Four-move coverage',
			summary: 'A team slot has four moves. Which four leave the fewest types with a safe switch-in?',
			prereqs: ['type-chart.dual-type-multipliers'],
			generatorId: 'coverage.build',
			kind: 'scenario',
		},
	],
};
