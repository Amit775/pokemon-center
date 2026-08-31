# Tables everywhere — plan v2

_Status: Phase 0 complete. **Go.** This replaces the v1 draft, which was written before anything
was installed; the corrections the spike forced are called out inline below._

Every list in the app should be able to become a table: sortable by any column, with columns you
can reorder, resize and hide. Shipped as a **preview**, chosen by the URL, so the current views
stay untouched until the table earns the default.

The v1 plan recommended TanStack Table v9 on reasoning alone and scheduled a spike to find out
whether the reasoning survived contact. It did. What follows is the same recommendation with the
guesswork replaced by measurements, plus the corrections the spike forced.

## The verdict, in one table

| Check | Result |
| --- | --- |
| Builds on Angular 22 / Nx 23 | **Pass.** No peer warning; three production builds green |
| TypeScript 6.0.3 | **Pass, conditionally.** `skipLibCheck` is not load-bearing — zero diagnostics with it off. Inference holds **only** through `createColumnHelper`; a bare `ColumnDef[]` types `getValue()` as `unknown` and accepts a misspelled `accessorKey` |
| Zoneless repaint | **Pass.** Sorting *and* filtering repaint with no Zone.js, verified by 15 tests in a genuinely zoneless Jest environment |
| Jest 30 interop | **Pass, after a two-line fix.** `table-core` is ESM-only with no CommonJS build; needs a widened `transformIgnorePatterns` **and** `allowJs` |
| Bundle cost | **18.34 kB transfer** for the full feature set, in a lazy chunk. Initial bundle moves by 0.18 kB. Tree-shaking verified across three builds |
| `@ngrx/signals` integration | **Pass.** Split ownership: store owns the URL-synced and persisted slices, TanStack keeps the transient ones |

**Go.** No fallback needed; AG Grid Community stays unused.

---

## The recommendation: TanStack Table v9 (headless) — confirmed

`@tanstack/angular-table@9.2.2` → `@tanstack/table-core@9.1.2` + `@tanstack/angular-store@0.11.1`,
peer `@angular/core >=19`, satisfied by 22.0.7 with no warning.

The two facts about this repo that decided it in v1 both survived contact:

1. **The design system forbids borrowed CSS.** A headless table renders nothing, so every pixel
   stays ours and `tokens.scss` stays the only dial. The spike's markup is a `display: grid` with
   our own tokens and no stylesheet from the library at all — there isn't one to import.
2. **The app is zoneless and signal-first.** The adapter is built on TanStack's store bound to
   Angular signals, so `table.atoms.sorting` is readable from a `computed` and a sort click
   repaints under `OnPush` with no Zone.js. Verified, not assumed.

**AG Grid Community stays the fallback and is not needed.** It would have covered the whole ask
under MIT, and if the zoneless check had failed it is where this would have gone. It loses on the
two things that were never in doubt: it owns the DOM and brings its own theming system, which means
maintaining a second `--mat-sys-*`-style bridge onto our tokens forever; and our cells are sprites,
type chips and stat bars, so nearly every column would be an Angular cell renderer anyway — which
is exactly where its rendering advantage is spent back. The measured 13.41 kB transfer cost of the
sorting-only TanStack chunk makes the weight argument lopsided as well.

**Angular Material stays where it is** — icons and the `--mat-sys-*` bridge. `MatTable` has no
column reordering, no resizing and no visibility toggling, which is three of the four things asked
for, and `MatTableDataSource` is array-and-RxJS shaped rather than signal shaped.

## Phase 0: what was actually tested

A throwaway spike lives on the `tanstack-spike` worktree branch, commit `059ca35d`:

```
apps/pokemon-center/src/app/tanstack-spike/
  roster-fixture.ts             241 synthetic rows — the size that measured at 4.4s
  table-preferences.store.ts    the @ngrx/signals half of the integration
  spike-table.component.ts      injectTable, grid markup with ARIA roles
  spike-table.component.spec.ts the zoneless behaviour tests
  type-inference.spec.ts        compile-time probes for TypeScript 6
```

Three commits, one per measurement point, so the bundle numbers below can be reproduced by checking
out each in turn: `059ca35d` (sorting only), `a9302170` (+ ordering, sizing, resizing, visibility),
`4f9cf0be` (+ column filtering).

It renders 241 rows through `injectTable`, sorts them from a real header click, filters them from a
real keystroke, and keeps the sort in a `signalStore` rather than inside the table. Everything below
is measured against that.

### 1. Does it build on Angular 22 / Nx 23?

Yes. `@tanstack/angular-table@9.2.2` declares peer `@angular/core >=19`; installing it against
22.0.7 produced **no peer warning of its own** — `pnpm peers check` lists nine unmet peers in this
workspace and not one of them is TanStack. The dependency tree it pulls in is three packages:
`@tanstack/table-core@9.1.2`, `@tanstack/angular-store@0.11.1`, `@tanstack/store@0.11.1`.

Two things went wrong on the way, neither of them TanStack's fault, and both worth knowing before
someone else burns an afternoon:

- **A cold worktree cannot compute its Nx project graph.** `@eslint/js@10.0.1` resolved against
  `eslint@9.34.0` puts `preserve-caught-error` — an ESLint 10 core rule — into the recommended
  config, and the `@nx/eslint` plugin fails the whole graph on it. The main checkout hides this
  behind a warm `.nx` cache. The spike dropped the plugin from `nx.json` to get moving; the real
  fix is bumping `eslint` to 9.35+ or pinning `@eslint/js` to 9.x, and it should be its own change
  because it blocks every fresh checkout, not just this one.
- **`pnpm install` in a new worktree takes 23 minutes**, of which `prisma-nestjs-graphql` is 554
  seconds on its own. Expected, per `docs/worktrees.md`; budget for it.

### 2. TypeScript 6.0.3

The interesting check, and the one that produced the most usable findings. `tsconfig.base.json`
sets `skipLibCheck: true` — so the first question was whether that is load-bearing.

**It is not.** Type-checking `apps/pokemon-center/tsconfig.app.json` with `skipLibCheck: false` and
`skipDefaultLibCheck: false` produced **zero diagnostics**. TanStack's own declaration files are
clean under TS 6. That is a better result than the library's reputation suggests.

Inference is a different story, and it depends entirely on how columns are declared.

**A bare `ColumnDef[]` — the shape in the official Angular example — degrades in two ways:**

```ts
type SpikeColumn = ColumnDef<typeof features, RosterRow>;

// `getValue()` is `unknown`, not `number`: ColumnDef's third parameter defaults
// rather than inferring from accessorKey.
const a: SpikeColumn = { accessorKey: 'speed', cell: (c) => c.getValue().toFixed(0) }; // error

// And this compiles. `hitpoints` is a typo for `hitPoints`; accessorKey is
// `DeepKeys<TData> | (string & {})`, and that escape hatch accepts every string.
const b: SpikeColumn = { accessorKey: 'hitpoints', header: 'HP' };
```

The row type *does* survive — `context.row.original.nickname` is still an error — so this is not a
collapse to `any`. It is narrower and quieter than that: the value type is lost and the key is
unchecked, which is exactly the pair that produces a silently blank column.

**`createColumnHelper` fixes both**, and it is what our column definitions must use:

```ts
const columnHelper = createColumnHelper<typeof features, RosterRow>();

const columns = columnHelper.columns([
  columnHelper.accessor('speed', { header: 'Speed', sortFn: 'basic' }),
  columnHelper.accessor('name', { header: 'Name', sortFn: 'alphanumeric' }),
]);
```

With the helper, `getValue()` is `number`, a misspelled key is an error, and naming a sort function
that was never registered in `tableFeatures` is an error too.

**The `columns([...])` wrapper is not optional.** Column definitions are invariant in their value
type, so an array holding a `number` column and a `string` column does not widen to
`ColumnDef<…, unknown>[]` on its own, and `injectTable` rejects it. `columnHelper.columns()` is
TanStack's variadic-tuple wrapper for precisely that case. Without it the only way through is a
cast, which discards everything the helper just proved. This is the single most important
mechanical detail in this document — it is not in the migration guide, and the first hour of the
spike was spent rediscovering it from the `.d.ts`.

All of the above is pinned by `type-inference.spec.ts`, where each finding is a `@ts-expect-error`
that fails the build if the behaviour changes.

**Feature gating, and where the compiler does and does not help.** `row.getVisibleCells()` is contributed by
`columnVisibilityFeature`; with only `rowSortingFeature` registered, `row.getAllCells()` is the core
equivalent. `table.getVisibleLeafColumns()` / `getAllLeafColumns()` is the same pair.

_Corrected after Phase 1 review:_ this was first written up as a runtime failure. It is not.
`Row` and `Table` are assembled through `ExtractFeatureMapTypes`, so an unregistered feature's
methods are **absent from the type** and `strictTemplates` rejects them — verified by compiling a
probe with `ngc`. The original observation came from a state where the table still typed as `any`.

Genuine runtime-only gating is narrower, and these are the ones to actually watch:

- **`sortFn` names are resolved by string.** An unregistered name logs a `console.warn` and falls
  back to `sortFn_basic`. The default column def is `sortFn: 'auto'`, which resolves `'text'` for
  string values — so registering `sortFn_text` is what makes the default path correct rather than
  merely quiet.
- **Row models fall back silently.** `getFilteredRowModel` is a *core* API returning
  `getPreFilteredRowModel()` when filtering is not registered. That is why sorting works on its own,
  and why a missing row model degrades instead of throwing.

### How the table is reactive — established in Phase 1, by measurement

Worth stating precisely, because it was got wrong twice by reading source and settled by running a
mutation. `table.options` is **not a plain property**. `constructTable` defines it as an accessor
over an atom, and the Angular adapter's atom is a `signal`:

```js
Object.defineProperty(table, 'options', { get() { return table.optionsStore.get(); }, … });
```

So `table.options.<anything>` inside a reactive context is a tracked signal read. And `memo()`
evaluates its dependency function on **every call**, before the cache check — so
`table.getAllLeafColumns()` touches `table.options` whether it hits the cache or not. The write side
closes the loop: `injectTable`'s effect calls `setOptions`, which writes the atom.

