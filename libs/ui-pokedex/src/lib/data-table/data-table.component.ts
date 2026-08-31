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
	type ColumnOrderState,
	type RowData,
	type SortingState,
	type ColumnVisibilityState,
} from '@tanstack/angular-table';
import { dataTableFeatures, type DataTableFeatures } from './data-table-columns';

/**
 * One id per table instance, so two tables on the same page do not both claim the same
 * `aria-controls` target. A page with the kit demo and a real table is not hypothetical.
 */
let panelInstanceCount = 0;

/**
 * The row modifiers the kit knows how to paint.
 *
 * A closed vocabulary rather than a free class string, and that is the whole design. The `.row`
 * element lives in **this** component's view, so under emulated encapsulation it carries the kit's
 * `_ngcontent` attribute — a `.changed` rule written in a consumer's `styles` block would never
 * match it. Worse, `jest-preset-angular` strips component styles entirely, so a consumer's
 * class-presence test passes green while the browser shows an untinted row. The kit therefore owns
 * both the name and the paint; the consumer owns only the meaning it maps onto them.
 *
 * `marked` is deliberately about emphasis rather than about any one domain's reason for it —
 * Champions means "this move differs from the main series", another surface will mean something
 * else, and the kit does not need to know which.
 */
export type DataTableRowVariant = 'marked';

/**
 * The four spellings of a track that sizes itself from content, wherever they appear — bare, or
 * inside a `minmax()`.
 *
 * Only these four are rejected because only these four ask the browser to measure something. A
 * length, a percentage and an `fr` all resolve to the same width in every row's grid; `auto`,
 * `min-content`, `max-content` and `fit-content()` resolve against whatever that particular row
 * happens to hold. The leading `[\s,(]` alternative is what keeps `var(--auto-width)` and
 * `minmax(0, 3fr)` out of it.
 */
