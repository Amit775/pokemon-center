import { computed, inject } from '@angular/core';
import { patchState, signalStore, withComputed, withMethods, withProps, withState } from '@ngrx/signals';
import { counterScore, isAnswer } from '@pokemon-center/champions-engine';
import type { MatchupDirection, MegaFilter, PokedexEntry, SelectMode } from '../pokedex-filter';
import { EMPTY_FILTERS, passesMatchup, toCounterSubject } from '../pokedex-filter';
import { PokedexStore } from '../pokedex.store';

/**
 * The external filter engine.
 *
 * Tasks 10-11 built column filters (Types, stat ranges) — AG Grid's own filter model, scoped to
 * one column. The filters here are not: each reads more of an entry than one column holds
 * (matchup, counters), or reads data that lives outside any entry at all (owned, move learners),
 * or reads a species-level fact rather than a column value (Mega). AG Grid has a mechanism for
 * exactly this — the External Filter API (`isExternalFilterPresent`/`doesExternalFilterPass`,
 * https://www.ag-grid.com/archive/36.1.0/angular-data-grid/filter-external/) — and the roster
 * wires this store to it rather than forcing any of the above into a column.
 *
 * `passes()` is the one method that matters for correctness, and it delegates rather than
 * re-derives:
 * - matchup → `passesMatchup` (`pokedex-filter.ts`), unchanged.
 * - counters → `counterScore` + `isAnswer` (`@pokemon-center/champions-engine`), over
 *   `toCounterSubject` (`pokedex-filter.ts`) — the same three calls `matchesFilters` makes.
 * - Mega and owned-only mirror the two-line field checks `matchesFilters` makes inline. There is
 *   no standalone exported function for either because neither is more than a comparison against
 *   `entry.hasMega`/`entry.isMega` or `entry.megaOfSlug ?? entry.slug` — copying the same two
 *   lines is not re-deriving logic, there is no logic to re-derive.
 * - move learners is the one predicate with no existing pure function to call: `matchesFilters`
 *   only ever checks it inline (`learners.has(entry.id)`) too. `learners` is `null` until
 *   something populates it via `setLearners` — the async fetch itself belongs to the move-learner
 *   filter control, a follow-up task. Until then this store is honest about not filtering by
 *   move: a `move` with no `learners` yet passes every row, the same "still loading" reading
 *   `FilterContext.learners` already uses elsewhere.
 */

/**
 * One matchup query: which types, read how, in which direction. The subset of `PokedexFilters`
 * that `passesMatchup` reads (`matchupTypes`/`matchupMode`/`matchupDirection`), kept as its own
 * shape here because this engine owns none of the filter's other fields.
 */
export interface MatchupQuery {
	types: string[];
	mode: SelectMode;
	direction: MatchupDirection;
}

export const EMPTY_MATCHUP: MatchupQuery = { types: [], mode: 'exact', direction: 'resists' };

interface ExternalFiltersState {
	matchup: MatchupQuery;
	counterOf: string | null;
	move: string | null;
	/** Species ids that learn `move`. `null` means "asked for, not arrived yet" — see `setLearners`. */
	learners: ReadonlySet<number> | null;
	ownedOnly: boolean;
	mega: MegaFilter;
	/**
	 * Bumped by every mutation below.
	 *
	 * AG Grid does not watch these signals — it only re-evaluates `doesExternalFilterPass` when
	 * told to via `api.onFilterChanged()`. The roster reads this counter in an `effect` and calls
	 * that, so one signal covers every field above rather than one wire per field.
	 */
	version: number;
}

const INITIAL_STATE: ExternalFiltersState = {
	matchup: EMPTY_MATCHUP,
	counterOf: null,
	move: null,
	learners: null,
	ownedOnly: false,
	mega: 'any',
	version: 0,
};

export const ExternalFiltersStore = signalStore(
	{ providedIn: 'root' },
	withState<ExternalFiltersState>(INITIAL_STATE),
	withProps(() => ({
		_pokedex: inject(PokedexStore),
	})),
	withComputed((store) => ({
		/**
		 * The entry the counter filter is pointed at, resolved once per `counterOf`/roster change
		 * rather than once per row — `passes()` runs per row, and re-scanning the whole roster
		 * inside it would turn one lookup into one per row shown.
		 *
		 * Public (not `_`-prefixed) because the counter banner needs it too: `counterOf` is only
		 * the slug, and "Answers to garchomp" is not a sentence anyone typed — the banner needs
		 * the name, same as the retired sidebar's `PokedexStore.counterTarget` did.
		 */
		counterTarget: computed(() => {
			const slug = store.counterOf();
			return slug ? (store._pokedex.entries().find((candidate) => candidate.slug === slug) ?? null) : null;
		}),
	})),
	withMethods((store) => {
		function bump(patch: Partial<ExternalFiltersState>): void {
			patchState(store, { ...patch, version: store.version() + 1 });
		}

		return {
			setMatchup(matchup: MatchupQuery): void {
				bump({ matchup });
			},

			setCounterOf(counterOf: string | null): void {
				bump({ counterOf });
			},

			/** Changing the move invalidates whatever learners were fetched for the previous one. */
			setMove(move: string | null): void {
				bump({ move, learners: null });
			},

			/** Populated by whoever fetches "who learns this move" — the move-learner filter control. */
			setLearners(learners: ReadonlySet<number> | null): void {
				bump({ learners });
			},

			setOwnedOnly(ownedOnly: boolean): void {
				bump({ ownedOnly });
			},

			setMega(mega: MegaFilter): void {
				bump({ mega });
			},

			clear(): void {
				bump({ matchup: EMPTY_MATCHUP, counterOf: null, move: null, learners: null, ownedOnly: false, mega: 'any' });
			},

			/**
			 * Tells AG Grid whether `passes()` is worth calling at all — returning `false` skips
			 * row-by-row evaluation entirely, per the External Filter API.
			 */
			isPresent(): boolean {
				return store.matchup().types.length > 0 || store.counterOf() !== null || store.move() !== null || store.ownedOnly() || store.mega() !== 'any';
			},

			/** Does this entry survive every active cross-cutting filter? */
			passes(entry: PokedexEntry): boolean {
				const chart = store._pokedex.typeChart();
				const matchup = store.matchup();

				// `passesMatchup` takes the whole `PokedexFilters` shape even though it only reads the
				// three matchup fields — `EMPTY_FILTERS` supplies neutral values for the rest.
				if (
					!passesMatchup(
						entry,
						{ ...EMPTY_FILTERS, matchupTypes: matchup.types, matchupMode: matchup.mode, matchupDirection: matchup.direction },
						chart,
					)
				) {
					return false;
				}

				const mega = store.mega();
				// Asked of the base form even for a Mega, since "has a Mega" is a fact about the species
				// — same reading `matchesFilters` uses.
				if (mega === 'has-mega' && !entry.hasMega && !entry.isMega) return false;
				if (mega === 'no-mega' && (entry.hasMega || entry.isMega)) return false;

				if (store.ownedOnly() && !store._pokedex.owned().has(entry.megaOfSlug ?? entry.slug)) return false;

				const move = store.move();
				const learners = store.learners();
				if (move && learners && !learners.has(entry.id)) return false;

				const counterOf = store.counterOf();
				if (counterOf) {
					const target = store.counterTarget();
					if (target) {
						// Never offer something as its own answer.
						if (entry.slug === counterOf) return false;
						if (!isAnswer(counterScore(toCounterSubject(target), toCounterSubject(entry), chart))) return false;
					}
				}

				return true;
			},
		};
	}),
);
