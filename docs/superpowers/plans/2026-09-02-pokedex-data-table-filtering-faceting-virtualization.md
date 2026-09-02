# Pokédex Data Table: Filtering, Faceting, and Virtualization — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Extend `pokedex-data-table` (`libs/ui-pokedex`) with per-column faceted filtering, a global quick-search, and opt-in row virtualization — the three capabilities the Pokédex master-detail redesign needs and the kit component does not yet have.

**Architecture:** Register three more TanStack Table v9 features (`columnFilteringFeature`, `columnFacetingFeature`, `globalFilteringFeature`) on the existing `dataTableFeatures` set, add two new controlled `model()`s (`columnFilters`, `globalFilter`) to `UiDataTableComponent` following the exact pattern `sorting` already uses, extract the existing Columns panel into its own sub-component before adding a sibling Filters panel next to it, and add an opt-in virtualized rendering path using `@angular/cdk/scrolling` (the same fixed-`itemSize` strategy `libs/ui-list` already uses), sharing one row template between the virtualized and non-virtualized paths via `ngTemplateOutlet`.

**Tech Stack:** Angular 22 (signals, zoneless, standalone components), `@tanstack/angular-table@9.2.2` / `@tanstack/table-core@9.1.2`, `@angular/cdk/scrolling`, `@angular/cdk/a11y` (`LiveAnnouncer`), Jest 30 + `jest-preset-angular` (zoneless test env already configured).

**Spec:** `docs/table-plan.md`, Phase 5 ("Filtering and faceting" and "Virtualization, pulled forward from Phase 4, scoped down" subsections) and the kit's own charter/rules referenced throughout that document.

## Global Constraints

- **No abbreviations.** Spelled-out names throughout (`columnIdentifier`, not `columnId`, in anything we name ourselves — TanStack's own `columnId`/`accessorKey`/etc. stay as TanStack spells them, per `docs/table-plan.md`'s "Conventions this follows").
- **Column definitions and `features` are module-scope constants, never rebuilt in a component field** — `coreColumnsFeature` memoises on `table.options.columns` by identity; a fresh array on every change detection reconstructs every column, header group and cell with cold memos.
- **`sortFn`/`filterFn` names are resolved by string against what's registered in `tableFeatures({...})`.** An unregistered name warns to the console and silently falls back — never reference a filter function by name without registering it in this same task.
- **No content-based grid track** (`auto`, `min-content`, `max-content`, `fit-content()`) in `columnTracks` — each row is its own grid container, not a subgrid, so a content-based track resolves per-row and the column wanders. This gets worse, not better, under virtualization (a windowed body contributes nothing to `max-content`).
- **Tokens only.** No raw hex or px-literal color/spacing in new styles — use the existing `var(--s-*)`, `var(--r-*)`, `var(--ink*)`, `var(--accent*)`, `var(--line)`, `var(--surface*)` custom properties already used throughout `data-table.component.ts`.
- **Every interactive element must be keyboard-operable** (kit rule 6) — the existing Columns panel is an in-flow disclosure specifically because a `CdkMenu` closes on Enter and a CDK overlay traps focus order; the new Filters panel must use the same in-flow pattern, not reach for either rejected alternative.
- Tests run in the zoneless environment already configured in `test-setup.ts` (`setupZonelessTestEnv()`) — assert on rendered DOM/text after `fixture.detectChanges()`, never on state alone.

---

## Task 1: Register filtering, faceting, and global-filter features

**Files:**
- Modify: `libs/ui-pokedex/src/lib/data-table/data-table-columns.ts`
- Test: `libs/ui-pokedex/src/lib/data-table/data-table-columns.spec.ts` (new file)

**Interfaces:**
- Consumes: nothing new — this task only changes the shared `dataTableFeatures` object and the `DataTableColumnMeta` type both already exported from this file.
- Produces: `dataTableFeatures` now includes `columnFilteringFeature`, `columnFacetingFeature`, `globalFilteringFeature`; three named filter functions (`arrHas`, `arrIncludesSome`, `inNumberRange`) are registered and resolvable by those string names on any column's `filterFn` option; `DataTableColumnMeta` gains `filterVariant?: 'set' | 'range'`, consumed by Task 4's Filters panel.

This is a data-only change (no component behavior yet), so it is tested by building a table directly through `injectTable`-adjacent primitives rather than through the DOM — the same "drive the table instance directly, no DOM" approach `docs/table-plan.md` used for the original spike, appropriate here because nothing renders yet.

- [ ] **Step 1: Write the failing test**

**`constructTable` cannot be called directly** — it reads `tableOptions.features.coreReactivityFeature`
and crashes (`Cannot read properties of undefined (reading 'wrapExternalAtoms')`) because a bare
`dataTableFeatures` never registers a reactivity backend; `injectTable`'s Angular wrapper supplies
that automatically. Build the table through `injectTable` inside a minimal host component instead —
the same pattern `data-table.component.spec.ts` already uses, just without a template to render.

```ts
// libs/ui-pokedex/src/lib/data-table/data-table-columns.spec.ts
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { injectTable, type Table } from '@tanstack/angular-table';
import { createDataTableColumns, dataTableFeatures, type DataTableFeatures } from './data-table-columns';

interface DemoRow {
	name: string;
	types: string[];
	generation: number;
	power: number;
}

const rows: DemoRow[] = [
	{ name: 'Charizard', types: ['fire', 'flying'], generation: 1, power: 84 },
	{ name: 'Blastoise', types: ['water'], generation: 1, power: 83 },
	{ name: 'Feraligatr', types: ['water'], generation: 2, power: 105 },
];

const columnHelper = createDataTableColumns<DemoRow>();
const columns = columnHelper.columns([
	columnHelper.accessor('name', { header: 'Name' }),
	// getUniqueValues is required for an array-valued column's facets to be correct: without it,
	// TanStack wraps the whole array as one opaque Map key (by reference) instead of counting each
	// element, per row_getUniqueValues in coreRowsFeature.utils.js.
	columnHelper.accessor('types', { header: 'Types', filterFn: 'arrIncludesSome', getUniqueValues: (row) => row.types }),
	columnHelper.accessor('generation', { header: 'Generation', filterFn: 'arrHas' }),
	columnHelper.accessor('power', { header: 'Power', filterFn: 'inNumberRange' }),
]);

/** No template — this test drives the table instance directly and asserts on it, not on the DOM. */
@Component({
	selector: 'pokedex-filter-facet-host',
	changeDetection: ChangeDetectionStrategy.OnPush,
	template: '',
})
class FilterFacetHostComponent {
	readonly table = injectTable(() => ({ features: dataTableFeatures, columns, data: rows }));
}

describe('dataTableFeatures — filtering and faceting', () => {
	let fixture: ComponentFixture<FilterFacetHostComponent>;
	let table: Table<DataTableFeatures, DemoRow>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({ imports: [FilterFacetHostComponent] }).compileComponents();
		fixture = TestBed.createComponent(FilterFacetHostComponent);
		fixture.detectChanges();
		table = fixture.componentInstance.table;
	});

	it('filters rows whose array column includes at least one selected value (arrIncludesSome)', () => {
		table.setColumnFilters([{ id: 'types', value: ['fire'] }]);
		fixture.detectChanges();

		expect(table.getFilteredRowModel().rows.map((row) => row.original.name)).toEqual(['Charizard']);
	});

	it('filters rows whose scalar column equals one of the selected values (arrHas)', () => {
		table.setColumnFilters([{ id: 'generation', value: [2] }]);
		fixture.detectChanges();

		expect(table.getFilteredRowModel().rows.map((row) => row.original.name)).toEqual(['Feraligatr']);
	});

	it('filters rows whose numeric column falls within an inclusive range (inNumberRange)', () => {
		table.setColumnFilters([{ id: 'power', value: [90, 120] }]);
		fixture.detectChanges();

		expect(table.getFilteredRowModel().rows.map((row) => row.original.name)).toEqual(['Feraligatr']);
	});

	it('computes faceted unique values with occurrence counts for a column', () => {
		const facets = table.getColumn('types')?.getFacetedUniqueValues();

		expect(facets?.get('fire')).toBe(1);
		expect(facets?.get('water')).toBe(2);
	});

	it('computes faceted min/max for a numeric column', () => {
		expect(table.getColumn('power')?.getFacetedMinMaxValues()).toEqual([83, 105]);
	});

	it('narrows rows by the global filter across every column', () => {
		table.setGlobalFilter('char');
		fixture.detectChanges();

		expect(table.getFilteredRowModel().rows.map((row) => row.original.name)).toEqual(['Charizard']);
	});
});
```

