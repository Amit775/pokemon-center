# AG Grid Migration Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.
>
> **ALSO REQUIRED:** Invoke the `ag-dev` skill before writing any AG Grid code. It grounds you in the APIs that exist in the version in use rather than recalled ones, and points at the versioned docs. Do not write AG Grid code from memory.

**Goal:** Replace TanStack Table with AG Grid Enterprise across every table in the project, delivering the Columns Tool Panel, the Filters Tool Panel, and the full Champions custom filter set.

**Architecture:** A thin shared wrapper (`pokedex-data-grid`) in `libs/ui-pokedex` owns module registration, licence, theme and shared defaults. Column-bound filters become AG Grid column filters (custom components, plus the built-in Set Filter for Abilities). Cross-cutting Champions filters (matchup, counter-target, move-learner, owned-only, Mega) become the External Filter API driven from a custom tool panel. Column/filter persistence and shareable links move onto AG Grid Grid State.

**Tech Stack:** AG Grid 36.1.0 (`ag-grid-angular`, `ag-grid-community`, `ag-grid-enterprise`), Angular 22 (standalone, signals, zoneless), Nx, Jest 30, pnpm.

**Spec:** `docs/superpowers/specs/2026-09-03-ag-grid-migration-design.md`

## Global Constraints

- **AG Grid version is `36.1.0`** for all three packages, pinned identically.
- **Enterprise is required and is a paid licence ($999 USD/developer).** Development runs on the free 30-day trial. The licence key is supplied via the `AG_GRID_LICENSE_KEY` injection token and **must never be committed**.
- **Theming API only.** Use the `theme` grid option with a `themeQuartz.withParams(...)` object. **Never** import `ag-grid.css` / `ag-theme-quartz.css` or apply an `ag-theme-*` CSS class — that is the pre-v33 legacy path. AG Grid's own v36 Getting Started page still shows the legacy imports; it is stale, ignore it.
- **Angular outputs drop the `on` prefix**: bind `(gridReady)`, `(stateUpdated)`, `(filterChanged)` — never `(onGridReady)`.
- **Every grid needs an explicit container height.** A container with no intrinsic height renders the grid at zero height.
- **Always supply `getRowId`**, a pure function returning a unique stable string per row.
- **Custom column filters** implement `IFilterDisplayAngularComp` and register as `filter: { component: X, doesFilterPass: (params) => boolean }` (v36 shape — not the older `IFilterAngularComp`).
- **Cell renderers** implement `ICellRendererAngularComp` (`agInit(params)`, `refresh(params): boolean`) and register via `cellRenderer:` plus optional `cellRendererParams`.
- **A feature that silently does nothing is usually an unregistered module, not a wrong API.** Read the browser console first — AG Grid logs `error #200` naming the property and the module it needs.
- All new components: `ChangeDetectionStrategy.OnPush`, standalone, signals. They must be zoneless-safe (this app is zoneless; AG Grid 36 supports it with no extra config, but custom components must hold up their end).
- **Never abbreviate "pokedex"** (no "pedex", no "dex") in any file, selector, class or identifier.
- Naming: new shared layer is `data-grid` / `UiDataGridComponent` / `pokedex-data-grid`, distinct from the outgoing `data-table` / `UiDataTableComponent` / `pokedex-data-table` so both coexist until Task 16.

---

## Phase 0 — Land the in-flight work

### Task 1: Merge the Nuzlocke master-detail branch into main

**Files:**
- Modify: `libs/ui-pokedex/src/index.ts` (conflict resolution only)

**Interfaces:**
- Consumes: nothing.
- Produces: `main` containing `feat/pokedex-master-detail-shell`'s master-detail shell (`libs/domain-pokedex/src/lib/features/pokemon-shell/`), which Task 7 migrates.

- [ ] **Step 1: Confirm the branch state and the expected conflict**

```bash
git checkout main && git pull
git log --oneline main..feat/pokedex-master-detail-shell
git diff --name-only main...feat/pokedex-master-detail-shell
```

Expected: 4 commits; the only file also touched by the other in-flight branch is `libs/ui-pokedex/src/index.ts`.

- [ ] **Step 2: Merge**

```bash
git merge feat/pokedex-master-detail-shell
```

This branch is merged first, so it should apply cleanly. If `libs/ui-pokedex/src/index.ts` conflicts, resolve by keeping the union of exported type names on one line:

```ts
export type { ColumnDef, ColumnFiltersState, ColumnOrderState, SortingState, ColumnVisibilityState } from '@tanstack/angular-table';
```

- [ ] **Step 3: Verify the merged result**

Run: `npx nx run-many --targets=test --projects=domain-pokedex,ui-pokedex --skip-nx-cache`
Run: `npx nx build pokemon-center --skip-nx-cache`
Expected: all green. If tests fail on the merged result, stop and report — do not proceed to Task 2.

- [ ] **Step 4: Commit (only if the merge produced a conflict resolution)**

A clean merge commits itself. If you resolved a conflict:

```bash
git add libs/ui-pokedex/src/index.ts
git commit
```

---

### Task 2: Merge the Champions data-table branch into main

**Files:**
- Modify: `libs/ui-pokedex/src/index.ts` (conflict resolution only)

**Interfaces:**
- Consumes: `main` as left by Task 1.
- Produces: `main` containing the Champions AG-Grid-bound roster work and **this spec and plan document**, which rides in with the merge.

- [ ] **Step 1: Merge**

```bash
git checkout main
git merge feat/champions-pokedex-data-table
```

- [ ] **Step 2: Resolve the known conflict in `libs/ui-pokedex/src/index.ts`**

Both branches added `ColumnFiltersState` to the same export line in different positions. Keep one line with the union:

```ts
export type { ColumnDef, ColumnFiltersState, ColumnOrderState, SortingState, ColumnVisibilityState } from '@tanstack/angular-table';
```

- [ ] **Step 3: Verify the merged result**

Run: `npx nx run-many --targets=test --projects=domain-pokedex,domain-champions,ui-pokedex --skip-nx-cache`
Run: `npx nx lint domain-champions --skip-nx-cache`
Run: `npx nx build pokemon-center --skip-nx-cache`
Expected: all green.

- [ ] **Step 4: Commit the merge**

```bash
git add libs/ui-pokedex/src/index.ts
git commit
```

- [ ] **Step 5: Create the migration branch**

```bash
git checkout -b feat/ag-grid-migration
```

All remaining tasks happen on this branch.

---

## Phase 1 — Foundation

### Task 3: Install AG Grid and wire registration, dev validations and the licence

**Files:**
- Modify: `package.json`
- Create: `libs/ui-pokedex/src/lib/data-grid/data-grid.setup.ts`
- Test: `libs/ui-pokedex/src/lib/data-grid/data-grid.setup.spec.ts`
- Modify: `apps/pokemon-center/src/app/app.config.ts`
- Modify (only if Step 5 proves it necessary): `libs/ui-pokedex/jest.config.ts`, `libs/domain-champions/jest.config.ts`

**Interfaces:**
- Consumes: nothing.
- Produces: `provideDataGrid(): EnvironmentProviders` and `AG_GRID_LICENSE_KEY: InjectionToken<string>`, both exported from `@pokemon-center/ui-pokedex`. Every later task depends on `provideDataGrid()` having run before a grid is created.

- [ ] **Step 1: Install the packages**

```bash
pnpm add ag-grid-angular@36.1.0 ag-grid-community@36.1.0 ag-grid-enterprise@36.1.0
```

- [ ] **Step 2: Write the failing test**

