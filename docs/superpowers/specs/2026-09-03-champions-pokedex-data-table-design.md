# Champions Pokédex: Data Table Migration — Design

**Status:** approved, ready for implementation plan.

## Context

The Champions domain (`libs/domain-champions/src/lib/pokedex/`) has its own Pokédex roster, separate from the mainline/Nuzlocke Pokédex in `libs/domain-pokedex`. A prior redesign (sortable/filterable table, master-detail shell) was mistakenly built in the mainline domain instead of Champions. That mainline work stays as-is — it is not reverted, and it is not what this spec is about. This spec covers the equivalent redesign for **Champions**, scoped down through direct conversation with the user to a smaller initial pass, with the rest explicitly deferred to follow-up work.

Champions' roster today (`roster.component.ts`) renders as a hand-rolled `<ul>` of `<champions-pokemon-row>` items with `IntersectionObserver`-based incremental loading (`FIRST_PAGE = 10`, `PAGE_SIZE = 20`), alongside a sophisticated custom filter sidebar (`pokedex-filters.component.ts`) covering: debounced search, "only what I own," a two-mode type picker (strict AND capped at 2 / loose OR uncapped), a matchup section (Effective/Resists toggle + a second type picker + Pokémon-typing autocomplete), a Mega tri-state filter plus a 3-way Mega display toggle, base-stat range sliders seeded with human-relatable landmarks, an ability picker, a move-learner autocomplete, saved filter sets, and a sort dropdown + direction toggle. All of this runs client-side over the full ~316-row roster, fetched once (`pokedex.store.ts`'s `PokedexStore`).

The shared `pokedex-data-table` component (`libs/ui-pokedex`, selector `pokedex-data-table` — not "pedex-data-table," a typo caught during this spec's drafting and worth calling out given the project's no-abbreviations naming rule) already provides, for any row type: sorting via clickable headers, a built-in global search box, and a built-in Filters panel driven entirely by column metadata (`meta.filterVariant: 'set' | 'range'`) — no separate filter-sidebar component to hand-write. Champions already has one working precedent for wiring into it: `moves-data-table.component.ts`, unvirtualized, rendering one Pokémon's move list.

## Decisions made during brainstorming

1. **Full replacement**, not incremental: swap the roster's list rendering for `pokedex-data-table` entirely.
2. **No virtualization.** ~316 rows is small enough that the leaner table should render fine without CDK virtual scrolling — matches the existing `moves-data-table.component.ts` precedent, and sidesteps the fixed-row-height requirement CDK virtual scroll imposes (Champions rows have historically had variable height because of Mega sub-rows — moot now that Megas are excluded, see below).
3. **No Mega rows or sub-rows for this pass.** The table shows base-form Pokémon only (`!entry.isMega`). Mega handling (as sub-rows, as `rowExpandingFeature`, or as separate rows) is an explicit, separate follow-up task.
4. **Replace the custom filter sidebar with the generic Filters panel** built into `pokedex-data-table`. Accepted losses for this pass, to be rebuilt later as Champions-specific extensions to the generic panel: the two-mode type/matchup pickers, landmark-seeded stat sliders, the counter-target banner and matchup search, saved filter sets, the move-learner filter, and the owned-only toggle.
5. **No master-detail split.** Selecting a row keeps today's behavior: navigate to `/champions/pokedex/:slug`, a separate route rendering `pokemon-detail.component.ts`. (Champions' detail page is far richer than Nuzlocke's — counters, calculator, moves table — and embedding it beside the list is a bigger, separate decision the user chose not to take on here.)

## Data flow — and the accepted regression

`PokedexStore.results()` today runs the *entire* custom filter pipeline (`applyFilters()` in `pokedex-filter.ts`) over `PokedexStore.entries()`. That pipeline is also the mechanism behind a cross-page feature: the detail page can set `filters.counterOf` (an "answers to X" link) or `filters.matchupTypes`, and the roster narrows accordingly when the user lands back on it.

This redesign has the roster page stop reading `store.results()`/`store.filters()` entirely. Instead:

- The table's data input is `computed(() => store.entries().filter((entry) => !entry.isMega))` — the raw roster, Mega rows excluded, nothing else filtered upstream.
- All filtering and sorting for this page is owned by `pokedex-data-table` itself (`columnFilters`, `globalFilter`, `sorting` — component-local signals, not the store).

This avoids double-filtering against stale `localStorage`-persisted `PokedexFilters` that no longer have any UI control on this page. The accepted cost: the counter-target banner, matchup filter, owned-only toggle, move-learner filter, and saved sets do nothing here anymore — including the cross-page "answers to X" link from the detail page, which will no longer visibly narrow the roster. This is a real, user-visible functional regression, not just a UI simplification, and it is accepted as part of deferring the custom filter rebuild to follow-up work. `pokedex.store.ts`, `pokedex-filter.ts`, and `pokedex-url.ts` are not deleted — they stay in the codebase, currently unused by the roster page, pending that follow-up.

`champions-compare-tray` is untouched: it reads `PokedexStore.compareEntries()`/`toggleCompare()` independently of how the list itself renders, and stays docked below the table exactly as it is today.

## Columns

