# TanStack Table → AG Grid Migration — Design

**Status:** approved scope, ready for implementation plan.

## Why

The project's tables are built on `@tanstack/angular-table` v9 behind an in-house kit component (`pokedex-data-table`), with hand-rolled Filters and Columns panels. That kit reproduces, by hand and partially, what AG Grid ships as a product: a Columns Tool Panel, a Filters Tool Panel, custom filter components, column state persistence, and row virtualisation.

Two concrete failures pushed the decision:

1. **Measured performance.** The Champions roster on the unvirtualised TanStack table renders 242 rows in **7.9s / 8.9s** (browser-measured, two runs, live `champions-service`). That is worse than the 4.4s hand-rolled full-render it replaced, and far worse than the 224ms/473ms the paged version had already achieved. AG Grid virtualises rows by default, in Community.
2. **The generic Filters panel does not scale.** It renders every faceted value as an unbounded, unscrollable checkbox list — fine for 18 types, unusable for ~250 abilities. AG Grid's Set Filter ships with a mini-filter search, scrolling, and Excel-mode semantics.

The user's requirement is the full AG Grid feature set: custom filters, the Filters Panel, and the Columns Panel.

## Licence — read this first

**This migration requires AG Grid Enterprise, which is a paid licence: $999 USD per developer, perpetual, including one year of updates. Licensing is per developer, not per deployment.**

Enterprise is required for three things this design depends on:

| Feature | Tier | Why we need it |
|---|---|---|
| Side Bar + Columns Tool Panel + Filters Tool Panel | **Enterprise** | Explicitly requested |
| Set Filter (`agSetColumnFilter`) | **Enterprise** | The checkbox-list filter Types/Abilities need, with search and scrolling |
| Custom Tool Panel (`component-tool-panel`) | **Enterprise** | Hosts the cross-cutting Champions filters in the side bar |

Community covers everything else this design uses: the grid itself, row virtualisation, Client-Side Row Model, sorting, text/number filters, **custom column filter components**, the **External Filter API**, **Grid State**, and cell renderers.

**Decision: develop on the free 30-day Enterprise trial** (full features, no watermark or console warnings), with licence-key wiring built in from the start so a purchased key drops in via environment variable. The key is never committed. If the trial lapses without a purchase the grid still runs, but shows a watermark and console warnings — so the purchase decision has a hard deadline 30 days from the day Phase 1 lands.

## Versions and compatibility

