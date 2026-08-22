# Champions — state of play

_Last updated: 2026-08-22 · Status: **base complete across all five sections.** Eleven commits on
`feat/champions-shell-split`, nothing merged to `main`. Next phase: deepen each section._

## What this is

Pokémon Champions (ILCA's competitive battler; Switch 8 Apr 2026, mobile 17 Jun 2026) is now
the workspace's focus. The goal is the tool that does not exist: a **real-time companion** you
use during ladder matches, built on a Pokédex that is correct about Champions specifically.

Static Champions reference sites already exist (ChampDex, PikaChampions, RotomPicks, Game8).
The differentiator is not the data — it is that this one knows your team, filters by questions
others cannot answer, and runs beside you during a match.

## Why Champions has its own database

Champions is mechanically divergent enough that projecting mainline data gives confidently
wrong answers mid-ladder:

| Mechanic | Mainline | Champions |
|---|---|---|
| IVs | 0–31 per stat | **None** — everything behaves as 31 |
| EVs | 510 total / 252 cap, `÷4` into stats | **SP**: 66 total / 32 cap, **1 SP = 1 stat point** |
| Level | variable | **Fixed 50** |
| Moves | Gen-9 values | **Rebalanced** — Snap Trap Grass→Steel, Beak Blast 100→120, Dragon Cheer now Sound, most PP changed |
| Roster | national dex | **Regulation sets** — M-B (17 Jun → 2 Sep 2026), 316 legal incl. 75 Megas |

The stat formula is **(stat + SP) × nature** — SP added first, nature multiplying the total.
Confirmed by the project owner against the game and pinned by a test that also asserts the
alternative ordering is *not* produced (169 vs 166 for a Jolly max-Speed Garchomp).

A second, independent reason: the companion **needs writes**, and the mainline API is read-only
by decree (enforced by `tools/pokedex:cleanup`, which strips mutation resolvers). Never wire
that executor into `champions-service`.

## Shape

**Two apps, one build.** `/nuzlocke/*` is the original Pokemon Center; `/champions/*` is this.
Each mounts its own shell with its own header and nav — neither can see the other's tabs. `/`
lands on Champions.

```
apps/
  champions-service/        NestJS + GraphQL on :3001. Mutations ALLOWED.
  pokemon-center/           Both shells: layout/{nuzlocke,champions}-shell/
libs/
  champions-engine/         Framework-free, data-free battle maths. 75 tests.
  data-access-champions/    Codegen'd documents + champResource + injectChampMutate
  domain-champions/         dex/ box/ advisor/ battle/ simulator/ school/
  prisma-champions/         Generated client for the Champions DB
  ui-pokedex/               Shared design system — zero cross-lib imports
tools/champions/            fetch → derive → seed pipeline (a CLI, not Nx executors)
prisma/champions/           Second Prisma project; needs --config on every command
data/champions/             raw/ (committed wikitext) + derived/ (the review gate)
```

Database `pokemon-champions` on the existing Postgres container (:5433), env
`DATABASE_URL_CHAMPIONS`.

## Load-bearing decisions

1. **The Pokédex loads the whole roster once and filters in the browser.** 316 rows (241 base
   forms + 75 Megas) + a 324-row chart. Verified zero network requests while filtering. This is
   what makes the filters instant and freely combinable — and it is why the matchup filter, the
   counter ranking and the counter filter are all affordable without a single extra query.
2. **The Box is the source of truth for your own side.** `boxEntryToBuild` uses your real
   spread, nature, item and moves. `inferBuild` (assume maximum investment, compute a moveset)
   is now **opponents only**.
3. **Local-first vs server-backed is per store.** Box and teams → server (kept for months).
   Opponent slots, battle state, dex filters → localStorage (per-match scratch, where a round
   trip is latency you do not have).
4. **`champions-engine` never imports Angular, fetch or the DOM.** Reference data is passed in.
5. **Anything uncertain is labelled**, never silently smoothed.

## The five sections

### Pokédex — `/champions/pokedex`
A **table** of the 241 base forms: `image | #dex name / types | abilities | stat cells |
actions`. Abilities explain themselves on hover or focus; Megas are indented sub-rows carrying
their ability, typing and stats with the movement coloured. Actions are Box, Sim and Compare,
the last filling a docked comparison tray (up to four, best value in each row marked).

Filters, all visible: search, type, matchup, Mega, base-stat ranges, ability, **move**, what you
own, answers to a given Pokémon, sort. **Filter state is the URL** — a view is a link you can
paste — and can be named and saved locally. **Type and matchup chips have two readings chosen by how you
click** — single is strict (the typing must *be* the selection; one chip means mono-types),
double is loose (any of them, no cap). Solid border versus dashed is the whole explanation. The
matchup also takes a Pokémon by autocomplete, which just fills the chips with its typing. Mega
is a three-state checkbox. Stat filters are two-ended sliders over **base stats**, and name a
landmark Pokémon as you drag — "faster than Jolteon" rather than "Speed ≥ 130". An empty result
names which filter to drop and what dropping it would return.

Detail pages lead with a defensive profile, then base stats with an **on-demand SP and nature
calculator**, then the Mega form in full, and finally **what beats this and what this beats** —
collapsed and deferred at the bottom. "What Champions changed" at `/pokedex/changes`.
`/champions/dex/*` redirects, so old links keep working.

**A Mega is not a separate Pokémon — but it is still an answer.** By default it sits under its
base form rather than beside it, and `/dex/garchomp-mega` redirects to `/dex/garchomp`: a list
interleaving Garchomp with Mega Garchomp reads as two threats when it is one line of thinking.

**A Mega does, however, qualify its base form for a filter.** Base Speed 125+ has to surface
Beedrill, whose Mega hits 145 from a base of 75 — anything else hides something that outspeeds
you, and such rows are marked `Matches as Mega`. `megaDisplay` switches between that reading,
one row per Mega (`separate`), and ignoring them (`hidden`).

### Box — `/champions/box`
Pokémon you own, with nature/ability/item/four moves/SP. The build editor shows every
consequence immediately and the sliders **cannot express an illegal spread**. Team builder
assembles six from the Box with a live shared-weakness readout.

### Companion — `/champions/companion` (+ `/live`)
Pick a saved team, enter their six: type pressure, merged speed order, six-by-six matchup grid
with must-remove and win-conditions. `/live` is the one-tap in-battle tracker.

### Simulator — `/champions/simulator`
Two Pokémon, both attack directions at once, every condition unlocked. Either side can be a
Box build (exact) or a roster pick (inferred) — the picker labels which.

### School — `/champions/school`
Three Champions-native drills: type matchups in Champions' wording, speed tiers, survival.
Deliberately *not* a port of the Nuzlocke School, whose vocabulary (evolutions, TM numbers,
growth curves) does not exist here.

## Running it

```bash
docker compose up postgres          # :5433
nx serve champions-service          # :3001
nx serve pokemon-center             # :4200
nx run champions:refresh            # fetch → derive → seed, on regulation rotation
```

`prisma generate --config prisma.champions.config.ts` after any schema change — `migrate dev`
does not reliably regenerate.

## Known weaknesses, by section

Honest backlog for the next phase. None of these are broken; all are shallow.

**Pokédex** — see `docs/champions-pokedex-plan.md`; P0–P3 of that plan are done.
- ~~Detail pages do not show which Pokémon counter *this* one.~~ Both directions now render from
  the in-memory roster, ranked and explained, with no new query.
- ~~No saved filter sets; filter state is not shareable as a URL.~~ Both shipped, sharing one codec.
- ~~No filter by move.~~ Shipped on a lazy `champMoveLearners` query.
- The move table on a detail page is still an unfiltered wall, and there is no Speed-tier
  percentile or nature toggle — that is P4.
- No usage or tier context anywhere. Deliberately still open: there is no source, and deriving a
  tier list from base stat totals would be exactly the confidently-wrong answer this database
  exists to avoid. It gets cheap once the Companion starts writing `KnownSet`.

**Box**
- Item is a free-text slug; there is no item list, so no autocomplete and no validation.
- No import/export, so a team has to be entered by hand.
- No duplicate/clone, which is how people actually build spread variants.
- Nothing validates a moveset against four slots at save time beyond truncation.

**Companion**
- Opponent movesets are computed, never observed. `known_set` with `source: OBSERVED` and
  `seen_count` exists in the schema but nothing writes to it — the live tracker records
  revealed moves only into local state.
- No recent-opponents list, though ladder faces repeat.
- The threat grid does not account for items or abilities on the opponent side.

**Simulator**
- Cannot override the opponent's spread or item; you get the inferred build or nothing.
- No multi-turn projection — it answers one exchange, not a sequence.

**School**
- No progress, no spaced repetition, no difficulty ramp; score resets on reload.
- Three drill types only. Abilities were requested and are not covered.
- The survival drill uses a simplified 100 BP STAB yardstick rather than real movesets.

**Live tracker**
- Opponent move reveals do not feed the `known_set` corpus.
- No doubles support, though the schema has a `BattleFormat`.

## Open questions

See `champions-open-questions` in memory. The material one:

- **Learnsets are partly approximated.** The mainline dataset's `champions` version group
  (id 32) has gaps — Gholdengo and Annihilape have no rows — so those are filled from
  Scarlet/Violet, Legends Z-A and Mega Dimension and flagged `learnset_is_approximate`.
- Bulbapedia's prose says "208 species" but its own table lists 224. The pipeline trusts the
  table; the Mega count (75) matches exactly, which is the reassuring part.

## Hard-won gotchas

- **A dispatched `mouseover` does not trigger CSS `:hover`.** An ability tooltip passed a check
  that asserted its computed `display`, while being clipped and invisible to an actual user.
  Verify hover states by moving a real pointer.
- **Rendering a whole list is the expensive thing, not filtering it.** `applyFilters` over 316
  rows is microseconds; building 241 row components took 4.4 seconds. Any list here renders a
  page at a time, and any input that drives one is debounced. Measure before optimising — the
  router write, the sprite images and the CSS gradients were all suspected here and all three
  were nearly free.
- **A CSS grid per row cannot align with the grid in the row above it.** Columns size to their
  own row's content, so an empty cell in one collapses and shifts everything before it. Rows
  that must line up share one grid, with the wrappers set to `display: contents`.
- **The 4 kB component-style budget is a hard error, and it is the signal to extract a
  component.** It has fired three times in the Pokédex work, and each time the right fix was the
  one the budget was pointing at: the counter lists, the stat panel and the saved-set manager all
  became their own components rather than more CSS in a page. Treat it as a design review, not an
  obstacle. (The 2 kB warning is noise — a dozen components sit above it.)
- **Never put a backtick inside a component's template literal.** Cost three debug cycles — a
  comment mentioning a method in backticks silently ends the template string. It has since cost
  two more, both times in an HTML comment inside `template:`. The failure is loud but the error
  points at `styles:`, dozens of lines below the real culprit. Grep the file for backticks and
  check which fall between the template's own delimiters.
- **`html, body { height: 100%; overflow: hidden }` was in `styles.scss` with no inner scroll
  container**, so every route was pinned to one viewport and everything below the fold was
  unreachable. It is `min-height: 100%` and nothing else now. If horizontal overflow ever needs
  suppressing that is `overflow-x`, never both axes — and nothing in either app chains a
  percentage height off `body`, so there is nothing to restore.
- Prisma commands need `--config prisma.champions.config.ts` or they hit the mainline DB.
- Codegen needs `scalars: { DateTime: 'string' }`; export from `./lib/generated/graphql`, not
  the generated barrel. Re-run it after the service restarts or it races the `schema.gql` write.
- Domain libs have **no build target** — they compile through the app. The same `rootDir` limit
  stops `champions-service` importing `champions-engine`, which is why the SP budget constants
  are duplicated there.
- Sprite artwork resolves by **form id**, not species number. `node tools/mirror-sprites.mjs
  --forms` covers Megas.

## Verification baseline

- 171 tests across the Champions projects — `champions-engine` 87, `domain-champions` 58,
  `champions` (the pipeline) 26 — and 274 on the untouched Nuzlocke side. The Pokédex pass added
  26 of those (engine 76 → 87, domain 43 → 58).
- Zero content changes to the mainline pokedex, school, its schema, its client, or `data/csv`.
- No horizontal overflow on any route in either app at 375px.
