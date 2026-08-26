import { STAT_KEYS, StatKey } from '@pokemon-center/champions-engine';
import {
	PokedexFilters,
	EMPTY_FILTERS,
	MatchupDirection,
	MegaDisplay,
	MegaFilter,
	Range,
	STAT_BOUNDS,
	SelectMode,
	SortKey,
	TOTAL_BOUNDS,
	isFullRange,
} from './pokedex-filter';

/**
 * Filters as a URL, and back.
 *
 * Two things fall out of this and both matter more than they sound. A filter state becomes a
 * **link you can paste** — "here is everything that walls Dragon and Fairy under 500 BST" is a
 * message you can send someone. And the back button starts working, because each state is a
 * history entry rather than a mutation of hidden storage.
 *
 * Three rules the encoding follows:
 *
 *  1. **Only non-defaults are written.** A cleared panel produces a bare URL, so the common case
 *     costs nothing and the query string stays readable enough to edit by hand.
 *  2. **Decoding never throws.** Every value is validated against what it is allowed to be and
 *     falls back to the default otherwise — a URL is user input, and half of them are truncated
 *     by a chat client before they arrive.
 *  3. **A URL with any filter param wins outright over stored filters** (see `readFilters`). It
 *     is not merged: a shared link must show the sender's view, not the sender's view plus
 *     whatever the recipient happened to leave switched on.
 */

/** Short keys, because these end up in something a person pastes into a message. */
const PARAM = {
	search: 'q',
	types: 't',
	typeMode: 'tm',
	mega: 'mega',
	megaDisplay: 'megaview',
	matchupTypes: 'mu',
	matchupMode: 'mum',
	matchupDirection: 'mud',
	matchupSlug: 'mus',
	stats: 's',
	total: 'bst',
	ability: 'ab',
	move: 'mv',
	ownedOnly: 'own',
	counterOf: 'vs',
	sortBy: 'sort',
	sortDesc: 'desc',
} as const;

/** Every parameter this codec owns, so callers can tell "no filters" from "cleared filters". */
export const POKEDEX_PARAMS: readonly string[] = Object.values(PARAM);

const MEGA_VALUES: MegaFilter[] = ['any', 'has-mega', 'no-mega'];
const MEGA_DISPLAY_VALUES: MegaDisplay[] = ['show', 'separate', 'hide'];
const MODE_VALUES: SelectMode[] = ['exact', 'any'];
const DIRECTION_VALUES: MatchupDirection[] = ['resists', 'weak-to'];
const SORT_VALUES: SortKey[] = ['pokedex', 'name', 'total', ...STAT_KEYS];

function encodeRange(range: Range): string {
	return `${range[0]}-${range[1]}`;
}

/**
 * `120-260`, rejecting anything that is not two numbers in order.
 *
 * Matched rather than split, because splitting on the separator also splits a negative bound:
 * `-50-9999` becomes three pieces and silently decodes as `0-50`. Base stats are never negative,
 * but a hand-edited URL is exactly where one shows up, and quietly inverting the filter is worse
 * than rejecting it.
 */
const RANGE = /^(-?\d+)-(-?\d+)$/;

function decodeRange(raw: string | null, bounds: Range): Range | null {
	const match = raw?.match(RANGE);
	if (!match) return null;

	const min = Number(match[1]);
	const max = Number(match[2]);
	if (min > max) return null;

	return [Math.max(bounds[0], min), Math.min(bounds[1], max)];
}

