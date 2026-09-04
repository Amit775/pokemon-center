import type { MatchupDirection, MegaFilter, Range, SelectMode } from './pokedex-filter';

/**
 * Filters as a URL, and back — rebuilt on AG Grid's own Grid State.
 *
 * Filtering now lives in two places, and a saved set or a shared link is worthless unless it
 * carries both:
 *
 *  - **Column filters** — Types and the seven stat ranges — held in AG Grid's own filter model,
 *    reachable via `api.getFilterModel()`/`api.setFilterModel()`. Whatever the grid reports here
 *    (including the Pokémon-name text filter and the Abilities set filter, if either is active)
 *    rides along too, since `getFilterModel()` already omits anything inactive.
 *  - **Cross-cutting filters** — matchup, counter-target, move-learner, owned-only, Mega — held in
 *    `ExternalFiltersStore`, reached through AG Grid's External Filter API rather than any column.
 *
 * `PokedexSavedState` is the shape that holds both halves together. Restoring only one — say,
 * the column filter model without the external slice — would silently drop the user's matchup or
 * counter selection, which is worse than restoring nothing: it looks like the filters came back.
 *
 * Three rules the encoding follows, unchanged from the pre-Grid-State version of this file:
 *
 *  1. **Only non-defaults are written.** A cleared panel produces a bare URL, so the common case
 *     costs nothing and the query string stays readable enough to edit by hand. This falls out
 *     naturally for the column half — `getFilterModel()` only ever reports active filters — and is
 *     enforced by hand for the external half, field by field.
 *  2. **Decoding never throws.** Every value is validated against what it is allowed to be and
 *     falls back to the default otherwise — a URL is user input, and half of them are truncated
 *     by a chat client before they arrive. The column filter model is JSON, so a hand-edited or
 *     truncated blob is validated per column (`FILTER_MODEL_VALIDATORS`) rather than trusted
 *     wholesale: an unrecognised column id or a malformed model for a known one is dropped, never
 *     thrown.
 *  3. **A URL with any filter param wins outright over stored filters** (see
 *     `hasPokedexStateParams`). It is not merged: a shared link must show the sender's view, not
 *     the sender's view plus whatever the recipient happened to leave switched on.
 */

/** The AG Grid column filter model, straight from `api.getFilterModel()`/into `api.setFilterModel()`. */
export type PokedexFilterModel = Record<string, unknown>;

/**
 * The persistable slice of `ExternalFiltersStore` — everything but `learners` (re-fetched from
 * `move`, never itself round-tripped) and `version` (an internal change counter, not state).
 */
export interface ExternalFiltersSnapshot {
	matchupTypes: string[];
	matchupMode: SelectMode;
	matchupDirection: MatchupDirection;
	ownedOnly: boolean;
	mega: MegaFilter;
	move: string | null;
	counterOf: string | null;
}

export const EMPTY_EXTERNAL_FILTERS: ExternalFiltersSnapshot = {
	matchupTypes: [],
	matchupMode: 'exact',
	matchupDirection: 'resists',
	ownedOnly: false,
	mega: 'any',
	move: null,
	counterOf: null,
};

/** Both filtering mechanisms, together — what a saved set or a shared link actually carries. */
export interface PokedexSavedState {
	filterModel: PokedexFilterModel;
	external: ExternalFiltersSnapshot;
}

export const EMPTY_SAVED_STATE: PokedexSavedState = { filterModel: {}, external: EMPTY_EXTERNAL_FILTERS };

/**
 * Each key is the name of the filter it carries — spelled out, not abbreviated, so a pasted link
 * stays readable (`matchupDirection=resists` is a sentence; `mud=resists` is a puzzle).
 */
const PARAM = {
	filterModel: 'filterModel',
	matchupTypes: 'matchupTypes',
	matchupMode: 'matchupMode',
	matchupDirection: 'matchupDirection',
	mega: 'mega',
	ownedOnly: 'ownedOnly',
	move: 'move',
	counterOf: 'counterOf',
} as const;

/** Every parameter this codec owns, so callers can tell "no filters" from "cleared filters". */
export const POKEDEX_STATE_PARAMS: readonly string[] = Object.values(PARAM);

const MEGA_VALUES: MegaFilter[] = ['any', 'has-mega', 'no-mega'];
const MODE_VALUES: SelectMode[] = ['exact', 'any'];
const DIRECTION_VALUES: MatchupDirection[] = ['resists', 'weak-to'];

function isFiniteNumber(value: unknown): value is number {
	return typeof value === 'number' && Number.isFinite(value);
}

function isPlainObject(value: unknown): value is Record<string, unknown> {
	return typeof value === 'object' && value !== null && !Array.isArray(value);
}

/** The Types column's model — see `TypeColumnFilterModel` in `filters/type-column-filter.component.ts`. */
function isTypesModel(value: unknown): boolean {
	return (
		isPlainObject(value) &&
		Array.isArray(value['types']) &&
		(value['types'] as unknown[]).every((type) => typeof type === 'string') &&
		MODE_VALUES.includes(value['mode'] as SelectMode)
	);
}