```ts
// libs/ui-pokedex/src/lib/data-grid/data-grid.setup.spec.ts
import { EnvironmentInjector } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { LicenseManager } from 'ag-grid-enterprise';
import { AG_GRID_LICENSE_KEY, provideDataGrid } from './data-grid.setup';

describe('provideDataGrid', () => {
	/** Injecting anything realises the environment injector, which runs its initialisers. */
	function bootstrap(providers: unknown[]): void {
		TestBed.configureTestingModule({ providers: providers as never });
		TestBed.inject(EnvironmentInjector);
	}

	it('applies a supplied licence key', () => {
		const setLicenseKey = jest.spyOn(LicenseManager, 'setLicenseKey').mockImplementation(() => undefined);

		bootstrap([provideDataGrid(), { provide: AG_GRID_LICENSE_KEY, useValue: 'test-key' }]);

		expect(setLicenseKey).toHaveBeenCalledWith('test-key');
	});

	it('applies no licence key when none is configured, leaving the grid in trial mode', () => {
		const setLicenseKey = jest.spyOn(LicenseManager, 'setLicenseKey').mockImplementation(() => undefined);

		bootstrap([provideDataGrid()]);

		expect(setLicenseKey).not.toHaveBeenCalled();
	});

	it('defaults the licence key token to empty, so no key has to be configured to develop', () => {
		bootstrap([provideDataGrid()]);
		expect(TestBed.inject(AG_GRID_LICENSE_KEY)).toBe('');
	});

	it('registers modules only once, however many times it is called', () => {
		const { registerDataGridModules } = jest.requireActual<typeof import('./data-grid.setup')>('./data-grid.setup');

		// The second call must be a no-op; AG Grid warns on duplicate registration.
		expect(() => {
			registerDataGridModules();
			registerDataGridModules();
		}).not.toThrow();
	});

	afterEach(() => jest.restoreAllMocks());
});
```

**Note:** module registration itself is verified behaviourally by Task 5's wrapper test — a grid that renders at all proves `ClientSideRowModelModule` registered. Do not assert against `ModuleRegistry`'s internals here; an assertion that cannot fail is worse than no assertion.

- [ ] **Step 3: Run the test to verify it fails**

Run: `npx nx test ui-pokedex --testFile=data-grid.setup.spec.ts`
Expected: FAIL — `Cannot find module './data-grid.setup'`

- [ ] **Step 4: Write the setup module**

```ts
// libs/ui-pokedex/src/lib/data-grid/data-grid.setup.ts
import { EnvironmentProviders, InjectionToken, inject, isDevMode, provideEnvironmentInitializer } from '@angular/core';
import { AllCommunityModule, ModuleRegistry, enableDevValidations } from 'ag-grid-community';
import { AllEnterpriseModule, LicenseManager } from 'ag-grid-enterprise';

/**
 * AG Grid Enterprise licence key.
 *
 * Empty by default, which runs the grid in trial mode (full features, with a watermark and console
 * warnings once the 30-day trial lapses). Override it in the app's providers from wherever the key
 * is actually kept. **Never commit a key.**
 *
 * Follows the same injection-token-with-a-factory shape as `CHAMPIONS_API_URL`, which is how this
 * codebase configures everything else.
 */
export const AG_GRID_LICENSE_KEY = new InjectionToken<string>('AG_GRID_LICENSE_KEY', {
	providedIn: 'root',
	factory: () => '',
});

let modulesRegistered = false;

/**
 * Module registration is global and must happen exactly once, before any grid is created.
 *
 * TODO: `AllCommunityModule` + `AllEnterpriseModule` register everything, which is right while the
 * feature set is still moving. Narrow to the specific modules actually used (SideBar,
 * ColumnsToolPanel, FiltersToolPanel, SetFilter, ClientSideRowModel, …) once Phase 3 has settled,
 * to cut bundle size.
 */
export function registerDataGridModules(): void {
	if (modulesRegistered) return;
	modulesRegistered = true;

	ModuleRegistry.registerModules([AllCommunityModule, AllEnterpriseModule]);

	// Turns AG Grid's minified `error #200` codes into sentences naming the property and the module
	// it needs. Dev only, so it costs the production bundle nothing.
	if (isDevMode()) enableDevValidations();
}

/** Registers AG Grid's modules and applies the licence key. Call once, in the app's providers. */
export function provideDataGrid(): EnvironmentProviders {
	return provideEnvironmentInitializer(() => {
		registerDataGridModules();

		const licenseKey = inject(AG_GRID_LICENSE_KEY);
		if (licenseKey) LicenseManager.setLicenseKey(licenseKey);
	});
}
```

- [ ] **Step 5: Verify Jest can load AG Grid at all**

Run: `npx nx test ui-pokedex --testFile=data-grid.setup.spec.ts`

If it fails with a syntax error inside `node_modules/ag-grid-*` (an ESM-only build Jest cannot parse), add AG Grid to the existing `transformIgnorePatterns` in **both** `libs/ui-pokedex/jest.config.ts` and `libs/domain-champions/jest.config.ts`, alongside the TanStack entry already there:

```ts
transformIgnorePatterns: ['node_modules/(?!.*(@tanstack|ag-grid|ag-charts|\\.mjs$))'],
```

If it passes without that change, **do not add it** — AG Grid ships a CommonJS build and does not need it. Record which outcome you got in your report; later tasks need to know.

Expected: PASS (2–3 tests).

- [ ] **Step 6: Export from the library barrel**

```ts
// libs/ui-pokedex/src/index.ts — add alongside the existing exports
export * from './lib/data-grid/data-grid.setup';
```

- [ ] **Step 7: Register in the application**

```ts
// apps/pokemon-center/src/app/app.config.ts — add the import and the provider
import { provideDataGrid } from '@pokemon-center/ui-pokedex';

// …inside providers, after provideZonelessChangeDetection():
		provideDataGrid(),
```

- [ ] **Step 8: Verify and commit**

Run: `npx nx test ui-pokedex --skip-nx-cache`
Run: `npx nx build pokemon-center --skip-nx-cache`

```bash
git add package.json pnpm-lock.yaml libs/ui-pokedex/src apps/pokemon-center/src/app/app.config.ts
git commit -m "feat(ui-pokedex): add AG Grid with module registration, dev validations and licence wiring"
```

---

### Task 4: Theme and shared grid defaults

**Files:**
- Create: `libs/ui-pokedex/src/lib/data-grid/data-grid.theme.ts`
- Create: `libs/ui-pokedex/src/lib/data-grid/data-grid.defaults.ts`
- Test: `libs/ui-pokedex/src/lib/data-grid/data-grid.defaults.spec.ts`

**Interfaces:**
- Consumes: nothing.
- Produces: `pokedexGridTheme` (an AG Grid `Theme`), `pokedexDefaultColDef: ColDef`, and `pokedexSideBar: SideBarDef` — all consumed by Task 5's wrapper.

- [ ] **Step 1: Read the theming parameter reference before writing the theme**

Load `https://www.ag-grid.com/archive/36.1.0/angular-data-grid/theming-parameters/` and find the exact parameter names for: background, foreground, border colour, header background, font family, font size, row height, and accent/selected colour. **Use the names the docs give**, not the ones in the sketch below — the sketch shows the shape and the intent, and the doc page is the authority on spelling.

- [ ] **Step 2: Write the theme**

```ts
// libs/ui-pokedex/src/lib/data-grid/data-grid.theme.ts
import { themeQuartz } from 'ag-grid-community';

/**
 * The one grid theme, built on the Theming API (v33+), never the legacy CSS files.
 *
 * Parameters take CSS values, so they read this project's existing design tokens directly — the
 * grid then follows light/dark and any token change without a second source of truth.
 */
export const pokedexGridTheme = themeQuartz.withParams({
	backgroundColor: 'var(--surface)',
	foregroundColor: 'var(--ink)',
	borderColor: 'var(--line)',
	headerBackgroundColor: 'var(--surface-sunken)',
	accentColor: 'var(--accent, #4f6df5)',
	fontFamily: 'inherit',
});
```

