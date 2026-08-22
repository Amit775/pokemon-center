import { computed, effect, inject } from '@angular/core';
import {
	ChampAbilitiesDocument,
	ChampDexDocument,
	ChampMoveIndexDocument,
	ChampMoveLearnersDocument,
	ChampTypesDocument,
	TypeChartDocument,
	champResource,
} from '@pokemon-center/data-access-champions';
import { getState, patchState, signalStore, withComputed, withHooks, withMethods, withProps, withState } from '@ngrx/signals';
import type { StatKey } from '@pokemon-center/champions-engine';
import { toTypeChart } from '../advisor/build-inference';
import { BoxStore } from '../box/box.store';
import {
	DexEntry,
	DexFilters,
	EMPTY_FILTERS,
	Range,
	TOTAL_BOUNDS,
	applyFilters,
	diagnoseEmpty,
	isFiltered,
} from './dex-filter';
import { fromQueryString, toQueryString } from './dex-url';

/**
 * The Pokédex.
 *
 * The whole legal roster and the whole type chart are fetched once, and every filter then
 * runs in the browser against them. That is what makes the filters instant and freely
 * combinable — and it is the reason this section can afford filters nobody else offers, like
 * "what resists Dragon *and* Fairy", which would be an awkward query per keystroke otherwise.
 *
 * Filters persist, because the filter you were using is usually the filter you want next time.
 * The comparison tray deliberately does not: it is a scratch selection for one sitting.
 */

const STORAGE_KEY = 'pokemon-center.champions-dex.v2';
const SETS_KEY = 'pokemon-center.champions-dex.sets.v1';

/** How many can sit in the comparison tray. Beyond four the columns stop being readable. */
export const COMPARE_LIMIT = 4;

/**
 * A named filter state.
 *
 * Stored as the query string rather than as an object, so one codec covers both saving and
 * sharing: a saved set and a pasted link are the same value in two places, and a filter added
 * later cannot leave old sets holding a shape that no longer parses.
 */
export interface FilterSet {
	name: string;
	query: string;
}

interface DexState {
	filters: DexFilters;
	compare: string[];
	sets: FilterSet[];
}

function hydrate(): DexFilters {
	try {
		const raw = localStorage.getItem(STORAGE_KEY);
		// Merged over the defaults so a filter added later does not arrive undefined.
		return raw ? { ...EMPTY_FILTERS, ...(JSON.parse(raw) as DexFilters) } : EMPTY_FILTERS;
	} catch {
		return EMPTY_FILTERS;
	}
}

function hydrateSets(): FilterSet[] {
	try {
		const raw = localStorage.getItem(SETS_KEY);
		const parsed = raw ? JSON.parse(raw) : [];
		return Array.isArray(parsed) ? parsed.filter((set) => typeof set?.name === 'string' && typeof set?.query === 'string') : [];
	} catch {
		return [];
	}
}