The adapter's own doc comment states this as a contract: the returned table is signal-reactive, and
its methods are safe to consume inside `computed()` and `effect()`. **No explicit-dependency pattern
is needed anywhere.**

Three consequences for later phases:

1. **It is emergent per-API, not blanket.** `assignTableAPIs` memoises only APIs that declare
   `memoDeps`; the rest are reactive only if their body happens to read options or atoms. It works
   because nearly everything bottoms out in one of two chokepoints — `table.options` and
   `table.atoms.*`. Rely on the chokepoints, not on a given method tracking a given thing.
2. **Phase 3 gets more reactive, and more precisely.** `getAllLeafColumns`'s `memoDeps` already reads
   `table.atoms.columnOrder?.get()` and `table.atoms.grouping?.get()`, both `undefined` today only
   because those features are unregistered. Registering ordering/visibility/sizing creates those
   atoms as Angular `computed`s, so they invalidate directly rather than through the options blob.
3. **`table.options` is a single coarse signal — design around this in Phase 4.** `setOptions`
   replaces the whole object and `injectTable` spreads `{...previous, ...currentOptions}`, a fresh
   object every time, so `Object.is` always sees a change. Therefore **any** computed reading **any**
   `table.options.*` invalidates when **any** option changes — `data` and `state.sorting` included.
   `gridTemplateColumns` already recomputes on every sort and every data change. Harmless at five
   rows; it matters once virtualization stacks per-frame computeds on a large dataset, where they
   will re-run on every data tick.

### 3. Zoneless — the go/no-go

**It repaints.** This is the check the whole recommendation rested on, and it passes cleanly.

The evidence is stronger than a manual look at a dev server. `apps/pokemon-center/src/test-setup.ts`
already calls `setupZonelessTestEnv()`, so the Jest environment is the same change-detection model
as production: no Zone.js, nothing patching `addEventListener`, and `detectChanges()` only repaints
what a signal actually invalidated. In that environment:

- 241 rows render.
- A real `click()` on a header button re-sorts and the DOM reflects it.
- Clicking again reverses it.
- Writing to the `signalStore` **with no table involvement at all** re-sorts the view — which is
  the property the URL depends on.
- **Filtering repaints too**, which is the other half of the question. Typing into a plain
  `<input>` sets a local `signal`, `injectTable` re-runs because it reads that signal, and the body
  shrinks to the matching rows. No subscription, no effect, no `NgZone`. Sorting on top of a filter
  sorts the filtered set, and clearing the filter restores all 241.
- `aria-sort` updates on the right column.

Fifteen tests, all green. No `NgZone`, no manual `markForCheck`, no `ApplicationRef.tick`. The
adapter is built on `@tanstack/angular-store`, which exposes TanStack's atoms as genuine Angular
signals, and the component is `OnPush` throughout.

The mechanism is worth stating plainly, because it is what makes the whole thing work: `injectTable`
re-evaluates its options initializer whenever any signal read inside it changes. Binding state into
the table is therefore just *reading a signal in the initializer* — there is no adapter-specific
subscription API to learn, and no synchronising effect to get wrong. It is also the reason
`columns` and `features` must be hoisted out of it.

One behavioural note that will otherwise be filed as a bug: **numeric columns sort descending on
the first click.** TanStack's `sortDescFirst` defaults to true for numbers, reasoning that "sort by
Attack" means "show me the biggest". String columns go ascending first. It is the right default for
a stat table; it just needs to be the documented one.

### 4. Jest 30 interop

It failed at first, exactly as feared, and the fix is two lines. Both are needed; either alone
still fails.

`@tanstack/angular-table` ships a `.mjs` bundle, but `@tanstack/table-core` underneath it is
`"type": "module"` with plain `.js` files and **no CommonJS build at all**. The existing pattern
spared only `.mjs`, so Jest handed raw `import` statements to a CommonJS runtime and died with
`Cannot use import statement outside a module`.

In `apps/pokemon-center/jest.config.ts` (and in every other project's `jest.config.ts` that ends up
importing the table):

```ts
transformIgnorePatterns: ['node_modules/(?!.*(@tanstack|\\.mjs$))'],
```

The lookahead has to fail at **every** `node_modules/` in the path, not just one. Jest ignores a
file if any position matches, and pnpm's layout gives every dependency two
(`node_modules/.pnpm/@tanstack+table-core@9.1.2/node_modules/@tanstack/table-core/…`). Matching the
scope name anywhere in the remainder is what makes that true; the obvious
`node_modules/(?!@tanstack/)` does not, and silently keeps failing.

And in `apps/pokemon-center/tsconfig.spec.json`:

```json
"allowJs": true
```

Without it `ts-jest` passes `.js` and `.mjs` through untouched rather than compiling them, so
widening `transformIgnorePatterns` achieves nothing on its own.

Cost: the app's Jest run went from roughly 45 seconds to 60–110 seconds, because a few hundred
kilobytes of library JavaScript is now transformed on a cold cache. It warms.

---

### 5. Bundle cost

Three production builds of `pokemon-center`, each with `--skip-nx-cache`, measured as the total
raw bytes of every `.js` file in `dist/apps/pokemon-center/browser` plus the figures the Angular
build reports for the lazy chunk.

