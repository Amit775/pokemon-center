import type { CurriculumModule } from '../curriculum';
import { createRng } from '../rng';
import { qualityOf, type Scenario, type ScenarioOption, type ScenarioResult } from '../scenario';
import { eraNote, humanize, title } from '../text';
import type { GameContext, Hint, TypeChart } from '../types';

/**
 * M5 — Matchups (Simulation).
 *
 * The one place School genuinely needs the server: ranking counters means joining learnsets,
 * stats and the type chart across the whole dex, which is exactly what `matchupAnalysis`
 * already does (docs/school-plan.md 3.2). The engine stays pure — it chooses the defender and
 * grades the answer; Angular does the fetching in between.
 */

export const MATCHUP_LESSON_ID = 'matchup.best-counter';
const OPTIONS_OFFERED = 6;

/** One row of `matchupAnalysis`, narrowed to what the scenario needs. */
export interface MatchupCandidate {
	slug: string;
	bestMove: string;
	bestMoveType: string;
	effectiveness: number;
	score: number;
}

/**
 * Choose the defender for a scenario. Split between single and dual types so the drill covers
 * both the simple case and the one where multiplying factors changes the answer.
 */
export function pickMatchupDefender(seed: number, chart: TypeChart): string[] {
	const rng = createRng(seed);
	return rng.next() < 0.4 ? [rng.pick(chart.types)] : rng.sample(chart.types, 2);
}

export function buildMatchupScenario(
	seed: number,
	defenderTypes: readonly string[],
	candidates: readonly MatchupCandidate[],
	context: GameContext,
): Scenario {
	if (candidates.length < OPTIONS_OFFERED) {
		throw new Error(`[${MATCHUP_LESSON_ID}] only ${candidates.length} counters returned, need ${OPTIONS_OFFERED}`);
	}

	const rng = createRng(seed);
	const ranked = [...candidates].sort((first, second) => second.score - first.score);

	// The true best is always on the table: the question is "pick the best counter", so the
	// best counter has to be pickable. The rest are drawn from across the ranking rather than
	// the next five, which would make every option nearly equivalent.
	const [top, ...rest] = ranked;
	const offered = rng.shuffle([top, ...rng.sample(rest, OPTIONS_OFFERED - 1)]);
	const byId = new Map(offered.map((candidate) => [candidate.slug, candidate]));
	const offeredRanked = [...offered].sort((first, second) => second.score - first.score);
	const optimal = offeredRanked[0];

	const defenderLabel = defenderTypes.map(title).join('/');

	const options: ScenarioOption[] = offered.map((candidate) => ({
		id: candidate.slug,
		label: humanize(candidate.slug),
		detail: `best move: ${humanize(candidate.bestMove)} (${title(candidate.bestMoveType)})`,
	}));

	const weakest = offeredRanked[offeredRanked.length - 1];

	const hints: Hint[] = [
		{
			tier: 1,
			text: 'A counter needs two things at once: a move the defender is weak to, and the offensive stat to make it hurt. Type advantage alone is not enough.',
		},
		{ tier: 2, text: `${humanize(weakest.slug)} is the weakest answer on this list.` },
		{ tier: 3, text: `The best answer attacks with ${title(optimal.bestMoveType)}, which is ${optimal.effectiveness}x against ${defenderLabel}.` },
		{ tier: 4, text: `${humanize(optimal.slug)} using ${humanize(optimal.bestMove)} is the strongest counter offered.` },
	];

	return {
		id: `${MATCHUP_LESSON_ID}:${seed}`,
		lessonId: MATCHUP_LESSON_ID,
		seed,
		prompt: `You are about to face ${defenderLabel}. Which of these is the strongest counter?`,
		pick: 1,
		options,
		hints,
		grade(selected: readonly string[]): ScenarioResult {
			const chosen = selected.length > 0 ? byId.get(selected[0]) : undefined;
			const achieved = chosen?.score ?? 0;
			const rank = chosen ? offeredRanked.findIndex((c) => c.slug === chosen.slug) + 1 : offeredRanked.length;

			return {
				quality: qualityOf(achieved, optimal.score),
				achieved,
				optimal: optimal.score,
				optimalIds: [optimal.slug],
				rank,
				total: offeredRanked.length,
				summary:
					chosen === undefined
						? 'No counter chosen.'
						: rank === 1
							? `${humanize(chosen.slug)} is the best of these, scoring ${achieved}${eraNote(context.versionGroup)}.`
							: `${humanize(chosen.slug)} ranks ${rank} of ${offeredRanked.length} (${achieved} vs ${optimal.score}). ${humanize(
									optimal.slug,
								)} wins because ${humanize(optimal.bestMove)} is ${optimal.effectiveness}x here${eraNote(context.versionGroup)}.`,
			};
		},
	};
}

export const matchupModule: CurriculumModule = {
	id: 'matchup',
	title: 'Matchups',
	summary: 'Putting the type chart to work against a real opponent, ranked over every Pokémon you could actually bring.',
	lessons: [
		{
			id: MATCHUP_LESSON_ID,
			moduleId: 'matchup',
			title: 'Picking a counter',
			summary: 'Given what you are about to face, choose the answer that hits hardest — not merely the one with the right type.',
			prereqs: ['type-chart.dual-type-multipliers', 'damage.stab'],
			generatorId: 'matchup.build',
			kind: 'scenario',
		},
	],
};