export const DexStore = signalStore(
	{ providedIn: 'root' },
	withState<DexState>({ filters: EMPTY_FILTERS, compare: [], sets: [] }),
	withProps((store) => ({
		_dexQuery: champResource(ChampDexDocument, () => ({})),
		_chartQuery: champResource(TypeChartDocument, () => ({})),
		_typesQuery: champResource(ChampTypesDocument, () => ({})),
		_abilityQuery: champResource(ChampAbilitiesDocument, () => ({})),
		_moveIndexQuery: champResource(ChampMoveIndexDocument, () => ({})),
		// The one lazy query in the section. Its parameter is undefined until a move is picked,
		// so nothing is fetched on a visit that never touches the move filter.
		_learnersQuery: champResource(ChampMoveLearnersDocument, () => {
			const move = store.filters().move;
			return move ? { moveSlug: move } : undefined;
		}),
		// The Box is what makes this dex yours rather than a reference site. Its failure is
		// deliberately not folded into `error` below: an unreachable Box costs you a badge,
		// not the roster.
		_box: inject(BoxStore),
	})),
	withComputed(({ _dexQuery, _chartQuery, _typesQuery, _abilityQuery, _moveIndexQuery, _learnersQuery, _box, filters, compare, sets }) => {
		const entries = computed<DexEntry[]>(() => (_dexQuery.value()?.champDex ?? []) as DexEntry[]);
		const typeChart = computed(() => toTypeChart(_chartQuery.value()?.typeChart ?? []));
		// Normalized to base forms, because a Mega is not a separate Pokémon here: boxing a
		// Mega Garchomp means you own Garchomp, and the list only ever shows the base form.
		const owned = computed<ReadonlySet<string>>(
			() => new Set(_box.entries().map((entry) => entry.pokemon.megaOfSlug ?? entry.pokemon.slug)),
		);

		/** Null while a picked move's learners are still in flight — see `FilterContext`. */
		const learners = computed<ReadonlySet<number> | null>(() => {
			if (!filters().move) return null;
			const ids = _learnersQuery.value()?.champMoveLearners;
			return ids ? new Set(ids) : null;
		});

		const context = computed(() => ({ owned: owned(), learners: learners() }));
		const results = computed(() => applyFilters(entries(), filters(), typeChart(), context()));

		/** Base slug → its Mega forms, so a row can show them beneath it without a second query. */
		const megaForms = computed(() => {
			const byBase = new Map<string, DexEntry[]>();
			for (const entry of entries()) {
				if (!entry.isMega || !entry.megaOfSlug) continue;
				byBase.set(entry.megaOfSlug, [...(byBase.get(entry.megaOfSlug) ?? []), entry]);
			}
			return byBase;
		});

		return {
			entries,
			typeChart,
			owned,
			results,
			megaForms,

			types: computed(() => _typesQuery.value()?.champTypes ?? []),

			isLoading: computed(() => _dexQuery.isLoading() || _chartQuery.isLoading()),
			error: computed(() => _dexQuery.error() ?? _chartQuery.error()),

			/**
			 * Ability slug → its name and effect text.
			 *
			 * Sent once per ability rather than repeated on every Pokémon that has it, and
			 * joined here. This is what lets a list row explain an ability on hover.
			 */
			abilityText: computed(() => {
				const map = new Map<string, { name: string; effectText: string | null }>();
				for (const ability of _abilityQuery.value()?.champAbilities ?? []) {
					map.set(ability.slug, { name: ability.name, effectText: ability.effectText ?? null });
				}
				return map;
			}),

			/**
			 * On an empty result, the single filters worth dropping and what each would bring
			 * back. Empty while there are results, so it costs nothing in the normal case.
			 */
			relaxations: computed(() => (results().length > 0 ? [] : diagnoseEmpty(entries(), filters(), typeChart(), context()))),

			/** Every move, for the move filter's autocomplete. Names only — no learnsets. */
			moveIndex: computed(() => _moveIndexQuery.value()?.champMoveIndex ?? []),

			/** The picked move, and whether its learners have arrived yet. */
			pickedMove: computed(() => {
				const slug = filters().move;
				return slug ? ((_moveIndexQuery.value()?.champMoveIndex ?? []).find((move) => move.slug === slug) ?? null) : null;
			}),

			isLoadingLearners: computed(() => filters().move !== null && learners() === null),

			savedSets: computed(() => sets()),

			/** Every ability on the roster, for the ability filter's options. */
			abilities: computed(() => {
				const seen = new Map<string, string>();
				for (const entry of entries()) {
					entry.abilitySlugs.forEach((slug, index) => seen.set(slug, entry.abilityNames[index] ?? slug));
				}
				return [...seen].map(([slug, name]) => ({ slug, name })).sort((a, b) => a.name.localeCompare(b.name));
			}),

			hasActiveFilters: computed(() => isFiltered(filters())),

			/**
			 * The Pokémon the counter filter is pointed at, when there is one.
			 *
			 * The list needs the name, not the slug: "Answers to Mega Garchomp" is a sentence,
			 * and a filter nobody can read is a filter nobody can turn off.
			 */
			counterTarget: computed(() => {
				const slug = filters().counterOf;
				return slug ? (entries().find((entry) => entry.slug === slug) ?? null) : null;
			}),

			/** The Pokémon whose typing filled the matchup chips, for the chip's label. */
			matchupPokemon: computed(() => {
				const slug = filters().matchupSlug;
				return slug ? (entries().find((entry) => entry.slug === slug) ?? null) : null;
			}),

			compareEntries: computed(() => {
				const roster = entries();
				return compare()
					.map((slug) => roster.find((entry) => entry.slug === slug))
					.filter((entry): entry is DexEntry => entry !== undefined);
			}),
		};
	}),
	withMethods((store) => ({
		patch(patch: Partial<DexFilters>): void {
			patchState(store, { filters: { ...store.filters(), ...patch } });
		},

		/**
		 * Single click: the strict reading.
		 *
		 * Capped at two because a typing has at most two slots, and the oldest is dropped rather
		 * than the click being ignored — a dead control is worse than a surprising one.
		 * Arriving from `any` mode starts over, since a loose four-type selection has no
		 * sensible strict equivalent.
		 */
		selectType(slug: string): void {
			const { types, typeMode } = store.filters();

			if (typeMode === 'any') return this.patch({ types: [slug], typeMode: 'exact' });
			if (types.includes(slug)) return this.patch({ types: types.filter((t) => t !== slug) });

			this.patch({ types: [...types, slug].slice(-2), typeMode: 'exact' });
		},

		/** Double click: the loose reading. No cap, and the existing selection carries over. */
		expandType(slug: string): void {
			const { types } = store.filters();
			const next = types.includes(slug) ? types.filter((t) => t !== slug) : [...types, slug];
			this.patch({ types: next, typeMode: 'any' });
		},

		selectMatchupType(slug: string): void {
			const { matchupTypes, matchupMode } = store.filters();

			if (matchupMode === 'any') return this.patch({ matchupTypes: [slug], matchupMode: 'exact', matchupSlug: null });
			if (matchupTypes.includes(slug)) return this.patch({ matchupTypes: matchupTypes.filter((t) => t !== slug), matchupSlug: null });

			this.patch({ matchupTypes: [...matchupTypes, slug].slice(-2), matchupMode: 'exact', matchupSlug: null });
		},

		expandMatchupType(slug: string): void {
			const { matchupTypes } = store.filters();
			const next = matchupTypes.includes(slug) ? matchupTypes.filter((t) => t !== slug) : [...matchupTypes, slug];
			this.patch({ matchupTypes: next, matchupMode: 'any', matchupSlug: null });
		},

		/**
		 * Aim the matchup at a Pokémon by taking its typing.
		 *
		 * Deliberately the same machinery as the chips rather than a separate code path: picking
		 * Garchomp is picking Dragon and Ground, so the direction toggle keeps meaning exactly
		 * what it meant, and the result stays explainable.
		 */
		setMatchupPokemon(entry: DexEntry | null): void {
			if (!entry) return this.patch({ matchupTypes: [], matchupSlug: null });
			this.patch({ matchupTypes: [...entry.types], matchupMode: 'exact', matchupSlug: entry.slug });
		},

		/** Empty → has a Mega → has no Mega → empty. */
		cycleMega(): void {
			const order = { any: 'has-mega', 'has-mega': 'no-mega', 'no-mega': 'any' } as const;
			this.patch({ mega: order[store.filters().mega] });
		},

		setStatRange(key: StatKey, range: Range): void {
			this.patch({ statRanges: { ...store.filters().statRanges, [key]: range } });
		},

		setTotalRange(range: Range): void {
			this.patch({ totalRange: range });
		},

		clear(): void {
			// Presentation choices survive a clear; only actual filters reset.
			const { sortBy, sortDesc } = store.filters();
			patchState(store, { filters: { ...EMPTY_FILTERS, sortBy, sortDesc, totalRange: TOTAL_BOUNDS } });
		},

		/** Do you have this species in the Box? `owned` is already normalized to base forms. */
		isOwned(entry: Pick<DexEntry, 'slug' | 'megaOfSlug'>): boolean {
			return store.owned().has(entry.megaOfSlug ?? entry.slug);
		},

		isComparing(slug: string): boolean {
			return store.compare().includes(slug);
		},

		toggleCompare(slug: string): void {
			const current = store.compare();
			if (current.includes(slug)) return patchState(store, { compare: current.filter((s) => s !== slug) });
			// Silently dropping the oldest keeps the control from ever being dead.
			patchState(store, { compare: [...current, slug].slice(-COMPARE_LIMIT) });
		},

		clearCompare(): void {
			patchState(store, { compare: [] });
		},

		/** Replace the whole filter state — used by the URL and by saved sets alike. */
		replace(filters: DexFilters): void {
			patchState(store, { filters });
		},

		/**
		 * Save the current filters under a name.
		 *
		 * Saving over an existing name replaces it rather than making a second entry, because
		 * "save" on a name you already used means update, and a list with two "Trick Room
		 * answers" is a list you have to read twice.
		 */
		saveSet(name: string): void {
			const trimmed = name.trim();
			if (!trimmed) return;

			const query = toQueryString(store.filters());
			const rest = store.sets().filter((set) => set.name !== trimmed);
			patchState(store, { sets: [...rest, { name: trimmed, query }].sort((a, b) => a.name.localeCompare(b.name)) });
		},

		applySet(set: FilterSet): void {
			patchState(store, { filters: fromQueryString(set.query) });
		},

		deleteSet(name: string): void {
			patchState(store, { sets: store.sets().filter((set) => set.name !== name) });
		},

		/**
		 * The entries either side of a slug **in the current filter**, not in the national dex.
		 *
		 * That is the whole point: after asking what resists Dragon and Fairy, the next arrow
		 * should walk the answers. Null on both sides when the slug is not in the results —
		 * arrows that jump somewhere unrelated are worse than no arrows.
		 */
		neighbours(slug: string): { prev: DexEntry | null; next: DexEntry | null } {
			const results = store.results();
			const index = results.findIndex((entry) => entry.slug === slug);
			if (index === -1) return { prev: null, next: null };

			return { prev: results[index - 1] ?? null, next: results[index + 1] ?? null };
		},

		/** The Mega forms of a base entry, for its sub-row. */
		megasOf(slug: string): DexEntry[] {
			return store.megaForms().get(slug) ?? [];
		},
	})),
	withHooks({
		onInit(store) {
			patchState(store, { filters: hydrate(), sets: hydrateSets() });

			effect(() => localStorage.setItem(STORAGE_KEY, JSON.stringify(getState(store).filters)));
			effect(() => localStorage.setItem(SETS_KEY, JSON.stringify(getState(store).sets)));
		},
	}),
);