- [ ] **Step 3: Write the defaults**

```ts
// libs/ui-pokedex/src/lib/data-grid/data-grid.defaults.ts
import type { ColDef, SideBarDef } from 'ag-grid-community';

/** Applied to every column of every grid unless a column overrides it. */
export const pokedexDefaultColDef: ColDef = {
	sortable: true,
	resizable: true,
	filter: true,
	floatingFilter: false,
	minWidth: 80,
};

/**
 * The side bar: the Columns and Filters tool panels.
 *
 * Both are Enterprise features — if they render as nothing, read the console for AG Grid's
 * `error #200`, which names the module that is missing rather than the API being wrong.
 */
export const pokedexSideBar: SideBarDef = {
	toolPanels: [
		{
			id: 'columns',
			labelDefault: 'Columns',
			labelKey: 'columns',
			iconKey: 'columns',
			toolPanel: 'agColumnsToolPanel',
		},
		{
			id: 'filters',
			labelDefault: 'Filters',
			labelKey: 'filters',
			iconKey: 'filter',
			toolPanel: 'agFiltersToolPanel',
		},
	],
	position: 'right',
	defaultToolPanel: undefined,
};
```

- [ ] **Step 4: Write the test**

```ts
// libs/ui-pokedex/src/lib/data-grid/data-grid.defaults.spec.ts
import { pokedexDefaultColDef, pokedexSideBar } from './data-grid.defaults';

describe('grid defaults', () => {
	it('makes every column sortable, resizable and filterable by default', () => {
		expect(pokedexDefaultColDef.sortable).toBe(true);
		expect(pokedexDefaultColDef.resizable).toBe(true);
		expect(pokedexDefaultColDef.filter).toBe(true);
	});

	it('offers both the columns and filters tool panels', () => {
		const ids = (pokedexSideBar.toolPanels ?? []).map((panel) => (typeof panel === 'string' ? panel : panel.id));
		expect(ids).toEqual(['columns', 'filters']);
	});

	it('does not open a tool panel by default, so the grid opens at full width', () => {
		expect(pokedexSideBar.defaultToolPanel).toBeUndefined();
	});
});
```

- [ ] **Step 5: Run the test, export, and commit**

Run: `npx nx test ui-pokedex --testFile=data-grid.defaults.spec.ts`
Expected: PASS (3 tests)

Add to `libs/ui-pokedex/src/index.ts`:

```ts
export * from './lib/data-grid/data-grid.theme';
export * from './lib/data-grid/data-grid.defaults';
```

```bash
git add libs/ui-pokedex/src
git commit -m "feat(ui-pokedex): add the shared AG Grid theme and grid defaults"
```

---

### Task 5: The `pokedex-data-grid` wrapper component

**Files:**
- Create: `libs/ui-pokedex/src/lib/data-grid/data-grid.component.ts`
- Test: `libs/ui-pokedex/src/lib/data-grid/data-grid.component.spec.ts`

**Interfaces:**
- Consumes: `pokedexGridTheme`, `pokedexDefaultColDef`, `pokedexSideBar` (Task 4); `registerDataGridModules()` (Task 3).
- Produces: `UiDataGridComponent`, selector `pokedex-data-grid`, with inputs `rowData`, `columnDefs`, `getRowId`, `height`, `initialState`, `sideBar`, `defaultColDef`, `isExternalFilterPresent`, `doesExternalFilterPass`, and outputs `gridReady`, `stateUpdated`. Every table task consumes this.

- [ ] **Step 1: Write the failing test**

```ts
// libs/ui-pokedex/src/lib/data-grid/data-grid.component.spec.ts
import { Component, signal } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import type { ColDef } from 'ag-grid-community';
import { UiDataGridComponent } from './data-grid.component';
import { registerDataGridModules } from './data-grid.setup';

interface DemoRow {
	id: string;
	name: string;
	power: number;
}

const rows: DemoRow[] = [
	{ id: '1', name: 'Ember', power: 40 },
	{ id: '2', name: 'Flamethrower', power: 90 },
];

const columns: ColDef<DemoRow>[] = [{ field: 'name' }, { field: 'power' }];

@Component({
	selector: 'pokedex-data-grid-test-host',
	imports: [UiDataGridComponent],
	template: `<pokedex-data-grid [rowData]="rowData()" [columnDefs]="columnDefs()" [getRowId]="getRowId" />`,
})
class DataGridTestHostComponent {
	readonly rowData = signal(rows);
	readonly columnDefs = signal(columns);
	readonly getRowId = (params: { data: DemoRow }) => params.data.id;
}

describe('UiDataGridComponent', () => {
	beforeEach(() => registerDataGridModules());

	it('renders the grid with the supplied columns', async () => {
		const fixture = TestBed.createComponent(DataGridTestHostComponent);
		fixture.detectChanges();
		await fixture.whenStable();
		fixture.detectChanges();

		const element: HTMLElement = fixture.nativeElement;
		expect(element.querySelector('ag-grid-angular')).not.toBeNull();
		expect(element.textContent).toContain('Ember');
	});

	it('gives the grid container an explicit height, without which AG Grid renders at zero height', () => {
		const fixture = TestBed.createComponent(DataGridTestHostComponent);
		fixture.detectChanges();

		const host = fixture.nativeElement.querySelector('pokedex-data-grid') as HTMLElement;
		expect(getComputedStyle(host).height).not.toBe('0px');
	});
});
```

**If AG Grid does not render rows under jsdom** (it measures the DOM, which jsdom does not lay out), keep the first test's `ag-grid-angular` assertion, drop the `textContent` assertion, and say so in your report. Do not fake a pass — row rendering is verified for real in each table task's manual check and in the browser check at Task 16.

- [ ] **Step 2: Run to verify it fails**

Run: `npx nx test ui-pokedex --testFile=data-grid.component.spec.ts`
Expected: FAIL — `Cannot find module './data-grid.component'`

- [ ] **Step 3: Write the component**

```ts
// libs/ui-pokedex/src/lib/data-grid/data-grid.component.ts
import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';
import type {
	ColDef,
	GetRowIdFunc,
	GridReadyEvent,
	GridState,
	IRowNode,
	SideBarDef,
	StateUpdatedEvent,
} from 'ag-grid-community';
import { pokedexDefaultColDef, pokedexSideBar } from './data-grid.defaults';
import { pokedexGridTheme } from './data-grid.theme';

/**
 * The one grid in the design system.
 *
 * Deliberately thin: AG Grid is the product, and wrapping its API in our own would mean
 * re-implementing and then maintaining a second, worse version of it. This owns only what must be
 * identical everywhere — the theme, the shared defaults, the side bar, and the container height
 * AG Grid needs but cannot supply itself.
 */
@Component({
	selector: 'pokedex-data-grid',
	changeDetection: ChangeDetectionStrategy.OnPush,
	imports: [AgGridAngular],
	template: `
		<ag-grid-angular
			[theme]="theme"
			[rowData]="rowData()"
			[columnDefs]="columnDefs()"
			[defaultColDef]="defaultColDef()"
			[sideBar]="sideBar()"
			[getRowId]="getRowId()"
			[initialState]="initialState()"
			[isExternalFilterPresent]="isExternalFilterPresent()"
			[doesExternalFilterPass]="doesExternalFilterPass()"
			(gridReady)="gridReady.emit($event)"
			(stateUpdated)="stateUpdated.emit($event)"
		/>
	`,
	styles: `
		:host {
			display: block;
			/*
				AG Grid fills its parent under the default domLayout, so a container with no intrinsic
				height renders the grid at zero height. Consumers override the custom property.
			*/
			height: var(--pokedex-grid-height, 600px);
			width: 100%;
		}

		ag-grid-angular {
			height: 100%;
			width: 100%;
		}
	`,
})
export class UiDataGridComponent<TRow> {
	readonly rowData = input.required<TRow[]>();
	readonly columnDefs = input.required<ColDef<TRow>[]>();