| Build | Total raw JS | Delta vs baseline | Spike chunk (raw / transfer) | Initial total (raw / transfer) |
| --- | --- | --- | --- | --- |
| Baseline, no TanStack | 868,093 B | — | — | 383.96 kB / 92.75 kB |
| `rowSortingFeature` only | 915,008 B | **+46,915 B** | 46.44 kB / **13.41 kB** | 384.14 kB / 92.85 kB |
| + ordering, sizing, resizing, visibility | 929,770 B | **+61,677 B** | 61.20 kB / **16.43 kB** | 384.14 kB / 92.89 kB |
| + column filtering | 939,549 B | **+71,456 B** | 70.98 kB / **18.34 kB** | 384.14 kB / 92.89 kB |

Read as increments, which is the useful way:

| Step | Raw | Transfer |
| --- | --- | --- |
| Sorting, from nothing | +46,915 B | +13.41 kB |
| Ordering + sizing + resizing + visibility | +14,762 B | +3.02 kB |
| Column filtering | +9,779 B | +1.91 kB |

Three things fall out of this.

**The initial bundle does not move.** 383.96 kB → 384.14 kB, a difference of 0.18 kB, which is the
lazy-route registration and nothing else, and it is identical across both feature sets. The table
lands entirely in its own chunk. Against a 500 kB initial-bundle warning budget, the preview flag
costs nothing at all until someone navigates to it.

**The sorting-only chunk is 13.41 kB over the wire**, and that figure includes the spike's own
component, styles, store and 241-row fixture generator — call it three or four kilobytes — so
TanStack itself is somewhere near ten. For comparison, `ag-grid-community@36` unpacks to roughly
21 MB on disk and its smallest useful bundle is an order of magnitude past this.

**Tree-shaking is real, and these are the numbers that prove it.** Four more features —
`columnOrderingFeature`, `columnSizingFeature`, `columnResizingFeature`, `columnVisibilityFeature`
— cost **+3.02 kB transfer**, and column filtering a further **+1.91 kB**. Part of even that is the
markup each one required (visibility checkboxes, resize grips, a filter input, the track-list
computation), so the library's own share is smaller still. Registering only what a particular table
uses genuinely changes what ships, which is the headline v9 claim and the main thing a monolithic
grid cannot offer. A moves table that only sorts will not pay for resizing.

The whole thing — a headless table engine with sorting, filtering, ordering, resizing and column
visibility, plus a component and a store to drive it — lands at **18.34 kB over the wire, in a lazy
chunk, with the initial bundle unchanged.**

### 6. `@ngrx/signals` — the recommendation

**Split the state, and split it on one rule: whoever has to answer for a slice outside the table
owns it.**

Concretely:

| Slice | Owner | Why |
| --- | --- | --- |
| `sorting` | `signalStore` | It is written to the URL as `?sortBy=&sortDescending=`, restored from a pasted link, and saved into a named filter set. Three things outside the table read it. |
| `columnOrder`, `columnVisibility` | `signalStore` | Personal preferences persisted to `localStorage`, per table id. They outlive the component. |
| `columnResizing` (the live drag) | TanStack | Nobody outside the table cares which header is mid-drag at pixel 412. |
| `columnSizing` (the settled widths) | `signalStore` | It is a saved preference like the other two. Note this is two features in v9, and only the second half is ours. |
| `columnFilters` | a bare `signal` in the component | Nothing outside the table reads a per-column quick filter, and the champions section already owns a far richer filter model in `DexFilters`. Duplicating a name search into the table store would give one question two answers. |
| Everything else | TanStack | Header groups, cell instances, row models — derived, not state. |

That third row is the house rule doing its job: `signalStore` for shared or lifecycle state, bare
`signal` for local component state. The filter binding in the spike is one line —
`columnFilters: this.nameFilterValue() ? [{ id: 'name', value: … }] : []` inside the initializer —
and it repaints because `injectTable` read the signal, not because anything subscribed.

This was the third option in the brief, and the spike is what settled it. The two pure positions
both fail on something concrete:

- **TanStack owns everything, the store reads its atoms.** The atoms genuinely are Angular signals,
  so reading works. But the URL then has to be written from an `effect` that watches
  `table.atoms.sorting`, and restoring a link means reaching into the table to push state in. The
  table becomes the source of truth for something a route resolver needs before the table exists.
  Worse, `roster.component.ts` already has a `consumed` flag guarding exactly this race between
  seeding from the URL and echoing back to it; doing it again through a third party is how that
  bug comes back.
- **The store owns everything.** Then column resizing pushes a `patchState` per `pointermove`,
  every one of which re-runs `injectTable`'s initializer, and localStorage is written sixty times a
  second. The transient state genuinely belongs inside the table.

The wiring, verified in `table-preferences.store.ts` and `spike-table.component.ts`:

```ts
export const TablePreferencesStore = signalStore(
  { providedIn: 'root' },
  withState<TablePreferencesState>(EMPTY_PREFERENCES),
  withMethods((store) => ({
    // TanStack hands back either a value or a function of the previous value. This is the one
    // piece of plumbing a controlled-state integration cannot avoid, and `functionalUpdate` is
    // TanStack's own resolver, so the semantics stay theirs rather than being guessed.
    applySortingUpdate(update: Updater<SortingState>): void {
      patchState(store, { sorting: functionalUpdate(update, store.sorting()) });
    },

    // What the URL codec calls: replace sorting wholesale from `?sortBy=&sortDescending=`.
    sortBy(columnIdentifier: string, descending: boolean): void {
      patchState(store, { sorting: [{ id: columnIdentifier, desc: descending }] });
    },
  })),
  withHooks({
    onInit(store) {
      patchState(store, hydrate());
      effect(() => localStorage.setItem(STORAGE_KEY, JSON.stringify(getState(store))));
    },
  }),
);
```

```ts
// A domain consumer, not the kit component — the kit component is `UiDataTableComponent`
// and owns no store at all (kit rule 4). This is the shape a surface like the roster takes.
export default class RosterTableComponent {
  private readonly preferences = inject(TablePreferencesStore);

  protected readonly table = injectTable(() => ({
    features,          // module scope — see below
    columns,           // module scope — see below
    data: this.rows(),
    state: { sorting: this.preferences.sorting() },
    onSortingChange: (update) => this.preferences.applySortingUpdate(update),
  }));
}
```

That is the whole integration. TanStack never holds the sort: it reads ours, and asks us to change
it. The test that matters is the fourth one in `spike-table.component.spec.ts` — calling
`preferences.sortBy('speed', true)` re-sorts the rendered table with nothing having touched the
table object. That is the property a shareable URL is built on, and it works.

**`features` and `columns` must be module-scope constants.** `injectTable` re-evaluates its
initializer whenever a signal read inside it changes, so a `columns` array rebuilt in there is a new
array on every sort — and `coreColumnsFeature` memoises on `table.options.columns` by identity, so
every column, header group and cell is reconstructed with its memos cold. The table instance itself
survives; the waste is everything hanging off it. This is the loudest warning in the migration guide
and it is not paranoia. Where columns need something reactive (a label that
depends on the active regulation, say), the reactive part belongs in the cell renderer, not in the
column definition.

**One caution about `getState(store)` in the persistence effect.** The spike persists the whole
store, which is fine because every slice in it is a preference. A real table store that also holds
transient state must persist a projection instead, or the effect fires on every drag.

---

## What Phase 0 did *not* test

Stated plainly, because a spike that oversells is worse than no spike.

- **No browser pass.** Everything ran under Jest with jsdom, which does not do layout. So the
  *behaviour* of sorting, filtering, visibility and the controlled-state wiring is verified, and
  the *appearance* of the grid — track sizing, the resize grip's hit area, both themes — is not.
  The resize handler is wired and type-checks; nobody has dragged it.
- **No virtualization measurement.** The 4.4-second roster baseline stands unchallenged. Phase 4
  is still the phase that has to prove itself, and nothing here shortens it.
- **No screen-reader pass.** `aria-sort` is pinned by a test; the rest of the role set is asserted
  by reading it, which is not the same thing.
- **No real data.** The fixture is 241 synthetic rows, deliberately — a spike that needs Postgres
  is a spike nobody re-runs. Rich cells via `flexRenderComponent` are therefore untested.
- **Drag-to-reorder is not implemented.** `columnOrderingFeature` is registered and its state is
  controlled from the store, but the CDK gesture that would drive it is Phase 3 work.

None of these is load-bearing for the go/no-go. All of them are Phase 1–4 work that the spike
deliberately did not pre-empt.

---

## Markup: `display: grid` with explicit ARIA roles

**Firm recommendation: grid plus roles. Not a real `<table>`.** The v1 plan proposed this
tentatively and asked for a decision before Phase 1; here is the decision and the reason it is not
close.

The case is not really about resizing, though resizing is the obvious half. A real `<table>` sizes
itself from its content, so a resize handle has to fight the table layout algorithm and win on
every reflow. With grid, the widths are one string:

```ts
protected readonly columnTracks = computed(() => {
  this.table.atoms.columnResizing.get();   // recompute mid-drag, not on pointerup
  return this.table.getVisibleLeafColumns().map((column) => `${column.getSize()}px`).join(' ');
});
```

That is the entire resize implementation on our side. TanStack's `header.getResizeHandler()` does
the pointer maths; we render a grip and set a custom property.

The case that actually decides it is **virtualization**, which is the prize in Phase 4. Windowing a
`<tbody>` means fixed row heights and transform hacks, and the transform fights the table's own box
model. With grid it is ordinary — a viewport, a spacer, and rows that each declare the same track
list.

That last clause is a correction the spike produced. The obvious grid markup uses `subgrid`: the
container declares the columns once and each row inherits them. It is tidier, and **it does not
survive virtualization**, because subgrid requires the rows to be direct children of the grid and
`CdkVirtualScrollViewport` inserts its own transformed content wrapper between the two. So each row
carries `grid-template-columns: var(--pokedex-table-columns)` itself. One extra declaration, and it
keeps working when the body is windowed.