| Column | Source | Filter | Cell |
|---|---|---|---|
| Identity (portrait + dex # + name + owned flag) | `id`, `nationalPokedexNumber`, `name`, `store.isOwned(entry)` | — (not filterable) | new `PokedexNameCellComponent`: `pokedex-entity-portrait`, `routerLink` to `/champions/pokedex/:slug`, dex #, name, an "Owned" badge when `store.isOwned(entry)`. Sortable on `name`. |
| Types | `types: string[]` | `'set'`, needs an explicit `getUniqueValues` accessor (array-valued column faceting gotcha — see Notes) | `pokedex-type-chip` per entry |
| Abilities | `abilitySlugs`/`abilityNames` | `'set'`, `getUniqueValues` | new `PokedexAbilityCellComponent`, ported from `pokemon-row.component.ts`'s ability list (name + hover/focus tooltip showing `effectText` from `store.abilityText()`) — kept because it's a display affordance, not part of the deferred filter UX |
| HP | `baseStats.hp` | `'range'` | plain number, right-aligned |
| Attack | `baseStats.attack` | `'range'` | plain number, right-aligned |
| Defense | `baseStats.defense` | `'range'` | plain number, right-aligned |
| Sp. Atk | `baseStats.specialAttack` | `'range'` | plain number, right-aligned |
| Sp. Def | `baseStats.specialDefense` | `'range'` | plain number, right-aligned |
| Speed | `baseStats.speed` | `'range'` | plain number, right-aligned |
| Total (BST) | `baseStats.total` | `'range'` | plain number, right-aligned |
| Actions | — | — (not filterable) | new `PokedexActionsCellComponent`: Box link (`routerLink="/champions/box"` with `queryParams.add`), Sim link (`routerLink="/champions/simulator"` with `queryParams.left`), Compare toggle button (`store.toggleCompare(slug)` / `store.isComparing(slug)`) |

No fill-bar visual on the stat cells for this pass (unlike the current row's `.stat` background-fill) — plain right-aligned numbers, matching the existing `moves-data-table.component.ts` Power/Accuracy/PP columns. A visual treatment can be added later without touching the filter/sort wiring.

Default order: dex-ascending, as returned by the API (`PokedexStore.entries()`'s natural order, matching every existing `SORTERS`' fallback in `pokedex-filter.ts`). No dedicated dex-number column exists, so this is achieved with an empty initial `sorting` state (`signal<SortingState>([])`, same pattern as `moves-data-table.component.ts`) rather than sorting by a column — the table renders `entries()` in the order it arrives until a column header is clicked.

## Files

- **Modify** `libs/domain-champions/src/lib/pokedex/roster.component.ts`: remove `<champions-pokedex-filters>`, the `<ul>`/`<li>`/`IntersectionObserver`/`limit`/`FIRST_PAGE`/`PAGE_SIZE` machinery; add `pokedex-data-table` bound to the new columns, component-local `sorting`/`columnFilters`/`globalFilter` signals, and the `!isMega`-filtered `entries()` computed described above. `<champions-compare-tray>` and the `@empty`/loading/error states are kept (the `@empty` block's filter-relaxation buttons, which call `store.relaxations()`, are removed along with the rest of the store-filter wiring — the generic table's own `emptyLabel` covers the empty state now).
- **Create** `libs/domain-champions/src/lib/pokedex/pokedex-columns.ts`: `createDataTableColumns<PokedexEntry>()` column defs, with explicit `getUniqueValues` accessors on the Types and Abilities columns.
- **Create** `libs/domain-champions/src/lib/pokedex/pokedex-name-cell.component.ts`.
- **Create** `libs/domain-champions/src/lib/pokedex/pokedex-ability-cell.component.ts`.
- **Create** `libs/domain-champions/src/lib/pokedex/pokedex-actions-cell.component.ts`.
- **Delete** `libs/domain-champions/src/lib/pokedex/pokedex-filters.component.ts` and `pokemon-row.component.ts` (neither has a spec file today) — both dead once the roster stops referencing them, and recoverable from git history if a follow-up task (the custom-filter rebuild, or the Mega-rows sub-row design) wants to reference their markup.
- **Unchanged, still present, currently unused by the roster page:** `pokedex.store.ts`, `pokedex-filter.ts`, `pokedex-url.ts`.

## Testing

- `pokedex-columns.spec.ts`: column defs produce correct sort/filter behavior, in particular the `getUniqueValues` accessors for Types and Abilities (the array-faceting gotcha — without them, faceting treats the whole array as one opaque key rather than counting each type/ability separately).
- `roster.component.spec.ts` (new — no spec exists for this component today): renders all base-form entries from `PokedexStore.entries()`, excludes Mega entries, table search/filter/sort work end to end, row navigation link targets `/champions/pokedex/:slug`, Box/Sim/Compare actions still function, compare tray still renders from `store.compareEntries()`.
- New cell component specs for `PokedexNameCellComponent`, `PokedexAbilityCellComponent` (tooltip visibility on hover/focus), `PokedexActionsCellComponent` (link targets, compare toggle).

## Out of scope (explicit follow-ups)

- Rebuilding the custom filters (type/matchup two-mode pickers, landmark stat sliders, counter-target banner + cross-page link, saved filter sets, move-learner search, owned-only toggle) as extensions to the generic Filters panel.
- Mega rows/sub-rows in the table (sub-row vs. `rowExpandingFeature` vs. separate row — undecided).
- A stat fill-bar visual treatment for the numeric columns.
- Master-detail split for the Champions roster (kept as separate-page navigation for now).
