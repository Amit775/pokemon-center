# Champions Pokédex — deepening plan

_Written 2026-08-22 · Section 1 of 5 · Base is complete; this is the pass that makes it good._

_**Status: P0–P3 and two review rounds shipped** (2026-08-22, unmerged on
`feat/champions-shell-split`). P4 next; P5 still deliberately blocked._

## Review round 3 — making it usable mid-match (2026-08-22)

Two reports: search "slow as hell", and the Mega sub-row not lining up with its base form.

**The search was rendering the entire result set on every keystroke.** Measured before touching
anything: 241 rows is 13,075 DOM nodes and ~240 component instances, and a full re-render took
**4,369ms**. Three things were ruled out by measurement rather than guessed at — the router
write was 7ms of 3,482ms, sprite images were fully cached and cost nothing, and stripping every
`color-mix` gradient and box-shadow saved only ~19%. The cost was Angular *instantiating* the
rows: reusing 30 rows took 54ms, building 30 fresh ones took ~400ms.

So the fix is to build fewer rows, and to build them less often:

- **Paged rendering.** Ten rows first, then twenty more as a sentinel comes into view 400px
  below the fold. Deliberately not CDK virtual scrolling: row height varies with ability count
  *and* Mega count (measured at 70/75/84px with no Mega, 128/133 with one, 185 with two), and a
  fixed `itemSize` would put the scrollbar and every offset wrong.
- **A 140ms search debounce**, with the input left unbound. A `[value]` binding would re-apply
  the store's stale text on every change-detection pass and snap the caret back mid-word; an
  effect pushes external changes in instead, and never while the box has focus.

| | before | after |
|---|---|---|
| Per keystroke while typing | blocks for hundreds of ms | **0–1ms** |
| First results readable | 4,369ms | **224ms** (140 of it the debounce) |
| Full first page | 4,369ms | 473ms |

**The Mega row did not align** because each row was its own CSS grid, so its columns sized to
its own content — and a Mega row has no action buttons, so its empty last column collapsed and
let every column before it stretch, pushing abilities and stats 70–140px right. The row
wrappers are now `display: contents`, dissolving them into a single grid per card, which is
what actually guarantees alignment. Verified: base and both Mega rows report identical column
offsets.

## Review round 2 — the list redesign (2026-08-22)

Thirteen items from the project owner. The through-line: **the card grid was decoration**. A
sprite, a name and a stat total cannot settle a choice between two Pokémon, so every comparison
meant opening two pages. Everything below follows from replacing it with a table.

**Route and chrome.** `/champions/dex` → `/champions/pokedex` (prefix redirect kept, so
`/dex/garchomp` still resolves). Tagline gone, result count gone, "Search the roster…" → 
"Search…". Copy nobody reads twice and a number nobody acts on.

**Type and matchup pickers — one control, two readings.** Single click is strict: the typing
must *be* the selection, so one chip means mono-types only and two mean exactly that pair,
capped at two. Double click is loose: any of the selected types, no cap. **Solid border versus
dashed is the entire explanation** — no toggle, no legend. Verified: single-click Fire returns 7
mono-Fire species (Charizard correctly excluded); double-click Fire+Flying returns 44.
Shift+Enter mirrors double-click, or the loose reading would be mouse-only.

Matchup relabelled **Effective / Resists**, and gained a Pokémon autocomplete that fills the
chips with that species' typing — deliberately the same machinery rather than a second code
path, so the direction toggle keeps meaning what it meant. Picking Garchomp under "Resists"
returns Skarmory, Whimsicott, Corviknight.

**Mega is a three-state checkbox** (empty → ✓ has → ✕ has not). Two checkboxes would let you
tick both, which means nothing.

**Every filter is visible.** The old "More filters" disclosure hid the stat and ability filters —
the two that most reward experimenting were the two nobody found.