- **AG Grid 36.1.0** (`ag-grid-angular`, `ag-grid-community`, `ag-grid-enterprise`).
- `ag-grid-angular@36` peers on `@angular/core >= 20`; AG Grid 36 officially supports **Angular 20–22**. This project is on Angular 22. ✅
- **Zoneless:** AG Grid 36 is "fully compatible with Zoneless Angular applications with no additional configuration." Custom cell/filter/tool-panel components must themselves meet Angular's zoneless requirements — this project already uses `OnPush` + signals throughout, so that holds. ✅
- **Theming:** v36 uses the **Theming API** (a `theme` object passed to the grid, e.g. `themeQuartz.withParams(...)` imported from `ag-grid-community`). The pre-v33 approach of importing `ag-grid.css` / `ag-theme-quartz.css` and applying an `ag-theme-*` class is **legacy and must not be used**. (Note: AG Grid's own v36 "Getting Started" page still shows the legacy CSS imports in places — it is stale; follow the Theming API.)
- **Modules:** v36 registers modules via `ModuleRegistry.registerModules([...])`. Dev-time validation uses `enableDevValidations()` (v36; `ValidationModule` was v35 and earlier).

## Architecture

### Shared layer — `libs/ui-pokedex/src/lib/data-grid/`

A **thin wrapper plus shared configuration**, replacing the four TanStack kit components. The wrapper owns what must be identical across every grid; domains own their columns and data.

- `data-grid.setup.ts` — module registration, `enableDevValidations()` in dev, and `LicenseManager.setLicenseKey()` from the environment. Imported once for its side effects.
- `data-grid.theme.ts` — the single `themeQuartz.withParams(...)` theme mapping AG Grid's theme parameters onto this project's existing design tokens.
- `data-grid.defaults.ts` — shared `defaultColDef` (sortable/filter/resizable/floating-filter defaults) and the `sideBar` definition wiring the **Columns** and **Filters** tool panels.
- `data-grid.component.ts` — `pokedex-data-grid`, a small wrapper over `<ag-grid-angular>` that applies the theme and defaults, enforces an explicit container height (an AG Grid container with no intrinsic height renders at zero height), and exposes `rowData` / `columnDefs` / `getRowId` / grid-state in and out.

Naming: `data-grid` / `UiDataGridComponent` / `pokedex-data-grid`, distinct from the outgoing `data-table` / `UiDataTableComponent` / `pokedex-data-table`, so both can coexist until the final cleanup task removes TanStack. Never abbreviate "pokedex".

### Column-bound filters → custom column filter components (Community)

Filters that belong to one column become AG Grid column filters:

| Column | Filter |
|---|---|
| Types | Custom component — the two-mode picker (single click = exact/AND capped at 2, double click = any/OR uncapped) |
| Abilities | Built-in **Set Filter** with mini-filter search |
| HP / Attack / Defense / Sp. Atk / Sp. Def / Speed / Total | Custom component — the landmark-seeded range slider |
| Pokémon (name) | Built-in text filter |

Custom filters in v36 implement `IFilterDisplayAngularComp` and are registered as `filter: { component: MyFilterComponent, doesFilterPass: (params) => boolean }`.

### Cross-cutting filters → External Filter API + a custom tool panel (Community API, Enterprise panel)

Matchup, counter-target, move-learner, owned-only and Mega tri-state are **not** column filters — they are row-level predicates over the whole entry, several of them depending on data outside any single column (the type chart, the Box, an async learners fetch). Modelling them as column filters would be fighting the framework.

They use the **External Filter API** — `isExternalFilterPresent()`, `doesExternalFilterPass(node)`, and `api.onFilterChanged()` to re-evaluate — with their UI hosted in a **custom tool panel** in the side bar, beside the Columns and Filters panels. The predicate logic is the already-tested pure functions in `pokedex-filter.ts` (`passesMatchup`, `counterScore`/`isAnswer`, the owned and Mega checks), which this migration reuses rather than rewrites.

### State, persistence and sharing → Grid State (Community)

AG Grid's Grid State replaces three hand-rolled mechanisms:

- `moves-table-preferences.store.ts` (column visibility/order persistence) → `initialState` + the `stateUpdated` event.
- Saved filter sets → `api.getFilterModel()` / `api.setFilterModel()`, plus the external-filter state, serialised under the existing saved-set storage.
- The URL codec (`pokedex-url.ts`) → keeps its role as the shareable-link format, but reads and writes the grid's filter model and external-filter state instead of the bespoke `PokedexFilters` shape.

## Migration order

Land the in-flight work first, then foundation, then one table at a time, then the Champions filters, then remove TanStack.

Both in-flight branches are merged to `main` before migration begins, per the user's decision. **Known consequence:** merging `feat/champions-pokedex-data-table` ships the 7.9s roster temporarily, and deletes the rich Champions filter sidebar before AG Grid replaces it. The sidebar's markup and logic remain recoverable at commit `e2314fea` (`libs/domain-champions/src/lib/pokedex/pokedex-filters.component.ts`), and three of its sub-components (`saved-sets.component.ts`, `stat-range.component.ts`, `type-picker.component.ts`) are still on disk, orphaned — the custom filter rebuild reuses them rather than starting from scratch.

**Merge conflict, known in advance:** both branches modify the same line of `libs/ui-pokedex/src/index.ts`, each adding `ColumnFiltersState` to the type-only export list in a different position. It is the only overlapping file between them. Resolution is to keep the union of names in one list.

## Tables in scope

| Table | Location |
|---|---|
| Champions roster | `libs/domain-champions/src/lib/pokedex/` (roster, columns, 4 cell components) |
| Champions moves | `libs/domain-champions/src/lib/pokedex/moves-data-table.component.ts` + prefs store |
| Nuzlocke master-detail | `libs/domain-pokedex/src/lib/features/pokemon-shell/` |
| Kit demo (2 grids) | `libs/domain-pokedex/src/lib/features/kit/kit.component.ts` |

Plus: `libs/ui-pokedex/src/lib/data-table/` (deleted), `package.json` (dependency swap), and the `transformIgnorePatterns` in `libs/ui-pokedex/jest.config.ts` and `libs/domain-champions/jest.config.ts` (added for TanStack's ESM-only build; re-verified for AG Grid and removed if unneeded).

## Testing approach

- Cell renderers, custom filter components and the custom tool panel are ordinary Angular components — tested with `TestBed` as the existing cell components already are.
- Column definitions are tested as data: assert `colDef` shape (filter type, `cellRenderer`, `valueGetter`, `getRowId`) rather than driving a live grid, which is slow and DOM-heavy in jsdom.
- Filter predicates are tested as pure functions against `pokedex-filter.ts`'s existing exports, which already have coverage.
- Each migrated table keeps a component-level test asserting the grid renders with the expected column count and row count, mirroring the assertions the TanStack roster spec already makes.
- AG Grid's Jest interop is verified in the first foundation task; if AG Grid's published build needs a `transformIgnorePatterns` entry the way TanStack did, it is added then, once, in both jest configs.

## Out of scope

- Server-Side Row Model — the whole roster is ~316 rows fetched once; Client-Side Row Model is correct here.
- Integrated Charts, pivoting, Excel export, master/detail — Enterprise features this project has no requirement for.
- Re-litigating the Champions roster's virtualisation decision: AG Grid virtualises by default, which resolves it.
