import { LiveAnnouncer } from '@angular/cdk/a11y';
import {
	ChangeDetectionStrategy,
	Component,
	ElementRef,
	Injector,
	afterNextRender,
	computed,
	inject,
	input,
	isDevMode,
	model,
	signal,
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

/** Unique per instance, so two tables on one page do not share an `aria-controls` target. */
let panelInstanceCount = 0;

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
	imports: [FlexRender],
	template: `
		<!--
			An in-flow disclosure, not a CdkMenu (closes on click and Enter, only Space keeps it open)
			and not a CDK overlay (no openChange, nothing closes it on outside click, and its pane is
			appended to body so its controls land last in tab order). Must sit outside .table and
			.scroller or their overflow rules clip it.
		-->
		<div class="toolbar">
			<button
				type="button"
				class="columns-trigger"
				[attr.aria-expanded]="panelOpen()"
				[attr.aria-controls]="panelId"
				(click)="panelOpen.set(!panelOpen())"
			>
				Columns {{ visibleColumnCount() }}/{{ allColumnCount() }}
			</button>

			<!-- Always rendered, [hidden] rather than @if, so aria-controls resolves while collapsed. -->
			<div class="columns-panel" [id]="panelId" role="group" [attr.aria-label]="'Columns in ' + label()" [hidden]="!panelOpen()">
				@for (column of table.getAllLeafColumns(); track column.id) {
					<div class="columns-row" [attr.data-column-id]="column.id">
						<label class="columns-toggle">
							<!-- aria-disabled, never the disabled attribute: disabling a focused control drops focus to body. -->
							<input
								type="checkbox"
								[checked]="column.getIsVisible()"
								[attr.aria-disabled]="isVisibilityLocked(column) ? 'true' : null"
								(change)="toggleColumnVisibility(column, $event)"
							/>
							{{ columnLabel(column) }}
						</label>

						<button
							type="button"
							class="move"
							[attr.aria-disabled]="column.getIsFirstColumn() ? 'true' : null"
							(click)="moveColumn(column, -1)"
						>
							<span class="sr-only">Move {{ columnLabel(column) }} left</span>
							<span aria-hidden="true">←</span>
						</button>
						<button
							type="button"
							class="move"
							[attr.aria-disabled]="column.getIsLastColumn() ? 'true' : null"
							(click)="moveColumn(column, 1)"
						>
							<span class="sr-only">Move {{ columnLabel(column) }} right</span>
							<span aria-hidden="true">→</span>
						</button>
					</div>
				}
			</div>
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

		.columns-trigger {
			all: unset;
			padding: var(--s-1) var(--s-3);
			border: 1px solid var(--line);
			border-radius: var(--r-pill);
			font-size: var(--fs-xs);
			color: var(--ink-muted);
			cursor: pointer;
			transition: border-color var(--dur) var(--ease), color var(--dur) var(--ease);
		}

		.columns-trigger:hover {
			border-color: var(--accent);
			color: var(--accent);
		}

		.columns-trigger:focus-visible {
			outline: 2px solid var(--accent);
			outline-offset: 2px;
		}

		.columns-panel {
			display: flex;
			flex-direction: column;
			gap: var(--s-1);
			padding: var(--s-3);
			border: 1px solid var(--line);
			border-radius: var(--r-md);
			background: var(--surface);
			font-size: var(--fs-sm);
		}

		/* [hidden] loses to display: flex without this — the attribute alone is not enough here. */
		.columns-panel[hidden] {
			display: none;
		}

		.columns-row {
			display: flex;
			align-items: center;
			gap: var(--s-2);
		}

		.columns-toggle {
			display: flex;
			align-items: center;
			gap: var(--s-2);
			min-width: 12ch;
			cursor: pointer;
			color: var(--ink);
		}

		.columns-toggle input:focus-visible {
			outline: 2px solid var(--accent);
			outline-offset: 2px;
		}

		.move {
			all: unset;
			padding: 0 var(--s-2);
			border-radius: var(--r-sm);
			color: var(--ink-muted);
			cursor: pointer;
		}

		.move:hover {
			background: var(--accent-soft);
			color: var(--accent);
		}

		.move:focus-visible {
			outline: 2px solid var(--accent);
			outline-offset: -2px;
		}

		/*
			aria-disabled rather than the disabled attribute keeps these focusable, so they must look
			unavailable without being unreachable.
		*/
		.move[aria-disabled='true'],
		.columns-toggle input[aria-disabled='true'] {
			opacity: 0.4;
			cursor: not-allowed;
		}

		.move[aria-disabled='true']:hover {
			background: none;
			color: var(--ink-muted);
		}

		/* Visually hidden, still announced — the arrows alone do not say which column they move. */
		.sr-only {
			position: absolute;
			width: 1px;
			height: 1px;
			padding: 0;
			margin: -1px;
			overflow: hidden;
			clip-path: inset(50%);
			white-space: nowrap;
			border: 0;
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
	private readonly host = inject<ElementRef<HTMLElement>>(ElementRef);
	private readonly injector = inject(Injector);

	/** Whether the Columns panel is expanded. Purely presentational, so the kit may own it. */
	protected readonly panelOpen = signal(false);

	protected readonly panelId = `pokedex-data-table-columns-${(panelInstanceCount += 1)}`;

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

	protected readonly visibleColumnCount = computed(() => {
		this.columns();
		this.columnVisibility();
		return this.table.getVisibleLeafColumns().length;
	});

	protected readonly allColumnCount = computed(() => {
		this.columns();
		return this.table.getAllLeafColumns().length;
	});

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

	/** The header text, resolved the same way `toggleSort` does — see the note there. */
	protected columnLabel(column: Column<DataTableFeatures, TRow>): string {
		return typeof column.columnDef.header === 'string' ? column.columnDef.header : column.id;
	}

	/** Hiding the last visible column is a dead end: nothing renders, and the panel is the way back. */
	protected isVisibilityLocked(column: Column<DataTableFeatures, TRow>): boolean {
		if (!column.getCanHide()) return true;
		return column.getIsVisible() && this.table.getVisibleLeafColumns().length === 1;
	}

	protected toggleColumnVisibility(column: Column<DataTableFeatures, TRow>, event: Event): void {
		const checkbox = event.target as HTMLInputElement;

		if (this.isVisibilityLocked(column)) {
			// aria-disabled keeps the box focusable but does not stop the browser flipping it.
			checkbox.checked = column.getIsVisible();
			return;
		}

		column.toggleVisibility();

		// The model, not the column: the table's atom is still pre-click here. `?? true` for sparseness.
		const nowVisible = this.columnVisibility()[column.id] ?? true;
		this.announcer.announce(`${this.columnLabel(column)} ${nowVisible ? 'shown' : 'hidden'}`);
	}

	/**
	 * Move a column one place among the visible ones.
	 *
	 * Walks `getAllLeafColumns()`, not the visible list: `columnOrder` is a **prefix**, so writing
	 * only visible ids appends the hidden ones and relocates them. Steps to the nearest *visible*
	 * neighbour, because swapping across a hidden one changes nothing on screen. The target index is
	 * computed before the removal — recomputing after gets move-right wrong.
	 */
	protected moveColumn(column: Column<DataTableFeatures, TRow>, direction: -1 | 1): void {
		if (direction === -1 ? column.getIsFirstColumn() : column.getIsLastColumn()) return;

		const ids = this.table.getAllLeafColumns().map((candidate) => candidate.id);
		const from = ids.indexOf(column.id);

		let to = from + direction;
		while (to >= 0 && to < ids.length && !this.table.getColumn(ids[to])?.getIsVisible()) {
			to += direction;
		}

		// Unreachable: the buttons are aria-disabled at the ends.
		if (to < 0 || to >= ids.length) return;

		const next = [...ids];
		next.splice(from, 1);
		next.splice(to, 0, column.id);

		this.columnOrder.set(next);
		this.announcer.announce(`${this.columnLabel(column)} moved ${direction === -1 ? 'left' : 'right'}`);
		this.keepFocusOnMoveButton(column.id, direction);
	}

	/**
	 * Reordering rewrites the panel's own list, so the focused button is replaced and focus lands on
	 * `<body>` — measured in Chrome. Tracking by `column.id` does not prevent it; the node still moves.
	 */
	private keepFocusOnMoveButton(columnIdentifier: string, direction: -1 | 1): void {
		afterNextRender(
			() => {
				const row = this.host.nativeElement.querySelector(`.columns-row[data-column-id="${columnIdentifier}"]`);
				const buttons = row?.querySelectorAll<HTMLButtonElement>('button.move');
				buttons?.[direction === -1 ? 0 : 1]?.focus();
			},
			{ injector: this.injector },
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
