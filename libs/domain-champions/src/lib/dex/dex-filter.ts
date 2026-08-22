import { STAT_KEYS, StatKey, TypeChart, compareCounters, counterScore, isAnswer, typeEffectiveness } from '@pokemon-center/champions-engine';

/**
 * The Pokédex filter engine.
 *
 * Pure and synchronous, running over the whole roster held in memory. That is the design
 * decision the section is built on: ~316 rows fetched once means every filter is instant and
 * any combination is free, which is what separates a filter panel worth using from one that
 * merely exists.
 *
 * Kept out of `champions-engine` because that library is about battle maths; this is about
 * browsing. It borrows `typeEffectiveness` and `counterScore` from there rather than
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

/** Which way the matchup filter is pointed. */
export type MatchupDirection = 'resists' | 'weak-to';

export type MegaFilter = 'any' | 'has-mega' | 'no-mega';

export type SortKey = 'dex' | 'name' | 'total' | StatKey;

/**
 * How a set of type chips is read.
 *
 * `exact` is the strict reading — the typing must *be* the selection, so one chip means
 * mono-type and two mean exactly that pair. `any` is the loose one — at least one chip
 * matches, with no cap. Which mode is active is chosen by how the chip was clicked rather than
 * by a separate toggle, and the border says which: solid for exact, dashed for any.
 */
export type SelectMode = 'exact' | 'any';

/** Inclusive `[min, max]` over a base stat. */
export type Range = [number, number];

/** The widest a base stat range can be; anything at these bounds is not filtering. */
export const STAT_BOUNDS: Range = [0, 260];
export const TOTAL_BOUNDS: Range = [0, 800];

export interface DexFilters {
	search: string;
	/** Type slugs. */
	types: string[];
	typeMode: SelectMode;
	mega: MegaFilter;
	/** Type slugs for the matchup filter. */
	matchupTypes: string[];
	matchupMode: SelectMode;
	matchupDirection: MatchupDirection;
	/** Slug of the Pokémon whose typing filled `matchupTypes`, purely so the chip can say so. */
	matchupSlug: string | null;
	/** Inclusive base-stat ranges, keyed by stat. Base stats only — never level-50 numbers. */
	statRanges: Partial<Record<StatKey, Range>>;
	totalRange: Range;
	/** Ability slug. */
	ability: string | null;
	/**
	 * Move slug — "who learns Fake Out".
	 *
	 * The only filter whose data is not already in memory. Learnsets are far too large to ship
	 * with the roster, so the store fetches the learners of one move on demand and passes them
	 * in as `learners` below; this field is just which move was asked for.
	 */
	move: string | null;
	/** Restrict to species you have in the Box. */
	ownedOnly: boolean;
	/** Slug of a Pokémon to find answers to. Set from a detail page. */
	counterOf: string | null;
	sortBy: SortKey;
	sortDesc: boolean;
}

export const EMPTY_FILTERS: DexFilters = {
	search: '',
	types: [],
	typeMode: 'exact',
	mega: 'any',
	matchupTypes: [],
	matchupMode: 'exact',
	matchupDirection: 'resists',
	matchupSlug: null,
	statRanges: {},
	totalRange: TOTAL_BOUNDS,
	ability: null,
	move: null,
	ownedOnly: false,
	counterOf: null,
	sortBy: 'dex',
	sortDesc: false,
};

/** True when a range is doing nothing, so it can be ignored and reported as inactive. */
export function isFullRange(range: Range | undefined, bounds: Range): boolean {
	return !range || (range[0] <= bounds[0] && range[1] >= bounds[1]);
}

/** True when any filter is doing something, so the UI can offer a meaningful "clear". */
export function isFiltered(filters: DexFilters): boolean {
	return (
		filters.search.trim().length > 0 ||
		filters.types.length > 0 ||
		filters.mega !== 'any' ||
		filters.matchupTypes.length > 0 ||
		filters.ability !== null ||
		filters.move !== null ||
		filters.ownedOnly ||
		filters.counterOf !== null ||
		!isFullRange(filters.totalRange, TOTAL_BOUNDS) ||
		STAT_KEYS.some((key) => !isFullRange(filters.statRanges[key], STAT_BOUNDS))
	);
}

/** What `counterScore` needs from a roster row. */
export function toCounterSubject(entry: DexEntry) {
	return { types: entry.types, baseSpeed: entry.baseStats.speed };
}

/**
 * Does this entry pass the matchup filter?
 *
 * The mode decides the conjunction. `exact` means every selected type must hold — "what walls
 * Dragon *and* Fairy" must not return something that folds to one of them. `any` means one is
 * enough, which is what you want when asking what a coverage slot melts.
 */
