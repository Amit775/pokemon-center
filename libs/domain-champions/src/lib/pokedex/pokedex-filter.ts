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
export interface PokedexEntry {
	id: number;
	slug: string;
	name: string;
	nationalPokedexNumber: number;
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

/**
 * How Mega forms take part in the list.
 *
 * Not a cosmetic choice — it decides what the filters are allowed to *find*.
 *
 * - `show` — Megas appear beneath their base form, **and a Mega can qualify its base form**.
 *   Asking for base Speed 125+ surfaces Beedrill, because Mega Beedrill hits 145. This is the
 *   default because it is the only reading that never hides a threat.
 * - `separate` — every Mega is its own row, matched on its own merits. For when you want the
 *   Megas themselves ranked, not the species that can become them.
 * - `hide` — Megas are ignored completely, for the matchups where the stone is not in play.
 */
export type MegaDisplay = 'show' | 'separate' | 'hide';

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

export interface PokedexFilters {
	search: string;
	/** Type slugs. */
	types: string[];
	typeMode: SelectMode;
	mega: MegaFilter;
	/** How Mega forms take part — see `MegaDisplay`. Presentation, so a clear preserves it. */
	megaDisplay: MegaDisplay;
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

export const EMPTY_FILTERS: PokedexFilters = {
	search: '',
	types: [],
	typeMode: 'exact',
	mega: 'any',
	megaDisplay: 'show',
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
export function isFiltered(filters: PokedexFilters): boolean {
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
export function toCounterSubject(entry: PokedexEntry) {
	return { types: entry.types, baseSpeed: entry.baseStats.speed };
}

/**
 * Does this entry pass the matchup filter?
 *
 * The mode decides the conjunction. `exact` means every selected type must hold — "what walls
 * Dragon *and* Fairy" must not return something that folds to one of them. `any` means one is
 * enough, which is what you want when asking what a coverage slot melts.
 */
export function passesMatchup(entry: PokedexEntry, filters: PokedexFilters, chart: TypeChart): boolean {
	if (filters.matchupTypes.length === 0) return true;

	const multipliers = filters.matchupTypes.map((type) => typeEffectiveness(type, entry.types, chart));
	const holds = filters.matchupDirection === 'resists' ? (multiplier: number) => multiplier < 1 : (multiplier: number) => multiplier > 1;

	return filters.matchupMode === 'exact' ? multipliers.every(holds) : multipliers.some(holds);
}

/**
 * Does this entry's typing match the chips?
 *
 * `exact` compares the typing as a whole rather than as a filter over it, which is why one chip
 * returns mono-types only: a Fire/Flying Pokémon is not "a Fire type" under that reading, it is
 * a Fire/Flying type.
 */
function passesTypes(entry: PokedexEntry, filters: PokedexFilters): boolean {
	if (filters.types.length === 0) return true;

	if (filters.typeMode === 'any') return filters.types.some((type) => entry.types.includes(type));

	return (
		entry.types.length === filters.types.length && filters.types.every((type) => entry.types.includes(type))
	);
}

/** Base stats only. The level-50 number depends on a spread, which is not a species fact. */
function passesStats(entry: PokedexEntry, filters: PokedexFilters): boolean {
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
function byPokedex(a: PokedexEntry, b: PokedexEntry): number {
	return a.nationalPokedexNumber - b.nationalPokedexNumber || Number(a.isMega) - Number(b.isMega);
}

const SORTERS: Record<SortKey, (a: PokedexEntry, b: PokedexEntry) => number> = {
	dex: byPokedex,
	name: (first, second) => first.name.localeCompare(second.name) || byPokedex(first, second),
	total: (first, second) => first.baseStats.total - second.baseStats.total || byPokedex(first, second),
	hp: (first, second) => first.baseStats.hp - second.baseStats.hp || byPokedex(first, second),
	attack: (first, second) => first.baseStats.attack - second.baseStats.attack || byPokedex(first, second),
	defense: (first, second) => first.baseStats.defense - second.baseStats.defense || byPokedex(first, second),
	specialAttack: (first, second) => first.baseStats.specialAttack - second.baseStats.specialAttack || byPokedex(first, second),
	specialDefense: (first, second) => first.baseStats.specialDefense - second.baseStats.specialDefense || byPokedex(first, second),
	speed: (first, second) => first.baseStats.speed - second.baseStats.speed || byPokedex(first, second),
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
function matchesSearch(entry: PokedexEntry, search: string): boolean {
	return (
		entry.name.toLowerCase().includes(search) ||
		entry.abilityNames.some((name) => name.toLowerCase().includes(search)) ||
		entry.abilitySlugs.some((slug) => slug.includes(search)) ||
		entry.types.some((type) => type.includes(search))
	);
}

/** Everything `matchesFilters` needs that is derived once per call rather than per row. */
interface MatchContext {
	owned: ReadonlySet<string>;
	learners: ReadonlySet<number> | null | undefined;
	search: string;
	target: ReturnType<typeof toCounterSubject> | null;
	chart: TypeChart;
}

/**
 * Does one entry pass, on its own merits?
 *
 * Exported because two questions need it: which rows to show, and — for a base form that only
 * qualified because of its Mega — whether to say so.
 */
export function matchesFilters(entry: PokedexEntry, filters: PokedexFilters, context: MatchContext): boolean {
	const { owned, learners, search, target, chart } = context;

	if (search && !matchesSearch(entry, search)) return false;
	if (!passesTypes(entry, filters)) return false;

	// Asked of the base form even for a Mega, since "has a Mega" is a fact about the species.
	if (filters.mega === 'has-mega' && !entry.hasMega && !entry.isMega) return false;
	if (filters.mega === 'no-mega' && (entry.hasMega || entry.isMega)) return false;

	if (filters.ability && !entry.abilitySlugs.includes(filters.ability)) return false;
	if (filters.move && learners && !learners.has(entry.id)) return false;
	if (filters.ownedOnly && !owned.has(entry.megaOfSlug ?? entry.slug)) return false;
	if (!passesStats(entry, filters)) return false;
	if (!passesMatchup(entry, filters, chart)) return false;

	if (target) {
		// Never offer something as its own answer.
		if (entry.slug === filters.counterOf) return false;
		if (!isAnswer(counterScore(target, toCounterSubject(entry), chart))) return false;
	}

	return true;
}

/** Base slug → its Mega forms. */
function megasByBase(entries: readonly PokedexEntry[]): Map<string, PokedexEntry[]> {
	const map = new Map<string, PokedexEntry[]>();
	for (const entry of entries) {
		if (!entry.isMega || !entry.megaOfSlug) continue;
		map.set(entry.megaOfSlug, [...(map.get(entry.megaOfSlug) ?? []), entry]);
	}
	return map;
}

/** Apply every filter, then sort. */
export function applyFilters(
	entries: readonly PokedexEntry[],
	filters: PokedexFilters,
	chart: TypeChart,
	context: FilterContext = {},
): PokedexEntry[] {
	// Resolved once rather than per row: the target is a lookup into the same array being
	// filtered, and doing it inside the predicate would be 316 scans instead of one.
	const counterTarget = filters.counterOf ? (entries.find((entry) => entry.slug === filters.counterOf) ?? null) : null;

	const match: MatchContext = {
		owned: context.owned ?? NOTHING_OWNED,
		learners: context.learners,
		search: filters.search.trim().toLowerCase(),
		target: counterTarget ? toCounterSubject(counterTarget) : null,
		chart,
	};

	const megas = megasByBase(entries);

	const matched = entries.filter((entry) => {
		if (entry.isMega) {
			// A Mega is a row of its own only when asked for. Otherwise it appears beneath its
			// base form, because it is a state that Pokémon can enter rather than a second one.
			return filters.megaDisplay === 'separate' && matchesFilters(entry, filters, match);
		}

		if (matchesFilters(entry, filters, match)) return true;

		/*
		 * The Mega qualifies even though the base form does not — and that is an answer, not a
		 * near miss. Asking for base Speed 125+ has to surface Beedrill, whose Mega hits 145
		 * from a base of 75: something that outspeeds you after Mega Evolving outspeeds you.
		 * Dropping it was the filter quietly lying about the roster.
		 */
		return filters.megaDisplay === 'show' && (megas.get(entry.slug) ?? []).some((mega) => matchesFilters(mega, filters, match));
	});

	const sorted = [...matched].sort(SORTERS[filters.sortBy]);
	if (filters.sortDesc) sorted.reverse();

	// Asking "what beats this" is asking for a ranking, so the answer quality outranks whatever
	// sort was left selected — the same precedence the search prefix takes below.
	if (match.target) {
		const target = match.target;
		sorted.sort((first, second) =>
			compareCounters(counterScore(target, toCounterSubject(first), chart), counterScore(target, toCounterSubject(second), chart)),
		);
	}

	// A prefix match is what someone typing three letters means, so it floats to the top
	// regardless of the chosen sort.
	if (match.search) {
		const search = match.search;
		sorted.sort((first, second) => Number(second.name.toLowerCase().startsWith(search)) - Number(first.name.toLowerCase().startsWith(search)));
	}

	return sorted;
}

/**
 * Base slugs that are in the results **only** because one of their Megas qualified.
 *
 * Worth marking on the row: "Beedrill matched a Speed 125+ search" is confusing until you see
 * that it is Mega Beedrill doing the outspeeding. Computed over the results rather than the
 * roster, so it costs one pass over what is already on screen.
 */
export function megaOnlyMatches(
	results: readonly PokedexEntry[],
	filters: PokedexFilters,
	chart: TypeChart,
	context: FilterContext = {},
): ReadonlySet<string> {
	if (filters.megaDisplay !== 'show' || !isFiltered(filters)) return new Set();

	const match: MatchContext = {
		owned: context.owned ?? NOTHING_OWNED,
		learners: context.learners,
		search: filters.search.trim().toLowerCase(),
		target: null,
		chart,
	};

	// The counter target is deliberately left out: a row that only its Mega answers with is
	// still an answer, and re-deriving the ranking here would double the work for a badge.
	return new Set(results.filter((entry) => !entry.isMega && !matchesFilters(entry, filters, match)).map((entry) => entry.slug));
}

/** One filter group that could be dropped, and what dropping it would show. */
export interface Relaxation {
	/** What the button says, e.g. "Ignore the matchup". */
	label: string;
	/** The patch that drops this group. */
	patch: Partial<PokedexFilters>;
	/** How many entries would come back. */
	count: number;
}

/** Each filter group, as a label and the patch that switches it off. */
const GROUPS: { label: string; active(f: PokedexFilters): boolean; off: Partial<PokedexFilters> }[] = [
	{ label: 'the search', active: (filters) => filters.search.trim().length > 0, off: { search: '' } },
	{ label: 'the type filter', active: (filters) => filters.types.length > 0, off: { types: [] } },
	{
		label: 'the matchup',
		active: (filters) => filters.matchupTypes.length > 0,
		off: { matchupTypes: [], matchupSlug: null },
	},
	{ label: 'the Mega filter', active: (filters) => filters.mega !== 'any', off: { mega: 'any' } },
	{ label: 'the ability', active: (filters) => filters.ability !== null, off: { ability: null } },
	{ label: 'the move', active: (filters) => filters.move !== null, off: { move: null } },
	{ label: 'what you own', active: (filters) => filters.ownedOnly, off: { ownedOnly: false } },
	{ label: 'the counter search', active: (filters) => filters.counterOf !== null, off: { counterOf: null } },
	{
		label: 'the stat ranges',
		active: (filters) =>
			!isFullRange(filters.totalRange, TOTAL_BOUNDS) || STAT_KEYS.some((key) => !isFullRange(filters.statRanges[key], STAT_BOUNDS)),
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
	entries: readonly PokedexEntry[],
	filters: PokedexFilters,
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
		.sort((first, second) => second.count - first.count);
}
