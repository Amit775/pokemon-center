# Pokedex Design System — R5 Plan

_Interactive mockups: https://claude.ai/code/artifact/47dcc1e5-cf6d-438c-b234-4f37efee431a (toggle A/B/C at the top-right)._

The goal of R5 is **design once, reuse everywhere**: a token layer + a small kit of themed
components, so no screen is ever styled ad-hoc again. This doc covers the token architecture, the
component inventory, and the component-library recommendation. The three visual *directions* (A/B/C)
are pitched in the artifact; whichever you pick only changes the token *values*, not the structure
below.

## 1. Token architecture (direction-independent)

Everything renders through CSS custom properties on `:root`, so a direction is a swap of values and
supporting `data-theme` for light/dark. Layers:

- **Primitives** — raw palette, the 18 canonical type colors (`--t-fire`…), spacing scale
  (`--space-1..8`), radius scale, type scale, elevation.
- **Semantic tokens** — `--surface`, `--surface-raised`, `--ink`, `--ink-muted`, `--line`,
  `--accent`, `--accent-ink`, and semantic status `--good/--warn/--crit` (separate from the accent).
- **Component tokens** — e.g. `--chip-radius`, `--stat-track-h`, read from semantic tokens.

The `PokedexContextStore` already persists prefs; we add `theme: 'system' | 'light' | 'dark'` and a
`displayLanguage` there (the latter finally replaces the hardcoded English `language_id = 9` in the
depth resolvers — R5's i18n item).

## 2. Reusable component kit

Built once in a new **`libs/ui-pokedex`** lib (presentational, no data fetching), consumed by every
feature. Each is theme- and type-color aware via inputs:

| Component | Purpose | Notes |
|---|---|---|
| `TypeChip` | the type badge, everywhere | takes a type slug → colored via `--t-{slug}`; single source of truth |
| `StatBar` | one base-stat row | label + value + animated track; used in detail, compare, analyzer |
| `PokemonCard` | list/grid tile | portrait, number, name, type chips; the list's atom |
| `EntityPortrait` | sprite/artwork frame | handles the sprite mirror + loading/empty state |
| `DataRow` | label→value fact line | the About/Item/Move fact grids |
| `SectionHeading` | eyebrow + title | consistent section rhythm |
| `Chip` / `Button` / `Tabs` | primitives | thin wrappers over the chosen library, themed |
| `SearchField` / `Omnibox` | search inputs | omnisearch overlay reuses this |
| `MatchupGrid` | 18-type coverage/efficacy grid | shared by Coverage + Type page |
| `SkeletonBlock` | loading placeholder | every `gqlResource` gets a skeleton state |

Migration is mechanical: the analyzer/coverage/compare/detail pages already have the *data*; R5
swaps their hand-rolled markup for these components.

## 3. Component library recommendation (Angular ecosystem)

We build our *look* ourselves; the library provides accessible primitives (overlays, focus
management, tables, autocomplete) so we don't reinvent a11y. Candidates, scored for a data-rich,
distinctive pokedex:

| Library | Strengths | Cost / risk | Verdict |
|---|---|---|---|
| **Angular Material 3** | already installed & used (toolbar/tabs/icon); best-in-class a11y; M3 token theming maps 1:1 onto our token layer; zero new deps | Material's visual signature is strong — needs real theming work to not "look like Material"; data-table is basic | **Safe default**, ideal for Direction A |
| **PrimeNG** | huge set (DataTable w/ virtual scroll, AutoComplete, Chip, ProgressBar, Skeleton) — a pokedex uses most of it; unstyled/“Aura” theming via CSS vars fits our tokens | new dep; heavier; some components opinionated | **Best for data density**, ideal for Direction C |
| **spartan/ng + Tailwind** | shadcn-style headless primitives (brain) + styled (helm); total visual control; modern; copy-in components you own | requires adding Tailwind; newer/smaller ecosystem; more assembly | **Most distinctive**, ideal for Direction B |
| Taiga UI, NG-ZORRO | comprehensive & polished | strong built-in identity to override; larger buy-in | viable, not recommended over the above |

**Recommendation:** decide the library *with* the direction, since they pair:

- **A (Dex Terminal) → Angular Material 3.** Lowest friction (already in the app), and a custom dark
  M3 theme with a dex-red primary + mono data font nails the instrument-panel look. CDK covers the
  omnisearch overlay and virtual scroll we already use.
- **B (Type Prism) → spartan/ng + Tailwind.** The vibrant, color-blocked, rounded aesthetic wants
  utility-class freedom; spartan gives owned, accessible primitives without a heavy theme to fight.
- **C (Codex) → PrimeNG.** The editorial reference leans on dense tables and precise data
  components, which is exactly PrimeNG's strength; Aura theming drives it from our tokens.

All three keep **Angular CDK** underneath (a11y, overlay, virtual scroll) regardless.

## 4. Build sequence once a direction is chosen

1. Token layer in `styles.scss` + the two themes; wire theme toggle into `PokedexContextStore`.
2. Install/confirm the paired library; set its theme to read our tokens.
3. Build `libs/ui-pokedex` kit (TypeChip, StatBar, PokemonCard, … above), Storybook-free but each
   with a tiny demo route.
4. Migrate screens to the kit, page by page (list → detail tabs → tools), deleting ad-hoc CSS.
5. i18n display-language selector → depth resolvers take a `language` arg (drop hardcoded `9`).
6. Local **sprite mirror** into `data/sprites` + `EntityPortrait` wired to it; `NgOptimizedImage`.
7. Skeleton/empty/error states on every resource; `prefers-reduced-motion`; a11y sweep.

Non-goals unchanged: accounts, team-builder (Arena), quizzes (School).
