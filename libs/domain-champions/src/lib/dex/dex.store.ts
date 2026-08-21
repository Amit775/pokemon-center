import { computed, effect } from '@angular/core';
import { ChampDexDocument, ChampTypesDocument, TypeChartDocument, champResource } from '@pokemon-center/data-access-champions';
import { getState, patchState, signalStore, withComputed, withHooks, withMethods, withProps, withState } from '@ngrx/signals';
import { toTypeChart } from '../advisor/build-inference';
import { DexEntry, DexFilters, EMPTY_FILTERS, applyFilters, isFiltered } from './dex-filter';

/**
 * The Pokédex.
 *
 * The whole legal roster and the whole type chart are fetched once, and every filter then
 * runs in the browser against them. That is what makes the filters instant and freely
 * combinable — and it is the reason this section can afford filters nobody else offers, like
 * "what walls Dragon *and* Fairy", which would be an awkward query per keystroke otherwise.
 *
 * Filters persist, because the filter you were using is usually the filter you want next time.
 */

const STORAGE_KEY = 'pokemon-center.champions-dex.v1';

interface DexState {
	filters: DexFilters;
}

function hydrate(): DexState {
	try {
		const raw = localStorage.getItem(STORAGE_KEY);
		// Merged over the defaults so a filter added later does not arrive undefined.
		return raw ? { filters: { ...EMPTY_FILTERS, ...(JSON.parse(raw) as DexFilters) } } : { filters: EMPTY_FILTERS };
	} catch {
		return { filters: EMPTY_FILTERS };
	}
}

export const DexStore = signalStore(
	{ providedIn: 'root' },
	withState<DexState>({ filters: EMPTY_FILTERS }),
	withProps(() => ({
		_dexQuery: champResource(ChampDexDocument, () => ({})),
		_chartQuery: champResource(TypeChartDocument, () => ({})),
		_typesQuery: champResource(ChampTypesDocument, () => ({})),
	})),
	withComputed(({ _dexQuery, _chartQuery, _typesQuery, filters }) => {
		const entries = computed<DexEntry[]>(() => (_dexQuery.value()?.champDex ?? []) as DexEntry[]);
		const typeChart = computed(() => toTypeChart(_chartQuery.value()?.typeChart ?? []));

		return {
			entries,
			typeChart,
			types: computed(() => _typesQuery.value()?.champTypes ?? []),

			isLoading: computed(() => _dexQuery.isLoading() || _chartQuery.isLoading()),
			error: computed(() => _dexQuery.error() ?? _chartQuery.error()),

			/** The filtered, sorted roster — recomputed locally, with no network involved. */
			results: computed(() => applyFilters(entries(), filters(), typeChart())),

			/** Every ability on the roster, for the ability filter's options. */
			abilities: computed(() => {
				const seen = new Map<string, string>();
				for (const entry of entries()) {
					entry.abilitySlugs.forEach((slug, index) => seen.set(slug, entry.abilityNames[index] ?? slug));
				}
				return [...seen].map(([slug, name]) => ({ slug, name })).sort((a, b) => a.name.localeCompare(b.name));
			}),

			/** Total legal entries, excluding Mega forms unless they are being shown. */
			totalShowing: computed(() => entries().filter((e) => filters().includeMegaForms || !e.isMega).length),

			hasActiveFilters: computed(() => isFiltered(filters())),
		};
	}),
	withMethods((store) => ({
		patch(patch: Partial<DexFilters>): void {
			patchState(store, { filters: { ...store.filters(), ...patch } });
		},
		toggleType(slug: string): void {
			const current = store.filters().types;
			this.patch({ types: current.includes(slug) ? current.filter((t) => t !== slug) : [...current, slug] });
		},
		toggleMatchupType(slug: string): void {
			const current = store.filters().matchupTypes;
			// Capped at two: a defender has at most two types, and "resists three things" is
			// almost always empty — an empty result reads as a broken filter.
			if (current.includes(slug)) this.patch({ matchupTypes: current.filter((t) => t !== slug) });
			else if (current.length < 2) this.patch({ matchupTypes: [...current, slug] });
		},
		clear(): void {
			// Presentation choices survive a clear; only actual filters reset.
			const { sortBy, sortDesc, includeMegaForms } = store.filters();
			patchState(store, { filters: { ...EMPTY_FILTERS, sortBy, sortDesc, includeMegaForms } });
		},
	})),
	withHooks({
		onInit(store) {
			patchState(store, hydrate());
			effect(() => localStorage.setItem(STORAGE_KEY, JSON.stringify(getState(store).filters)));
		},
	}),
);
