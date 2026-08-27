import { LiveAnnouncer } from '@angular/cdk/a11y';
import { ChangeDetectionStrategy, Component, computed, inject, input, isDevMode, model } from '@angular/core';
import {
	FlexRender,
	functionalUpdate,
	injectTable,
	type Column,
	type ColumnDef,
	type RowData,
	type SortingState,
} from '@tanstack/angular-table';
import { dataTableFeatures, type DataTableFeatures } from './data-table-columns';

/**
 * A sortable data table, headless underneath and 100% our pixels on top.
 *
 * The engine is TanStack Table v9, which renders nothing at all — so there is no borrowed
 * stylesheet to override and `tokens.scss` stays the only dial. What it supplies is the row model,
 * the comparators and the sort cycle; what we supply is the markup, the tokens and the ARIA.
 *
 * **The sort state is controlled, not owned.** Kit rule 4 forbids a store in `ui-pokedex`, and that
 * turns out to be the right shape anyway: sorting arrives as a `model()` and the consumer decides
 * where it lives. A `signalStore` backs it where the sort is written to the URL and restored from a
 * pasted link, a bare `signal` backs it on the kit demo, and the component cannot tell the
 * difference. TanStack never holds the sort — it reads ours and asks us to change it.
 *
 * **The markup is a `display: grid`, not a `<table>`.** A real table sizes itself from its content,
 * which means Phase 3's resize handles would have to fight the table layout algorithm on every
 * reflow, and Phase 4's virtualization would have to window a `<tbody>` with transforms that fight
 * its box model. With grid, the widths are one string and a windowed body is ordinary. The cost is
 * that `role="table"` / `rowgroup` / `row` / `columnheader` / `cell` are hand-maintained, which is a
 * real obligation rather than a formality — a wrong role is worse than an inflexible table.
 *
 * **The sort cycle is first direction → opposite → none, and the first direction is per column.**
 * TanStack infers it by sampling the data: string columns start ascending, numeric columns start
 * **descending**. That is not a bug to be fixed — the first click on "Power" giving the strongest
 * move is what someone building a set actually wants — but it surprises everyone once, so it is
 * written down here rather than rediscovered.
 */