- [ ] **Step 2: Run the test to verify it fails**

Run: `npx nx test ui-pokedex --testPathPattern=data-table-columns.spec.ts`
Expected: FAIL — `filterFn: 'arrIncludesSome'` etc. do not type-check yet (unregistered filter function names), and `getFacetedUniqueValues`/`getFacetedMinMaxValues`/`getFilteredRowModel` are not present on the constructed table (features not registered).

- [ ] **Step 3: Register the features**

```ts
// libs/ui-pokedex/src/lib/data-table/data-table-columns.ts
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

export const dataTableFeatures = tableFeatures({
	rowSortingFeature,
	sortedRowModel: createSortedRowModel(),
	sortFns: { alphanumeric: sortFn_alphanumeric, basic: sortFn_basic, text: sortFn_text },

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

	columnMeta: {} as DataTableColumnMeta,
});

export type DataTableFeatures = typeof dataTableFeatures;

export function createDataTableColumns<TRow extends RowData>() {
	return createColumnHelper<DataTableFeatures, TRow>();
}
```

- [ ] **Step 4: Run the test to verify it passes**

Run: `npx nx test ui-pokedex --testPathPattern=data-table-columns.spec.ts`
Expected: PASS — all six cases green.

- [ ] **Step 5: Run the full existing data-table suite to confirm no regression**

Run: `npx nx test ui-pokedex --testPathPattern=data-table.component.spec.ts`
Expected: PASS — every existing sorting/visibility/ordering test is unaffected; the new features are additive registrations.

- [ ] **Step 6: Commit**

```bash
git add libs/ui-pokedex/src/lib/data-table/data-table-columns.ts libs/ui-pokedex/src/lib/data-table/data-table-columns.spec.ts
git commit -m "feat(ui-pokedex): register column filtering, faceting, and global filter features"
```

---

## Task 2: Add `columnFilters` and `globalFilter` controlled models

**Files:**
- Modify: `libs/ui-pokedex/src/lib/data-table/data-table.component.ts`
- Modify: `libs/ui-pokedex/src/lib/data-table/data-table.component.spec.ts`

**Interfaces:**
- Consumes: `dataTableFeatures` from Task 1 (already imported by this file as the `features` option).
- Produces: `UiDataTableComponent` gains `readonly columnFilters = model<ColumnFiltersState>([])` and `readonly globalFilter = model<string>('')`, both readable/writable by a consumer exactly like `sorting`. Task 4 (Filters panel) and Task 5 (search input) both read and write these two models; neither exists as UI yet after this task — it only wires the state through to `injectTable` so `table.getFilteredRowModel()` reflects them.

- [ ] **Step 1: Write the failing test**

Add to `data-table.component.spec.ts`, extending the existing `DataTableHostComponent` fixture (the file already has `demoMoves`/`demoColumns`; this reuses them, no new fixture needed):

```ts
// add to the existing imports at the top of data-table.component.spec.ts
import type { ColumnFiltersState } from '@tanstack/angular-table';

// add to DataTableHostComponent's template, alongside the other bound inputs:
// [(columnFilters)]="columnFilters" [(globalFilter)]="globalFilter"

// add to the DataTableHostComponent class body:
readonly columnFilters = signal<ColumnFiltersState>([]);
readonly globalFilter = signal('');
```

```ts
// new describe block, appended to the file
describe('UiDataTableComponent — filtering state', () => {
	// beforeEach/afterEach/element()/bodyRows()/nameColumn() are already defined above in this
	// file's outer describe; this block runs inside the same file so they are in scope.

	it('narrows the rendered rows when columnFilters is written to directly', () => {
		host.columnFilters.set([{ id: 'power', value: [80, 100] }]);
		fixture.detectChanges();

		expect(nameColumn()).toEqual(['Flamethrower']);
	});

	it('narrows the rendered rows when globalFilter is written to directly', () => {
		host.globalFilter.set('aerial');
		fixture.detectChanges();

		expect(nameColumn()).toEqual(['Aerial Ace']);
	});

	it('clearing globalFilter restores every row', () => {
		host.globalFilter.set('aerial');
		fixture.detectChanges();
		host.globalFilter.set('');
		fixture.detectChanges();

		expect(nameColumn()).toEqual(['Ember', 'Aerial Ace', 'Flamethrower']);
	});
});
```

Note: `demoColumns`'s `power` column already has `sortFn: 'basic'` but no `filterFn` — add `filterFn: 'inNumberRange'` to it in this same edit so the first new test has something to filter on.

- [ ] **Step 2: Run the test to verify it fails**

Run: `npx nx test ui-pokedex --testPathPattern=data-table.component.spec.ts`
Expected: FAIL — `columnFilters`/`globalFilter` are not recognized inputs on `pokedex-data-table` (template binding error).

- [ ] **Step 3: Add the models and wire them into `injectTable`**

In `data-table.component.ts`, add the import (extend the existing `@tanstack/angular-table` import list):

```ts
import {
	// ...existing imports...
	type ColumnFiltersState,
} from '@tanstack/angular-table';
```

Add alongside the existing `columnVisibility`/`columnOrder` models (after line 473 in the current file):

```ts
/** Controlled like `sorting`. One entry per column with an active filter. */
readonly columnFilters = model<ColumnFiltersState>([]);

/** Controlled like `sorting`. The quick-search box's current text. */
readonly globalFilter = model('');
```

Extend the `injectTable` call's `state` and change-handlers (the existing block at lines 489–504):

```ts
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
	onSortingChange: (update) => this.sorting.set(functionalUpdate(update, this.sorting())),
	onColumnVisibilityChange: (update) => this.columnVisibility.set(functionalUpdate(update, this.columnVisibility())),
	onColumnOrderChange: (update) => this.columnOrder.set(functionalUpdate(update, this.columnOrder())),
	onColumnFiltersChange: (update) => this.columnFilters.set(functionalUpdate(update, this.columnFilters())),
	onGlobalFilterChange: (update) => this.globalFilter.set(functionalUpdate(update, this.globalFilter())),
}));
```

