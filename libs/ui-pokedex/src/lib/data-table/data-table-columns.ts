import {
	columnOrderingFeature,
	columnVisibilityFeature,
	createColumnHelper,
	createSortedRowModel,
	rowSortingFeature,
	sortFn_alphanumeric,
	sortFn_basic,
	sortFn_text,
	tableFeatures,
	type RowData,
} from '@tanstack/angular-table';

/**
 * The feature set every `pokedex-data-table` runs on.
 *
 * This lives in the kit rather than in each consumer because `createColumnHelper` is generic over
 * the *features object itself* — a consumer cannot type a single column without it. Exporting the
 * object is therefore not convenience, it is the only way a domain library can declare columns at
 * all.
 *
 * The registration is a deliberate budget rather than a default: TanStack v9 is tree-shaken per
 * feature, so a table that never resizes does not pay for resizing. Phase 1 registered sorting
 * alone; Phase 3a adds visibility and ordering because the Columns panel needs them. Sizing,
 * resizing and filtering are still absent, and adding one "for later" puts its weight into every
 * consumer's bundle for no caller.
 *
 * The sort functions are registered **individually** rather than by spreading the whole `sortFns`
 * registry. That is the difference between shipping three comparators and shipping six.
 *
 * `sortFn_text` is registered on purpose even though no column names it. `rowSortingFeature`'s
 * default column definition is `sortFn: 'auto'`, which resolves to `'text'` for string values — and
 * `sortFn` names are looked up **by string at runtime**, so an unregistered name logs a
 * `console.warn` and silently falls back to `sortFn_basic`. Registering it makes the default path
 * correct rather than merely quiet.
 */
/**
 * Per-column presentation hints the kit reads, declared as a type so a typo cannot reach the DOM.
 *
 * `align: 'end'` is what makes a numeric column scannable. `tabular-nums` on its own only equalises
 * digit widths; it does not line up a 40 under a 150, and a stat column whose ones digits wander is
 * the column nobody reads.
 */
export interface DataTableColumnMeta {
	align?: 'start' | 'end';
}

export const dataTableFeatures = tableFeatures({
	rowSortingFeature,
	sortedRowModel: createSortedRowModel(),
	sortFns: { alphanumeric: sortFn_alphanumeric, basic: sortFn_basic, text: sortFn_text },

	// Visibility and ordering, for the Columns panel.
	//
	// Registering these does NOT make `getAllCells()` / `getAllLeafColumns()` unavailable — they are
	// core APIs and stay perfectly type-valid alongside their visible-* counterparts. So a half-done
	// switch from one to the other compiles green, and the compiler is no help. The three call sites
	// in the component are named in its template comments for exactly that reason.
	columnVisibilityFeature,
	columnOrderingFeature,

	// A phantom: type-only, and `tableFeatures` strips it at runtime. It is not optional decoration.
	// `table-core` declares `interface ColumnMeta {}` — empty — and `ColumnDef.meta` falls back to
	// that unless the features object carries a `columnMeta` slot. Measured: without the slot,
	// `meta: { align: 'end' }` type-checks *and so does* `meta: { alignment: 'end' }`, because `{}`
	// admits any object and gets no excess-property check — the same silently-blank-column family as
	// the bare-`ColumnDef` trap above. Meanwhile the kit's own read of `meta?.align` fails outright
	// with TS2339, which is the tempting moment to reach for a cast; a cast would throw away the
	// misspelling check that is the entire reason to type this.
	//
	// This is the per-table slot, deliberately, rather than global declaration merging on
	// `ColumnMeta`: the vocabulary belongs to `pokedex-data-table`, not to every TanStack table
	// anyone in this workspace might ever construct.
	columnMeta: {} as DataTableColumnMeta,
});

/** The feature-set type that `ColumnDef` and `Column` must be parameterised with. */
export type DataTableFeatures = typeof dataTableFeatures;

/**
 * Column definitions for a `pokedex-data-table`, typed against its row.
 *
 * Always build columns through this helper, never as a bare `ColumnDef[]`. The two are not
 * equivalent: a bare array types the cell context's `getValue()` as `unknown` and accepts *any*
 * string as an `accessorKey` — a misspelled key then renders a blank column with nothing having
 * complained. The helper infers the value type per column and checks the key against the row, and
 * it rejects a `sortFn` name that was never registered above.
 *
 * Wrap the definitions in `columnHelper.columns([...])`. Column definitions are invariant in their
 * value type, so an array holding a `number` column and a `string` column does not widen to
 * `ColumnDef<…, unknown>[]` on its own and `injectTable` rejects it. `columns()` is TanStack's
 * variadic-tuple wrapper for exactly that case; the alternative is a cast, which throws away
 * everything the helper just proved.
 *
 * **Declare the result at module scope, never in a component field.** `injectTable` re-runs its
 * options initializer whenever a signal it reads changes, and `coreColumnsFeature` memoises on
 * `table.options.columns` **by identity** — so a freshly built array invalidates the memo dependency
 * for every column, header group and cell, and all of them are reconstructed on each sort with
 * their memos cold. The table instance itself survives; the waste is everything hanging off it.
 * Nothing checks this — a `columns` array built in a component field type-checks perfectly — which
 * is why it is written down here. Where a column needs something reactive (a label that depends on
 * the active regulation, say), the reactive part belongs in the cell renderer, not in the column
 * definition.
 *
 * ```ts
 * const columnHelper = createDataTableColumns<DetailMove>();
 *
 * export const moveColumns = columnHelper.columns([
 *   columnHelper.accessor('name', { header: 'Move', sortFn: 'alphanumeric' }),
 *   columnHelper.accessor('power', { header: 'Power', sortFn: 'basic' }),
 * ]);
 * ```
 */
export function createDataTableColumns<TRow extends RowData>() {
	return createColumnHelper<DataTableFeatures, TRow>();
}
