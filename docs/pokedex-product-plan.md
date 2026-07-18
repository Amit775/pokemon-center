# Pokedex Product Plan — "The Best Pokedex There Is"

_Last updated: 2026-07-18 · Owner: Amit · Status: proposed_

## 1. Product thesis

Every existing pokedex (Bulbapedia, Serebii, pokemondb.net, the official app) treats the player as a
researcher: you look up a fact, you leave. None of them treat the player as **someone in the middle of
a playthrough**. You're playing LeafGreen and every page makes you re-select "FireRed/LeafGreen" from
a dropdown, wade through gen-9 moves that don't exist in your game, and mentally filter out 900
pokemon you can't catch.

**Our thesis: the pokedex should know what game you're playing.** Set it once — everything
(availability, learnsets, TMs, encounter locations, type chart, even stats for retro gens) reflects
*your* game. Combined with the fact that we run on a full local relational copy of the data (fast,
joinable, multilingual), this is a genuinely differentiated product, not a clone.

Three product pillars, in priority order:

1. **Context** — the pokedex adapts to your active game and remembers your preferences.
2. **Findability** — anything reachable in under 3 interactions, typo-tolerant, filterable.
3. **Intelligence** — answers questions other pokedexes can't ("best counters vs this gym"),
   because we can join tables and they can't.

## 2. Personas

- **The Playthrough Player** (primary) — mid-game in a specific version; wants "can I catch it,
  where, what does it learn, what beats the next gym." Optimizes for speed and per-game relevance.
- **The Competitive Learner** — cares about stats, matchups, coverage, movesets; feeds directly into
  the future School/Arena domains.
- **The Completionist / Nostalgic** — browses evolution lines, flavor text across versions,
  multilingual names, past-gen forms.

## 3. The releases

### R1 — Game Context (the anchor) 🎯

> "When I'm playing LeafGreen, the filter is always version = LeafGreen."

- **Active Game selector**: a persistent header control listing all version groups. Selecting one
  scopes the entire app: pokemon list (regional dex membership via `pokemon_dex_numbers` +
  `pokedex_version_groups`), learnsets (`pokemon_moves.version_group_id`), TM/HM numbers
  (`machines`), flavor text (`pokemon_species_flavor_text.version_id`), and past-generation
  stats/types (`pokemon_stats_past`, `pokemon_types_past`, `type_efficacy_past`) so a gen-1 context
  shows gen-1 Psychic-is-broken reality. "All games" remains the default context.
- **Saved filter sets**: name and save any filter combination ("LeafGreen water team candidates"),
  quick-switch from a menu, deletable. The active game is part of a filter set.
- **Preferences store**: `@ngrx/signals` `signalStore` (finally home 💛) with a `withStorageSync`-style
  persistence to localStorage. No accounts in this phase — local-first, zero friction.
- **Shareable URLs**: every filter/context serializes to query params. Paste a link, get my exact view.
- **Recently viewed + favorites** (⭐ on any entity), surfaced on the pokedex home.

_API work_: `regionalDex(versionGroup)` membership on `pokemonList`, version-scoped
flavor/learnset/machine args on existing queries.

### R2 — Findability

- **Omnisearch (Ctrl+K)**: one box, fuzzy (pg_trgm is already indexed), searching pokemon, moves,
  abilities, items, types, locations — grouped results, keyboard navigation. **Multilingual**: the
  `*_names` tables are seeded, so searching "リザードン" or "Glurak" finds Charizard.
- **Faceted filtering** on the pokemon list: type(s) with AND/OR, generation, egg group, ability,
  color, legendary/mythical/baby flags, stat ranges (min/max sliders per stat + BST).
- **Sorting**: by dex number, name, any base stat, BST, height/weight, capture rate.
- **Moves list parity**: filter by type, damage class, power/accuracy/PP ranges, learnable-in-context.

_API work_: a proper `PokemonFilterInput` (typed, composable), `search` unified resolver, localized
name resolution (`languageCode` arg with sensible fallback chain).

### R3 — Depth (detail pages worth staying on)

