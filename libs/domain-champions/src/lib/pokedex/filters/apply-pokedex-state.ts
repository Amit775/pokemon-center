import type { GridApi } from 'ag-grid-community';
import type { PokedexEntry } from '../pokedex-filter';
import type { PokedexSavedState } from '../pokedex-url';
import { PokedexStore } from '../pokedex.store';
import { ExternalFiltersStore } from './external-filters.store';

/**
 * `signalStore()` returns a value, not a `class` declaration, so `ExternalFiltersStore` and
 * `PokedexStore` are not themselves usable as types — the same reason `move-learner-filter.component.ts`
 * reaches for `InstanceType<typeof PokedexStore>` rather than a bare `PokedexStore` annotation.
 */
type ExternalFiltersStoreInstance = InstanceType<typeof ExternalFiltersStore>;
type PokedexStoreInstance = InstanceType<typeof PokedexStore>;

/**
 * Assembles and restores `PokedexSavedState` (`pokedex-url.ts`) — both filtering mechanisms,
 * together — against a live grid and its two stores.
 *
 * Shared by every place a combined state crosses that boundary: `RosterComponent` reads a shared
 * link once on `gridReady` and writes the current view back out to the URL on every change;
 * `FilterSetsComponent` captures the current view to save it under a name, and restores a saved
 * one. All four of those are the same handful of statements against `GridApi`/`ExternalFiltersStore`/
 * `PokedexStore` — kept here once so a field added to `PokedexSavedState`'s shape only needs
 * remembering in one capture function and one apply function, not in every caller.
 */

/** Both filtering mechanisms, read fresh — never cached, since a grid api call is not a signal. */
export function capturePokedexState(api: GridApi<PokedexEntry> | null, externalFilters: ExternalFiltersStoreInstance): PokedexSavedState {
	const matchup = externalFilters.matchup();

	return {
		filterModel: api?.getFilterModel() ?? {},
		external: {
			matchupTypes: matchup.types,
			matchupMode: matchup.mode,
			matchupDirection: matchup.direction,
			ownedOnly: externalFilters.ownedOnly(),
			mega: externalFilters.mega(),
			move: externalFilters.move(),
			counterOf: externalFilters.counterOf(),
		},
	};
}

/**
 * Restores both halves of a combined state onto a live grid and its stores.
 *
 * The move filter needs one extra nudge: `ExternalFiltersStore.move` decides *whether* to filter
 * by move, but the actual list of learners is fetched by `PokedexStore` keyed off
 * `PokedexStore.filters().move` (see `move-learner-filter.component.ts`, which sets both together
 * when a move is picked by hand). Restoring a saved or shared move filter mirrors that pair via
 * the trailing `pokedexStore.patch` below.
 */
export function applyPokedexState(
	state: PokedexSavedState,
	api: GridApi<PokedexEntry>,
	externalFilters: ExternalFiltersStoreInstance,
	pokedexStore: PokedexStoreInstance,
): void {
	api.setFilterModel(state.filterModel);

	externalFilters.setMatchup({ types: state.external.matchupTypes, mode: state.external.matchupMode, direction: state.external.matchupDirection });
	externalFilters.setOwnedOnly(state.external.ownedOnly);
	externalFilters.setMega(state.external.mega);
	externalFilters.setCounterOf(state.external.counterOf);
	externalFilters.setMove(state.external.move);

	pokedexStore.patch({ move: state.external.move });
}
