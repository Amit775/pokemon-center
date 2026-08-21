import { STAT_KEYS, StatKey, TypeChart, statAt50, typeEffectiveness } from '@pokemon-center/champions-engine';

/**
 * The Pokédex filter engine.
 *
 * Pure and synchronous, running over the whole roster held in memory. That is the design
 * decision the section is built on: ~316 rows fetched once means every filter is instant and
 * any combination is free, which is what separates a filter panel worth using from one that
 * merely exists.
 *
 * Kept out of `champions-engine` because that library is about battle maths; this is about
 * browsing. It borrows `typeEffectiveness` and `statAt50` from there rather than
 * reimplementing them.
 */

/** The subset of a roster row the filters read. Structural, so the GraphQL type satisfies it. */
export interface DexEntry {
	id: number;
	slug: string;
	name: string;
	nationalDexNo: number;
	types: string[];
	baseStats: Record<StatKey, number> & { total: number };
	isMega: boolean;
	hasMega: boolean;
	megaOfSlug: string | null;
	abilitySlugs: string[];
	abilityNames: string[];
}

/** Which way the weakness filter is pointed. */
export type MatchupDirection = 'resists' | 'weak-to';

export type MegaFilter = 'any' | 'has-mega' | 'no-mega';

export type SortKey = 'dex' | 'name' | 'total' | StatKey;

export interface DexFilters {
	search: string;
	/** Type slugs. */
	types: string[];
	/** `all` requires every selected type; `any` requires at least one. */
	typeMode: 'any' | 'all';
	mega: MegaFilter;
	/** Show Mega forms as their own rows. */
	includeMegaForms: boolean;
	/** Type slugs for the matchup filter. */
	matchupTypes: string[];
	matchupDirection: MatchupDirection;
	/** Minimum real level-50 stat values, keyed by stat. */
	minStats: Partial<Record<StatKey, number>>;
	/** Minimum base stat total. */
	minTotal: number;
	/** Ability slug. */
	ability: string | null;
	sortBy: SortKey;
	sortDesc: boolean;
}

export const EMPTY_FILTERS: DexFilters = {
	search: '',
	types: [],
	typeMode: 'any',
	mega: 'any',
	includeMegaForms: false,
	matchupTypes: [],
	matchupDirection: 'resists',
	minStats: {},
	minTotal: 0,
	ability: null,
	sortBy: 'dex',
	sortDesc: false,
};

/** True when any filter is doing something, so the UI can offer a meaningful "clear". */
export function isFiltered(filters: DexFilters): boolean {
	return (
		filters.search.trim().length > 0 ||
		filters.types.length > 0 ||
		filters.mega !== 'any' ||
		filters.matchupTypes.length > 0 ||
		filters.minTotal > 0 ||
		filters.ability !== null ||
		STAT_KEYS.some((key) => (filters.minStats[key] ?? 0) > 0)
	);
}

/**
 * Does this entry pass the matchup filter?
 *
 * The two directions are deliberately asymmetric. "What walls Dragon *and* Fairy?" must only
 * return things that handle both — a wall that folds to one of them is not a wall. "What is
 * weak to Ice *or* Fighting?" should return anything either one melts, because you only need
 * one of them to click.
 */
export function passesMatchup(entry: DexEntry, filters: DexFilters, chart: TypeChart): boolean {
	if (filters.matchupTypes.length === 0) return true;

	const multipliers = filters.matchupTypes.map((type) => typeEffectiveness(type, entry.types, chart));

	return filters.matchupDirection === 'resists' ? multipliers.every((m) => m < 1) : multipliers.some((m) => m > 1);
}

function passesTypes(entry: DexEntry, filters: DexFilters): boolean {
	if (filters.types.length === 0) return true;
	return filters.typeMode === 'all'
		? filters.types.every((type) => entry.types.includes(type))
		: filters.types.some((type) => entry.types.includes(type));
}

function passesStats(entry: DexEntry, filters: DexFilters): boolean {
	if (entry.baseStats.total < filters.minTotal) return false;

	// Thresholds are expressed as real level-50 stats with full investment, because "Speed
	// ≥ 100" means the number you battle with, not a base stat you would have to convert.
	return STAT_KEYS.every((key) => {
		const minimum = filters.minStats[key] ?? 0;
		return minimum === 0 || statAt50(entry.baseStats[key], key, 32) >= minimum;
	});
}

const SORTERS: Record<SortKey, (a: DexEntry, b: DexEntry) => number> = {
	dex: (a, b) => a.nationalDexNo - b.nationalDexNo || Number(a.isMega) - Number(b.isMega),
	name: (a, b) => a.name.localeCompare(b.name),
	total: (a, b) => a.baseStats.total - b.baseStats.total,
	hp: (a, b) => a.baseStats.hp - b.baseStats.hp,
	attack: (a, b) => a.baseStats.attack - b.baseStats.attack,
	defense: (a, b) => a.baseStats.defense - b.baseStats.defense,
	specialAttack: (a, b) => a.baseStats.specialAttack - b.baseStats.specialAttack,
	specialDefense: (a, b) => a.baseStats.specialDefense - b.baseStats.specialDefense,
	speed: (a, b) => a.baseStats.speed - b.baseStats.speed,
};

/** Apply every filter, then sort. */
export function applyFilters(entries: readonly DexEntry[], filters: DexFilters, chart: TypeChart): DexEntry[] {
	const search = filters.search.trim().toLowerCase();

	const matched = entries.filter((entry) => {
		if (!filters.includeMegaForms && entry.isMega) return false;

		if (search && !entry.name.toLowerCase().includes(search)) return false;
		if (!passesTypes(entry, filters)) return false;

		if (filters.mega === 'has-mega' && !entry.hasMega && !entry.isMega) return false;
		if (filters.mega === 'no-mega' && (entry.hasMega || entry.isMega)) return false;

		if (filters.ability && !entry.abilitySlugs.includes(filters.ability)) return false;
		if (!passesStats(entry, filters)) return false;
		if (!passesMatchup(entry, filters, chart)) return false;

		return true;
	});

	const sorted = [...matched].sort(SORTERS[filters.sortBy]);
	if (filters.sortDesc) sorted.reverse();

	// A prefix match is what someone typing three letters means, so it floats to the top
	// regardless of the chosen sort.
	if (search) {
		sorted.sort((a, b) => Number(b.name.toLowerCase().startsWith(search)) - Number(a.name.toLowerCase().startsWith(search)));
	}

	return sorted;
}