**Stat filters are two-ended base-stat sliders, with a landmark.** Drag Speed to 130 and
*Jolteon 130* appears above the handle. "Speed ≥ 130" is a number nobody has a feel for;
"faster than Jolteon" is a thought people actually have, and it is the same filter. The
landmark picks the lowest dex number at each value — fame is not in the data, and age is the
closest available proxy for it. **Base stats only**: a level-50 number depends on SP and nature,
which are build choices, not species facts.

**Rows, not cards**: `image | #dex name / types | abilities | stat cells | actions`. Abilities
explain themselves on hover *and* keyboard focus. Stat cells carry a magnitude bar behind the
value. Actions are Box, Sim, Compare.

**Megas are sub-rows** — indented, quieter, carrying only what changes: ability, typing, stats,
with movement coloured. Mega Skarmory reads +60 Atk in green and −30 Def in red at a glance.

**Compare is a docked tray**, not a route: comparing is something you do *while* filtering, and
navigating away would throw out the list you built to find the candidates. Up to four, with the
winning value in each row marked — two stat columns side by side still leave you doing the
subtraction.

**One API addition**: `champAbilities` returns every ability with its effect text, joined onto
the roster by slug in the browser. Putting effect text on `champDex` would repeat it once per
Pokémon that has the ability; this sends it once.

## Review round (2026-08-22)

Five items from the project owner after seeing P0–P2 running.

1. **The page could not scroll.** `html, body { height: 100%; overflow: hidden }` in
   `styles.scss` — the full-height-app pattern without the inner scroll container it requires.
   Neither shell has one; both just stack a header above the routed page. Every route was
   clipped at one viewport. Now `min-height: 100%` and no overflow rule. Nothing in either app
   chains a percentage height off `body`, so there was nothing to restore alongside it.
2. **A Mega is not a separate Pokémon** — now a convention, not a toggle. It is gone from the
   grid (241 rows, not 316), from both counter lists, and from the owned set, which normalizes
   to base slugs. `/dex/garchomp-mega` redirects to `/dex/garchomp`. The `includeMegaForms`
   filter is deleted rather than defaulted off.
3. **The Mega appears in full on its base form's page**: artwork, typing, every stat, its own
   calculator, and the deltas the stone buys — `+40 Atk … −10 Spe · +100 BST`, with the loss in
   red, because a Mega that gives up Speed must not read as a pure win.
4. **Base stats only, with the level-50 maths on demand.** The invested number is not one value
   but a family of them; printing 32 SP and a neutral nature as though it were *the* stat is a
   quiet lie, since nobody runs a neutral nature on the stat they care about. The calculator
   opens on request, starts empty and neutral, and clamps to Champions' budget so an illegal
   spread is unreachable — the same rule the Box's build editor follows.
5. **Matchups are last, collapsed, and `@defer`red.** The chunk is not downloaded and the ~480
   rankings are not computed until someone expands it; the lists read signals, and a signal
   nobody reads is a signal nobody pays for. Trimmed from 12 rows a side to 8.

## Where it stands

Working today: whole roster in memory (316 rows + 324 chart rows, zero network per keystroke),
filters for name/type/Mega/matchup/min-stats/ability/sort, a card grid, a detail page leading with
the defensive profile and flagging every move Champions changed, and `/dex/changes`.

The design decision underneath — **fetch once, filter locally** — is right and everything below
leans on it rather than fighting it.

## What is actually wrong with it

Three categories, in order of how much they cost.

### 1. The dex is a dead end

`grep routerLink` across `libs/domain-champions/src/lib/dex/` returns links to the dex and nothing
else. You can look a Pokémon up and then you are stuck: no way to put it in your Box, no way to
throw it at the Simulator, no signal that you already own one. The stated differentiator is *"this
one knows your team"* — the Pokédex is the one section where it does not.

### 2. It answers "what is this" but not "what do I do about it"

The detail page is a fact sheet. The competitive questions it does not answer:

- **What beats this?** (`champions-plan.md` flags it; the whole roster is already in memory, so a
  typing-level answer costs one `computed`)
- **Is this fast?** 132 Speed means nothing without the tier it sits in.
- **What does the Mega actually buy?** Mega forms are listed by name and BST; the deltas are not.
- The move table is an unsorted, unfiltered wall — 100+ rows for anything with a wide learnset.

### 3. Papercuts that are just bugs

- `aria-live="polite"` sits on `<section class="results">` in
  [roster.component.ts:33](libs/domain-champions/src/lib/dex/roster.component.ts:33), which wraps
  the entire grid. Every keystroke re-announces up to 316 cards. It belongs on the count line.
- [pokemon-detail.component.ts:37](libs/domain-champions/src/lib/dex/pokemon-detail.component.ts:37)
  gates the whole page on `query.isLoading()`, so every navigation from the grid flashes a 16rem
  skeleton — for a name, typing and stat spread the app already has in `DexStore`.
- Filters live only in `localStorage`. No shareable URL, no back-button semantics, and none of the
  saved-filter-set affordance the mainline side already has as `FilterSet`.
- Search matches species name only. Typing "levitate" or "dragon" finds nothing.
- Sorting by Speed hides Speed — the card shows BST regardless of sort key.

---

## The plan

Five phases. Each is independently shippable and leaves the section working.

### ~~P0 — Correctness and perceived speed~~ ✅ shipped

Small, no new data, no new queries.

| Change | File |
|---|---|
| Live region moved to the count line, so a keystroke announces "132 of 316 legal" rather than the grid | `dex/roster.component.ts` |
| Detail page seeded from `DexStore` — name, types, sprite, base stats and the whole defensive profile paint immediately; only abilities/Megas/moves show a skeleton. Also **removed** the page's duplicate `TypeChart` query, since the store already holds it | `dex/pokemon-detail.component.ts` |
| Every sort falls back to dex number, so ties stop reshuffling between renders | `dex/dex-filter.ts` |
| Empty state names the filters worth dropping, each costed (`diagnoseEmpty`) — and omits ones whose removal still returns nothing | `dex/dex-filter.ts`, `dex/roster.component.ts` |

The empty-state diagnosis turned out better than planned: with a stale search plus four type
chips, it correctly offered only *"Ignore the search → 132"*, because dropping the types alone
would still have matched nothing.

### ~~P1 — Wire the dex into the rest of the app~~ ✅ shipped

This is the phase that makes the section stop being a reference site.

- **Outbound actions.** Detail header gets *Open in Simulator* and *Add to Box*; roster cards get
  compact *Sim* / *+ Box* links on hover or keyboard focus, and permanently under
  `@media (pointer: coarse)` where there is no hover to reveal them. They are siblings of the card
  link rather than children, so the markup stays valid.
- **Simulator accepts a deep link.** `/champions/simulator?left=garchomp&right=corviknight`
  preselects both sides. Seeding only, read `untracked` — the URL sets where you start, and picking
  something else afterwards is a decision, not a navigation.
- **Box accepts a species.** `/champions/box?add=garchomp` opens the build editor directly on that
  species, skipping the picker step that has no content when you already know the answer.
- **"You own one" on the roster.** `DexStore` reads `BoxStore.entries()`; owned tiles get a green
  border and an `Owned` word-badge, and an `Only what I own` filter falls out for free. A Mega
  counts as owned when you own its base form — the stone is the only difference.
- **Prev/next within the filtered set.** The detail page reads `DexStore.results()`, so the arrows
  walk *your current filter*, not the national dex, and disappear when the slug is not in the
  results rather than jumping somewhere unrelated.

Dependency notes: `DexStore` reading `BoxStore` is domain-internal, no lib boundary crossed. The
Box query's failure is deliberately *not* folded into the dex's `error` — an unreachable Box costs
you a badge, not the roster.

### ~~P2 — Counters (the flagship gap)~~ ✅ shipped