	/** Required by AG Grid for correct row identity across data updates. Must be pure and stable. */
	readonly getRowId = input<GetRowIdFunc<TRow> | undefined>(undefined);

	readonly defaultColDef = input<ColDef>(pokedexDefaultColDef);
	readonly sideBar = input<SideBarDef | boolean>(pokedexSideBar);
	readonly initialState = input<GridState | undefined>(undefined);

	/** External Filter API — used by cross-cutting filters that are not bound to a column. */
	readonly isExternalFilterPresent = input<(() => boolean) | undefined>(undefined);
	readonly doesExternalFilterPass = input<((node: IRowNode<TRow>) => boolean) | undefined>(undefined);

	readonly gridReady = output<GridReadyEvent<TRow>>();
	readonly stateUpdated = output<StateUpdatedEvent<TRow>>();

	protected readonly theme = pokedexGridTheme;
}
```

- [ ] **Step 4: Run the test, export, commit**

Run: `npx nx test ui-pokedex --testFile=data-grid.component.spec.ts`
Expected: PASS

Add to `libs/ui-pokedex/src/index.ts`:

```ts
export * from './lib/data-grid/data-grid.component';
```

```bash
git add libs/ui-pokedex/src
git commit -m "feat(ui-pokedex): add the pokedex-data-grid wrapper over ag-grid-angular"
```

---

## Phase 2 — Migrate the tables

Each task in this phase converts one table. They are independent of one another and share a single conversion pattern, given once here:

**Cell component conversion pattern.** A TanStack cell rendered via `flexRenderComponent(X, { inputs: { entry } })` becomes an AG Grid cell renderer:

```ts
// Before (TanStack): a component with signal inputs, rendered via flexRenderComponent
// After (AG Grid): the same component, implementing ICellRendererAngularComp
import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import type { ICellRendererAngularComp } from 'ag-grid-angular';
import type { ICellRendererParams } from 'ag-grid-community';

@Component({
	selector: 'champions-pokedex-name-cell',
	changeDetection: ChangeDetectionStrategy.OnPush,
	imports: [/* unchanged */],
	template: `/* unchanged — read entry() exactly as before */`,
	styles: `/* unchanged */`,
})
export class PokedexNameCellComponent implements ICellRendererAngularComp {
	protected readonly entry = signal<PokedexEntry | null>(null);

	agInit(params: ICellRendererParams<PokedexEntry>): void {
		this.entry.set(params.data ?? null);
	}

	refresh(params: ICellRendererParams<PokedexEntry>): boolean {
		this.entry.set(params.data ?? null);
		return true;
	}
}
```

The template and styles carry over unchanged; only the input mechanism changes — an `input.required<T>()` becomes a `signal<T | null>(null)` written by `agInit`/`refresh`, and the template must tolerate `null` (use `@if (entry(); as entry)`).

### Task 6: Migrate the Champions moves table

**Files:**
- Create: `libs/domain-champions/src/lib/pokedex/moves-grid-columns.ts`
- Create: `libs/domain-champions/src/lib/pokedex/moves-data-grid.component.ts`
- Test: `libs/domain-champions/src/lib/pokedex/moves-data-grid.component.spec.ts`
- Modify: `libs/domain-champions/src/lib/pokedex/move-name-cell.component.ts` (convert to `ICellRendererAngularComp`)
- Create: `libs/domain-champions/src/lib/pokedex/type-chip-cell.component.ts`
- Delete: `libs/domain-champions/src/lib/pokedex/moves-data-table.component.ts`, `libs/domain-champions/src/lib/pokedex/moves-table-preferences.store.ts`
- Modify: whichever component renders `<champions-moves-data-table>` (find it with a search; it is the Pokémon detail page)

**Interfaces:**
- Consumes: `UiDataGridComponent` (Task 5); `DetailMove` from `./move.model`.
- Produces: `MovesDataGridComponent`, selector `champions-moves-data-grid`, input `moves: readonly DetailMove[]`, `isApproximate: boolean`.

- [ ] **Step 1: Find the consumer**

Run: `grep -rn "champions-moves-data-table\|MovesDataTableComponent" libs/domain-champions/src`
Note every file — the template usage must be updated in Step 6.

- [ ] **Step 2: Write the column definitions**

`moves-table-preferences.store.ts` is deleted: AG Grid's Grid State replaces it. Column visibility and order persist via `initialState` + `stateUpdated` in Step 4.

```ts
// libs/domain-champions/src/lib/pokedex/moves-grid-columns.ts
import type { ColDef } from 'ag-grid-community';
import { MoveNameCellComponent } from './move-name-cell.component';
import { TypeChipCellComponent } from './type-chip-cell.component';
import type { DetailMove } from './move.model';

/** Module scope, not a component field — a fresh array on each change detection resets grid state. */
export const movesGridColumns: ColDef<DetailMove>[] = [
	{
		field: 'name',
		headerName: 'Move',
		flex: 3,
		minWidth: 200,
		filter: 'agTextColumnFilter',
		cellRenderer: MoveNameCellComponent,
		autoHeight: true,
	},
	{
		field: 'type',
		headerName: 'Type',
		width: 110,
		filter: 'agSetColumnFilter',
		cellRenderer: TypeChipCellComponent,
	},
	{
		field: 'power',
		headerName: 'Power',
		width: 100,
		type: 'numericColumn',
		filter: 'agNumberColumnFilter',
	},
	{
		field: 'accuracy',
		headerName: 'Accuracy',
		width: 110,
		type: 'numericColumn',
		filter: 'agNumberColumnFilter',
	},
	{
		field: 'pp',
		headerName: 'PP',
		width: 90,
		type: 'numericColumn',
		filter: 'agNumberColumnFilter',
	},
];
```

- [ ] **Step 3: Write the type-chip cell renderer**

```ts
// libs/domain-champions/src/lib/pokedex/type-chip-cell.component.ts
import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import type { ICellRendererAngularComp } from 'ag-grid-angular';
import type { ICellRendererParams } from 'ag-grid-community';
import { TypeChipComponent } from '@pokemon-center/ui-pokedex';

/** One type chip, for a column whose value is a single type slug. */
@Component({
	selector: 'champions-type-chip-cell',
	changeDetection: ChangeDetectionStrategy.OnPush,
	imports: [TypeChipComponent],
	template: `
		@if (type(); as value) {
			<pokedex-type-chip [type]="value" size="sm" />
		}
	`,
})
export class TypeChipCellComponent implements ICellRendererAngularComp {
	protected readonly type = signal<string | null>(null);

	agInit(params: ICellRendererParams<unknown, string>): void {
		this.type.set(params.value ?? null);
	}

	refresh(params: ICellRendererParams<unknown, string>): boolean {
		this.type.set(params.value ?? null);
		return true;
	}
}
```

- [ ] **Step 4: Write the grid component**

```ts
// libs/domain-champions/src/lib/pokedex/moves-data-grid.component.ts
import { ChangeDetectionStrategy, Component, computed, input, signal } from '@angular/core';
import type { GetRowIdFunc, GridState, StateUpdatedEvent } from 'ag-grid-community';
import { UiDataGridComponent } from '@pokemon-center/ui-pokedex';
import { movesGridColumns } from './moves-grid-columns';
import type { DetailMove } from './move.model';

