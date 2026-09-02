import { LiveAnnouncer } from '@angular/cdk/a11y';
import {
	ChangeDetectionStrategy,
	Component,
	computed,
	inject,
	input,
	isDevMode,
	model,
} from '@angular/core';
import {
	FlexRender,
	functionalUpdate,
	injectTable,
	type Column,
	type ColumnDef,
	type ColumnFiltersState,
	type ColumnOrderState,
	type RowData,
	type SortingState,
	type ColumnVisibilityState,
} from '@tanstack/angular-table';
import { dataTableFeatures, type DataTableFeatures } from './data-table-columns';
import { DataTableColumnsPanelComponent } from './data-table-columns-panel.component';
import { DataTableFiltersPanelComponent } from './data-table-filters-panel.component';

/** Row modifiers the kit paints. Consumers map meaning onto these; they cannot supply their own class. */
export type DataTableRowVariant = 'marked';

/** Content-based tracks, bare or inside `minmax()`. Case-insensitive: CSS keywords are. */
const CONTENT_BASED_TRACK = /(^|[\s,(])(auto|min-content|max-content|fit-content)\b/i;

/**
 * A sortable data table. Headless (TanStack Table v9) underneath, our markup and tokens on top.
 *
 * State is controlled, never owned — kit rule 4 forbids a store here, so sorting, visibility and
 * order all arrive as `model()`s and the consumer decides what backs them.
 *
 * A `display: grid` rather than a `<table>`, because a real table fights column resizing and
 * virtualization. The cost is that the ARIA roles are hand-maintained.
 *
 * Sort cycle is first direction → opposite → none, and the first direction is inferred per column:
 * strings ascend first, numbers descend first.
 */
@Component({
	selector: 'pokedex-data-table',
	changeDetection: ChangeDetectionStrategy.OnPush,
	imports: [FlexRender, DataTableColumnsPanelComponent, DataTableFiltersPanelComponent],
	template: `
		<!--
			An in-flow disclosure, not a CdkMenu (closes on click and Enter, only Space keeps it open)
			and not a CDK overlay (no openChange, nothing closes it on outside click, and its pane is
			appended to body so its controls land last in tab order). Must sit outside .table and
			.scroller or their overflow rules clip it.
		-->
		<div class="toolbar">
			<pokedex-data-table-columns-panel [table]="table" label="{{ label() }}" />
			<pokedex-data-table-filters-panel [table]="table" label="{{ label() }}" />
		</div>

		<!--
			The scroller wraps the grid rather than sitting inside it: .table and pokedex-card are both
			overflow: hidden, so without it a row wider than the viewport is clipped, not scrolled.
		-->
		<div class="scroller">
			<div class="table" role="table" [attr.aria-label]="label()" [style.--pokedex-table-columns]="gridTemplateColumns()">
				<div role="rowgroup">
					@for (headerGroup of table.getHeaderGroups(); track headerGroup.id) {
						<div class="row header-row" role="row">
							@for (header of headerGroup.headers; track header.id) {
								<div
									class="cell header-cell"
									role="columnheader"
									[class]="alignmentClass(header.column)"
									[attr.aria-sort]="header.isPlaceholder ? null : ariaSort(header.column)"
								>
									@if (!header.isPlaceholder) {
										<!--
											A sort button only where sorting is possible; an aria-sort on a column
											that cannot sort is a false promise. The isPlaceholder guard matters
											because a placeholder's column is the leaf column, so getCanSort() is
											true and it would render a duplicate button.
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
						<!-- [class] merges with the static class rather than replacing it. -->
						<div class="row" role="row" [class]="variantFor(row.original)">
							<!--
								getVisibleCells(), not getAllCells() — one of three sites that move together
								with columnVisibilityFeature (the others: the track list, and aria-colspan
								below). Nothing enforces it; the core APIs stay type-valid.
							-->
							@for (cell of row.getVisibleCells(); track cell.id) {
								<div class="cell" role="cell" [class]="alignmentClass(cell.column)">
									<ng-container *flexRenderCell="cell; let rendered">{{ rendered }}</ng-container>
								</div>
							}
						</div>
					} @empty {
						<!-- A header floating over nothing is not a finished component. -->
						<div class="row empty-row" role="row">
							<div class="cell empty-cell" role="cell" [attr.aria-colspan]="table.getVisibleLeafColumns().length">{{ emptyLabel() }}</div>
						</div>
					}
				</div>
			</div>
		</div>
	`,
	styles: `
		:host {
			display: block;
		}

		.scroller {
			overflow-x: auto;
		}

		/* Outside the scroller and outside .table, so neither overflow rule clips the panel. */
		.toolbar {
			display: flex;
			flex-direction: column;
			align-items: flex-start;
			gap: var(--s-2);
			margin-bottom: var(--s-2);
		}

		/*
			Sized here rather than on .row: .table is overflow: hidden, so a row wider than a
			content-width .table is clipped by it and the scroller sees nothing to scroll.

			Watch max-content. An fr track resolves to its max-content contribution, so a column of
			long prose can engage the scroller on a wide screen — drop width: max-content if so.
			And under CdkVirtualScrollViewport a windowed body contributes nothing to max-content at
			all (measured: table collapses, header and body cells diverge), so Phase 4 has to solve
			the width story here rather than inherit it.
		*/
		.table {
			font-size: var(--fs-sm);
			border: 1px solid var(--line);
			border-radius: var(--r-md);
			overflow: hidden;
			background: var(--surface);
			color: var(--ink);
			width: max-content;
			min-width: 100%;
			box-sizing: border-box;
		}

		/*
			Each row declares the track list rather than inheriting it via subgrid: subgrid needs rows
			to be direct grid children, and CdkVirtualScrollViewport inserts a wrapper between them.
		*/
		.row {
			display: grid;
			grid-template-columns: var(--pokedex-table-columns);
		}

		/* The one row modifier the kit paints — a token, never a raw colour. */
		.row.marked {
			background: var(--surface-sunken);
		}

		.cell {
			padding: var(--s-2) var(--s-3);
			border-bottom: 1px solid var(--line);
			font-variant-numeric: tabular-nums;
		}

		/*
			A class, not a style binding: the body cell moves with text-align, but the header's
			content is a flex button that ignores it and needs justify-content.
		*/
		.cell.align-end {
			text-align: end;
		}

		.header-cell.align-end button,
		.header-cell.align-end .static-header {
			justify-content: flex-end;
		}

		.cell.align-start {
			text-align: start;
		}

		.header-cell.align-start button,
		.header-cell.align-start .static-header {
			justify-content: flex-start;
		}

		/*
			:not(.header-row) is load-bearing: the header is the only child of its own rowgroup so a
			bare :last-child matches it, and under virtualization it becomes the window's last row.
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
	/** `TRow extends RowData` is required: `ColumnDef` is invariant in `TData`, so it cannot widen. */
	readonly data = input.required<TRow[]>();

	/** Built with `createDataTableColumns()`, at module scope. */
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
	 *
	 * **Use only lengths, percentages and `fr`. Never a content-based track.** Each row is its own
	 * grid container rather than a `subgrid` of the table — see the note on `.row` in the styles for
	 * why — so `auto`, `min-content`, `max-content` and `fit-content()` resolve *independently per
	 * row*, against that row's own content. A column of type names measured a 26px wander in its
	 * left edge from row to row, never lining up with its own header. It reads as a ragged edge
	 * rather than a column, and `clientWidth`/`scrollWidth` cannot see it. The dev warning below
	 * catches the four spellings.
	 *
	 * Keyed by column id, not positional: once a column can be hidden or moved, an index no longer
	 * identifies anything.
	 */
	readonly columnTracks = input<Readonly<Record<string, string>> | null>(null);

	/**
	 * Controlled like `sorting`. `columnVisibility` is **sparse** — only touched columns appear — so
	 * read it as `map[id] ?? true`; a bare `map[id]` reports every untouched column as hidden.
	 */
	readonly columnVisibility = model<ColumnVisibilityState>({});
	readonly columnOrder = model<ColumnOrderState>([]);

	/** Controlled like `sorting`. One entry per column with an active filter. */
	readonly columnFilters = model<ColumnFiltersState>([]);

	/** Controlled like `sorting`. The quick-search box's current text. */
	readonly globalFilter = model('');

	/** Which rows carry a modifier. A function of the row, so the kit never learns what it means. */
	readonly rowVariant = input<((row: TRow) => DataTableRowVariant | null) | null>(null);

	readonly emptyLabel = input('Nothing to show.');

	private readonly announcer = inject(LiveAnnouncer);

	protected readonly table = injectTable(() => ({
		features: dataTableFeatures,
		columns: this.columns(),
		data: this.data(),
		state: {
			sorting: this.sorting(),
			columnVisibility: this.columnVisibility(),
			columnOrder: this.columnOrder(),
			columnFilters: this.columnFilters(),
			globalFilter: this.globalFilter(),
		},
		// The updater is always a function, never a value — `setStateSlice` wraps every change — so a
		// bare `.set(update)` would store the function itself. A no-op returns the same reference, so
		// no event arrives for one.
		onSortingChange: (update) => this.sorting.set(functionalUpdate(update, this.sorting())),
		onColumnVisibilityChange: (update) => this.columnVisibility.set(functionalUpdate(update, this.columnVisibility())),
		onColumnOrderChange: (update) => this.columnOrder.set(functionalUpdate(update, this.columnOrder())),
		onColumnFiltersChange: (update) => this.columnFilters.set(functionalUpdate(update, this.columnFilters())),
		onGlobalFilterChange: (update) => this.globalFilter.set(functionalUpdate(update, this.globalFilter())),
	}));


	/**
	 * The track list for every row. No `getSize()` — `columnSizingFeature` is not registered.
	 *
	 * **Keep this read template-only.** The column list it reads is updated by `injectTable`'s
	 * effect, and component effects flush before the view refreshes; anything evaluating it earlier
	 * in the same tick would cache a stale count.
	 */
	protected readonly gridTemplateColumns = computed(() => {
		// Explicit dependencies. Reaching through `this.table` happens to track on its own, but that
		// is an observation about TanStack's internals rather than a contract.
		this.columns();
		this.columnVisibility();
		this.columnOrder();

		const visible = this.table.getVisibleLeafColumns();
		const tracks = this.columnTracks();

		if (!tracks) return `repeat(${visible.length}, minmax(0, 1fr))`;

		if (isDevMode()) {
			// An unread key cannot misalign anything, but it is always a typo or a stale rename.
			const known = new Set(this.table.getAllLeafColumns().map((column) => column.id));
			const unknown = Object.keys(tracks).filter((id) => !known.has(id));
			if (unknown.length > 0) {
				console.warn(
					`pokedex-data-table: columnTracks has entries for unknown columns (${unknown.join(', ')}). ` +
						'Check for a typo or a stale key left over from a rename.',
				);
			}

			const contentBased = Object.values(tracks).filter((track) => CONTENT_BASED_TRACK.test(track));
			if (contentBased.length > 0) {
				console.warn(
					`pokedex-data-table: columnTracks contains a content-based track (${contentBased.join(', ')}). ` +
						'Every row is its own grid container, so such a track resolves against that row alone and the ' +
						'column will not line up with its header or with the other rows. Use a length, a percentage or fr.',
				);
			}
		}

		// Walked in visible order, so hiding or moving a column takes its track with it.
		return visible.map((column) => tracks[column.id] ?? 'minmax(0, 1fr)').join(' ');
	});

	/**
	 * Toggle a column's sort and announce it — an `aria-sort` change on an unfocused element is not
	 * reliably re-announced.
	 *
	 * **Reads the direction from our model, never `column.getIsSorted()`**, which is still pre-click
	 * here because `injectTable` pushes options through an effect. The template's reads are fine;
	 * they re-evaluate after the flush. Only this imperative one is stale.
	 */
	protected toggleSort(column: Column<DataTableFeatures, TRow>): void {
		// Resolved here: the rendered header text lives in the *flexRenderHeader context, out of
		// scope on the button.
		const headerText = typeof column.columnDef.header === 'string' ? column.columnDef.header : column.id;

		column.toggleSorting();

		const entry = this.sorting().find((candidate) => candidate.id === column.id);

		this.announcer.announce(
			entry ? `${headerText} sorted ${entry.desc ? 'descending' : 'ascending'}` : `${headerText} not sorted`,
		);
	}


	/** The modifier class for one row, or `null` when the consumer supplied no `rowVariant`. */
	protected variantFor(row: TRow): DataTableRowVariant | null {
		return this.rowVariant()?.(row) ?? null;
	}

	/**
	 * Applied to the header as well as the body cell: a right-aligned Power column under
	 * a left-aligned "Power" header reads as a bug, and the eye follows the header when scanning
	 * for the column it wants.
	 */
	protected alignmentClass(column: Column<DataTableFeatures, TRow>): string | null {
		const align = column.columnDef.meta?.align;
		return align ? `align-${align}` : null;
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
