import { typeEffectiveness } from './matchup';
import { TypeChart, TypeSlug } from './types';

/**
 * "What beats this?" — the question a dex page is actually asked.
 *
 * Deliberately **typing-level**. A damage-level answer needs every candidate's learnset, spread
 * and item; this needs two type lines and the chart, which means it runs over the whole roster
 * inside a `computed` with no request at all. That trade is the point: an instant, explainable
 * shortlist that hands off to the Simulator for the exact number, rather than a slow exact
 * answer nobody waits for.
 *
 * The assumption it rests on, stated rather than hidden: **a Pokémon carries STAB.** Offence is
 * measured from the candidate's own types and exposure from the target's. That is wrong for the
 * occasional coverage-only set and right for the overwhelming majority, which is the correct
 * shape for a shortlist.
 */

/** The minimum either side has to expose for this to work — a dex row satisfies it structurally. */
export interface CounterSubject {
	types: TypeSlug[];
	/**
	 * Base Speed. Champions fixes the level at 50 and has no IVs, so at equal investment the
	 * base stats order the real ones exactly — this tiebreak is a fact, not an approximation.
	 */
	baseSpeed: number;
}

/**
 * How a candidate fares into a target.
 *
 * - `counter` — resists them *and* hits back super-effectively. The answer you want.
 * - `check` — hits them super-effectively and takes neutral at worst. Beats them, but pays.
 * - `wall` — resists them and cannot threaten back. A stall, **not** a counter, which is why
 *   it is a separate band rather than mixed in: something that survives you forever and never
 *   wins is not an answer to you.
 * - `trade` — both sides hit super-effectively. A speed race, decided by the tiebreak.
 * - `loses` — they hit super-effectively and you do not.
 */
export type CounterVerdict = 'counter' | 'check' | 'wall' | 'trade' | 'even' | 'loses';

export interface CounterScore {
	verdict: CounterVerdict;
	/** Best multiplier the candidate's STAB gets into the target. */
	offence: number;
	/** Worst multiplier the target's STAB gets into the candidate. */
	exposure: number;
	/** True when the candidate is faster at equal investment. */
	outspeeds: boolean;
}

/** Highest multiplier any of `attacking` gets into `defending`. */
function bestInto(attacking: TypeSlug[], defending: TypeSlug[], chart: TypeChart): number {
	return attacking.reduce((best, type) => Math.max(best, typeEffectiveness(type, defending, chart)), 0);
}

/** How well `candidate` answers `target`, on typing alone. */
export function counterScore(target: CounterSubject, candidate: CounterSubject, chart: TypeChart): CounterScore {
	const offence = bestInto(candidate.types, target.types, chart);
	const exposure = bestInto(target.types, candidate.types, chart);
	const outspeeds = candidate.baseSpeed > target.baseSpeed;

	const walls = exposure < 1;
	const threatens = offence > 1;

	let verdict: CounterVerdict;
	if (walls && threatens) verdict = 'counter';
	else if (threatens && exposure > 1) verdict = 'trade';
	else if (threatens) verdict = 'check';
	else if (walls) verdict = 'wall';
	else if (exposure > 1) verdict = 'loses';
	else verdict = 'even';

	return { verdict, offence, exposure, outspeeds };
}

/** Best answer first. Used by both directions of the dex's counter lists. */
const VERDICT_ORDER: Record<CounterVerdict, number> = {
	counter: 5,
	check: 4,
	wall: 3,
	trade: 2,
	even: 1,
	loses: 0,
};

/**
 * Sort comparator, best answer first.
 *
 * Within a band, hitting harder beats taking less, and both beat moving first — a 4× hit is a
 * bigger difference than any speed tier, and speed only decides otherwise-identical answers.
 */
export function compareCounters(a: CounterScore, b: CounterScore): number {
	return (
		VERDICT_ORDER[b.verdict] - VERDICT_ORDER[a.verdict] ||
		b.offence - a.offence ||
		a.exposure - b.exposure ||
		Number(b.outspeeds) - Number(a.outspeeds)
	);
}

/** The bands worth showing as answers. Anything below `wall` is not advice. */
export const ANSWER_VERDICTS: readonly CounterVerdict[] = ['counter', 'check', 'wall'];

/** True when this score is worth listing as an answer at all. */
export function isAnswer(score: CounterScore): boolean {
	return ANSWER_VERDICTS.includes(score.verdict);
}