const STATE_KEY = 'pokemon-center.champions-moves-grid.v1';

/** A Pokémon's legal moves. Column choices persist across Pokémon; the sort deliberately does not. */
@Component({
	selector: 'champions-moves-data-grid',
	changeDetection: ChangeDetectionStrategy.OnPush,
	imports: [UiDataGridComponent],
	template: `
		@if (changedCount() > 0) {
			<p class="lead"><strong>{{ changedCount() }}</strong> of these differ from the main series.</p>
		}

		<pokedex-data-grid
			[rowData]="rows()"
			[columnDefs]="columns"
			[getRowId]="getRowId"
			[initialState]="initialState"
			(stateUpdated)="persistState($event)"
		/>

		@if (isApproximate()) {
			<p class="caveat">
				This learnset was supplemented from recent main-series games where the Champions data had gaps,
				so it may be slightly generous. Moves shown as changed are still accurate.
			</p>
		}
	`,
	styles: `
		:host {
			display: block;
			padding: var(--s-4, 1rem);
			--pokedex-grid-height: 32rem;
		}

		.lead {
			margin: 0 0 var(--s-3, 0.75rem);
			font-size: var(--fs-sm, 0.875rem);
		}

		.caveat {
			margin-top: var(--s-3, 0.75rem);
			font-size: var(--fs-xs, 0.75rem);
			color: var(--ink-muted);
			line-height: 1.5;
			max-width: 62ch;
		}
	`,
})
export class MovesDataGridComponent {
	readonly moves = input.required<readonly DetailMove[]>();
	readonly isApproximate = input(false);

	protected readonly columns = movesGridColumns;
	protected readonly rows = computed(() => [...this.moves()]);
	protected readonly changedCount = computed(() => this.moves().filter((move) => move.isOverridden).length);

	protected readonly getRowId: GetRowIdFunc<DetailMove> = (params) => params.data.name;

	/**
	 * Column visibility and order persist; the sort does not, because it is a per-Pokémon question.
	 * Grid State replaces the hand-rolled preferences store this component used to need.
	 */
	protected readonly initialState: GridState | undefined = readState();

	protected persistState(event: StateUpdatedEvent<DetailMove>): void {
		const { columnVisibility, columnOrder, columnSizing } = event.state;
		try {
			localStorage.setItem(STATE_KEY, JSON.stringify({ columnVisibility, columnOrder, columnSizing }));
		} catch {
			// A browser with storage disabled loses the preference, which is not worth an error.
		}
	}
}

function readState(): GridState | undefined {
	try {
		const raw = localStorage.getItem(STATE_KEY);
		return raw ? (JSON.parse(raw) as GridState) : undefined;
	} catch {
		return undefined;
	}
}
```

- [ ] **Step 5: Convert `move-name-cell.component.ts`**

Apply the conversion pattern given at the top of Phase 2: implement `ICellRendererAngularComp`, replace the `move = input.required<DetailMove>()` with a `signal<DetailMove | null>(null)` set from `agInit`/`refresh`, and guard the template with `@if (move(); as currentMove)`. Template content and styles are unchanged.

- [ ] **Step 6: Write the test**

```ts
// libs/domain-champions/src/lib/pokedex/moves-data-grid.component.spec.ts
import { Component, signal } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { registerDataGridModules } from '@pokemon-center/ui-pokedex';
import { MovesDataGridComponent } from './moves-data-grid.component';
import type { DetailMove } from './move.model';

const moves: DetailMove[] = [
	{
		id: 52,
		name: 'Ember',
		type: 'fire',
		power: 40,
		accuracy: 100,
		pp: 25,
		priority: 0,
		flags: ['protect', 'mirror'],
		effectText: 'May burn the target.',
		effectChance: 10,
		isOverridden: false,
	},
	{
		id: 53,
		name: 'Flamethrower',
		type: 'fire',
		power: 90,
		accuracy: 100,
		pp: 15,
		priority: 0,
		flags: ['protect', 'mirror'],
		effectText: 'May burn the target.',
		effectChance: 10,
		isOverridden: true,
	},
];

@Component({
	selector: 'champions-moves-grid-test-host',
	imports: [MovesDataGridComponent],
	template: `<champions-moves-data-grid [moves]="moves()" />`,
})
class MovesGridTestHostComponent {
	readonly moves = signal(moves);
}

describe('MovesDataGridComponent', () => {
	beforeEach(() => registerDataGridModules());

	it('renders a grid', () => {
		const fixture = TestBed.createComponent(MovesGridTestHostComponent);
		fixture.detectChanges();
		expect(fixture.nativeElement.querySelector('ag-grid-angular')).not.toBeNull();
	});

	it('counts the moves that differ from the main series', () => {
		const fixture = TestBed.createComponent(MovesGridTestHostComponent);
		fixture.detectChanges();
		expect(fixture.nativeElement.textContent).toContain('1');
	});
});
```

- [ ] **Step 7: Update the consumer, delete the old files, verify, commit**

Replace `<champions-moves-data-table [moves]="…" [isApproximate]="…" />` with `<champions-moves-data-grid …>` in the file(s) found in Step 1, updating the import.

```bash
git rm libs/domain-champions/src/lib/pokedex/moves-data-table.component.ts
git rm libs/domain-champions/src/lib/pokedex/moves-table-preferences.store.ts
```

Run: `npx nx test domain-champions --skip-nx-cache`
Run: `npx nx lint domain-champions --skip-nx-cache`

```bash
git add -A libs/domain-champions/src
git commit -m "refactor(domain-champions): move the moves table onto AG Grid"
```

---

### Task 7: Migrate the Nuzlocke master-detail shell

**Files:**
- Create: `libs/domain-pokedex/src/lib/features/pokemon-shell/pokemon-grid-columns.ts`
- Modify: `libs/domain-pokedex/src/lib/features/pokemon-shell/pokemon-shell.component.ts`, `.html`
- Modify: `libs/domain-pokedex/src/lib/features/pokemon-shell/pokemon-name-cell.component.ts`, `pokemon-types-cell.component.ts` (convert to `ICellRendererAngularComp`)
- Modify: `libs/domain-pokedex/src/lib/features/pokemon-shell/pokemon-shell.component.spec.ts`
- Delete: `libs/domain-pokedex/src/lib/features/pokemon-shell/pokemon-columns.ts`, `pokemon-columns.spec.ts`

**Interfaces:**
- Consumes: `UiDataGridComponent`; `PokemonRow`/`toPokemonRow` (keep them — only the column definitions change).
- Produces: nothing new for other tasks.

- [ ] **Step 1: Read the existing column definitions and shell**

Read `pokemon-columns.ts` and `pokemon-shell.component.ts`/`.html` in full. The shell's master-detail layout, its `selectedId`/`rowVariant` route-driven selection, and its `<router-outlet>` detail pane all stay — only the table changes.

- [ ] **Step 2: Write the AG Grid column definitions**

Port each TanStack column to a `ColDef<PokemonRow>`, preserving field, header, sort behaviour and cell component. Numeric stat columns get `type: 'numericColumn'` and `filter: 'agNumberColumnFilter'`; the types column gets `filter: 'agSetColumnFilter'`; the name column keeps its cell renderer and gets `filter: 'agTextColumnFilter'`.

- [ ] **Step 3: Convert the two cell components**

Apply the Phase 2 conversion pattern to `pokemon-name-cell.component.ts` and `pokemon-types-cell.component.ts`.

- [ ] **Step 4: Replace the table in the shell template**

In `pokemon-shell.component.html`, replace the `<pokedex-data-table …>` block with:

```html
<pokedex-data-grid
	[rowData]="rows()"
	[columnDefs]="columns"
	[getRowId]="getRowId"
	(gridReady)="onGridReady($event)"