@Component({
	selector: 'pokedex-data-table',
	changeDetection: ChangeDetectionStrategy.OnPush,
	imports: [FlexRender],
	template: `
		<div class="table" role="table" [attr.aria-label]="label()" [style.--pokedex-table-columns]="gridTemplateColumns()">
			<div role="rowgroup">
				@for (headerGroup of table.getHeaderGroups(); track headerGroup.id) {
					<div class="row header-row" role="row">
						@for (header of headerGroup.headers; track header.id) {
							<div class="cell header-cell" role="columnheader" [attr.aria-sort]="header.isPlaceholder ? null : ariaSort(header.column)">
								@if (!header.isPlaceholder) {
									<!--
										A sort button only where a sort is possible. A display column has no
										accessor, so getCanSort() is false for it, and an aria-sort on a column
										that can never sort is a false promise to a screen reader.

										The isPlaceholder half matters even with no group columns in Phase 1:
										a placeholder header's column is the *leaf* column, so getCanSort() is
										true for it and a placeholder would otherwise render a second,
										duplicate sort button for the same column.
									-->
									@if (header.column.getCanSort()) {
										<button type="button" (click)="toggleSort(header.column)">
											<ng-container *flexRenderHeader="header; let rendered">{{ rendered }}</ng-container>
											<span class="indicator" aria-hidden="true">{{ sortGlyph(header.column.getIsSorted()) }}</span>
										</button>
									} @else {
										<span class="static-header">
											<ng-container *flexRenderHeader="header; let rendered">{{ rendered }}</ng-container>
										</span>
									}
								}
							</div>
						}
					</div>
				}
			</div>

			<div role="rowgroup">
				@for (row of table.getRowModel().rows; track row.id) {
					<div class="row" role="row">
						<!--
							getAllCells(), not getVisibleCells(): the latter is contributed by
							columnVisibilityFeature, which Phase 1 does not register. Phase 3 switches this
							and getAllLeafColumns() below in the same edit.
						-->
						@for (cell of row.getAllCells(); track cell.id) {
							<div class="cell" role="cell">
								<ng-container *flexRenderCell="cell; let rendered">{{ rendered }}</ng-container>
							</div>
						}
					</div>
				} @empty {
					<!-- A header floating over nothing is not a finished component. -->
					<div class="row empty-row" role="row">
						<div class="cell empty-cell" role="cell" [attr.aria-colspan]="table.getAllLeafColumns().length">{{ emptyLabel() }}</div>
					</div>
				}
			</div>
		</div>
	`,
	styles: `
		:host {
			display: block;
		}

		.table {
			font-size: var(--fs-sm);
			border: 1px solid var(--line);
			border-radius: var(--r-md);
			overflow: hidden;
			background: var(--surface);
			color: var(--ink);
		}

		/*
			Every row declares the track list itself rather than inheriting it through subgrid.
			Subgrid is the tidier CSS, but it requires rows to be direct children of the grid — and
			CdkVirtualScrollViewport inserts its own transformed content wrapper between the two,
			which breaks that relationship in exactly the phase that needs it. One custom property
			costs an extra declaration and survives windowing.
		*/
		.row {
			display: grid;
			grid-template-columns: var(--pokedex-table-columns);
		}

		.cell {
			padding: var(--s-2) var(--s-3);
			border-bottom: 1px solid var(--line);
			font-variant-numeric: tabular-nums;
		}

		/*
			:not(.header-row) is load-bearing, not defensive. The header row is the only child of its
			own rowgroup, so a bare :last-child matches it too — and once Phase 4 puts the body inside
			a CdkVirtualScrollViewport, :last-child becomes whichever row the window happens to end
			on, erasing a border in the middle of the list.
		*/
		.row:last-child:not(.header-row) .cell {
			border-bottom: none;
		}

		.header-cell {
			padding: 0;
			background: var(--surface-sunken);
			display: flex;
			align-items: stretch;
		}

		.static-header {
			display: flex;
			align-items: center;
			width: 100%;
			box-sizing: border-box;
			padding: var(--s-2) var(--s-3);
			font-size: var(--fs-xs);
			text-transform: uppercase;
			letter-spacing: 0.08em;
			color: var(--ink-muted);
		}

		/* all: unset first, so the button inherits nothing from the user agent and everything below is ours. */
		.header-cell button {
			all: unset;
			display: flex;
			align-items: center;
			gap: var(--s-1);
			width: 100%;
			box-sizing: border-box;
			padding: var(--s-2) var(--s-3);
			font-size: var(--fs-xs);
			text-transform: uppercase;
			letter-spacing: 0.08em;
			color: var(--ink-muted);
			cursor: pointer;
			transition: background var(--dur) var(--ease);
		}

		.header-cell button:hover {
			background: var(--accent-soft);
		}

		.header-cell button:focus-visible {
			outline: 2px solid var(--accent);
			outline-offset: -2px;
		}

		/* Direction is a glyph as well as aria-sort, never colour on its own — kit rule 6. */
		.indicator {
			color: var(--accent);
		}

		.empty-row {
			grid-template-columns: 1fr;
		}

		.empty-cell {
			padding: var(--s-5) var(--s-3);
			text-align: center;
			color: var(--ink-muted);
			border-bottom: none;
		}

		@media (prefers-reduced-motion: reduce) {
			.header-cell button {
				transition: none;
			}
		}
	`,
})
export class UiDataTableComponent<TRow extends RowData> {
	/**
	 * `TRow extends RowData` is not decoration. `injectTable` constrains its data parameter to
	 * `Record<string, any> | Array<any>`, and `ColumnDef` / `ColumnHelper` are declared `in out TData`
	 * — explicitly invariant — so an unconstrained `TRow` has nothing to widen to and simply does not
	 * compile.
	 */
	readonly data = input.required<TRow[]>();

	/**
	 * Built with `createDataTableColumns()` at module scope. `TRow[]` rather than
	 * `ReadonlyArray<TRow>` above for the same family of reasons: `TableOptions.data` is a mutable
	 * array, and a readonly one forces a cast at the `injectTable` call.
	 */
	readonly columns = input.required<Array<ColumnDef<DataTableFeatures, TRow>>>();

	/** Controlled sort state. The consumer decides whether a store, the URL or a bare signal backs it. */
	readonly sorting = model<SortingState>([]);

	/** Accessible name for the grid. Required, because an unlabelled table is unnavigable. */
	readonly label = input.required<string>();

	/**
	 * Optional `grid-template-columns` track list, one entry per leaf column.
	 *
	 * A `readonly string[]` rather than a raw string so the count can be checked against the column
	 * count. With a raw string a wrong track count silently wraps each row onto implicit grid rows —
	 * a layout break **no test can catch**, because jsdom does no layout.
	 */
	readonly columnTracks = input<readonly string[] | null>(null);

	readonly emptyLabel = input('Nothing to show.');

	private readonly announcer = inject(LiveAnnouncer);

