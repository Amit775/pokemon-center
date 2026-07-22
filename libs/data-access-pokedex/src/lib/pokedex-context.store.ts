import { DOCUMENT } from '@angular/common';
import { effect, inject } from '@angular/core';
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

export type ThemePreference = 'system' | 'light' | 'dark';

export interface PokedexContextState {
	/** Active game (version group slug, e.g. 'firered-leafgreen'); null = all games */
	activeVersionGroup: string | null;
	savedFilters: FilterSet[];
	/** Canonical ids, e.g. 'pokemon:25' */
	favorites: string[];
	/** Most-recent-first canonical ids */
	recent: string[];
	/** Display theme; 'system' follows the OS preference */
	theme: ThemePreference;
}

const STORAGE_KEY = 'pokemon-center.pokedex-context.v1';

const initialState: PokedexContextState = {
	activeVersionGroup: null,
	savedFilters: [],
	favorites: [],
	recent: [],
	theme: 'system',
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
		setTheme(theme: ThemePreference): void {
			patchState(store, { theme });
		},
		/** Flip between light and dark, resolving 'system' to the opposite of the current OS setting. */
		toggleTheme(): void {
			const resolved = store.theme() === 'system' ? (matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light') : store.theme();
			patchState(store, { theme: resolved === 'dark' ? 'light' : 'dark' });
		},
	})),
	withHooks({
		onInit(store) {
			patchState(store, hydrate());
			const root = inject(DOCUMENT).documentElement;
			effect(() => {
				localStorage.setItem(STORAGE_KEY, JSON.stringify(getState(store)));
			});
			// Drive the theme: 'system' removes the attribute so the CSS media query
			// governs (and live OS changes still apply); 'light'/'dark' pin it.
			effect(() => {
				const theme = store.theme();
				if (theme === 'system') root.removeAttribute('data-theme');
				else root.setAttribute('data-theme', theme);
			});
		},
	}),
);