**"What beats this"** on the detail page, and its mirror **"What this beats"**.

Computed entirely in the browser from the roster already in memory. The scoring is typing-level and
says so:

```
counterScore(target, candidate, chart) =
    candidate resists or is immune to every one of target's STAB types   (the wall half)
  + candidate has a STAB type that is super effective into target        (the threat half)
  + candidate's base Speed vs target's base Speed                        (the tiebreak)
```

Decisions this encodes:

- **Typing only, honestly labelled.** A damage-level answer needs learnsets for all 316, which is a
  payload problem (below). A typing-level answer is correct about the thing that decides most
  matchups and can be computed in a `computed()`. Each row links to the Simulator, which *is* the
  exact-number tool — so the shallow answer hands off to the deep one instead of pretending.
- **Both halves required for the top tier.** Something that walls you but cannot threaten you is a
  *stall*, not a counter, and gets its own ranked band rather than being mixed in.
- **Lives in `champions-engine`**, framework-free and unit-tested alongside `matchup.ts`, because it
  is battle maths — `dex-filter.ts` stays about browsing.

Also worth having, same machinery, near-zero extra cost: a **counter filter** on the roster —
"show me everything that counters Mega Garchomp" — which is the matchup filter aimed at a *Pokémon*
instead of at a *type*.

**What shipped**, in `champions-engine/src/lib/counters.ts` plus `dex/counters.ts`,
`dex/counter-list.component.ts`:

- Five bands, not three. `trade` (both sides hit super-effectively — a speed race, not an answer)
  and `loses` were needed to keep `counter` meaningful. Only `counter`, `check` and `wall` are
  shown, and `isAnswer` is the single place that decides.
- `counter` demands the candidate resist **every** one of the target's STAB types, matching the
  rule `passesMatchup` already uses. It makes the top band sparse and precise: Garchomp gets
  40 answers, of which the leaders are Mega Clefable (Fairy/Flying — immune to *both* its types),
  Whimsicott and Mega Meganium, with the Ice 4× checks below them.
- Every row carries a **word for its band and a sentence for its reason**, so the ranking is never
  a colour-coded list you have to trust. The reason names its subject in the outgoing list, where
  the row names the opponent but the score describes the pivot.
- The counter filter is set from a detail page rather than from a picker in the sidebar — that is
  where the question gets asked — and shows as a removable "Answers to *X*" banner on the grid.
  It outranks the selected sort, because asking for answers is asking for a ranking.
- Both lists render from the roster already in memory. **No new query, no schema change.**

### ~~P3 — Filters that answer more questions~~ ✅ shipped

- **URL as state.** Serialize `DexFilters` to query params; `localStorage` becomes the default when
  the URL is bare. Gives shareable views and a working back button.
- **Saved filter sets.** Copy the `FilterSet` shape from
  [pokedex-context.store.ts:5](libs/data-access-pokedex/src/lib/pokedex-context.store.ts:5) — name,
  save, quick-switch, delete. Local-first, no accounts, same as the mainline side.
- **Search widens** to ability names and type names, ranked below species-name matches so the
  common case is unaffected.
- **The sorted stat shows on the card.** Sort by Speed → the card's meta line shows Speed, not BST.
- **Filter by move** — "who learns Fake Out", the single most-asked competitive filter.
  **This one needs an API change**, and the cheap version is not the obvious one:

  > Putting `moveSlugs` on `champDex` adds roughly 300KB to the one query the whole section depends
  > on, to serve a filter most visits never touch. Instead add
  > `champMoveLearners(moveSlug: String!): [Int!]!` returning ids — one round trip the first time a
  > move is picked, cached in the store, instant thereafter. The fetch-once principle is preserved;
  > it just gets a second, lazy fetch.

**What shipped**, in `dex/dex-url.ts` plus additions to the store, filter panel and resolver:

- **URL as state.** A compact codec (`q`, `t`, `mu`, `s=speed:130-260`, …) writing only what
  differs from the default, so a cleared panel leaves a bare URL. Decoding never throws: every
  value is checked against what it is allowed to be. Two decisions worth keeping: a URL carrying
  filters **wins outright over stored ones rather than merging** — a shared view must be the
  sender's view, not theirs plus whatever the recipient left switched on — and writes use
  `replaceUrl`, because a filter panel emits a state per keystroke and pushing them all would
  turn Back into a per-character undo.
- **Saved filter sets**, stored as the query string rather than as an object, so one codec covers
  saving and sharing and a filter added later cannot leave old sets holding an unparseable shape.
  Saving over a name replaces it.
- **Search widened** to ability names, ability slugs and type names. Slugs because that is what a
  shared URL carries. Species-name prefixes still float to the top, so the common case is
  unchanged.
- **Filter by move**, on the lazy query as planned — plus one supporting change: `champResource`
  now treats `undefined` variables as *idle* rather than firing a request with a missing
  argument, which is what makes a genuinely lazy query possible. While the learners are in
  flight the filter is **skipped rather than applied**: narrowing a full list reads as loading,
  whereas an empty list that later fills reads as a broken filter.

Two bugs the tests caught, both in the codec: `-50-9999` split on the separator into three
pieces and silently decoded as `0-50` (now matched with a regex), and the widened search missed
abilities whose name was absent but whose slug was present.

### P4 — Detail-page depth

- **Move table becomes usable**: filter box, damage-class segmented control (Physical / Special /
  Status), a STAB marker, and a *changed only* toggle. Sorted by power already; keep that.
- **Speed tier placement**: "132 Speed — outspeeds 71% of the legal roster; 145 with a positive
  nature." Percentile is a one-line `computed` over the roster already in memory, and Champions'
  fixed level 50 plus no IVs makes it exact rather than approximate — a claim mainline dexes cannot
  make.
- **Mega deltas**: when a Pokémon has a Mega, show `+30 Atk / +20 Spe / Ground → Ground-Dragon`
  rather than two BSTs to subtract in your head.
- **Nature toggle on the stat rows**: neutral / boosting / hindering, since `(stat + SP) × nature`
  is the formula the whole app is pinned on and this is where a user would sanity-check it.
- **Abilities gain a note** where the Mega ability is forced, which is already known data
  (`megaAbility`) currently rendered only as a `Mega only` tag.

### P5 — Usage and tier context — blocked, and should stay blocked

`champions-plan.md` lists "no usage or tier context anywhere" as a weakness. It stays one until
there is a source. The options:

1. Scrape a community usage aggregator once a regulation and commit it under `data/champions/raw/`
   like the rest of the pipeline. Honest, but depends on a third party's numbers and their licence.
2. Derive a **local** signal instead: what *you* have boxed, teamed, and faced. The schema already
   has `BattleSession` and `KnownSet`; nothing writes to them yet (Companion's own backlog item).
   This is smaller than global usage data but it is *yours* and nobody else can show it.

Recommendation: **do neither in this pass.** Option 2 becomes free once the Companion phase starts
writing `KnownSet`, and inventing a tier list from base stat totals would be exactly the
"confidently wrong" failure the whole Champions database exists to avoid.

---

## Suggested order

P0 and P1 first — they are small and they change how the section feels more than anything else
here. P2 is the headline feature and the reason to open this dex over ChampDex. P3 and P4 are
breadth and can interleave. P5 waits.

## What "done" looks like

- Counters render for every legal Pokémon, with the typing-level basis stated on screen.
- Every dex page can reach the Box and the Simulator in one click, and knows what you own.
- A filter state is a URL you can paste.
- Detail navigation from the grid does not flash a skeleton.
- No new mainline-data changes; `champDex` payload unchanged except by opt-in lazy queries.
- New engine maths (`counterScore`) is unit-tested in `champions-engine`, framework-free.