// Case-insensitive because CSS keywords are: `AUTO` is as valid, and as wrong here, as `auto`.
const CONTENT_BASED_TRACK = /(^|[\s,(])(auto|min-content|max-content|fit-content)\b/i;

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
		<!--
			An inline disclosure, deliberately neither a menu nor an overlay. Both were tried and
			measured.

			CdkMenu closes on activate: CdkMenuItem.trigger() calls closeAll() unless keepOpen, and
			click passes no options — so a mouse click closes the panel, and so does Enter. Only Space
			keeps it open, which means a keyboard-only check never sees the defect while every mouse
			user reopens the panel for each toggle.

			A CDK overlay fails differently. CdkConnectedOverlay has no openChange output, so Escape
			detaches the pane and leaves our signal saying open; nothing closes it on an outside
			click; and because the pane is appended to body, the panel controls land after every
			element on the page in tab order. Fixing that needs cdkTrapFocusAutoCapture, which makes
			it behave modally while role="group" says it is not.

			In flow, all of that disappears: tab order is document order, nothing needs closing, and
			focus never leaves to be restored. The panel sits outside .table (overflow: hidden) and
			outside .scroller (overflow-x: auto) or it would be clipped by them.
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

			<!--
				Rendered always and hidden with [hidden] rather than @if: aria-controls pointing at an
				id that does not exist while collapsed references nothing at all.
			-->
			<div class="columns-panel" [id]="panelId" role="group" [attr.aria-label]="'Columns in ' + label()" [hidden]="!panelOpen()">
				@for (column of table.getAllLeafColumns(); track column.id) {
					<div class="columns-row" [attr.data-column-id]="column.id">
						<label class="columns-toggle">
							<!--
								aria-disabled, never the disabled attribute. Disabling the control that
								currently holds focus drops focus to body and the keyboard user loses
								their place — in the one phase whose whole justification is keyboard
								operability.
							-->
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
			The scroller is outside the grid, not inside it. .table is overflow: hidden so the header
			background clips at the corner radius, and pokedex-card is overflow: hidden too — so
			without a scroll container a row that outgrows a narrow viewport is not scrolled, it is
			cut off and unreachable. That is a loss of information no test in jsdom can see.
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
						<!--
							[class] merges with the static class rather than replacing it, and a null binding
							removes only what it added — measured, because the opposite would silently drop
							.row and take the grid with it.
						-->
						<div class="row" role="row" [class]="variantFor(row.original)">
							<!--
								getVisibleCells(), one of three sites that had to move together when
								columnVisibilityFeature was registered — the others being the track list and
								the empty row's aria-colspan below. Nothing enforces this: getAllCells() is a
								core API and stays perfectly type-valid, so a half-done switch compiles green
								and simply keeps rendering hidden columns.
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
			width: max-content is what actually makes the scroller work, and min-width: 100% is what
			stops it shrinking below the space available.

			The sizing lives here rather than on .row because .table is overflow: hidden — a row wider
			than a content-width .table is clipped by it and the scroller never sees anything to
			scroll. Sizing .table itself instead means the rows fill it, so the header background
			still paints across the whole scrolled width for free.

			max-content is the value to watch, in two different ways.

			Today: with a track list like minmax(0, 3fr), the fr track resolves to its max-content
			contribution — the widest thing any cell in that column holds — so a column full of long
			prose can push the table past the viewport and engage the scroller on a wide screen,
			where it should not. jsdom does no layout and cannot see this; only the browser can. If
			that happens, drop width: max-content and keep min-width: 100%, which is the smaller
			hammer: rows then squeeze instead of scrolling.

			Phase 4, and this one needs a restructure rather than a tweak: measured under
			CdkVirtualScrollViewport (CDK 22.0.5), the windowed body contributes nothing to
			max-content at all. The viewport is contain: strict with an absolutely-positioned content
			wrapper, so the rows are out of flow as far as intrinsic sizing is concerned. At a 400px
			viewport the table collapsed to 400, horizontal scrolling disappeared entirely, and the
			header and body cells diverged — 183px against 168px for the same column. Whoever adds
			virtualization has to solve the width story here, not inherit it.
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
			Alignment arrives as a class rather than a style binding because the body cell and the
			header cell need two different declarations to reach the same place: the body cell is
			ordinary flow, so text-align moves it, while the header cell's content is a flex button
			that ignores text-align entirely and has to be moved with justify-content. One class, one
			vocabulary, and the CSS resolves each context.

			end, not right: the logical property matches the value name and costs nothing.
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
	 *
	 * **Use only lengths, percentages and `fr`. Never a content-based track.** Each row is its own
	 * grid container rather than a `subgrid` of the table — see the note on `.row` in the styles for
	 * why — so `auto`, `min-content`, `max-content` and `fit-content()` resolve *independently per
	 * row*, against that row's own content. A column of type names measured a 26px wander in its
	 * left edge from row to row, never lining up with its own header. It reads as a ragged edge
	 * rather than a column, and `clientWidth`/`scrollWidth` cannot see it because the table's
	 * overall width is unchanged. The dev-mode warning below catches the four spellings.
	 *
	 * **Keyed by column id, not positional.** It was an array until columns could be hidden and
	 * reordered — at which point position stops meaning anything: hide the second column and every
	 * track after it slides onto the wrong one, silently. An id is the only stable handle.
	 */
	readonly columnTracks = input<Readonly<Record<string, string>> | null>(null);

	/**
	 * Which columns are visible, and in what order. Controlled by the consumer exactly as `sorting`
	 * is — the kit holds no state of its own (rule 4), so a store, the URL or a bare signal can back
	 * these without the component knowing which.
	 *
	 * `columnVisibility` is **sparse**: `toggleVisibility` writes only the column it touched, so a
	 * map of `{power: false}` is normal and every column absent from it is visible. Read it as
	 * `map[id] ?? true` — a bare `map[id]` reports every untouched column as hidden.
	 */
	readonly columnVisibility = model<ColumnVisibilityState>({});
	readonly columnOrder = model<ColumnOrderState>([]);

	/**
	 * Which rows carry a modifier, if any.
	 *
	 * A function of the row rather than a field on it, so the kit never has to know what makes a
	 * particular surface's row worth emphasising — Champions asks for `marked` where a move differs
	 * from the main series, and the kit only paints it.
	 */
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
		},
		// The updater is *always* a function — `setStateSlice` wraps every change, never handing
		// back a bare SortingState — so `this.sorting.set(update)` would store a function in the
		// model and feed the table garbage on the next read. `functionalUpdate` is TanStack's own
		// resolver, which keeps the semantics theirs rather than guessed.
		//
		// TanStack's structural-equality guard returns the *same array reference* for a no-op sort,
		// so the model's default `Object.is` equality suppresses a redundant rebuild for free. Worth
		// knowing before a test asserting an emission that never arrives is filed as a bug.
		onSortingChange: (update) => this.sorting.set(functionalUpdate(update, this.sorting())),
		// Same always-a-function contract as sorting above; `setStateSlice` wraps every change.
		onColumnVisibilityChange: (update) => this.columnVisibility.set(functionalUpdate(update, this.columnVisibility())),
		onColumnOrderChange: (update) => this.columnOrder.set(functionalUpdate(update, this.columnOrder())),
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
		this.columnVisibility();
		this.columnOrder();

		const visible = this.table.getVisibleLeafColumns();
		const tracks = this.columnTracks();

		if (!tracks) return `repeat(${visible.length}, minmax(0, 1fr))`;

		if (isDevMode()) {
			// An id in the map that matches no column is a typo, or a stale entry left behind by a
			// rename. It cannot misalign anything — it is simply never read — but it is always a
			// mistake, and silently ignoring it is how a renamed column loses its width.
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

	/** The header text, resolved the same way `toggleSort` does — see the note there. */
	protected columnLabel(column: Column<DataTableFeatures, TRow>): string {
		return typeof column.columnDef.header === 'string' ? column.columnDef.header : column.id;
	}

	/**
	 * True where hiding this column would leave the table with none.
	 *
	 * A table with every column hidden renders a bare empty row — and the Columns trigger is the only
	 * way back, which is a dead end rather than a curiosity. `enableHiding: false` is honoured here
	 * too; the kit does not otherwise support it.
	 */
	protected isVisibilityLocked(column: Column<DataTableFeatures, TRow>): boolean {
		if (!column.getCanHide()) return true;
		return column.getIsVisible() && this.table.getVisibleLeafColumns().length === 1;
	}

	/**
	 * Show or hide a column.
	 *
	 * The refusal path has to put the checkbox back by hand. `aria-disabled` keeps the control
	 * focusable — which is the entire point, since the native `disabled` attribute drops focus to
	 * `<body>` the moment the focused control becomes disabled — but it does not stop the browser
	 * flipping the box. The table is the source of truth, so the DOM is corrected to match it.
	 */
	protected toggleColumnVisibility(column: Column<DataTableFeatures, TRow>, event: Event): void {
		const checkbox = event.target as HTMLInputElement;

		if (this.isVisibilityLocked(column)) {
			checkbox.checked = column.getIsVisible();
			return;
		}

		column.toggleVisibility();

		// Read the model, not the column: `injectTable` pushes options through an effect, so the
		// table's own atom still holds the pre-click value here. Same staleness `toggleSort`
		// documents. The `?? true` is the sparse-map default.
		const nowVisible = this.columnVisibility()[column.id] ?? true;
		this.announcer.announce(`${this.columnLabel(column)} ${nowVisible ? 'shown' : 'hidden'}`);
	}

	/**
	 * Move a column one place left or right among the **visible** columns.
	 *
	 * Operating over `getAllLeafColumns()` rather than the visible list is load-bearing, and both
	 * halves were measured. Writing only the visible ids relocates the hidden ones: `columnOrder` is
	 * a *prefix*, so anything unlisted is appended in definition order, and a column hidden at
	 * position 0 silently reappears last when it is shown again. Meanwhile stepping to the adjacent
	 * entry rather than the nearest *visible* one can swap a column across a hidden neighbour and
	 * change nothing on screen — a control that looks broken because it did nothing.
	 *
	 * The index is computed **before** the removal and reused as the insertion point. Recomputing it
	 * afterwards gets move-right wrong; computing it first is correct in both directions.
	 */
	protected moveColumn(column: Column<DataTableFeatures, TRow>, direction: -1 | 1): void {
		if (direction === -1 ? column.getIsFirstColumn() : column.getIsLastColumn()) return;

		const ids = this.table.getAllLeafColumns().map((candidate) => candidate.id);
		const from = ids.indexOf(column.id);

		let to = from + direction;
		while (to >= 0 && to < ids.length && !this.table.getColumn(ids[to])?.getIsVisible()) {
			to += direction;
		}

		// Unreachable in practice — the buttons are aria-disabled at the ends — but the loop above
		// can only be trusted to stop inside the array if this is stated.
		if (to < 0 || to >= ids.length) return;

		const next = [...ids];
		next.splice(from, 1);
		next.splice(to, 0, column.id);

		this.columnOrder.set(next);
		this.announcer.announce(`${this.columnLabel(column)} moved ${direction === -1 ? 'left' : 'right'}`);
		this.keepFocusOnMoveButton(column.id, direction);
	}

	/**
	 * Put focus back on the button that was just pressed.
	 *
	 * Reordering rewrites the panel's own list, so the `@for` moves the row the button lives in and
	 * the focused element is replaced — measured in Chrome, focus lands on `<body>` and the keyboard
	 * user loses their place at exactly the moment they finished the action. Tracking by `column.id`
	 * is not enough to prevent it; the node still moves.
	 *
	 * This is the second half of the same defect `aria-disabled` solves for the *refused* press. Both
	 * halves are invisible to jsdom, which lays nothing out and makes nothing focusable.
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
	 * The alignment class for a column, read off `meta`.
	 *
	 * Applied to the header as well as the body cell on purpose: a right-aligned Power column under
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