The honest cost is unchanged and should not be waved away: `role="table"`, `role="row"`,
`role="columnheader"`, `role="cell"` and `aria-sort` are hand-maintained, and nothing checks them.
The spike already pins `aria-sort` with a test, and Phase 1 adds the rest plus one screen-reader
pass. A role that is wrong is worse than a `<table>` that is inflexible, so this is a real
obligation rather than a formality.

---

## Where it lives

`libs/ui-pokedex/src/lib/data-table/` — a `pokedex-data-table` in the design system.

It qualifies under the kit's charter: pure presentation, no store, no HTTP, behavior from a
primitive with the look 100% ours. It inherits the review checklist, and rule 7 gets it a demo on
`/nuzlocke/pokedex/kit` for free, which is where both themes get eyeballed.

Two adjustments to what v1 said:

- **The kit component cannot own the preferences store.** Rule 4 forbids `ui-pokedex` from holding
  a store, and the `TablePreferencesStore` above is exactly that. So the split is: the kit owns the
  table component and takes `sorting` / `columnOrder` / `columnVisibility` as `model()` inputs, and
  each domain owns the store that backs them. That keeps the kit presentational and puts the
  URL-syncing next to the URL codec that already exists.
- **Column definitions stay in the domain lib**, as v1 said — but they must be module-scope
  constants built with `createColumnHelper(...).columns([...])`, for the two reasons in check 2.
  A column definition built inside a component field invalidates `table.options.columns`, which is
  the memo dependency for every column, header group and cell — so all of them are reconstructed on
  every sort with their memos cold. The table instance itself is created once and survives.

`libs/ui-list` stays as-is for now. It is a CDK virtual-scroll list with exactly one consumer
(`moves-list`), and that consumer is the pilot below — once it is a table, `ui-list` becomes a
candidate for absorption, but that is a cleanup, not a prerequisite.

---

## The preview flag

Unchanged from v1, and the spike gives no reason to revisit it. `?view=table`, a query param rather
than a path segment, so it composes with any list route and survives the filter params already in
flight. `view=grid` or absent is today's behavior.

Rules, mirroring the existing codec (currently `libs/domain-champions/src/lib/dex/dex-url.ts` —
**mid-rename**, becoming `pokedex-url.ts` under a spelled-out directory):

- The URL is authoritative. Unreadable value → default view, never a throw.
- The param is only written when it differs from the default, so normal links stay clean.
- A `ViewModeService` exposes `viewMode()` off `ActivatedRoute` and writes with `replaceUrl: true`.

**Sorting reuses `sort` and `desc`.** Both `pokemon-list.component.ts` and the champions codec
already own those params and already mean this by them. The table's `SortingState` maps onto them
directly — `[{ id, desc }]` is `?sortBy=<id>&sortDescending=1` — which is why sorting belongs in the store.

Two things v1 did not notice and Phase 2 has to handle:

- **`pokemon-list` sorts server-side.** It passes `sortBy` / `sortDesc` into the GraphQL query, so a
  client-side `rowSortingFeature` would only sort the 500 rows already fetched and would silently
  disagree with the card view. That surface needs `manualSorting: true` and the sort state fed back
  into the query, not `createSortedRowModel()`.
- **`sort=dex` is a URL value, not an identifier.** The no-abbreviations rule governs code; a query
  parameter that is already in people's pasted links is data. Renaming the `SortKey` union member
  to `pokedex` is right, but the codec should keep accepting `dex` on the way in, or every shared
  link made so far quietly loses its sort.

Column order, widths and visibility go to `localStorage`, keyed per table id — personal
preferences, not the shareable intent of a link.

---

## Phases

**Phase 0 — Spike. Done.** Branch `tanstack-spike`, commits `059ca35d` and `a9302170`. Verdict:
go. Everything above is what it found.

**Phase 1 — `pokedex-data-table`.**
The kit component: `model()` inputs for the three controlled slices, sorting, token styling, the
grid-plus-roles markup, keyboard operation, both themes. Register only `rowSortingFeature` +
`createSortedRowModel()`. Kit demo. Unit tests drive the table instance directly, no DOM — which
the spike confirms is possible, since the whole sort state is inspectable from the store.

Carry the config changes from check 4 into every `jest.config.ts` and `tsconfig.spec.json` that
will import the table, not just the app's.

**Phase 2 — Pilot: the Champions moves table, behind the flag. Done.**
`libs/domain-champions/src/lib/pokedex/moves-table.component.ts`, the learnset inside a Pokémon's
detail page. Chosen over the Pokédex moves list because Champions is the active project and this is
the smallest surface in it: one consumer, no routing of its own, and markup that is already
tabular. Sorting a learnset by power or accuracy is also a real answer to a real question when
building a set, which the Pokédex moves list is not.

This surface is already a table, so `?view=table` does not switch a list into a table here — it
switches the **current static table** for the **new sortable one**. That is a cleaner A/B than the
list surfaces get, because the two renderings hold the same content and any visual regression is
obvious side by side.

**Correction, made while building it: "the diff is the sorting behaviour and nothing else" was
wrong,** and Phase 4 needs to know that before it plans the roster, whose rows are richer still.
The learnset is not five scalar columns. Its first column packs six things into one cell — move
name, a "changed" badge, the effect sentence, a conditional effect-chance span, the ability-hook
tags and the override note — rows carry a modifier, numeric cells are right-aligned, and the whole
thing sits in a horizontal scroller. So Phase 2 also delivered five things Phase 1 did not provide:

- **`rowVariant`** on the kit component — a closed vocabulary (`'marked'`) that the kit both names
  and paints, rather than a class string from the consumer. A consumer class *cannot* work: `.row`
  lives in the kit's view and carries the kit's `_ngcontent` attribute under emulated
  encapsulation, and `jest-preset-angular` strips component styles, so the wrong shape passes its
  test green and shows an untinted row in the browser.
- **Column alignment** through `meta: { align: 'end' }`, read on the cell *and* on its header. The
  feature set has to declare a `columnMeta` slot for this to be typed at all — `table-core` ships
  `interface ColumnMeta {}`, and against an empty interface a misspelled `alignment` key compiles
  just as happily as `align`.
- **A scroller**, because the kit clipped. `.table` is `overflow: hidden` to clip the header
  background at the radius and `pokedex-card` is `overflow: hidden` too, so a row wider than a
  narrow viewport was unreachable rather than scrollable.
- **`move-name-cell.component.ts`**, the rich first column, rendered through `flexRenderComponent`.
  This is the first real use of the mechanism Phase 4 depends on for portraits and stat bars, and
  it works: mounted cells update across a re-sort rather than sticking to stale rows.
- **`view-mode.ts`**, the `?view=` parser, consumed as a routed `input()` rather than through
  `ActivatedRoute.queryParams` — still an `Observable` in router 22, with no signal accessor.

One trap worth carrying forward to every nullable numeric column: **`sortUndefined` must be the
string `'last'`, not the default.** The numeric form falls through to a `sortInt` that
`if (isDesc) sortInt *= -1` then inverts, so it means "undefined last ascending, undefined *first*
descending" — and numeric columns sort descending first, which puts every null at the top of the
very first click. And the accessor that maps `null → undefined` to make the comparator work is the
same change that blanks the cell, because the renderer emits nothing for `kind: 'null'`; the
em-dash has to be written out in an explicit `cell`.

**Phase 3 — split into 3a and 3b, on the input device rather than the feature.**

The original shape was four features, two input devices and a persistence layer at once, and the
half that gets squeezed in that arrangement is accessibility: CDK drag-and-drop is **not**
keyboard-operable, while kit rule 6 requires every interactive element to be.

**3a — visibility and ordering, from an inline disclosure panel. Done.**
`columnVisibilityFeature` + `columnOrderingFeature`, a Columns panel with a checkbox and move
buttons per column, and persistence for both slices in a Champions-side `signalStore`. Keyboard-first
by construction. Three designs were tried and two rejected with measurements, all recorded in the
component: `CdkMenu` closes on mouse click and on Enter (only Space keeps it open, so a keyboard-only
check never sees it); a CDK overlay has no `openChange`, nothing closes it on an outside click, and
its pane is appended to `<body>` so the panel's controls land after every element on the page in tab
order. An in-flow panel has none of those problems.

**3b — sizing and resizing, plus drag-to-reorder as a pointer shortcut.**
`columnSizingFeature` + `columnResizingFeature` (resizing needs sizing beneath it). Drag comes from
`@angular/cdk/drag-drop` per kit rule 5, as a faster path to the ordering 3a already provides — not
as its only path.

**The one thing 3b must decide first:** `column_getSize()` always returns a clamped pixel number once
`columnSizingFeature` is registered — there is no "unset". So `columnTracks` (`fr`, `rem`) and
resizing (px) are two sizing models that cannot both drive the same column. Decide per table: tracks
*or* resizable, with `columnTracks` at most seeding an initial pixel size. The id-keyed map shape
survives either way; only the values change.

**Phase 4 — Champions roster.**
The hard one and the one with the most to gain. `roster.component.ts` hand-rolls incremental paging
(`FIRST_PAGE = 10`, `PAGE_SIZE = 20`) because rendering all 241 rows measured at **4.4 seconds**.
Replace it with `@angular/cdk/scrolling` — per kit rule 5, and because `ui-list` already proves the
primitive works here. `@tanstack/angular-virtual` is not needed and should not be added; it is a
second virtualization implementation for a kit that has already chosen one.

Rich cells (portrait, type chips, stat bars) render through `flexRenderComponent`. The Mega sub-row
needs a decision — sub-row, `rowExpandingFeature`, or its own row.
**Measure against the 4.4s baseline; if the table is not clearly faster, this phase has failed.**

**Known ahead of time: the horizontal scroller must be restructured here.** Phase 2 gives `.table`
`width: max-content; min-width: 100%`, which is what makes a narrow viewport scroll instead of
clipping. Measured against the CDK 22.0.5 viewport (`contain: strict` plus an absolutely-positioned
content wrapper), **a windowed body contributes nothing to `max-content`**: at 400px the table
collapses to 400, horizontal scrolling disappears entirely, and header and body cells diverge (183px
against 168px). So Phase 4 cannot simply drop rows into a viewport — the width has to come from
somewhere the windowing does not erase, most likely the resolved track list itself.

