import { CounterScore, TypeChart, compareCounters, counterScore, isAnswer } from '@pokemon-center/champions-engine';
import { PokedexEntry, toCounterSubject } from './pokedex-filter';

/**
 * The two counter lists a detail page shows, built from the roster already in memory.
 *
 * No request, no new query, no server work: the Pokédex holds all ~316 rows and the type chart
 * for its filters, so both directions are a pass over an array inside a `computed`. That is the
 * whole reason this section can answer a question the static Champions sites do not.
 *
 * The scoring is typing-level and the UI says so — see `counterScore` for what that assumes and
 * why. Every row links to the Simulator, which is the tool that gives the exact number.
 */

export interface RankedAnswer {
	entry: PokedexEntry;
	score: CounterScore;
}

/**
 * Candidates worth listing: base forms only, never the subject itself.
 *
 * Mega forms are excluded for the same reason the grid excludes them — a Mega is a state a
 * Pokémon enters, not a second Pokémon, and listing "Garchomp" above "Mega Garchomp" reads as
 * two answers when it is one. The Mega's own numbers live on its base form's page.
 */
function candidates(roster: readonly PokedexEntry[], subjectSlug: string): PokedexEntry[] {
	return roster.filter((entry) => !entry.isMega && entry.slug !== subjectSlug);
}

/** Ranked, best first, capped — a shortlist you read, not a second grid you scroll. */
function rank(pairs: RankedAnswer[], limit: number): RankedAnswer[] {
	return pairs
		.filter((pair) => isAnswer(pair.score))
		.sort((a, b) => compareCounters(a.score, b.score))
		.slice(0, limit);
}

/** What beats `target`. */
export function answersTo(target: PokedexEntry, roster: readonly PokedexEntry[], chart: TypeChart, limit = 8): RankedAnswer[] {
	if (Object.keys(chart).length === 0) return [];
	const subject = toCounterSubject(target);

	return rank(
		candidates(roster, target.slug).map((entry) => ({ entry, score: counterScore(subject, toCounterSubject(entry), chart) })),
		limit,
	);
}

/**
 * What `mon` beats — the same maths with the roles swapped.
 *
 * Worth showing next to the first list because the pair together is the actual question: this
 * is what you bring it in on, and this is what makes you switch out.
 */
export function answeredBy(mon: PokedexEntry, roster: readonly PokedexEntry[], chart: TypeChart, limit = 8): RankedAnswer[] {
	if (Object.keys(chart).length === 0) return [];
	const subject = toCounterSubject(mon);

	return rank(
		candidates(roster, mon.slug).map((entry) => ({ entry, score: counterScore(toCounterSubject(entry), subject, chart) })),
		limit,
	);
}

/** How each band reads in the UI. A word, never only a colour. */
export const VERDICT_LABEL: Record<CounterScore['verdict'], string> = {
	counter: 'Counter',
	check: 'Check',
	wall: 'Wall',
	trade: 'Trade',
	even: 'Even',
	loses: 'Loses',
};

/**
 * One line saying why this row is here, so the ranking is never a black box.
 *
 * `subject` names who the sentence is about, and is required whenever that is *not* the row —
 * in "What Garchomp beats" each row names the opponent while the score describes Garchomp, and
 * an unattributed "takes 0.5×" there reads as a claim about the wrong Pokémon.
 */
export function explain(score: CounterScore, subject?: string): string {
	const takes = score.exposure === 0 ? 'is immune to' : `takes ${score.exposure}×`;
	const hits = score.offence > 1 ? `hits back for ${score.offence}×` : 'cannot hit back for extra damage';
	const speed = score.outspeeds ? ', and is faster' : '';
	const opener = subject ? `${subject} ${takes}` : `${takes[0].toUpperCase()}${takes.slice(1)}`;

	return `${opener} their best type, ${hits}${speed}.`;
}
