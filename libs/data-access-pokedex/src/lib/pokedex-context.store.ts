import { effect } from '@angular/core';
import { getState, patchState, signalStore, withHooks, withMethods, withState } from '@ngrx/signals';

export interface FilterSet {
	name: string;
	search: string;
	versionGroup: string | null;
	types?: string[];
	generation?: number | null;
	sortBy?: string;
	sortDesc?: boolean;
}

export interface PokedexContextState {
	/** Active game (version group slug, e.g. 'firered-leafgreen'); null = all games */
	activeVersionGroup: string | null;
	savedFilters: FilterSet[];
	/** Canonical ids, e.g. 'pokemon:25' */
	favorites: string[];
	/** Most-recent-first canonical ids */
	recent: string[];
}

const STORAGE_KEY = 'pokemon-center.pokedex-context.v1';

const initialState: PokedexContextState = {
	activeVersionGroup: null,
	savedFilters: [],
	favorites: [],
	recent: [],
};

function hydrate(): PokedexContextState {
	try {
		const raw = localStorage.getItem(STORAGE_KEY);
		return raw ? { ...initialState, ...JSON.parse(raw) } : initialState;
	} catch {
		return initialState;
	}
}

export const PokedexContextStore = signalStore(
	{ providedIn: 'root' },
	withState(initialState),
	withMethods((store) => ({
		setActiveVersionGroup(versionGroup: string | null): void {
			patchState(store, { activeVersionGroup: versionGroup });
		},
		saveFilter(filter: FilterSet): void {
			patchState(store, {
				savedFilters: [...store.savedFilters().filter((f) => f.name !== filter.name), filter],
			});
		},
		deleteFilter(name: string): void {
			patchState(store, { savedFilters: store.savedFilters().filter((f) => f.name !== name) });
		},
		toggleFavorite(canonicalId: string): void {
			const favorites = store.favorites();
			patchState(store, {
				favorites: favorites.includes(canonicalId) ? favorites.filter((id) => id !== canonicalId) : [...favorites, canonicalId],
			});
		},
		isFavorite(canonicalId: string): boolean {
			return store.favorites().includes(canonicalId);
		},
		pushRecent(canonicalId: string): void {
			const recent = [canonicalId, ...store.recent().filter((id) => id !== canonicalId)].slice(0, 20);
			patchState(store, { recent });
		},
	})),
	withHooks({
		onInit(store) {
			patchState(store, hydrate());
			effect(() => {
				localStorage.setItem(STORAGE_KEY, JSON.stringify(getState(store)));
			});
		},
	}),
);