Two Phase 2 constraints also carry forward, both because **each row is its own grid container**: no
content-based track may appear in `columnTracks` (`auto` made a column wander 26px between rows), and
the header sits outside the windowed region, so it must be sized by the same track string the rows
use rather than by its own content.

**Phase 5 — Pokédex list, and the verdict.**
`pokemon-list` becomes cards ⟷ table on the same flag, with the server-side sorting caveat above:
it sorts through GraphQL, so it registers `manualSorting: true` and does **not** get
`createSortedRowModel()`. The table hands its sort state to the query rather than sorting rows it
does not have — the list is `take: 500` off a server that holds far more.

**The table is the intended default here, not an alternative view.** The owner's reason for wanting
tables at all is this surface: *"I want to filter and sort pokemon easily and compare between
them."* Cards are sprite-forward and pleasant to browse, and they answer none of those three. The
flag still ships first so the two can be compared honestly, but the expected outcome is table-by-
default with cards kept behind `?view=cards`, not the reverse.

**Phase 6 — Selection feeds comparison.**
The third verb in that sentence — *compare* — is the one no phase above delivers, and both halves of
it already exist: `compare.component.ts` holds four Pokédex slots, and the Champions compare tray
holds four entries (`COMPARE_LIMIT = 4`). Today both are filled one at a time, away from the list
you are reading.

`rowSelectionFeature` closes that: tick rows in the table, and the selection *is* the comparison
set. It is a small feature on top of Phase 1's machinery and it converts two separate features into
one flow. Cap selection at the existing limit of four rather than inventing a new one, and keep the
tray as the thing that renders the comparison — this phase supplies it a better input, it does not
replace it.

---

## Risks, revised

| Risk | Status after Phase 0 | Mitigation |
| --- | --- | --- |
| Angular adapter immaturity | **Retired.** Builds, type-checks, repaints, tests clean. | — |
| Zoneless incompatibility | **Retired.** 14 tests in a zoneless environment. | — |
| Jest cannot load the ESM | **Retired.** Two-line fix, recorded in check 4. | Carry it into every consuming project's config |
| v8 answers online don't compile | Live, and worse than expected — the alpha docs are also stale (`_features`, `_rowModels`). | Read the installed `.d.ts`; it was faster than the docs twice |
| Feature gating not caught by the compiler | **Retired — the claim was wrong.** Unregistered feature methods are absent from the type; `strictTemplates` rejects them. | — |
| `sortFn` resolved by string at runtime | **New.** An unregistered name warns to the console and silently falls back to `sortFn_basic`. | Register `sortFn_text`; name a `sortFn` on every column |
| Columns rebuilt inside `injectTable` | **New.** A fresh array invalidates the memo dependency for every column, header group and cell — all reconstructed on each state change, memos cold. The table instance itself is stable. | Module-scope constants; make it a review-checklist line |
| ARIA roles hand-maintained | Live, unchanged. | Tests + one screen-reader pass in Phase 1 |
| Roster regression | Live, unchanged. | Explicit 4.4s baseline; Phase 4 fails if it is not beaten |
| Flag rots into a permanent fork | Live, unchanged. | Phase 5 forces a default-or-delete verdict per surface |
| Cold worktrees cannot build | **New**, and unrelated to TanStack. | Bump `eslint` to 9.35+ or pin `@eslint/js` to 9.x, separately |

---

## Conventions this follows

Feature branch, conventional commits, PR into `main`. Jest 30 + `@ngneat/spectator`. Tokens only —
a raw hex in the table styles is a bug.

**Naming: no abbreviations.** Everything new here is spelled out: `pokedex-data-table`, not
`pkd-data-table`; `TablePreferencesStore`, not `TablePrefsStore`; `columnIdentifier`, not
`columnId`, in our own signatures. Where this plan cites a path such as
`libs/domain-champions/src/lib/dex/dex-url.ts` it is naming the file as it stands **mid-rename**,
not endorsing it — and the rename has since widened to the GraphQL schema, so `ChampDexEntry` is
becoming `ChampionsPokedexEntry` and `champDex` is becoming `championsPokedex`. Assume no
abbreviated name in the current tree survives; write new code against the spelled-out one.

The one carve-out stands: terms the game itself abbreviates are the domain's vocabulary, not our
shorthand. `hitPoints` is spelled out because the game says HP about a stat, not a field, but PP,
STAB, IV and EV stay as they are.

Names that come from TanStack — `sortFn`, `columnOrder`, `accessorKey` — are theirs and stay as
they are. The rule governs what we write, not what we import.

---

## Sources

- The installed `@tanstack/angular-table@9.2.2` and `@tanstack/table-core@9.1.2` declaration files,
  which were the most reliable source by a distance
- [Migrating to TanStack Table V9 (Angular)](https://tanstack.com/table/latest/docs/framework/angular/guide/migrating)
- [TanStack/table `packages/angular-table/skills/migrate-v8-to-v9`](https://github.com/TanStack/table/blob/main/packages/angular-table/skills/migrate-v8-to-v9/SKILL.md)
- The alpha Angular docs, which are **stale** — they show `_features` and `_rowModels`, neither of
  which is the 9.2.2 API