- **Pokemon page, rebuilt around the context**:
  - Header: artwork/sprite, types, dex numbers per pokedex, flavor text *of the active version*.
  - **Evolution chain** as a visual graph (all triggers: level, stones, trade, happiness — the
    `pokemon_evolution` table has 30+ condition columns; render them human-readably).
  - **Learnset tabs by method** (level-up / TM-HM with machine numbers / tutor / egg) scoped to
    context, with the move's type/class/power inline.
  - **Where to catch**: encounters joined through `encounters` → `location_areas` → `locations`,
    with method, levels, and rarity — *the* playthrough feature, and only possible because we kept
    the 90k-row encounters tables.
  - Breeding (egg groups, gender rate, hatch counter), training (EV yield from `pokemon_stats.effort`,
    catch rate, base happiness, growth curve), forms and variants.
- **Move page**: learned-by list (context-scoped), per-generation changelog (`move_changelog` — a
  table almost nobody surfaces), flavor text, contest data.
- **Ability page**: pokemon that get it (normal vs hidden), effect prose + changelog.
- **Type page**: full offensive/defensive matchup matrix, dual-type defensive calculator.
- **Item page**: category, fling/flags, TM contents per version, held-by wild pokemon.

### R4 — Intelligence (the moat)

- **Matchup Analyzer**: productize the acceptance query — pick a defender (or a known boss/gym
  preset later), get ranked best attackers *among pokemon obtainable in your context*, honoring
  STAB, stats, and the era-correct type chart. This is School's first lesson engine in disguise.
- **Coverage Checker**: pick up to 4 moves → which of the 18 (or 15, in gen-1 context) types resist
  or are hit super-effectively; team-wide defensive coverage grid.
- **Compare tool**: 2–4 pokemon side-by-side (stats, typing, learnset intersection/difference).
- **"Can it learn?"**: instant yes/no/how for any (pokemon, move) pair in context.

### R5 — Polish, i18n, performance (woven through, finalized here)

- **Design system pass**: type-colored chips, animated stat bars, card layout, dark/light themes,
  skeleton loaders, empty/error states with retry, route transitions. (Function over Form stays the
  rule — but form is now the feature.)
- **Display language selector**: UI stays English, but entity names/flavor render in the chosen
  language from our translation tables — few pokedexes do this well.
- **Performance budget**: p95 API < 100ms (add the few missing indexes as needed), list virtualization
  already in place via ui-list, image lazy-loading + `NgOptimizedImage` everywhere.
- **A11y**: full keyboard navigation, focus management on route change, alt text (started), color
  contrast on type chips.

## 4. Explicit non-goals (for now)

- User accounts / cloud sync (localStorage until a second device actually matters).
- Team building & damage calculators beyond the matchup/coverage tools — that's **Arena**'s job.
- Curriculum/quizzes — that's **School**'s job (R4 tools are its raw material).
- Spinoff datasets (conquest/pokeathlon/pal-park) stay unmodeled.

## 5. Sequencing & rough effort

| Release | Focus | Effort (sessions) | Depends on |
|---|---|---|---|
| R1 | Game context, saved filters, prefs store, URLs | 2–3 | — |
| R2 | Omnisearch, facets, sorting, multilingual search | 2–3 | R1 (context scoping) |
| R3 | Detail-page depth (evolution, encounters, learnsets) | 3–4 | R1 |
| R4 | Matchup analyzer, coverage, compare | 2 | R1–R3 |
| R5 | Design/i18n/perf/a11y finalization | 2 | continuous, finalized last |

R1 before R2 because every findability feature must respect context; R3 can interleave with R2.

## 6. Success criteria

- Any fact ≤ 3 interactions away; any pokemon page fully answers "catch / learn / beat" for the
  active game without leaving the page.
- Switching active game changes list contents, learnsets, TMs, flavor, and type math — verifiably
  (e.g., Fairy type absent in a gen-1 context; Mew absent from LeafGreen regional dex).
- Filter sets survive reload; shared URLs reproduce views exactly.
- p95 GraphQL response < 100ms on the seeded dataset; app cold start < 2s.
- Zero dead-end pages: every entity name anywhere is a link.

## 7. Open product questions

1. Should "Active Game" also gate the *move data itself* via `move_changelog` (era-correct power/
   accuracy, e.g. gen-1 Blizzard 90% acc)? Powerful but subtle — proposed: yes, with a visible
   "as of gen III" badge.
2. Sprites/artwork source: PokeAPI sprite repo mirrored locally vs hotlinked — proposed: mirror the
   subset we use into `data/sprites` to stay offline-friendly.
3. Display-language default: browser locale vs explicit pick on first run — proposed: browser locale
   with a visible switcher.
