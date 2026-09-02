import {
	columnFacetingFeature,
	columnFilteringFeature,
	columnOrderingFeature,
	columnVisibilityFeature,
	createColumnHelper,
	createFacetedMinMaxValues,
	createFacetedRowModel,
	createFacetedUniqueValues,
	createFilteredRowModel,
	createSortedRowModel,
	filterFn_arrHas,
	filterFn_arrIncludesSome,
	filterFn_inNumberRange,
	globalFilteringFeature,
	rowSortingFeature,
	sortFn_alphanumeric,
	sortFn_basic,
	sortFn_text,
	tableFeatures,
	type RowData,
} from '@tanstack/angular-table';

/** Per-column presentation hints, typed so a misspelled key cannot reach the DOM. */
export interface DataTableColumnMeta {
	align?: 'start' | 'end';
	/**
	 * Drives the Filters panel (Task 4). `'set'` renders a checkbox list from
	 * `column.getFacetedUniqueValues()`; `'range'` renders a min/max pair seeded from
	 * `column.getFacetedMinMaxValues()`. A column with neither does not appear in the panel.
	 */
	filterVariant?: 'set' | 'range';
}

/**
 * The feature set every `pokedex-data-table` runs on. Exported because `createColumnHelper` is
 * generic over the features object, so consumers cannot type a column without it.
 *
 * Features are registered per need, not by default — v9 tree-shakes them, so a table that never
 * resizes does not pay for resizing. Sizing and resizing are deliberately absent.
 *
 * Sort functions are registered individually rather than by spreading `sortFns`: three comparators
 * instead of six. `sortFn_text` is registered though no column names it, because the default
 * `sortFn: 'auto'` resolves to it for strings — and an unregistered name warns and falls back.
 */

export const dataTableFeatures = tableFeatures({
	rowSortingFeature,
	sortedRowModel: createSortedRowModel(),
	sortFns: { alphanumeric: sortFn_alphanumeric, basic: sortFn_basic, text: sortFn_text },

	// Registering these does not make getAllCells()/getAllLeafColumns() unavailable — they stay
	// type-valid, so a half-done switch to the visible-* variants compiles green.
	columnVisibilityFeature,
	columnOrderingFeature,

	// arrHas: a scalar column's value equals one of the checked values (e.g. Generation).
	// arrIncludesSome: an array-valued column includes at least one checked value (e.g. Type).
	// inNumberRange: a numeric column falls within an inclusive [min, max].
	columnFilteringFeature,
	filteredRowModel: createFilteredRowModel(),
	filterFns: { arrHas: filterFn_arrHas, arrIncludesSome: filterFn_arrIncludesSome, inNumberRange: filterFn_inNumberRange },

	// The Filters panel's checkbox lists and range bounds come from these three, not from
	// scanning `data` by hand — they stay correct as filters narrow each other's options.
	columnFacetingFeature,
	facetedRowModel: createFacetedRowModel(),
	facetedUniqueValues: createFacetedUniqueValues(),
	facetedMinMaxValues: createFacetedMinMaxValues(),

	// The quick-search box (Task 5), separate from per-column filters — mirrors ag-grid's own
	// split between a top search bar and column filter menus.
	globalFilteringFeature,

	// A type-only phantom, stripped at runtime, and not decoration: `table-core` declares
	// `interface ColumnMeta {}` and `meta` falls back to it without this slot — so a misspelled
	// `meta: { alignment: 'end' }` would type-check and align nothing. Per-table, not global
	// declaration merging: the vocabulary belongs to this component.
	columnMeta: {} as DataTableColumnMeta,
});

/** The feature-set type that `ColumnDef` and `Column` must be parameterised with. */
export type DataTableFeatures = typeof dataTableFeatures;

/**
 * Column definitions for a `pokedex-data-table`, typed against its row.
 *
 * Always use this helper, never a bare `ColumnDef[]` — a bare array types `getValue()` as `unknown`
 * and accepts any string as an `accessorKey`, so a misspelling renders a blank column silently.
 * Wrap the result in `columnHelper.columns([...])`: column defs are invariant in their value type,
 * so a mixed array does not widen and `injectTable` rejects it.
 *
 * **Declare it at module scope, never in a component field.** `coreColumnsFeature` memoises on
 * `table.options.columns` by identity, so a fresh array rebuilds every column, header group and
 * cell on each state change. Nothing type-checks this.
 *
 * ```ts
 * const columnHelper = createDataTableColumns<DetailMove>();
 *
 * export const moveColumns = columnHelper.columns([
 *   columnHelper.accessor('name', { header: 'Move', sortFn: 'alphanumeric' }),
 * ]);
 * ```
 */
export function createDataTableColumns<TRow extends RowData>() {
	return createColumnHelper<DataTableFeatures, TRow>();
}