/** A stat/total column's model is the inclusive `[min, max]` range itself — see `StatRangeColumnFilterComponent`. */
function isRangeModel(value: unknown): value is Range {
	return Array.isArray(value) && value.length === 2 && value.every(isFiniteNumber) && value[0] <= value[1];
}

/** `agTextColumnFilter`'s model (the Pokémon-name column) — loose, since AG Grid owns its exact shape. */
function isTextFilterModel(value: unknown): boolean {
	return isPlainObject(value) && (value['filterType'] === undefined || value['filterType'] === 'text');
}

/** `agSetColumnFilter`'s model (the Abilities column) — loose, same reasoning as text above. */
function isSetFilterModel(value: unknown): boolean {
	return isPlainObject(value) && Array.isArray(value['values']);
}

/**
 * One validator per filterable column id (`pokedex-grid-columns.ts`). An id with no entry here —
 * unrecognised, or from a column that no longer exists — is dropped rather than guessed at.
 */
const FILTER_MODEL_VALIDATORS: Record<string, (value: unknown) => boolean> = {
	name: isTextFilterModel,
	types: isTypesModel,
	abilities: isSetFilterModel,
	hp: isRangeModel,
	attack: isRangeModel,
	defense: isRangeModel,
	specialAttack: isRangeModel,
	specialDefense: isRangeModel,
	speed: isRangeModel,
	total: isRangeModel,
};

/** Keeps only the column entries this codec recognises and whose shape passes its own validator. */
function sanitizeFilterModel(model: PokedexFilterModel): PokedexFilterModel {
	const result: PokedexFilterModel = {};
	for (const [colId, value] of Object.entries(model)) {
		const validate = FILTER_MODEL_VALIDATORS[colId];
		if (validate?.(value)) result[colId] = value;
	}
	return result;
}

function decodeFilterModel(raw: string | null): PokedexFilterModel {
	if (!raw) return {};

	let parsed: unknown;
	try {
		parsed = JSON.parse(raw);
	} catch {
		return {};
	}

	return isPlainObject(parsed) ? sanitizeFilterModel(parsed) : {};
}

/** The combined state as `{param: value}`, carrying only what differs from the defaults. */
export function encodePokedexState(state: PokedexSavedState): Record<string, string> {
	const params: Record<string, string> = {};
	const set = (key: string, value: string) => {
		params[key] = value;
	};

	const filterModel = sanitizeFilterModel(state.filterModel);
	if (Object.keys(filterModel).length > 0) set(PARAM.filterModel, JSON.stringify(filterModel));

	const external = state.external;
	if (external.matchupTypes.length > 0) {
		set(PARAM.matchupTypes, external.matchupTypes.join(','));
		// The mode/direction only mean something alongside a selection, so they ride with it.
		if (external.matchupMode !== EMPTY_EXTERNAL_FILTERS.matchupMode) set(PARAM.matchupMode, external.matchupMode);
		if (external.matchupDirection !== EMPTY_EXTERNAL_FILTERS.matchupDirection) set(PARAM.matchupDirection, external.matchupDirection);
	}

	if (external.mega !== EMPTY_EXTERNAL_FILTERS.mega) set(PARAM.mega, external.mega);
	if (external.ownedOnly) set(PARAM.ownedOnly, '1');
	if (external.move) set(PARAM.move, external.move);
	if (external.counterOf) set(PARAM.counterOf, external.counterOf);

	return params;
}

/** Anything readable is read; anything else falls back to the default for that field. */
export function decodePokedexState(read: (key: string) => string | null): PokedexSavedState {
	const oneOf = <T extends string>(key: string, allowed: T[], fallback: T): T => {
		const value = read(key);
		return allowed.includes(value as T) ? (value as T) : fallback;
	};

	const list = (key: string) =>
		(read(key) ?? '')
			.split(',')
			.map((part) => part.trim())
			.filter(Boolean);

	return {
		filterModel: decodeFilterModel(read(PARAM.filterModel)),
		external: {
			matchupTypes: list(PARAM.matchupTypes),
			matchupMode: oneOf(PARAM.matchupMode, MODE_VALUES, EMPTY_EXTERNAL_FILTERS.matchupMode),
			matchupDirection: oneOf(PARAM.matchupDirection, DIRECTION_VALUES, EMPTY_EXTERNAL_FILTERS.matchupDirection),
			mega: oneOf(PARAM.mega, MEGA_VALUES, EMPTY_EXTERNAL_FILTERS.mega),
			ownedOnly: read(PARAM.ownedOnly) === '1',
			move: read(PARAM.move) || null,
			counterOf: read(PARAM.counterOf) || null,
		},
	};
}

/** True when a URL is carrying filter state at all, as opposed to being a bare visit. */
export function hasPokedexStateParams(read: (key: string) => string | null): boolean {
	return POKEDEX_STATE_PARAMS.some((key) => read(key) !== null);
}

/** The query string alone, for storing a saved set compactly. */
export function toQueryString(state: PokedexSavedState): string {
	return new URLSearchParams(encodePokedexState(state)).toString();
}

/** The inverse, for restoring one. */
export function fromQueryString(query: string): PokedexSavedState {
	const params = new URLSearchParams(query);
	return decodePokedexState((key) => params.get(key));
}