/>
```

Row selection currently comes from the route (the name cell is a `routerLink`), so it needs no grid wiring — keep that behaviour. Set `--pokedex-grid-height: calc(100vh - 160px)` on the list pane in the component's SCSS, replacing the old `viewportHeight` input.

- [ ] **Step 5: Update the spec**

The existing spec asserts row count, the empty-detail placeholder, the `marked` selected row, and the tools navigation. Keep the placeholder and navigation assertions unchanged. Replace the row-count and virtualisation assertions with a `ag-grid-angular` presence assertion, and note in your report that row-level assertions move to the browser check in Task 16 (AG Grid measures the DOM, which jsdom does not lay out).

- [ ] **Step 6: Verify and commit**

Run: `npx nx test domain-pokedex --skip-nx-cache`
Run: `npx nx build pokemon-center --skip-nx-cache`

```bash
git rm libs/domain-pokedex/src/lib/features/pokemon-shell/pokemon-columns.ts libs/domain-pokedex/src/lib/features/pokemon-shell/pokemon-columns.spec.ts
git add -A libs/domain-pokedex/src
git commit -m "refactor(domain-pokedex): move the master-detail shell onto AG Grid"
```

---

### Task 8: Migrate the Champions roster

**Files:**
- Create: `libs/domain-champions/src/lib/pokedex/pokedex-grid-columns.ts`
- Modify: `libs/domain-champions/src/lib/pokedex/roster.component.ts`, `roster.component.spec.ts`
- Modify: `pokedex-name-cell.component.ts`, `pokedex-ability-cell.component.ts`, `pokedex-actions-cell.component.ts`, `pokedex-type-list-cell.component.ts` (convert to `ICellRendererAngularComp`)
- Delete: `libs/domain-champions/src/lib/pokedex/pokedex-columns.ts`, `pokedex-columns.spec.ts`

**Interfaces:**
- Consumes: `UiDataGridComponent`; `PokedexEntry`; `PokedexStore`.
- Produces: `pokedexGridColumns: ColDef<PokedexEntry>[]` — Phase 3 attaches custom filters to these columns.

- [ ] **Step 1: Convert the four cell components**

Apply the Phase 2 conversion pattern to all four. Their templates, styles, store injections and computeds are unchanged; only the input mechanism changes.

- [ ] **Step 2: Write the column definitions**

```ts
// libs/domain-champions/src/lib/pokedex/pokedex-grid-columns.ts
import type { ColDef } from 'ag-grid-community';
import type { PokedexEntry } from './pokedex-filter';
import { PokedexAbilityCellComponent } from './pokedex-ability-cell.component';
import { PokedexActionsCellComponent } from './pokedex-actions-cell.component';
import { PokedexNameCellComponent } from './pokedex-name-cell.component';
import { PokedexTypeListCellComponent } from './pokedex-type-list-cell.component';

/** Module scope, not a component field — a fresh array on each change detection resets grid state. */
export const pokedexGridColumns: ColDef<PokedexEntry>[] = [
	{
		field: 'name',
		headerName: 'Pokémon',
		flex: 2,
		minWidth: 220,
		filter: 'agTextColumnFilter',
		cellRenderer: PokedexNameCellComponent,
		autoHeight: true,
	},
	{
		// Phase 3 replaces this with the two-mode custom type filter.
		colId: 'types',
		headerName: 'Types',
		width: 140,
		valueGetter: (params) => params.data?.types ?? [],
		filter: 'agSetColumnFilter',
		sortable: false,
		cellRenderer: PokedexTypeListCellComponent,
	},
	{
		colId: 'abilities',
		headerName: 'Abilities',
		flex: 1,
		minWidth: 160,
		valueGetter: (params) => params.data?.abilityNames ?? [],
		filter: 'agSetColumnFilter',
		sortable: false,
		cellRenderer: PokedexAbilityCellComponent,
		autoHeight: true,
	},
	...statColumn('hp', 'HP'),
	...statColumn('attack', 'Attack'),
	...statColumn('defense', 'Defense'),
	...statColumn('specialAttack', 'Sp. Atk'),
	...statColumn('specialDefense', 'Sp. Def'),
	...statColumn('speed', 'Speed'),
	...statColumn('total', 'Total'),
	{
		colId: 'actions',
		headerName: 'Actions',
		width: 150,
		sortable: false,
		filter: false,
		suppressHeaderMenuButton: true,
		cellRenderer: PokedexActionsCellComponent,
	},
];

/** The seven numeric columns are identical but for their key and label. */
function statColumn(key: keyof PokedexEntry['baseStats'], headerName: string): ColDef<PokedexEntry>[] {
	return [
		{
			colId: key,
			headerName,
			width: 100,
			type: 'numericColumn',
			valueGetter: (params) => params.data?.baseStats[key],
			// Phase 3 replaces this with the landmark-seeded range filter.
			filter: 'agNumberColumnFilter',
		},
	];
}
```

**A set filter over an array-valued column:** AG Grid's Set Filter treats an array cell value as one entry unless told otherwise. Read `https://www.ag-grid.com/archive/36.1.0/angular-data-grid/filter-set-filter-list/` for `keyCreator` / `filterParams.valueFormatter`, and supply a `keyCreator` on the Types and Abilities columns so each element is faceted separately. This is the AG Grid equivalent of the `getUniqueValues` trap the TanStack version hit.

- [ ] **Step 3: Rewrite the roster component's template**

Replace the `<pokedex-data-table …>` block with:

```html
<pokedex-data-grid
	[rowData]="entries()"
	[columnDefs]="columns"
	[getRowId]="getRowId"
/>
```

Keep `entries()` (base forms only), the loading skeleton, the error state, the masthead and `<champions-compare-tray />` exactly as they are. Drop the `sorting`/`columnFilters`/`globalFilter` signals — AG Grid owns that state now. Add `--pokedex-grid-height: calc(100vh - 14rem);` to the host styles and:

```ts
protected readonly columns = pokedexGridColumns;
protected readonly getRowId: GetRowIdFunc<PokedexEntry> = (params) => params.data.slug;
```

- [ ] **Step 4: Update the spec**

Keep the base-form/Mega-exclusion, loading, error and "no old filter sidebar" tests. Replace the 11-column-header and row-count assertions with an `ag-grid-angular` presence assertion plus a `pokedexGridColumns.length` assertion (a pure-data check that still catches a dropped column), and note the move in your report.

- [ ] **Step 5: Verify and commit**

Run: `npx nx test domain-champions --skip-nx-cache`
Run: `npx nx lint domain-champions --skip-nx-cache`

```bash
git rm libs/domain-champions/src/lib/pokedex/pokedex-columns.ts libs/domain-champions/src/lib/pokedex/pokedex-columns.spec.ts
git add -A libs/domain-champions/src
git commit -m "refactor(domain-champions): move the roster onto AG Grid"
```

---

### Task 9: Migrate the kit demo page

**Files:**
- Modify: `libs/domain-pokedex/src/lib/features/kit/kit.component.ts`

**Interfaces:**
- Consumes: `UiDataGridComponent`.
- Produces: nothing.

- [ ] **Step 1: Read the two grids in the kit page**

Both currently use `pokedex-data-table` with `createDataTableColumns` helpers (`KitMove`, `KitRoster`).

- [ ] **Step 2: Convert both to `pokedex-data-grid`**

Replace the two column helper blocks with plain `ColDef<KitMove>[]` / `ColDef<KitRoster>[]` arrays at module scope, and both template usages with `<pokedex-data-grid [rowData]="…" [columnDefs]="…" [getRowId]="…" />`. Keep the demo data and the surrounding kit prose unchanged. Give each grid a `--pokedex-grid-height` of `20rem`.