/** The filters as `{param: value}`, carrying only what differs from the defaults. */
export function encodeFilters(filters: PokedexFilters): Record<string, string> {
	const params: Record<string, string> = {};
	const set = (key: string, value: string) => {
		params[key] = value;
	};

	if (filters.search.trim()) set(PARAM.search, filters.search.trim());

	if (filters.types.length > 0) {
		set(PARAM.types, filters.types.join(','));
		// The mode only means something alongside a selection, so it rides with it.
		if (filters.typeMode !== EMPTY_FILTERS.typeMode) set(PARAM.typeMode, filters.typeMode);
	}

	if (filters.matchupTypes.length > 0) {
		set(PARAM.matchupTypes, filters.matchupTypes.join(','));
		if (filters.matchupMode !== EMPTY_FILTERS.matchupMode) set(PARAM.matchupMode, filters.matchupMode);
		if (filters.matchupDirection !== EMPTY_FILTERS.matchupDirection) set(PARAM.matchupDirection, filters.matchupDirection);
		if (filters.matchupSlug) set(PARAM.matchupSlug, filters.matchupSlug);
	}

	if (filters.mega !== 'any') set(PARAM.mega, filters.mega);
	if (filters.megaDisplay !== EMPTY_FILTERS.megaDisplay) set(PARAM.megaDisplay, filters.megaDisplay);
	if (filters.ability) set(PARAM.ability, filters.ability);
	if (filters.move) set(PARAM.move, filters.move);
	if (filters.ownedOnly) set(PARAM.ownedOnly, '1');
	if (filters.counterOf) set(PARAM.counterOf, filters.counterOf);

	const stats = STAT_KEYS.filter((key) => !isFullRange(filters.statRanges[key], STAT_BOUNDS))
		.map((key) => `${key}:${encodeRange(filters.statRanges[key] as Range)}`)
		.join(',');
	if (stats) set(PARAM.stats, stats);

	if (!isFullRange(filters.totalRange, TOTAL_BOUNDS)) set(PARAM.total, encodeRange(filters.totalRange));

	if (filters.sortBy !== EMPTY_FILTERS.sortBy) set(PARAM.sortBy, filters.sortBy);
	if (filters.sortDesc) set(PARAM.sortDesc, '1');

	return params;
}

/** Anything readable is read; anything else falls back to the default for that field. */
export function decodeFilters(read: (key: string) => string | null): PokedexFilters {
	const oneOf = <T extends string>(key: string, allowed: T[], fallback: T): T => {
		const value = read(key);
		return allowed.includes(value as T) ? (value as T) : fallback;
	};

	const list = (key: string) =>
		(read(key) ?? '')
			.split(',')
			.map((part) => part.trim())
			.filter(Boolean);

	const statRanges: Partial<Record<StatKey, Range>> = {};
	for (const part of list(PARAM.stats)) {
		const [key, raw] = part.split(':');
		if (!STAT_KEYS.includes(key as StatKey)) continue;

		const range = decodeRange(raw, STAT_BOUNDS);
		if (range) statRanges[key as StatKey] = range;
	}

	return {
		...EMPTY_FILTERS,
		search: read(PARAM.search) ?? '',
		types: list(PARAM.types),
		typeMode: oneOf(PARAM.typeMode, MODE_VALUES, EMPTY_FILTERS.typeMode),
		mega: oneOf(PARAM.mega, MEGA_VALUES, 'any'),
		megaDisplay: oneOf(PARAM.megaDisplay, MEGA_DISPLAY_VALUES, EMPTY_FILTERS.megaDisplay),
		matchupTypes: list(PARAM.matchupTypes),
		matchupMode: oneOf(PARAM.matchupMode, MODE_VALUES, EMPTY_FILTERS.matchupMode),
		matchupDirection: oneOf(PARAM.matchupDirection, DIRECTION_VALUES, EMPTY_FILTERS.matchupDirection),
		matchupSlug: read(PARAM.matchupSlug) || null,
		statRanges,
		totalRange: decodeRange(read(PARAM.total), TOTAL_BOUNDS) ?? TOTAL_BOUNDS,
		ability: read(PARAM.ability) || null,
		move: read(PARAM.move) || null,
		ownedOnly: read(PARAM.ownedOnly) === '1',
		counterOf: read(PARAM.counterOf) || null,
		sortBy: oneOf(PARAM.sortBy, SORT_VALUES, EMPTY_FILTERS.sortBy),
		sortDesc: read(PARAM.sortDesc) === '1',
	};
}

/** True when a URL is carrying filter state at all, as opposed to being a bare visit. */
export function hasFilterParams(read: (key: string) => string | null): boolean {
	return POKEDEX_PARAMS.some((key) => read(key) !== null);
}

/** The query string alone, for storing a saved set compactly. */
export function toQueryString(filters: PokedexFilters): string {
	return new URLSearchParams(encodeFilters(filters)).toString();
}

/** The inverse, for restoring one. */
export function fromQueryString(query: string): PokedexFilters {
	const params = new URLSearchParams(query);
	return decodeFilters((key) => params.get(key));
}