export function passesMatchup(entry: DexEntry, filters: DexFilters, chart: TypeChart): boolean {
	if (filters.matchupTypes.length === 0) return true;

	const multipliers = filters.matchupTypes.map((type) => typeEffectiveness(type, entry.types, chart));
	const holds = filters.matchupDirection === 'resists' ? (m: number) => m < 1 : (m: number) => m > 1;

	return filters.matchupMode === 'exact' ? multipliers.every(holds) : multipliers.some(holds);
}

/**
 * Does this entry's typing match the chips?
 *
 * `exact` compares the typing as a whole rather than as a filter over it, which is why one chip
 * returns mono-types only: a Fire/Flying Pokémon is not "a Fire type" under that reading, it is
 * a Fire/Flying type.
 */
function passesTypes(entry: DexEntry, filters: DexFilters): boolean {
	if (filters.types.length === 0) return true;

	if (filters.typeMode === 'any') return filters.types.some((type) => entry.types.includes(type));

	return (
		entry.types.length === filters.types.length && filters.types.every((type) => entry.types.includes(type))
	);
}

/** Base stats only. The level-50 number depends on a spread, which is not a species fact. */
function passesStats(entry: DexEntry, filters: DexFilters): boolean {
	const [totalMin, totalMax] = filters.totalRange ?? TOTAL_BOUNDS;
	if (entry.baseStats.total < totalMin || entry.baseStats.total > totalMax) return false;

	return STAT_KEYS.every((key) => {
		const range = filters.statRanges[key];
		if (!range || isFullRange(range, STAT_BOUNDS)) return true;

		const value = entry.baseStats[key];
		return value >= range[0] && value <= range[1];
	});
}

/**
 * Every sort falls back to dex number.
 *
 * Without it, the many Pokémon sharing a base Speed of 100 reshuffle on any unrelated filter
 * change, which reads as the list flickering for no reason. A tie is broken the same way twice.
 */
function byDex(a: DexEntry, b: DexEntry): number {
	return a.nationalDexNo - b.nationalDexNo || Number(a.isMega) - Number(b.isMega);
}

const SORTERS: Record<SortKey, (a: DexEntry, b: DexEntry) => number> = {
	dex: byDex,
	name: (a, b) => a.name.localeCompare(b.name) || byDex(a, b),
	total: (a, b) => a.baseStats.total - b.baseStats.total || byDex(a, b),
	hp: (a, b) => a.baseStats.hp - b.baseStats.hp || byDex(a, b),
	attack: (a, b) => a.baseStats.attack - b.baseStats.attack || byDex(a, b),
	defense: (a, b) => a.baseStats.defense - b.baseStats.defense || byDex(a, b),
	specialAttack: (a, b) => a.baseStats.specialAttack - b.baseStats.specialAttack || byDex(a, b),
	specialDefense: (a, b) => a.baseStats.specialDefense - b.baseStats.specialDefense || byDex(a, b),
	speed: (a, b) => a.baseStats.speed - b.baseStats.speed || byDex(a, b),
};

const NOTHING_OWNED: ReadonlySet<string> = new Set();

/**
 * Facts the filters need that do not live on a roster row.
 *
 * Both are per-user or per-request rather than reference data, which is exactly why they are
 * passed in: merging them into the entries would put mutable state inside a cached query result.
 */
export interface FilterContext {
	/** Species slugs in your Box. */
	owned?: ReadonlySet<string>;
	/**
	 * Species ids that learn `filters.move`.
	 *
	 * `null` means "asked for, not arrived yet". The filter is skipped in that window rather
	 * than emptying the list: narrowing a full list once the answer lands reads as loading,
	 * whereas an empty list that later fills reads as a broken filter.
	 */
	learners?: ReadonlySet<number> | null;
}

/**
 * Does the search term match this entry — by name, ability or type?
 *
 * Ability **slugs** as well as names, because a slug is what a shared URL carries and
 * "huge-power" is a plausible thing to paste back into the box. Prefix matches on the species
 * name still float to the top, so widening this costs the common case nothing.
 */
function matchesSearch(entry: DexEntry, search: string): boolean {
	return (
		entry.name.toLowerCase().includes(search) ||
		entry.abilityNames.some((name) => name.toLowerCase().includes(search)) ||
		entry.abilitySlugs.some((slug) => slug.includes(search)) ||
		entry.types.some((type) => type.includes(search))
	);
}

