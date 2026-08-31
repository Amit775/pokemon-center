import { effect } from '@angular/core';
import { getState, patchState, signalStore, withHooks, withMethods, withState } from '@ngrx/signals';
import { functionalUpdate, type ColumnOrderState, type Updater, type ColumnVisibilityState } from '@tanstack/angular-table';

/**
 * Which columns of the moves table you keep, and in what order.
 *
 * **Sorting is deliberately not here.** This store is root-provided and persisted, so a sort in it
 * would mean sorting one learnset by Power sorts every learnset by Power, for ever. Column choices
 * are the opposite: hide PP once, and it should stay hidden everywhere.
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
 * Hydration filters against this. Not crash protection — TanStack tolerates a stale id — but the
 * move arithmetic indexes into the order array, and a renamed column returning under its old id
 * should not inherit a position some earlier version wrote.
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
		/** The table hands back a function of the previous value, never a bare value. */
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