- [ ] **Step 3: Verify and commit**

Run: `npx nx test domain-pokedex --skip-nx-cache`
Run: `npx nx build pokemon-center --skip-nx-cache`

```bash
git add libs/domain-pokedex/src/lib/features/kit/kit.component.ts
git commit -m "refactor(domain-pokedex): move the kit demo grids onto AG Grid"
```

---

## Phase 3 — The Champions custom filters

The old sidebar's sub-components are still on disk and unused: `type-picker.component.ts`, `stat-range.component.ts`, `saved-sets.component.ts`. **Reuse them** — they are the tested UI for exactly these controls. The deleted sidebar that wired them together is recoverable at `git show e2314fea:libs/domain-champions/src/lib/pokedex/pokedex-filters.component.ts` and is the reference for behaviour.

The predicates all already exist as tested pure functions in `pokedex-filter.ts` (`passesMatchup`, `matchesFilters`, `isFullRange`) and `champions-engine` (`counterScore`, `isAnswer`, `typeEffectiveness`). **Reuse them too** — this phase is about presentation and wiring, not re-deriving battle maths.

### Task 10: The two-mode Types column filter

**Files:**
- Create: `libs/domain-champions/src/lib/pokedex/filters/type-column-filter.component.ts`
- Test: `libs/domain-champions/src/lib/pokedex/filters/type-column-filter.component.spec.ts`
- Modify: `libs/domain-champions/src/lib/pokedex/pokedex-grid-columns.ts`

**Interfaces:**
- Consumes: `PokedexStore.types()`; `type-picker.component.ts`; `passesTypes` semantics from `pokedex-filter.ts`.
- Produces: `TypeColumnFilterComponent` and a filter model `{ types: string[]; mode: 'exact' | 'any' }`.

- [ ] **Step 1: Read the custom filter documentation**

Load `https://www.ag-grid.com/archive/36.1.0/angular-data-grid/component-filter/`. Note the v36 shape: implement `IFilterDisplayAngularComp`, register as `filter: { component, doesFilterPass }`, and push model changes through the `onModelChange` callback supplied on `FilterDisplayParams`.

- [ ] **Step 2: Write the failing test**

Assert: single-click selects a type in `exact` mode and caps the selection at two; double-click switches to `any` mode with no cap; the emitted model matches `{ types, mode }`; and `doesFilterPass` reproduces the old `passesTypes` semantics (one chip in `exact` mode matches mono-types only; `any` matches at least one).

- [ ] **Step 3: Write the component**

Wrap the existing `<champions-type-picker>` and translate its `(picked)`/`(expand)` outputs into `onModelChange({ types, mode })`.

- [ ] **Step 4: Register it on the Types column**

```ts
	{
		colId: 'types',
		headerName: 'Types',
		// …
		filter: {
			component: TypeColumnFilterComponent,
			doesFilterPass: ({ model, node }) =>
				model.mode === 'any'
					? model.types.some((type) => node.data.types.includes(type))
					: node.data.types.length === model.types.length && model.types.every((type) => node.data.types.includes(type)),
		},
	},
```

- [ ] **Step 5: Verify and commit**

Run: `npx nx test domain-champions --testFile=type-column-filter.component.spec.ts`

```bash
git add libs/domain-champions/src
git commit -m "feat(domain-champions): add the two-mode type column filter"
```

---

### Task 11: The landmark-seeded stat range filter

**Files:**
- Create: `libs/domain-champions/src/lib/pokedex/filters/stat-range-column-filter.component.ts`
- Test: `libs/domain-champions/src/lib/pokedex/filters/stat-range-column-filter.component.spec.ts`
- Modify: `libs/domain-champions/src/lib/pokedex/pokedex-grid-columns.ts`

**Interfaces:**
- Consumes: `stat-range.component.ts`; `STAT_BOUNDS`/`TOTAL_BOUNDS`/`isFullRange` from `pokedex-filter.ts`; the `pickLandmarks` helper recoverable at `git show e2314fea:libs/domain-champions/src/lib/pokedex/pokedex-filters.component.ts`.
- Produces: `StatRangeColumnFilterComponent`, model `[min, max]`, parameterised per stat via `filterParams`.

- [ ] **Step 1: Recover the landmark helper**

```bash
git show e2314fea:libs/domain-champions/src/lib/pokedex/pokedex-filters.component.ts > /tmp/old-filters.ts
```

Extract `pickLandmarks` (it picks the lowest-dex-number Pokémon at each distinct stat value, base forms only, giving a human-relatable reference like "Jolteon 130") into `libs/domain-champions/src/lib/pokedex/filters/stat-landmarks.ts` with its own unit test.

- [ ] **Step 2: Write the failing test**

Assert: the component seeds its slider bounds from `STAT_BOUNDS` (or `TOTAL_BOUNDS` for the total column); a full range reports the filter inactive (`isFullRange`); a narrowed range emits `[min, max]`; and `doesFilterPass` includes a value exactly on each bound.

- [ ] **Step 3: Write the component and register it on all seven numeric columns**

One component, parameterised by `filterParams: { statKey, bounds }`, registered via the `statColumn()` helper in `pokedex-grid-columns.ts`.

- [ ] **Step 4: Verify and commit**

```bash
git add libs/domain-champions/src
git commit -m "feat(domain-champions): add the landmark-seeded stat range column filter"
```

---

### Task 12: The external filter engine and its custom tool panel

**Files:**
- Create: `libs/domain-champions/src/lib/pokedex/filters/external-filters.store.ts`
- Create: `libs/domain-champions/src/lib/pokedex/filters/champions-filters-panel.component.ts`
- Test: both, plus `libs/domain-champions/src/lib/pokedex/filters/external-filters.store.spec.ts`
- Modify: `libs/domain-champions/src/lib/pokedex/roster.component.ts`

**Interfaces:**
- Consumes: `PokedexStore`; predicates from `pokedex-filter.ts`.
- Produces: `ExternalFiltersStore` with signals for `matchup`, `counterOf`, `move`, `ownedOnly`, `mega`, plus `isPresent(): boolean` and `passes(entry: PokedexEntry): boolean`; and `ChampionsFiltersPanelComponent`, registered as a third side-bar tool panel. Tasks 13 and 14 fill the panel in.

- [ ] **Step 1: Read the external filter and custom tool panel docs**

`https://www.ag-grid.com/archive/36.1.0/angular-data-grid/filter-external/` and `https://www.ag-grid.com/archive/36.1.0/angular-data-grid/component-tool-panel/`.

- [ ] **Step 2: Write the store, test-first**

The store holds the cross-cutting filter state as signals and exposes the two predicates AG Grid's External Filter API needs. `passes()` delegates to the existing pure functions — it must not re-implement matchup or counter logic.

- [ ] **Step 3: Wire it into the roster**

```html
<pokedex-data-grid
	[rowData]="entries()"
	[columnDefs]="columns"
	[getRowId]="getRowId"
	[isExternalFilterPresent]="isExternalFilterPresent"
	[doesExternalFilterPass]="doesExternalFilterPass"
	(gridReady)="onGridReady($event)"
/>
```

```ts
protected readonly isExternalFilterPresent = () => this.externalFilters.isPresent();
protected readonly doesExternalFilterPass = (node: IRowNode<PokedexEntry>) =>
	node.data ? this.externalFilters.passes(node.data) : true;

private gridApi: GridApi<PokedexEntry> | null = null;

protected onGridReady(event: GridReadyEvent<PokedexEntry>): void {
	this.gridApi = event.api;
}

// The grid does not watch our signals — it must be told to re-run the external filter.
private readonly rerunExternalFilter = effect(() => {
	this.externalFilters.version();
	untracked(() => this.gridApi?.onFilterChanged());
});
```