Switch the row-rendering template from `table.getRowModel()` to `table.getFilteredRowModel()` wherever rows are enumerated (the `@for (row of table.getRowModel().rows; ...)` in the body rowgroup) — `getRowModel()` is the *pre-filter* core model; `getFilteredRowModel()` is what reflects `columnFilters`/`globalFilter`. There is exactly one such site today (the empty-row `@empty` block's column count is unaffected, it reads `table.getVisibleLeafColumns()`).

- [ ] **Step 4: Run the test to verify it passes**

Run: `npx nx test ui-pokedex --testPathPattern=data-table.component.spec.ts`
Expected: PASS — including every pre-existing test in this file, since `getFilteredRowModel()` returns every row when no filter is active (`getPreFilteredRowModel()` equivalent).

- [ ] **Step 5: Commit**

```bash
git add libs/ui-pokedex/src/lib/data-table/data-table.component.ts libs/ui-pokedex/src/lib/data-table/data-table.component.spec.ts
git commit -m "feat(ui-pokedex): add controlled columnFilters and globalFilter models"
```

---

## Task 3: Extract the Columns panel into its own sub-component

Pure refactor — no behavior change, no new tests beyond relocating the existing ones. Done now because Task 4 adds a sibling Filters panel of comparable size, and `data-table.component.ts` is already 686 lines before either change.

**Files:**
- Create: `libs/ui-pokedex/src/lib/data-table/data-table-columns-panel.component.ts`
- Create: `libs/ui-pokedex/src/lib/data-table/data-table-columns-panel.component.spec.ts`
- Modify: `libs/ui-pokedex/src/lib/data-table/data-table.component.ts`
- Modify: `libs/ui-pokedex/src/lib/data-table/data-table.component.spec.ts` (panel-specific tests move out; a handful of integration assertions stay)
- Modify: `libs/ui-pokedex/src/index.ts` (barrel export, if the panel needs to be publicly exported — it does not; only `UiDataTableComponent` is public API, so **no barrel change**)

**Interfaces:**
- Consumes: a `Table<DataTableFeatures, TRow>` instance and a `label` string (for the panel's `aria-label`), both from the parent `UiDataTableComponent`.
- Produces: `DataTableColumnsPanelComponent<TRow extends RowData>`, selector `pokedex-data-table-columns-panel`, `table = input.required<Table<DataTableFeatures, TRow>>()`, `label = input.required<string>()`. Mutates the table directly via `column.toggleVisibility()` / `this.columnOrder` writes already flowing through the parent's `onColumnVisibilityChange`/`onColumnOrderChange` callbacks — the child needs no outputs of its own.

- [ ] **Step 1: Move the panel-specific tests to a new spec, targeting a minimal host**

**Build the table through `injectTable`, not `constructTable`** — see the note in Task 1: a bare
`dataTableFeatures` has no reactivity backend registered, and `constructTable` crashes without one.
`injectTable` supplies it automatically, so the host component below calls that instead, feeding it
its own `visibility`/`order` signals the same way `UiDataTableComponent` itself does.

```ts
// libs/ui-pokedex/src/lib/data-table/data-table-columns-panel.component.spec.ts
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { functionalUpdate, injectTable, type ColumnOrderState, type ColumnVisibilityState } from '@tanstack/angular-table';
import { createDataTableColumns, dataTableFeatures } from './data-table-columns';
import { DataTableColumnsPanelComponent } from './data-table-columns-panel.component';

interface DemoRow {
	name: string;
	power: number;
}

const columnHelper = createDataTableColumns<DemoRow>();
const columns = columnHelper.columns([
	columnHelper.accessor('name', { header: 'Name' }),
	columnHelper.accessor('power', { header: 'Power' }),
	columnHelper.display({ id: 'actions', header: 'Actions', cell: () => 'edit' }),
]);
const rows: DemoRow[] = [{ name: 'Ember', power: 40 }];

@Component({
	selector: 'pokedex-columns-panel-host',
	changeDetection: ChangeDetectionStrategy.OnPush,
	imports: [DataTableColumnsPanelComponent],
	template: `<pokedex-data-table-columns-panel [table]="table" label="Demo moves" />`,
})
class ColumnsPanelHostComponent {
	private readonly visibility = signal<ColumnVisibilityState>({});
	private readonly order = signal<ColumnOrderState>([]);

	readonly table = injectTable(() => ({
		features: dataTableFeatures,
		columns,
		data: rows,
		state: { columnVisibility: this.visibility(), columnOrder: this.order() },
		onColumnVisibilityChange: (update) => this.visibility.set(functionalUpdate(update, this.visibility())),
		onColumnOrderChange: (update) => this.order.set(functionalUpdate(update, this.order())),
	}));
}

describe('DataTableColumnsPanelComponent', () => {
	let fixture: ComponentFixture<ColumnsPanelHostComponent>;
	let announce: jest.SpyInstance;

	function element(): HTMLElement {
		return fixture.nativeElement as HTMLElement;
	}
	function panelRows(): HTMLElement[] {
		return Array.from(element().querySelectorAll<HTMLElement>('.columns-row'));
	}
	function checkboxAt(index: number): HTMLInputElement {
		const found = panelRows()[index]?.querySelector<HTMLInputElement>('input[type=checkbox]');
		if (!found) throw new Error(`no checkbox in panel row ${index}`);
		return found;
	}
	function columnsTrigger(): HTMLButtonElement {
		const found = element().querySelector<HTMLButtonElement>('.columns-trigger');
		if (!found) throw new Error('the Columns trigger is missing');
		return found;
	}

	beforeEach(async () => {
		await TestBed.configureTestingModule({ imports: [ColumnsPanelHostComponent] }).compileComponents();
		fixture = TestBed.createComponent(ColumnsPanelHostComponent);
		announce = jest.spyOn(TestBed.inject(LiveAnnouncer), 'announce');
		fixture.detectChanges();
	});

	afterEach(() => jest.restoreAllMocks());

	it('counts visible against total on the trigger', () => {
		expect(columnsTrigger().textContent?.trim()).toBe('Columns 3/3');
	});

	it('toggles a column and announces the state it moved to', () => {
		checkboxAt(1).click();
		fixture.detectChanges();

		expect(announce).toHaveBeenLastCalledWith('Power hidden');
		expect(columnsTrigger().textContent?.trim()).toBe('Columns 2/3');
	});

	it('refuses to hide the last visible column', () => {
		checkboxAt(1).click();
		checkboxAt(2).click();
		fixture.detectChanges();

		const nameCheckbox = checkboxAt(0);
		expect(nameCheckbox.getAttribute('aria-disabled')).toBe('true');
	});
});
```

The remaining Columns-panel tests already in `data-table.component.spec.ts` (reordering, the sparse-visibility-map trap, focus-after-move, hidden-column-stays-put) move verbatim into this new spec file, adapted to `ColumnsPanelHostComponent` the same way the three above are — same assertions, same click sequences, just against the smaller host. `data-table.component.spec.ts` keeps only: the trigger renders, and toggling a checkbox actually hides the header/cell in the *full* table (an integration check that the extraction wired correctly), removing every other Columns-panel-specific case from that file.

- [ ] **Step 2: Run the new spec to verify it fails**

Run: `npx nx test ui-pokedex --testPathPattern=data-table-columns-panel.component.spec.ts`
Expected: FAIL — `DataTableColumnsPanelComponent` does not exist yet.

- [ ] **Step 3: Create the panel component**

Move the toolbar/Columns-panel template block and its backing methods out of `data-table.component.ts` verbatim:

```ts
// libs/ui-pokedex/src/lib/data-table/data-table-columns-panel.component.ts
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { ChangeDetectionStrategy, Component, ElementRef, Injector, afterNextRender, computed, inject, input, signal } from '@angular/core';
import type { Column, RowData, Table } from '@tanstack/angular-table';
import type { DataTableFeatures } from './data-table-columns';

let panelInstanceCount = 0;

@Component({
	selector: 'pokedex-data-table-columns-panel',
	changeDetection: ChangeDetectionStrategy.OnPush,
	template: `
		<button
			type="button"
			class="columns-trigger"
			[attr.aria-expanded]="panelOpen()"
			[attr.aria-controls]="panelId"
			(click)="panelOpen.set(!panelOpen())"
		>
			Columns {{ visibleColumnCount() }}/{{ allColumnCount() }}
		</button>

		<div class="columns-panel" [id]="panelId" role="group" [attr.aria-label]="'Columns in ' + label()" [hidden]="!panelOpen()">
			@for (column of table().getAllLeafColumns(); track column.id) {
				<div class="columns-row" [attr.data-column-id]="column.id">
					<label class="columns-toggle">
						<input
							type="checkbox"
							[checked]="column.getIsVisible()"
							[attr.aria-disabled]="isVisibilityLocked(column) ? 'true' : null"
							(change)="toggleColumnVisibility(column, $event)"
						/>
						{{ columnLabel(column) }}
					</label>

					<button type="button" class="move" [attr.aria-disabled]="column.getIsFirstColumn() ? 'true' : null" (click)="moveColumn(column, -1)">
						<span class="sr-only">Move {{ columnLabel(column) }} left</span>
						<span aria-hidden="true">←</span>
					</button>
					<button type="button" class="move" [attr.aria-disabled]="column.getIsLastColumn() ? 'true' : null" (click)="moveColumn(column, 1)">
						<span class="sr-only">Move {{ columnLabel(column) }} right</span>
						<span aria-hidden="true">→</span>
					</button>
				</div>
			}
		</div>
	`,
	styles: `
		:host {
			display: flex;
			flex-direction: column;
			align-items: flex-start;
			gap: var(--s-2);
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
		.move[aria-disabled='true'],
		.columns-toggle input[aria-disabled='true'] {
			opacity: 0.4;
			cursor: not-allowed;
		}
		.move[aria-disabled='true']:hover {
			background: none;
			color: var(--ink-muted);
		}
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
	`,
})
export class DataTableColumnsPanelComponent<TRow extends RowData> {
	readonly table = input.required<Table<DataTableFeatures, TRow>>();
	readonly label = input.required<string>();

	private readonly announcer = inject(LiveAnnouncer);
	private readonly host = inject<ElementRef<HTMLElement>>(ElementRef);
	private readonly injector = inject(Injector);

	protected readonly panelOpen = signal(false);
	protected readonly panelId = `pokedex-data-table-columns-${(panelInstanceCount += 1)}`;

	protected readonly visibleColumnCount = computed(() => this.table().getVisibleLeafColumns().length);
	protected readonly allColumnCount = computed(() => this.table().getAllLeafColumns().length);

	protected columnLabel(column: Column<DataTableFeatures, TRow>): string {
		return typeof column.columnDef.header === 'string' ? column.columnDef.header : column.id;
	}

	protected isVisibilityLocked(column: Column<DataTableFeatures, TRow>): boolean {
		if (!column.getCanHide()) return true;
		return column.getIsVisible() && this.table().getVisibleLeafColumns().length === 1;
	}

	protected toggleColumnVisibility(column: Column<DataTableFeatures, TRow>, event: Event): void {
		const checkbox = event.target as HTMLInputElement;

		if (this.isVisibilityLocked(column)) {
			checkbox.checked = column.getIsVisible();
			return;
		}

		column.toggleVisibility();

		const nowVisible = column.getIsVisible();
		this.announcer.announce(`${this.columnLabel(column)} ${nowVisible ? 'shown' : 'hidden'}`);
	}

	protected moveColumn(column: Column<DataTableFeatures, TRow>, direction: -1 | 1): void {
		if (direction === -1 ? column.getIsFirstColumn() : column.getIsLastColumn()) return;

		const table = this.table();
		const ids = table.getAllLeafColumns().map((candidate) => candidate.id);
		const from = ids.indexOf(column.id);

		let to = from + direction;
		while (to >= 0 && to < ids.length && !table.getColumn(ids[to])?.getIsVisible()) {
			to += direction;
		}
		if (to < 0 || to >= ids.length) return;

		const next = [...ids];
		next.splice(from, 1);
		next.splice(to, 0, column.id);

		table.setColumnOrder(next);
		this.announcer.announce(`${this.columnLabel(column)} moved ${direction === -1 ? 'left' : 'right'}`);
		this.keepFocusOnMoveButton(column.id, direction);
	}

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
}
```

Two behavior-preserving adjustments versus the original inline code, both required because the panel no longer has its own `columnVisibility`/`columnOrder` models to read: `toggleColumnVisibility`'s "now visible" check reads `column.getIsVisible()` (post-toggle, on the live column) instead of the old `this.columnVisibility()[column.id] ?? true` — equivalent here because `column.toggleVisibility()` has already flowed through the parent's `onColumnVisibilityChange` synchronously before this line runs; and `moveColumn` calls `table.setColumnOrder(next)` directly rather than writing a local model.

- [ ] **Step 4: Wire it into `UiDataTableComponent`, deleting the moved code**

In `data-table.component.ts`: add `DataTableColumnsPanelComponent` to `imports`, replace the `<div class="toolbar">...</div>` block's Columns-trigger-and-panel markup with `<pokedex-data-table-columns-panel [table]="table" label="{{ label() }}" />`, and delete from the class body: `panelOpen`, `panelId`, `panelInstanceCount` (module-level), `visibleColumnCount`, `allColumnCount`, `columnLabel`, `isVisibilityLocked`, `toggleColumnVisibility`, `moveColumn`, `keepFocusOnMoveButton`, the `LiveAnnouncer`/`ElementRef`/`Injector` injections (now unused in this file), and the corresponding `.columns-*`/`.move`/`.sr-only` styles (now living in the panel component). `toggleSort` and its own `LiveAnnouncer` use stay — sorting is unrelated to this extraction.

- [ ] **Step 5: Run both specs and the full suite**

Run: `npx nx test ui-pokedex`
Expected: PASS — `data-table-columns-panel.component.spec.ts` (new), `data-table.component.spec.ts` (slimmed, still covering sorting/tracks/row-variant/alignment/empty-state/scroller and the one Columns-panel integration check), `data-table-columns.spec.ts` (Task 1) all green.

- [ ] **Step 6: Commit**

```bash
git add libs/ui-pokedex/src/lib/data-table/
git commit -m "refactor(ui-pokedex): extract the Columns panel into its own component"
```

---

## Task 4: Filters panel (`set` and `range` variants)

**Files:**
- Create: `libs/ui-pokedex/src/lib/data-table/data-table-filters-panel.component.ts`
- Create: `libs/ui-pokedex/src/lib/data-table/data-table-filters-panel.component.spec.ts`
- Modify: `libs/ui-pokedex/src/lib/data-table/data-table.component.ts`
- Modify: `libs/ui-pokedex/src/lib/data-table/data-table.component.spec.ts` (one integration test: the trigger exists and toggling a checkbox narrows the full table)

**Interfaces:**
- Consumes: `Table<DataTableFeatures, TRow>` (same as the Columns panel) and reads `column.columnDef.meta?.filterVariant` (Task 1) plus `column.getFacetedUniqueValues()` / `column.getFacetedMinMaxValues()` to build each control.
- Produces: `DataTableFiltersPanelComponent<TRow extends RowData>`, selector `pokedex-data-table-filters-panel`, same `table`/`label` inputs as the Columns panel. No outputs — every control calls `column.setFilterValue(...)` directly, which flows through the parent's `onColumnFiltersChange` already wired in Task 2.

- [ ] **Step 1: Write the failing test**

**Build the table through `injectTable`, not `constructTable`** — same reason as Task 1 and Task 3.

```ts
// libs/ui-pokedex/src/lib/data-table/data-table-filters-panel.component.spec.ts
import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { functionalUpdate, injectTable, type ColumnFiltersState } from '@tanstack/angular-table';
import { createDataTableColumns, dataTableFeatures } from './data-table-columns';
import { DataTableFiltersPanelComponent } from './data-table-filters-panel.component';

interface DemoRow {
	name: string;
	type: string;
	power: number;
}

const columnHelper = createDataTableColumns<DemoRow>();
const columns = columnHelper.columns([
	columnHelper.accessor('name', { header: 'Name' }),
	columnHelper.accessor('type', { header: 'Type', filterFn: 'arrHas', meta: { filterVariant: 'set' } }),
	columnHelper.accessor('power', { header: 'Power', filterFn: 'inNumberRange', meta: { filterVariant: 'range' } }),
]);
const rows: DemoRow[] = [
	{ name: 'Ember', type: 'Fire', power: 40 },
	{ name: 'Flamethrower', type: 'Fire', power: 90 },
	{ name: 'Surf', type: 'Water', power: 90 },
];

@Component({
	selector: 'pokedex-filters-panel-host',
	changeDetection: ChangeDetectionStrategy.OnPush,
	imports: [DataTableFiltersPanelComponent],
	template: `<pokedex-data-table-filters-panel [table]="table" label="Demo moves" />`,
})
class FiltersPanelHostComponent {
	private readonly filters = signal<ColumnFiltersState>([]);

	readonly table = injectTable(() => ({
		features: dataTableFeatures,
		columns,
		data: rows,
		state: { columnFilters: this.filters() },
		onColumnFiltersChange: (update) => this.filters.set(functionalUpdate(update, this.filters())),
	}));
}

describe('DataTableFiltersPanelComponent', () => {
	let fixture: ComponentFixture<FiltersPanelHostComponent>;
	let host: FiltersPanelHostComponent;

	function element(): HTMLElement {
		return fixture.nativeElement as HTMLElement;
	}
	function filtersTrigger(): HTMLButtonElement {
		const found = element().querySelector<HTMLButtonElement>('.filters-trigger');
		if (!found) throw new Error('the Filters trigger is missing');
		return found;
	}
	function setCheckbox(columnId: string, value: string): HTMLInputElement {
		const found = element().querySelector<HTMLInputElement>(`input[type=checkbox][data-column-id="${columnId}"][value="${value}"]`);
		if (!found) throw new Error(`no checkbox for ${columnId}=${value}`);
		return found;
	}
	function rangeInput(columnId: string, bound: 'min' | 'max'): HTMLInputElement {
		const found = element().querySelector<HTMLInputElement>(`input[type=number][data-column-id="${columnId}"][data-bound="${bound}"]`);
		if (!found) throw new Error(`no ${bound} input for ${columnId}`);
		return found;
	}

	beforeEach(async () => {
		await TestBed.configureTestingModule({ imports: [FiltersPanelHostComponent] }).compileComponents();
		fixture = TestBed.createComponent(FiltersPanelHostComponent);
		host = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('only lists columns that declare a filterVariant', () => {
		filtersTrigger().click();
		fixture.detectChanges();

		expect(element().querySelector('[data-column-id="name"]')).toBeNull();
		expect(element().querySelectorAll('[data-column-id="type"]').length).toBeGreaterThan(0);
	});

	it('renders one checkbox per faceted unique value, with its occurrence count, for a set column', () => {
		filtersTrigger().click();
		fixture.detectChanges();

		const fireCheckbox = setCheckbox('type', 'Fire');
		expect(fireCheckbox.parentElement?.textContent).toContain('Fire');
		expect(fireCheckbox.parentElement?.textContent).toContain('2');
	});

	it('checking a set-column checkbox sets the column filter to the checked values', () => {
		filtersTrigger().click();
		fixture.detectChanges();

		setCheckbox('type', 'Fire').click();
		fixture.detectChanges();

		expect(host.table.getColumn('type')?.getFilterValue()).toEqual(['Fire']);
	});

	it('unchecking the only checked value clears the column filter entirely', () => {
		filtersTrigger().click();
		fixture.detectChanges();
		setCheckbox('type', 'Fire').click();
		fixture.detectChanges();

		setCheckbox('type', 'Fire').click();
		fixture.detectChanges();

		expect(host.table.getColumn('type')?.getFilterValue()).toBeUndefined();
	});

	it('seeds a range column\'s min/max inputs from the faceted bounds', () => {
		filtersTrigger().click();
		fixture.detectChanges();

		expect(rangeInput('power', 'min').placeholder).toBe('40');
		expect(rangeInput('power', 'max').placeholder).toBe('90');
	});

	it('typing into a range input sets the column filter to [min, max]', () => {
		filtersTrigger().click();
		fixture.detectChanges();

		const min = rangeInput('power', 'min');
		min.value = '80';
		min.dispatchEvent(new Event('input'));
		fixture.detectChanges();

		expect(host.table.getColumn('power')?.getFilterValue()).toEqual([80, undefined]);
	});
});
```

- [ ] **Step 2: Run the test to verify it fails**

Run: `npx nx test ui-pokedex --testPathPattern=data-table-filters-panel.component.spec.ts`
Expected: FAIL — `DataTableFiltersPanelComponent` does not exist yet.

- [ ] **Step 3: Create the panel component**

```ts
// libs/ui-pokedex/src/lib/data-table/data-table-filters-panel.component.ts
import { ChangeDetectionStrategy, Component, computed, inject, input, signal } from '@angular/core';
import type { Column, RowData, Table } from '@tanstack/angular-table';
import type { DataTableFeatures } from './data-table-columns';

let panelInstanceCount = 0;

interface SetOption {
	value: string;
	count: number;
	checked: boolean;
}

@Component({
	selector: 'pokedex-data-table-filters-panel',
	changeDetection: ChangeDetectionStrategy.OnPush,
	template: `
		<button type="button" class="filters-trigger" [attr.aria-expanded]="panelOpen()" [attr.aria-controls]="panelId" (click)="panelOpen.set(!panelOpen())">
			Filters {{ activeFilterCount() > 0 ? '(' + activeFilterCount() + ')' : '' }}
		</button>

		<div class="filters-panel" [id]="panelId" role="group" [attr.aria-label]="'Filters in ' + label()" [hidden]="!panelOpen()">
			@for (column of filterableColumns(); track column.id) {
				<div class="filter-group">
					<span class="filter-label">{{ columnLabel(column) }}</span>

					@if (variantOf(column) === 'set') {
						@for (option of setOptions(column); track option.value) {
							<label class="filter-option">
								<input
									type="checkbox"
									[attr.data-column-id]="column.id"
									[value]="option.value"
									[checked]="option.checked"
									(change)="toggleSetOption(column, option.value, $event)"
								/>
								{{ option.value }} ({{ option.count }})
							</label>
						}
					} @else {
						<div class="filter-range">
							<input
								type="number"
								[attr.data-column-id]="column.id"
								data-bound="min"
								[placeholder]="rangeBounds(column)?.[0] ?? ''"
								[value]="rangeValue(column)?.[0] ?? ''"
								(input)="setRangeBound(column, 'min', $event)"
							/>
							<span aria-hidden="true">–</span>
							<input
								type="number"
								[attr.data-column-id]="column.id"
								data-bound="max"
								[placeholder]="rangeBounds(column)?.[1] ?? ''"
								[value]="rangeValue(column)?.[1] ?? ''"
								(input)="setRangeBound(column, 'max', $event)"
							/>
						</div>
					}
				</div>
			}
		</div>
	`,
	styles: `
		:host {
			display: flex;
			flex-direction: column;
			align-items: flex-start;
			gap: var(--s-2);
		}
		.filters-trigger {
			all: unset;
			padding: var(--s-1) var(--s-3);
			border: 1px solid var(--line);
			border-radius: var(--r-pill);
			font-size: var(--fs-xs);
			color: var(--ink-muted);
			cursor: pointer;
			transition: border-color var(--dur) var(--ease), color var(--dur) var(--ease);
		}
		.filters-trigger:hover {
			border-color: var(--accent);
			color: var(--accent);
		}
		.filters-trigger:focus-visible {
			outline: 2px solid var(--accent);
			outline-offset: 2px;
		}
		.filters-panel {
			display: flex;
			flex-direction: column;
			gap: var(--s-3);
			padding: var(--s-3);
			border: 1px solid var(--line);
			border-radius: var(--r-md);
			background: var(--surface);
			font-size: var(--fs-sm);
		}
		.filters-panel[hidden] {
			display: none;
		}
		.filter-group {
			display: flex;
			flex-direction: column;
			gap: var(--s-1);
		}
		.filter-label {
			font-size: var(--fs-xs);
			text-transform: uppercase;
			letter-spacing: 0.08em;
			color: var(--ink-muted);
		}
		.filter-option {
			display: flex;
			align-items: center;
			gap: var(--s-2);
			color: var(--ink);
			cursor: pointer;
		}
		.filter-option input:focus-visible {
			outline: 2px solid var(--accent);
			outline-offset: 2px;
		}
		.filter-range {
			display: flex;
			align-items: center;
			gap: var(--s-2);
		}
		.filter-range input {
			width: 6ch;
			padding: var(--s-1) var(--s-2);
			border: 1px solid var(--line);
			border-radius: var(--r-sm);
			background: var(--surface);
			color: var(--ink);
		}
		.filter-range input:focus-visible {
			outline: 2px solid var(--accent);
			outline-offset: 2px;
		}
	`,
})
export class DataTableFiltersPanelComponent<TRow extends RowData> {
	readonly table = input.required<Table<DataTableFeatures, TRow>>();
	readonly label = input.required<string>();

	protected readonly panelOpen = signal(false);
	protected readonly panelId = `pokedex-data-table-filters-${(panelInstanceCount += 1)}`;

	protected readonly filterableColumns = computed(() =>
		this.table()
			.getAllLeafColumns()
			.filter((column) => column.columnDef.meta?.filterVariant != null),
	);

	protected readonly activeFilterCount = computed(() => this.table().getState().columnFilters.length);

	protected columnLabel(column: Column<DataTableFeatures, TRow>): string {
		return typeof column.columnDef.header === 'string' ? column.columnDef.header : column.id;
	}

	protected variantOf(column: Column<DataTableFeatures, TRow>): 'set' | 'range' | undefined {
		return column.columnDef.meta?.filterVariant;
	}

	protected setOptions(column: Column<DataTableFeatures, TRow>): SetOption[] {
		const selected = new Set(((column.getFilterValue() as unknown[] | undefined) ?? []).map(String));
		return Array.from(column.getFacetedUniqueValues().entries())
			.map(([value, count]) => ({ value: String(value), count, checked: selected.has(String(value)) }))
			.sort((first, second) => first.value.localeCompare(second.value));
	}

	protected toggleSetOption(column: Column<DataTableFeatures, TRow>, value: string, event: Event): void {
		const checked = (event.target as HTMLInputElement).checked;
		const current = ((column.getFilterValue() as unknown[] | undefined) ?? []).map(String);
		const next = checked ? [...current, value] : current.filter((entry) => entry !== value);

		column.setFilterValue(next.length > 0 ? next : undefined);
	}

	protected rangeBounds(column: Column<DataTableFeatures, TRow>): [number, number] | undefined {
		return column.getFacetedMinMaxValues();
	}

	protected rangeValue(column: Column<DataTableFeatures, TRow>): [number | undefined, number | undefined] | undefined {
		return column.getFilterValue() as [number | undefined, number | undefined] | undefined;
	}

	protected setRangeBound(column: Column<DataTableFeatures, TRow>, bound: 'min' | 'max', event: Event): void {
		const raw = (event.target as HTMLInputElement).value;
		const parsed = raw === '' ? undefined : Number(raw);
		const [min, max] = this.rangeValue(column) ?? [undefined, undefined];

		column.setFilterValue(bound === 'min' ? [parsed, max] : [min, parsed]);
	}
}
```

- [ ] **Step 4: Wire it into `UiDataTableComponent`**

Add `DataTableFiltersPanelComponent` to `imports`, add `<pokedex-data-table-filters-panel [table]="table" label="{{ label() }}" />` to the `.toolbar` div, alongside the Columns panel.

- [ ] **Step 5: Add one integration test to `data-table.component.spec.ts`**

```ts
it('renders the Filters panel and narrows the table when a filterable column is checked', () => {
	// demoColumns' power column needs filterFn + meta added for this test — see column defs at the
	// top of this file, extend the existing `power` accessor with `filterFn: 'inNumberRange', meta: { align: 'end', filterVariant: 'range' }`.
	const trigger = element().querySelector<HTMLButtonElement>('.filters-trigger');
	if (!trigger) throw new Error('the Filters trigger is missing');
	trigger.click();
	fixture.detectChanges();

	const min = element().querySelector<HTMLInputElement>('input[type=number][data-column-id="power"][data-bound="min"]');
	if (!min) throw new Error('no min input for power');
	min.value = '70';
	min.dispatchEvent(new Event('input'));
	fixture.detectChanges();

	expect(nameColumn()).toEqual(['Flamethrower']);
});
```

- [ ] **Step 6: Run everything**

Run: `npx nx test ui-pokedex`
Expected: PASS — new panel spec, updated integration test, and every earlier suite (Tasks 1–3) all green.

- [ ] **Step 7: Commit**

```bash
git add libs/ui-pokedex/src/lib/data-table/
git commit -m "feat(ui-pokedex): add the Filters panel with set and range variants"
```

---

## Task 5: Global search input

**Files:**
- Modify: `libs/ui-pokedex/src/lib/data-table/data-table.component.ts`
- Modify: `libs/ui-pokedex/src/lib/data-table/data-table.component.spec.ts`

**Interfaces:**
- Consumes: the `globalFilter` model from Task 2.
- Produces: a visible `<input type="search">` in the toolbar, two-way bound to `globalFilter`. No new public API — the model already existed; this task only adds the UI control for it (the Task 2 tests exercised it by writing the signal directly, proving the plumbing; this task proves a person can type into it).

- [ ] **Step 1: Write the failing test**

```ts
it('narrows the table when the search box is typed into', () => {
	const search = element().querySelector<HTMLInputElement>('.search-input');
	if (!search) throw new Error('the search input is missing');

	search.value = 'aerial';
	search.dispatchEvent(new Event('input'));
	fixture.detectChanges();

	expect(nameColumn()).toEqual(['Aerial Ace']);
	expect(host.globalFilter()).toBe('aerial');
});

it('labels the search input for assistive technology', () => {
	const search = element().querySelector<HTMLInputElement>('.search-input');
	expect(search?.getAttribute('aria-label')).toBe('Search Demo moves');
});
```

- [ ] **Step 2: Run the test to verify it fails**

Run: `npx nx test ui-pokedex --testPathPattern=data-table.component.spec.ts`
Expected: FAIL — no `.search-input` element exists yet.

- [ ] **Step 3: Add the input**

In the `.toolbar` div, before the Columns/Filters panel triggers:

```html
<input
	type="search"
	class="search-input"
	[attr.aria-label]="'Search ' + label()"
	[value]="globalFilter()"
	(input)="globalFilter.set($any($event.target).value)"
/>
```

Add the matching style, alongside the other `.toolbar` children:

```scss
.search-input {
	padding: var(--s-1) var(--s-3);
	border: 1px solid var(--line);
	border-radius: var(--r-pill);
	background: var(--surface);
	color: var(--ink);
	font-size: var(--fs-xs);
}

.search-input:focus-visible {
	outline: 2px solid var(--accent);
	outline-offset: 2px;
}
```

Change the `.toolbar`'s `flex-direction` from `column` to `row` with `flex-wrap: wrap` and `align-items: center`, since it now holds three controls side by side rather than stacking one disclosure under the grid.

- [ ] **Step 4: Run the test to verify it passes**

Run: `npx nx test ui-pokedex --testPathPattern=data-table.component.spec.ts`
Expected: PASS.

- [ ] **Step 5: Commit**

```bash
git add libs/ui-pokedex/src/lib/data-table/
git commit -m "feat(ui-pokedex): add the global search input"
```

---

## Task 6: Opt-in row virtualization

**Files:**
- Modify: `libs/ui-pokedex/src/lib/data-table/data-table.component.ts`
- Modify: `libs/ui-pokedex/src/lib/data-table/data-table.component.spec.ts`

**Interfaces:**
- Consumes: nothing new from earlier tasks in this plan.
- Produces: three new inputs on `UiDataTableComponent` — `virtualScroll = input(false)`, `rowHeight = input(44)`, `viewportHeight = input('480px')` — and a shared `<ng-template #rowTemplate>` referenced by both the virtualized and non-virtualized rendering paths. Default (`virtualScroll` unset) is behaviorally identical to today; every existing test in this file must keep passing unmodified.

- [ ] **Step 1: Write the failing test**

```ts
// add to the imports at the top of data-table.component.spec.ts
import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';

// extend DataTableHostComponent's template with the two new bindings:
// [virtualScroll]="virtualScroll()" [rowHeight]="24" [viewportHeight]="'96px'"
// and its class with:
// readonly virtualScroll = signal(false);
```

```ts
describe('UiDataTableComponent — virtualization', () => {
	it('does not render a viewport when virtualScroll is false (the default)', () => {
		expect(element().querySelector('cdk-virtual-scroll-viewport')).toBeNull();
	});

	it('renders every row through a real DOM structure when virtualScroll is false', () => {
		// Unchanged from every earlier test in this file — this is a guard that Task 6 did not
		// alter the default path.
		expect(nameColumn()).toEqual(['Ember', 'Aerial Ace', 'Flamethrower']);
	});

	it('renders inside a cdk-virtual-scroll-viewport when virtualScroll is true, keeping the header outside it', () => {
		host.virtualScroll.set(true);
		fixture.detectChanges();

		const viewport = element().querySelector('cdk-virtual-scroll-viewport');
		expect(viewport).not.toBeNull();
		expect(viewport?.querySelector('[role="columnheader"]')).toBeNull();
		expect(element().querySelector('[role="columnheader"]')).not.toBeNull();
	});

	it('sizes the viewport from the rowHeight and viewportHeight inputs', () => {
		host.virtualScroll.set(true);
		fixture.detectChanges();

		const viewportDebugElement = fixture.debugElement.query((debugElement) => debugElement.name === 'cdk-virtual-scroll-viewport');
		const viewportInstance = viewportDebugElement.injector.get(CdkVirtualScrollViewport);

		expect(viewportInstance.getItemSize()).toBe(24);
		expect((viewportDebugElement.nativeElement as HTMLElement).style.height).toBe('96px');
	});

	it('still reflects sorting and filtering while virtualized', () => {
		host.virtualScroll.set(true);
		host.sorting.set([{ id: 'power', desc: true }]);
		fixture.detectChanges();

		expect(nameColumn()).toEqual(['Flamethrower', 'Aerial Ace', 'Ember']);
	});
});
```

- [ ] **Step 2: Run the test to verify it fails**

Run: `npx nx test ui-pokedex --testPathPattern=data-table.component.spec.ts`
Expected: FAIL — `virtualScroll`/`rowHeight`/`viewportHeight` are not recognized inputs, and no `cdk-virtual-scroll-viewport` is ever rendered.

- [ ] **Step 3: Add the inputs and restructure the body markup**

Add to the imports: `import { CdkVirtualScrollViewport, ScrollingModule } from '@angular/cdk/scrolling';` and add `ScrollingModule` to the component's `imports` array (alongside the existing `FlexRender`).

Add the three inputs alongside `rowVariant`/`emptyLabel`:

```ts
/** Opt in per table — a small kit demo or a ~20-row moves list gets no benefit and does not pay for it. */
readonly virtualScroll = input(false);

/** Every row must be the same height for CDK's fixed-size strategy; the kit does not support variable-height rows. */
readonly rowHeight = input(44);

/** A CSS length. The viewport needs an explicit height to know how many rows to render. */
readonly viewportHeight = input('480px');

protected trackRowById = (_index: number, row: { id: string }): string => row.id;
```

Replace the body's `role="rowgroup"` block (the second one, holding the data rows and the `@empty` case) with a shared row template plus a branch on `virtualScroll()`:

```html
<ng-template #rowTemplate let-row>
	<div class="row" role="row" [class]="variantFor(row.original)">
		@for (cell of row.getVisibleCells(); track cell.id) {
			<div class="cell" role="cell" [class]="alignmentClass(cell.column)">
				<ng-container *flexRenderCell="cell; let rendered">{{ rendered }}</ng-container>
			</div>
		}
	</div>
</ng-template>

@if (virtualScroll()) {
	<cdk-virtual-scroll-viewport [itemSize]="rowHeight()" [style.height]="viewportHeight()">
		<div role="rowgroup">
			@if (table.getFilteredRowModel().rows.length > 0) {
				<div *cdkVirtualFor="let row of table.getFilteredRowModel().rows; trackBy: trackRowById">
					<ng-container [ngTemplateOutlet]="rowTemplate" [ngTemplateOutletContext]="{ $implicit: row }" />
				</div>
			} @else {
				<div class="row empty-row" role="row">
					<div class="cell empty-cell" role="cell" [attr.aria-colspan]="table.getVisibleLeafColumns().length">{{ emptyLabel() }}</div>
				</div>
			}
		</div>
	</cdk-virtual-scroll-viewport>
} @else {
	<div role="rowgroup">
		@for (row of table.getFilteredRowModel().rows; track row.id) {
			<ng-container [ngTemplateOutlet]="rowTemplate" [ngTemplateOutletContext]="{ $implicit: row }" />
		} @empty {
			<div class="row empty-row" role="row">
				<div class="cell empty-cell" role="cell" [attr.aria-colspan]="table.getVisibleLeafColumns().length">{{ emptyLabel() }}</div>
			</div>
		}
	</div>
}
```

`NgTemplateOutlet` needs an import: add `import { NgTemplateOutlet } from '@angular/common';` and add it to the component's `imports` array.

Add a note above the new markup (this is a real, accepted deviation, not an oversight — write it down the way the rest of this file documents its ARIA compromises):

```ts
/**
 * Virtualized rows sit inside CDK's own wrapper elements (`cdk-virtual-scroll-viewport`'s content
 * wrapper, plus the `*cdkVirtualFor` host div), which are not `role="rowgroup"`/`role="row"`
 * themselves. This is the same category of honest cost `docs/table-plan.md` already accepts for
 * the hand-maintained ARIA roles elsewhere in this file: a windowed `role="table"` is not spec-pure
 * ARIA, and nothing here pretends otherwise. Do not add `role="presentation"` to CDK's own elements
 * as a workaround — that hides real rows from assistive tech rather than fixing the structure.
 */
```

- [ ] **Step 4: Run the test to verify it passes**

Run: `npx nx test ui-pokedex --testPathPattern=data-table.component.spec.ts`
Expected: PASS — including every pre-existing test, since the non-virtualized branch is line-for-line equivalent to what was there before (same `.row`/`.cell` markup, now reached through `rowTemplate` instead of being written twice).

- [ ] **Step 5: Run the full suite one more time**

Run: `npx nx test ui-pokedex`
Expected: PASS across every spec file this plan has touched.

- [ ] **Step 6: Commit**

```bash
git add libs/ui-pokedex/src/lib/data-table/
git commit -m "feat(ui-pokedex): add opt-in row virtualization via CDK scrolling"
```

---

## Task 7: Kit demo

**Files:**
- Modify: `libs/domain-pokedex/src/lib/features/kit/kit.component.ts`

**Interfaces:**
- Consumes: everything from Tasks 1–6 (`columnFilters`, `globalFilter`, `virtualScroll`, `rowHeight`, `viewportHeight`, the Filters panel).
- Produces: nothing new — this is the visual proof, per kit rule 7, that the whole feature set works together in both themes, and it is the first place anyone can eyeball a checkbox-set filter, a range filter, and a virtualized 1,000+ row table before Phase 5 builds the real Pokédex shell on top of it.

- [ ] **Step 1: Extend `moveColumns` with filter metadata**

```ts
const moveColumns = moveColumnHelper.columns([
	moveColumnHelper.accessor('name', { header: 'Move', sortFn: 'alphanumeric' }),
	moveColumnHelper.accessor('type', { header: 'Type', sortFn: 'alphanumeric', filterFn: 'arrHas', meta: { filterVariant: 'set' } }),
	moveColumnHelper.accessor('power', { header: 'Power', sortFn: 'basic', filterFn: 'inNumberRange', meta: { align: 'end', filterVariant: 'range' } }),
	moveColumnHelper.accessor('accuracy', { header: 'Accuracy', sortFn: 'basic', meta: { align: 'end' } }),
	moveColumnHelper.display({ id: 'actions', header: 'Actions', cell: () => 'add' }),
]);
```

- [ ] **Step 2: Add a second, larger table demonstrating virtualization**

```ts
interface KitRoster {
	id: number;
	name: string;
	generation: number;
	power: number;
}

const rosterColumnHelper = createDataTableColumns<KitRoster>();
const rosterColumns = rosterColumnHelper.columns([
	rosterColumnHelper.accessor('name', { header: 'Name', sortFn: 'alphanumeric' }),
	rosterColumnHelper.accessor('generation', { header: 'Generation', sortFn: 'basic', filterFn: 'arrHas', meta: { align: 'end', filterVariant: 'set' } }),
	rosterColumnHelper.accessor('power', { header: 'Power', sortFn: 'basic', filterFn: 'inNumberRange', meta: { align: 'end', filterVariant: 'range' } }),
]);

/** 1,200 synthetic rows — in the neighborhood of the real Pokédex's 1,351, for an honest demo of virtualization. */
function buildKitRoster(): KitRoster[] {
	return Array.from({ length: 1200 }, (_, index) => ({
		id: index + 1,
		name: `Roster Mon ${index + 1}`,
		generation: (index % 9) + 1,
		power: 30 + ((index * 7) % 140),
	}));
}
```

Add to the class body:

```ts
protected readonly rosterColumns = rosterColumns;
protected readonly rosterRows: KitRoster[] = buildKitRoster();
protected readonly rosterSorting = signal<SortingState>([]);
```

Add to the template, after the existing `pokedex-data-table` block:

```html
<pokedex-section-heading label="Data table — virtualized, filtered" />
<pokedex-data-table
	[data]="rosterRows"
	[columns]="rosterColumns"
	[(sorting)]="rosterSorting"
	[virtualScroll]="true"
	[rowHeight]="40"
	[viewportHeight]="'400px'"
	label="Roster (demo)"
	emptyLabel="No rows match."
/>
```

- [ ] **Step 3: Confirm it builds and run the app to eyeball both themes**

Run: `npx nx build ui-pokedex` — Expected: no errors.
Run: `npx nx serve pokemon-center` (or whatever serves the app hosting this kit route) and visit the pokedex kit page; confirm the roster table scrolls smoothly, the Filters panel's checkbox list and range inputs work, the search box narrows the moves table, and nothing regresses visually in either theme. This step is a manual check, not an automated one — jsdom does no layout, so this is the only place virtualization's actual *appearance* gets verified, matching the caveat `docs/table-plan.md` already states about its own spike.

- [ ] **Step 4: Commit**

```bash
git add libs/domain-pokedex/src/lib/features/kit/kit.component.ts
git commit -m "docs(kit): demo the data table's filtering, faceting, and virtualization"
```

---

## Self-Review Notes

- **Spec coverage:** every subsection of `docs/table-plan.md` Phase 5's "Filtering and faceting" and "Virtualization" is covered — `columnFilteringFeature`/`columnFacetingFeature`/`globalFilteringFeature` (Task 1), the controlled `columnFilters`/`globalFilter` models (Task 2), the Filters panel with `'set'`/`'range'` variants (Task 4), the search box (Task 5), and CDK-based virtualization with the no-content-based-track and header-outside-viewport constraints honored (Task 6). Task 3 is not in the spec directly but is called out in this plan's own rationale (file size) and is a prerequisite for Task 4 landing cleanly.
- **Not in this plan, by design:** the master-detail shell, the extended `PokemonList` GraphQL query, and the cross-entity search (Phase 5 and 5b's domain-pokedex work) — each depends on this plan's finished API surface (`columnFilters`, `globalFilter`, `virtualScroll`, `filterVariant`) and gets its own plan once this one ships, per the brainstorming session's scope decision.
- **Type consistency check:** `DataTableColumnMeta.filterVariant`, `Column<DataTableFeatures, TRow>`, and the `'arrHas' | 'arrIncludesSome' | 'inNumberRange'` filter function names are used identically across Tasks 1, 4, and 7 — no renamed field crept in between tasks.
