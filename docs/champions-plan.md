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

1. **The Pokédex loads the whole roster once and filters in the browser.** 316 rows + a
   324-row chart. Verified zero network requests while filtering. This is what makes the
   filters instant and freely combinable — and it is why the matchup filter is affordable.
2. **The Box is the source of truth for your own side.** `boxEntryToBuild` uses your real
   spread, nature, item and moves. `inferBuild` (assume maximum investment, compute a moveset)
   is now **opponents only**.
3. **Local-first vs server-backed is per store.** Box and teams → server (kept for months).
   Opponent slots, battle state, dex filters → localStorage (per-match scratch, where a round
   trip is latency you do not have).
4. **`champions-engine` never imports Angular, fetch or the DOM.** Reference data is passed in.
5. **Anything uncertain is labelled**, never silently smoothed.

## The five sections

### Pokédex — `/champions/dex`
Roster grid with sprites; filters for name, type (any/both), Mega (has / hasn't / list Mega
forms), **matchup with a direction toggle**, minimum stats as real level-50 numbers, ability,
sort. Detail pages lead with a defensive profile. "What Champions changed" at `/dex/changes`.

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

**Pokédex**
- No saved filter sets yet, though the mainline `FilterSet` pattern is there to copy.
- Detail pages do not show which Pokémon counter *this* one; the matchup query exists.
- No usage or tier context anywhere — the real game's Battle Data menu has it.

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

- **Never put a backtick inside a component's template literal.** Cost three debug cycles — a
  comment mentioning a method in backticks silently ends the template string.
- Prisma commands need `--config prisma.champions.config.ts` or they hit the mainline DB.
- Codegen needs `scalars: { DateTime: 'string' }`; export from `./lib/generated/graphql`, not
  the generated barrel. Re-run it after the service restarts or it races the `schema.gql` write.
- Domain libs have **no build target** — they compile through the app. The same `rootDir` limit
  stops `champions-service` importing `champions-engine`, which is why the SP budget constants
  are duplicated there.
- Sprite artwork resolves by **form id**, not species number. `node tools/mirror-sprites.mjs
  --forms` covers Megas.

## Verification baseline

- 143 tests across the Champions projects; 274 on the untouched Nuzlocke side.
- Zero content changes to the mainline pokedex, school, its schema, its client, or `data/csv`.
- No horizontal overflow on any route in either app at 375px.