Add `version` as a counter signal on the store, bumped by every mutation, so one effect covers every field.

- [ ] **Step 4: Register the panel in the side bar**

Extend `pokedexSideBar` at the roster's call site (pass a `[sideBar]` override rather than changing the shared default, which other grids use) with a third tool panel whose `toolPanel` is `ChampionsFiltersPanelComponent`.

- [ ] **Step 5: Verify and commit**

```bash
git add libs/domain-champions/src
git commit -m "feat(domain-champions): add the external filter engine and Champions filters panel"
```

---

### Task 13: Matchup and counter-target filters

**Files:**
- Create: `libs/domain-champions/src/lib/pokedex/filters/matchup-filter.component.ts`, `counter-filter.component.ts` (+ specs)
- Modify: `champions-filters-panel.component.ts`, `external-filters.store.ts`

- [ ] **Step 1: Write the matchup filter, test-first**

Port the Effective/Resists segmented toggle, the second type picker, and the Pokémon autocomplete that fills the chips from a species' typing. The predicate is `passesMatchup` from `pokedex-filter.ts` — reuse it.

- [ ] **Step 2: Write the counter-target filter, test-first**

Port the "Answers to X" banner with its dismiss button. The predicate is `counterScore` + `isAnswer` from `champions-engine`, and the ranking is `compareCounters` — reuse all three. The counter target must also survive arriving from the detail page's "answers to" link, which is the cross-page contract the TanStack version broke.

- [ ] **Step 3: Verify and commit**

```bash
git add libs/domain-champions/src
git commit -m "feat(domain-champions): add matchup and counter-target filters"
```

---

### Task 14: Move-learner, owned-only and Mega filters

**Files:**
- Create: `libs/domain-champions/src/lib/pokedex/filters/move-learner-filter.component.ts`, `ownership-filter.component.ts` (+ specs)
- Modify: `champions-filters-panel.component.ts`, `external-filters.store.ts`

- [ ] **Step 1: Write the move-learner filter, test-first**

Port the move autocomplete with its lazy learner fetch. Preserve the existing "asked for, not arrived yet" semantics: while learners are `null` the filter is **skipped**, not applied as empty — narrowing a full list when the answer lands reads as loading; an empty list that later fills reads as a broken filter. Show "finding learners…" while `store.isLoadingLearners()`.

- [ ] **Step 2: Write the ownership and Mega controls, test-first**

The "Only what I own" checkbox (`store.owned()`) and the Mega tri-state cycling button (empty → has a Mega → has no Mega → empty).

- [ ] **Step 3: Verify and commit**

```bash
git add libs/domain-champions/src
git commit -m "feat(domain-champions): add move-learner, ownership and Mega filters"
```

---

### Task 15: Saved filter sets and shareable URLs on Grid State

**Files:**
- Modify: `libs/domain-champions/src/lib/pokedex/pokedex-url.ts`, `roster.component.ts`
- Create: `libs/domain-champions/src/lib/pokedex/filters/filter-sets.component.ts` (+ spec), reusing `saved-sets.component.ts`
- Modify: `libs/domain-champions/src/lib/pokedex/pokedex.store.ts` (saved-set storage shape only)

**Interfaces:**
- Consumes: `api.getFilterModel()` / `api.setFilterModel()`; `ExternalFiltersStore`.
- Produces: a combined saved-state shape `{ filterModel, external }`.

- [ ] **Step 1: Define the combined shape, test-first**

A saved set and a shared link both carry the AG Grid filter model **and** the external filter state; neither is complete alone. Keep the existing rule that a URL carrying filter params wins outright over stored filters rather than merging.

- [ ] **Step 2: Rewrite the URL codec against the new shape**

Keep the three existing rules: only non-defaults are written; decoding never throws; a URL with any filter param wins outright.

- [ ] **Step 3: Rebuild the saved-sets UI on the new shape**

Reuse `saved-sets.component.ts`, hosted in the Champions filters panel.

- [ ] **Step 4: Verify and commit**

```bash
git add libs/domain-champions/src
git commit -m "feat(domain-champions): move saved filter sets and shareable links onto grid state"
```

---

## Phase 4 — Remove TanStack

### Task 16: Delete the TanStack kit and dependency, and verify the whole migration

**Files:**
- Delete: `libs/ui-pokedex/src/lib/data-table/` (all 8 files)
- Modify: `libs/ui-pokedex/src/index.ts`, `package.json`, `libs/ui-pokedex/jest.config.ts`, `libs/domain-champions/jest.config.ts`

- [ ] **Step 1: Confirm nothing still imports the TanStack kit**

Run: `grep -rn "@tanstack\|UiDataTableComponent\|pokedex-data-table\|createDataTableColumns\|flexRender" libs apps --include=*.ts --include=*.html`

Expected: no matches outside `libs/ui-pokedex/src/lib/data-table/` itself and the two jest configs. **If anything else matches, stop and report** — a table was missed.

- [ ] **Step 2: Delete the kit and its exports**

```bash
git rm -r libs/ui-pokedex/src/lib/data-table
```

Remove the four `data-table` export lines and the TanStack type re-export line from `libs/ui-pokedex/src/index.ts`.

- [ ] **Step 3: Remove the dependency and the Jest workaround**

```bash
pnpm remove @tanstack/angular-table
```

In both jest configs, drop `@tanstack` from `transformIgnorePatterns`. Keep any AG Grid entry only if Task 3 Step 5 proved it necessary; otherwise restore the line to its pre-TanStack form.

- [ ] **Step 4: Full verification**

Run: `npx nx run-many --targets=test,lint --projects=ui-pokedex,domain-pokedex,domain-champions --skip-nx-cache`
Run: `npx nx build pokemon-center --skip-nx-cache`
Run: `grep -rn "pedex" libs apps --include=*.ts --include=*.html` → expected: no matches (the no-abbreviation rule).

- [ ] **Step 5: Browser verification — the check no unit test can make**

With `champions-service` and the dev server running, open each migrated table and confirm in a real browser:

1. `/champions/pokedex` — rows render; the side bar opens; the **Columns** panel hides/reorders columns; the **Filters** panel lists the column filters; the Champions panel's matchup/counter/move/owned/Mega controls narrow the list; no `error #200` in the console.
2. `/champions/pokedex/:slug` — the moves grid renders and its column choices persist across a reload.
3. `/pokedex/pokemon` — the master-detail shell renders and selecting a row still paints the detail pane.
4. **Measure the roster's render time** the same way the TanStack version was measured (navigation start → row count stable). Record the number in your report. The TanStack baseline to beat is **7.9s**; the hand-rolled paged version this all traces back to achieved **473ms**. AG Grid virtualises by default, so a result in the hundreds of milliseconds is the expected outcome — anything above ~1.5s means something is misconfigured (most likely `autoHeight` on too many columns, or a cell renderer doing work per row).

- [ ] **Step 6: Commit**

```bash
git add -A
git commit -m "chore: remove TanStack Table, fully replaced by AG Grid"
```

---

## Notes for the executor

- **The licence clock starts when Task 3 lands.** The 30-day trial runs from first use. Flag it to the user in your final report with the date.
- **Phase 2 tables temporarily lose the Champions custom filters.** That is expected and is what Phase 3 restores; do not try to preserve them mid-migration.
- **If a tool panel or Set Filter renders as nothing, read the console before changing code.** AG Grid logs `error #200` naming the exact module. That is a registration problem, not an API problem — and reaching for a lesser API at that moment is the most common way a correct implementation gets thrown away.