	protected readonly table = injectTable(() => ({
		features: dataTableFeatures,
		columns: this.columns(),
		data: this.data(),
		state: { sorting: this.sorting() },
		// The updater is *always* a function — `setStateSlice` wraps every change, never handing
		// back a bare SortingState — so `this.sorting.set(update)` would store a function in the
		// model and feed the table garbage on the next read. `functionalUpdate` is TanStack's own
		// resolver, which keeps the semantics theirs rather than guessed.
		//
		// TanStack's structural-equality guard returns the *same array reference* for a no-op sort,
		// so the model's default `Object.is` equality suppresses a redundant rebuild for free. Worth
		// knowing before a test asserting an emission that never arrives is filed as a bug.
		onSortingChange: (update) => this.sorting.set(functionalUpdate(update, this.sorting())),
	}));

	/**
	 * The track list for every row.
	 *
	 * `column.getSize()` belongs to `columnSizingFeature`, which Phase 1 does not register, so the
	 * default is an even split across the leaf columns and `columnTracks` is the way to say
	 * otherwise. `getAllLeafColumns()` rather than `getVisibleLeafColumns()` for the same reason the
	 * template uses `getAllCells()`.
	 *
	 * The mismatch warning lives in here rather than in an effect because this is the exact moment
	 * the mismatch becomes real, and `isDevMode()` keeps it out of production.
	 *
	 * **Keep this read template-only.** The value it reads — the table's leaf column list — is
	 * updated by `injectTable`'s effect, and the template is safe because component effects flush
	 * before the view refreshes. Anything evaluating this *earlier* in the same tick than that
	 * effect — another effect, or a consumer `computed` pulled outside the template — risks caching
	 * a pre-swap column count.
	 *
	 * On what makes it recompute: measured, not assumed. Deleting the `this.columns()` read below
	 * fails **no** test, including one that swaps the column set at runtime — so reaching through
	 * `this.table` evidently establishes a dependency of its own, presumably because the options
	 * store is bridged to signals. That is an observation about TanStack's internals rather than a
	 * documented contract, which is why the explicit read stays. See the comment on it.
	 */
	protected readonly gridTemplateColumns = computed(() => {
		// Belt and braces, kept deliberately after measuring rather than on the theory that it is
		// load-bearing: removing it currently breaks nothing, because reaching through `this.table`
		// tracks on its own. One property read buys a dependency that is ours and stated, instead of
		// one that depends on how `injectTable` happens to bridge its options store today.
		this.columns();

		const columnCount = this.table.getAllLeafColumns().length;
		const tracks = this.columnTracks();

		if (!tracks) return `repeat(${columnCount}, minmax(0, 1fr))`;

		if (isDevMode() && tracks.length !== columnCount) {
			console.warn(
				`pokedex-data-table: columnTracks has ${tracks.length} entries but the table has ${columnCount} columns. ` +
					'Rows will wrap onto implicit grid rows.',
			);
		}

		return tracks.join(' ');
	});

	/**
	 * Toggle a column's sort and say so out loud.
	 *
	 * An `aria-sort` change on an element that never receives focus is not reliably re-announced,
	 * which is why `MatSort` ships `matSortAnnounceSortedByColumn` — so `LiveAnnouncer` does the same
	 * job here.
	 *
	 * **The direction is read from our model, never from `column.getIsSorted()`.** `injectTable`
	 * pushes options into the table through an Angular effect, so immediately after `toggleSorting()`
	 * the table's own sorting atom still holds the **pre-click** value; an announcer built the
	 * obvious way states the wrong direction on every click, silently. Our `model()` was already set
	 * synchronously by `onSortingChange`. The template's `getIsSorted()` reads — the glyph and
	 * `aria-sort` — are unaffected, because they re-evaluate during the render that follows the
	 * effect flush. Only this imperative read is stale.
	 */
	protected toggleSort(column: Column<DataTableFeatures, TRow>): void {
		// The rendered header text lives inside the *flexRenderHeader template context, out of scope
		// on the button, so it is resolved here rather than passed in from the template.
		const headerText = typeof column.columnDef.header === 'string' ? column.columnDef.header : column.id;

		column.toggleSorting();

		const entry = this.sorting().find((candidate) => candidate.id === column.id);

		this.announcer.announce(
			entry ? `${headerText} sorted ${entry.desc ? 'descending' : 'ascending'}` : `${headerText} not sorted`,
		);
	}

	/** `null` rather than `'none'` where a column cannot sort — see the template comment. */
	protected ariaSort(column: Column<DataTableFeatures, TRow>): 'ascending' | 'descending' | 'none' | null {
		if (!column.getCanSort()) return null;

		const direction = column.getIsSorted();
		if (direction === 'asc') return 'ascending';
		if (direction === 'desc') return 'descending';
		return 'none';
	}

	protected sortGlyph(direction: false | 'asc' | 'desc'): string {
		if (direction === 'asc') return '↑';
		if (direction === 'desc') return '↓';
		return '↕';
	}
}