/** Apply every filter, then sort. */
export function applyFilters(
	entries: readonly DexEntry[],
	filters: DexFilters,
	chart: TypeChart,
	context: FilterContext = {},
): DexEntry[] {
	const owned = context.owned ?? NOTHING_OWNED;
	const learners = context.learners;
	const search = filters.search.trim().toLowerCase();

	// Resolved once rather than per row: the target is a lookup into the same array being
	// filtered, and doing it inside the predicate would be 316 scans instead of one.
	const counterTarget = filters.counterOf ? (entries.find((entry) => entry.slug === filters.counterOf) ?? null) : null;
	const target = counterTarget ? toCounterSubject(counterTarget) : null;

	const matched = entries.filter((entry) => {
		// A Mega is never its own row. It is a state Garchomp can enter, not a second Pokémon,
		// and a list that shows both reads as two threats when it is one line of thinking. The
		// Mega's artwork, typing and stats appear beneath its base form instead.
		if (entry.isMega) return false;

		if (search && !matchesSearch(entry, search)) return false;
		if (!passesTypes(entry, filters)) return false;

		if (filters.mega === 'has-mega' && !entry.hasMega) return false;
		if (filters.mega === 'no-mega' && entry.hasMega) return false;

		if (filters.ability && !entry.abilitySlugs.includes(filters.ability)) return false;
		if (filters.move && learners && !learners.has(entry.id)) return false;
		if (filters.ownedOnly && !owned.has(entry.slug)) return false;
		if (!passesStats(entry, filters)) return false;
		if (!passesMatchup(entry, filters, chart)) return false;

		if (target) {
			// Never offer something as its own answer.
			if (entry.slug === filters.counterOf) return false;
			if (!isAnswer(counterScore(target, toCounterSubject(entry), chart))) return false;
		}

		return true;
	});

	const sorted = [...matched].sort(SORTERS[filters.sortBy]);
	if (filters.sortDesc) sorted.reverse();

	// Asking "what beats this" is asking for a ranking, so the answer quality outranks whatever
	// sort was left selected — the same precedence the search prefix takes below.
	if (target) {
		sorted.sort((a, b) =>
			compareCounters(counterScore(target, toCounterSubject(a), chart), counterScore(target, toCounterSubject(b), chart)),
		);
	}

	// A prefix match is what someone typing three letters means, so it floats to the top
	// regardless of the chosen sort.
	if (search) {
		sorted.sort((a, b) => Number(b.name.toLowerCase().startsWith(search)) - Number(a.name.toLowerCase().startsWith(search)));
	}

	return sorted;
}

/** One filter group that could be dropped, and what dropping it would show. */
export interface Relaxation {
	/** What the button says, e.g. "Ignore the matchup". */
	label: string;
	/** The patch that drops this group. */
	patch: Partial<DexFilters>;
	/** How many entries would come back. */
	count: number;
}

/** Each filter group, as a label and the patch that switches it off. */
const GROUPS: { label: string; active(f: DexFilters): boolean; off: Partial<DexFilters> }[] = [
	{ label: 'the search', active: (f) => f.search.trim().length > 0, off: { search: '' } },
	{ label: 'the type filter', active: (f) => f.types.length > 0, off: { types: [] } },
	{
		label: 'the matchup',
		active: (f) => f.matchupTypes.length > 0,
		off: { matchupTypes: [], matchupSlug: null },
	},
	{ label: 'the Mega filter', active: (f) => f.mega !== 'any', off: { mega: 'any' } },
	{ label: 'the ability', active: (f) => f.ability !== null, off: { ability: null } },
	{ label: 'the move', active: (f) => f.move !== null, off: { move: null } },
	{ label: 'what you own', active: (f) => f.ownedOnly, off: { ownedOnly: false } },
	{ label: 'the counter search', active: (f) => f.counterOf !== null, off: { counterOf: null } },
	{
		label: 'the stat ranges',
		active: (f) =>
			!isFullRange(f.totalRange, TOTAL_BOUNDS) || STAT_KEYS.some((key) => !isFullRange(f.statRanges[key], STAT_BOUNDS)),
		off: { statRanges: {}, totalRange: TOTAL_BOUNDS },
	},
];

/**
 * When nothing matches, which single filter is to blame?
 *
 * An empty list is the one state where a filter panel actively wastes your time: every control
 * is still lit, and none of them tells you which one is the problem. Combining the matchup
 * filter with a stat range makes an empty result easy to reach and hard to read.
 *
 * Cheap enough to be worth it — one extra pass over ~316 rows per active group, and only ever
 * on the empty state. Groups that still return nothing when dropped are omitted, because
 * offering a button that changes nothing is worse than offering none.
 */
export function diagnoseEmpty(
	entries: readonly DexEntry[],
	filters: DexFilters,
	chart: TypeChart,
	context: FilterContext = {},
): Relaxation[] {
	const active = GROUPS.filter((group) => group.active(filters));
	// With one filter on, "drop it" and "clear everything" are the same button. The caller
	// already offers the latter.
	if (active.length < 2) return [];

	return active
		.map((group) => ({
			label: group.label,
			patch: group.off,
			count: applyFilters(entries, { ...filters, ...group.off }, chart, context).length,
		}))
		.filter((relaxation) => relaxation.count > 0)
		.sort((a, b) => b.count - a.count);
}
