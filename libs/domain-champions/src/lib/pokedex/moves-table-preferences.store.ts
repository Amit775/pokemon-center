import { effect } from '@angular/core';
import { getState, patchState, signalStore, withHooks, withMethods, withState } from '@ngrx/signals';
import { functionalUpdate, type ColumnOrderState, type Updater, type ColumnVisibilityState } from '@tanstack/angular-table';

/**
 * Which columns of the moves table you keep, and in what order.
 *
 * **Sorting is deliberately not here.** It stays a local signal on the component, because it is a
 * glance-level question about the Pokémon in front of you — "what hits hardest?" — and this store is
 * `providedIn: 'root'` and persisted. Moving sorting in would mean sorting one learnset by Power
 * silently sorts every learnset by Power, for ever, across sessions. That may be wanted one day; it
 * would be a user-visible change and it is not this one.
 *
 * Column choices are the opposite kind of preference: a trainer who never reads PP wants it gone
 * everywhere, permanently, and having to hide it again on the next Pokémon is the annoyance this
 * exists to remove.
 */
export interface MovesTablePreferences {
	columnVisibility: ColumnVisibilityState;
	columnOrder: ColumnOrderState;
}

const EMPTY_PREFERENCES: MovesTablePreferences = {
	columnVisibility: {},
	columnOrder: [],
};

/** Versioned: a column rename would otherwise let stale ids from a previous shape leak back in. */
const STORAGE_KEY = 'pokemon-center.champions-moves-table.v1';

/**
 * Every column id the table can legitimately hold.
 *
 * Hydration filters against this rather than trusting what is in storage. TanStack itself tolerates
 * a stale id — an unmatched entry in `columnOrder` is skipped, and a `columnVisibility` key for a
 * column that no longer exists is simply never read — so this is not crash protection. It is there
 * because the move-left/right arithmetic indexes into the order array, and because a renamed column
 * that later comes back under its old id would otherwise inherit a position and a hidden flag some
 * previous version of the table wrote.
 */
const KNOWN_COLUMN_IDENTIFIERS: readonly string[] = ['name', 'type', 'power', 'accuracy', 'pp'];

function keepKnown(preferences: MovesTablePreferences): MovesTablePreferences {
	const known = new Set(KNOWN_COLUMN_IDENTIFIERS);

	return {
		columnOrder: preferences.columnOrder.filter((identifier) => known.has(identifier)),
		columnVisibility: Object.fromEntries(
			Object.entries(preferences.columnVisibility).filter(([identifier]) => known.has(identifier)),
		),
	};
}

function hydrate(): MovesTablePreferences {
	try {
		const raw = localStorage.getItem(STORAGE_KEY);
		if (!raw) return EMPTY_PREFERENCES;

		// Merged over the defaults so a preference added later does not arrive undefined.
		return keepKnown({ ...EMPTY_PREFERENCES, ...(JSON.parse(raw) as MovesTablePreferences) });
	} catch {
		// A URL is user input and so is localStorage: half a JSON blob is likelier than none.
		return EMPTY_PREFERENCES;
	}
}

export const MovesTablePreferencesStore = signalStore(
	{ providedIn: 'root' },
	withState<MovesTablePreferences>(EMPTY_PREFERENCES),
	withMethods((store) => ({
		/**
		 * Apply one of TanStack's state updaters.
		 *
		 * The table hands back a function of the previous value, never a bare value — the one piece of
		 * plumbing a controlled-state integration cannot avoid. `functionalUpdate` is TanStack's own
		 * resolver, so the semantics stay theirs rather than being guessed at.
		 */
		applyVisibilityUpdate(update: Updater<ColumnVisibilityState>): void {
			patchState(store, { columnVisibility: functionalUpdate(update, store.columnVisibility()) });
		},

		applyOrderUpdate(update: Updater<ColumnOrderState>): void {
			patchState(store, { columnOrder: functionalUpdate(update, store.columnOrder()) });
		},

		reset(): void {
			patchState(store, EMPTY_PREFERENCES);
		},
	})),
	withHooks({
		onInit(store) {
			patchState(store, hydrate());
			effect(() => localStorage.setItem(STORAGE_KEY, JSON.stringify(getState(store))));
		},
	}),
);
