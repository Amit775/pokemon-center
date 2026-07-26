# School — Domain Plan

_Last updated: 2026-07-26 · Owner: Amit · Status: **S0–S5 shipped** — all seven modules live across Lesson, Drill, Simulation and Placement modes. Remaining: i18n (see §11)._

> Supersedes the stub reconciled from Project Ruleset v1.0. Stack reasoning lives in
> [master-plan.md](master-plan.md); the sibling product plan is [pokedex-product-plan.md](pokedex-product-plan.md).

## 1. Product thesis

Every Pokémon learning resource **tells** you the mechanics — Bulbapedia articles, Smogon primers,
YouTube explainers. None of them **drill** you on them, and none of them are wired to a live
relational copy of the data. So they all share the same two failures: the content is hand-authored
(and therefore stale, partial, and finite), and it is generation-agnostic (so a gen-1 player learns a
type chart that didn't exist in their game).

**Our thesis: the dataset is the curriculum.** Every exercise is a query with a verifiable answer,
generated from the same 77-table dataset the Pokedex projects. That buys three things nobody else has:

1. **Infinite, non-repeating content** — no authored question bank to maintain or exhaust.
2. **Era-correct teaching** — learn the *gen-1* type chart (no Dark/Steel, Ghost's famous Psychic bug)
   because `type_efficacy_past` is seeded. Teaching "what changed and when" is a first-class feature,
   not a footnote.
3. **Zero drift** — when the data is corrected or extended, every lesson is correct the next day. There
   is no content pipeline to re-run.

The corollary, and the rule this whole domain is built on: **curriculum structure is authored;
curriculum content is generated.** Pedagogy (which lesson precedes which, what a hint says) is human
judgment and lives in typed code. Facts, questions, distractors, and answers are derived from tables.
Never hand-write a fact that a query can produce.

## 2. Personas

- **The Competitive Learner** (primary) — handed over directly from the Pokedex plan. Knows the game,
  wants the math: damage rolls, speed tiers, coverage gaps, why a set works. Optimizes for depth.
- **The Returning Player** — played gen 1–3, bounced off modern competitive. Their mental model is
  actively wrong (physical/special was type-based in their era, Steel didn't exist). Optimizes for
  "what changed since I left" — the module nobody else builds.
- **The Playthrough Player** — situational and impatient: "the next gym is Water, what do I do." Enters
  School through a Simulation, not a lesson. Optimizes for immediate applicability.

## 3. Architecture decisions

### 3.1 Engine as a pure-TypeScript lib — `libs/domain-school-engine` ✅

The curriculum graph, exercise generators, scoring, and the mastery model live in a **framework-free
TypeScript lib** with zero Angular imports; `libs/domain-school` holds only UI. This is deliberately the
same "engine-first" idiom the ruleset already mandates for Arena (`libs/domain-arena-engine`).

Why it matters here specifically: generators and scoring are **pure functions over reference data**, which
makes them exhaustively unit-testable without a TestBed — we can assert that the type-chart generator
never emits a question whose answer is ambiguous, across all 324 efficacy rows, in milliseconds. That
test is the difference between a quiz that is trustworthy and one that quietly teaches wrong facts.

### 3.2 Exercise generation: deterministic + seeded, hybrid client/server ✅

Every generator has the shape:

```ts
generate(seed: number, ref: ReferenceData, ctx: GameContext): Exercise
```

**Deterministic on the seed** — the same seed always yields the same exercise. This buys replayable
tests, reproducible bug reports, and shareable drill URLs (`/school/drill?m=type-chart&seed=8412`),
consistent with the Pokedex's shareable-URL convention.

**Where generation runs is decided per module by data size, not by dogma:**

| Data | Size | Where |
|---|---|---|
| Type chart, natures, ailments, stat stages, damage classes | ~400 rows total | Fetched once, generated **client-side** |
| Matchup ranking, coverage, learnset-scoped questions | joins over the full dex | **Server** (reuse the R4 resolvers) |

The reason is UX, and it is not a micro-optimization: a drill where **every question costs a network
round-trip** feels broken at the exact moment it needs to feel fast. The type chart is 324 rows — a
single fetch, then infinite local questions. Reach for the server only when the query genuinely cannot
be answered from a cached reference set.

Alternative considered — **generate everything server-side** (one `schoolExercise(lesson, seed)` query).
Cleaner conceptually, centralizes SQL, and keeps answers off the client. Rejected for the round-trip
cost above, and because it makes offline/flaky-network drilling impossible for the modules that need it
least.

### 3.3 Answer verification: client-side, no mutations ✅

Exercises ship with their answer; the client grades locally. This keeps the API **strictly read-only** —
a project non-negotiable, and currently true (20 queries, zero mutations).

The obvious objection is that the answer is visible in devtools. That is fine, because **leaderboards
are an explicit non-goal** (§8): there is no one to cheat and nothing to win. The only person a cheater
deceives is themselves, and they had to open devtools to do it. Server-side grading buys integrity we
have no use for, at the cost of a round-trip per answer plus the mutation surface the ruleset forbids.

Revisit only if competitive or social features ever land — at which point grading moves server-side
*and* accounts arrive together, as one change.

### 3.4 Progress storage: localStorage now, Postgres when accounts exist ⚠️

This resolves a genuine contradiction between two existing docs. [master-plan.md §3.1](master-plan.md)
partly justified choosing Postgres over SQLite on the grounds that *"School and Arena will add mutable
user data"*; [pokedex-product-plan.md §4](pokedex-product-plan.md) declares no accounts and localStorage
until a second device matters.

Both stay true, in sequence. **MVP: `SchoolProgressStore`**, an `@ngrx/signals` `signalStore` with
localStorage hydration, mirroring `PokedexContextStore` exactly (same `withHooks` + `getState` effect
pattern, same versioned key: `pokemon-center.school-progress.v1`). The Postgres justification is not
wrong, only **deferred** — School is shippable and genuinely useful before auth exists, and building
auth first would delay every lesson behind a login form.

**The trigger to revisit is explicit:** the first of (a) a user asks for progress on a second device,
or (b) any social/competitive feature is greenlit. Until then, no accounts.

Store shape:

```ts
interface SchoolProgressState {
  mastery: Record<LessonId, MasteryRecord>;  // rolling attempts, hint-weighted score
  unlockOverride: boolean;                    // the ruleset's opt-out for experienced users
  streak: { current: number; best: number; lastDrillISO: string | null };
  settings: { timedDrills: boolean; eraFollowsPokedex: boolean };
}
```

### 3.5 Era-correct mechanics — type chart shipped ✅, other past tables still unread ⚠️

To be clear about scope: **the Pokedex is done** — Phases 1–3 and R1–R5 all shipped. What follows was
one detail inside working R4 code that was specified but never wired; the type-chart half is now closed.

School's sharpest differentiator ("learn the type chart *of your game*") is live:
[era-efficacy.sql.ts](../apps/pokedex-service/src/app/resolvers/era-efficacy.sql.ts) builds the era chart
as a composable `Prisma.Sql` fragment, and both the new `typeChart(versionGroup)` query and the existing
`matchupAnalysis` run it, so R4 now honors "the era-correct type chart" as
[pokedex-product-plan.md §R4](pokedex-product-plan.md) always claimed. Two rules produce an era:

- **Types the era lacks are dropped** via `types.generation_id` — a gen-1 chart is 15×15, not 18×18.
- **Changed cells are overlaid from `type_efficacy_past`**, taking the row with the smallest
  `generation_id >= target` (veekun's "value applied *through* this generation" convention). Verified
  against the seeded data: gen 1 yields Ghost → Psychic **0×**, Poison ↔ Bug 2×, Ice → Fire 1×; gen 2
  yields Dark/Ghost → Steel 0.5×, reverting to 1× in gen 6; a null version group is the modern chart,
  byte-identical to pre-change output.

**Still seeded but unread:** `PokemonStatsPast`, `PokemonTypesPast`, `MoveChangelog` appear only as
auto-generated Prisma/GraphQL entity types in `apps/pokedex-service/schema.gql`, with no resolver or
hand-written service reading them. Era-correct *base stats*, *typings*, and *move power* therefore
remain modern-only — a smaller follow-up of the same shape, needed by the "What Changed" lens beyond
types.

### 3.6 Curriculum graph: authored DAG in typed code ✅

Lessons form a directed acyclic graph; each declares its prerequisites:

```ts
{ id: 'dual-type-multipliers', module: 'type-chart', prereqs: ['single-type-effectiveness'], … }
```

The graph lives in **code, not the database** — it is authored pedagogy, versioned and reviewed with the
code, and adding a lesson must never require a migration. A cycle check runs as a unit test, so a
malformed graph fails CI rather than trapping a user in an unreachable lesson.

**Unlocking** = all prereqs mastered, **or** `unlockOverride` is set — the ruleset's required opt-out for
experienced users. S1 ships the opt-out as a blunt "unlock everything" toggle; the smart version (a
placement test that infers mastery and unlocks accordingly) is S4, because it needs the mastery model to
exist first.

### 3.7 Mastery model: hint-weighted, not binary ✅

"Completed" is a useless signal — it rewards clicking through. Mastery per lesson is a rolling score over
the last _N_ attempts, each weighted by the **deepest hint tier used** (§6): a T4 reveal earns near-zero
credit, an unhinted correct answer earns full. A lesson is "mastered" above a threshold, which is also
what gates its dependents.

Spaced repetition (Leitner boxes over lessons whose mastery has decayed) arrives in S4 — deliberately
after real usage data exists, because tuning intervals against imagined behavior is guesswork.

## 4. The curriculum

Seven modules, each grounded in tables that are already seeded. "Generated" columns are illustrative of
the generator's output shape, not a fixed question bank.

| # | Module | Source tables | Generated exercises |
|---|---|---|---|
| **M1** | **Type Chart** | `type_efficacy`, `type_efficacy_past`, `types` | "Water → Ground?" · "Name a type immune to Ground" · "Which resists Steel?" · dual-type products (Fire/Flying takes 4× Rock) |
| **M2** | **Damage Math** | `moves` (power/accuracy/priority), `move_meta`, `move_damage_classes`, `pokemon_types` | "Higher expected damage: 120 BP @ 70% or 90 BP @ 100%?" · STAB identification · "Which of these moves goes first?" (`priority`) · multi-hit EV (`min_hits`/`max_hits`) · `crit_rate` |
| **M3** | **Status & Ailments** | `move_meta_ailments`, `move_meta.ailment_chance`, `move_flags` | "Which ailment halves Attack?" · "Body Slam's paralysis chance?" · "Which status prevents another?" · contact/sound/protect flags |
| **M4** | **Stats, Natures & EVs** | `stats`, `pokemon_stats` (`base_stat`, `effort`), `natures`, `move_meta_stat_changes` | "Which nature boosts Atk, lowers SpA?" · "What does Swords Dance do?" (+2 stages) · "What EVs does defeating Machop yield?" · stat-stage multipliers · BST comparisons |
| **M5** | **Matchups** *(Simulation)* | `matchupAnalysis` resolver | "Facing a Water/Flying gym leader — pick the best counter from these six" — scored against the engine's true ranking |
| **M6** | **Coverage** *(Simulation)* | `coverage` resolver | "Choose 4 moves that hit all 18 types at least neutrally" — live coverage grid as you pick |
| **M7** | **Progression** | `pokemon_evolution` (30+ condition columns), `machines`, `encounters`, `growth_rates`, `experience` | "How does Eevee become Espeon?" · "Which TM number is Thunderbolt in FRLG?" · "Where do you catch X?" · growth-curve comparisons |

**The cross-cutting module — "What Changed"** (targets the Returning Player) is not separate; it is a
lens over M1–M4 driven by `move_changelog`, `type_efficacy_past`, and `pokemon_stats_past`. Example:
*"In gen 1, which stat governed Fire Blast's damage?"* (Special, before the gen-4 physical/special split).
No competitor teaches this, and we get it free from tables already seeded.

**`guess-pallete`** — **deleted** (owner's call: not important). The prototype hotlinked sprites from
GitHub, contradicting the offline-friendly local mirror added in Pokedex R5, and hardcoded a 1–152 range
rather than deriving it from context. A **"Who's That Pokémon"** recall module remains a reasonable
optional addition later, but it would be built fresh against the sprite mirror and the active game
context — nothing in the prototype was worth carrying forward.

## 5. The three modes

- **Lesson Mode** — explain → worked example → 3–5 generated checks. The prose frame is authored (it is
  pedagogy); every fact, example, and check inside it is generated. A lesson is never "read-only": you
  cannot leave without answering.
- **Drill Mode** — rapid-fire from any unlocked pool, optionally timed, seeded and shareable. This is the
  retention loop and where the mastery model actually gets its signal.
- **Simulation Mode** — a scenario with a real decision and consequences (M5, M6): pick the counter, pick
  the four moves, then see the engine's ranking and *why* you were 2nd-best. The gap between your answer
  and the optimum is the teaching moment.

## 6. Hint tiers

The ruleset requires a multi-tiered hint system. Four tiers, each costing mastery credit — this is what
makes hints safe to offer generously:

| Tier | Gives | Credit | Example — _"Fire/Flying vs Rock?"_ |
|---|---|---|---|
| **T1** | Restates the principle | 90% | "Dual types multiply each type's factor." |
| **T2** | Narrows the field | 65% | "Rock resists one of these types and is weak to neither." |
| **T3** | Shows the mechanism | 35% | "Rock takes 0.5× from Fire and 2× from Flying — now combine." |
| **T4** | Reveals + explains | 10% | "1× — 0.5 × 2 = 1. Neutral, despite both being 'good' types." |

T3 deliberately shows the *data* rather than the answer: the goal is that the user performs the final
step themselves, because that is the step that has to become automatic.

## 7. Releases

### S0 — Era-correct type chart (small follow-up, Pokedex layer) ✅

Shipped. `typeChart(versionGroup)` overlays `type_efficacy_past` onto `type_efficacy` and drops types the
era lacks; `matchupAnalysis` runs the same fragment, so its `versionGroup` argument now moves the type
math and not just learnsets and dex membership. `TypeChart` is in
[operations.graphql](../libs/data-access-pokedex/src/lib/operations.graphql) with typed documents
generated, matching the `TypeChart` shape the engine's `ReferenceData` already expects (§3.5).

### S1 — Curriculum spine + Type Chart, end to end 🎯 ✅

The vertical slice that proves the architecture. `libs/domain-school-engine` scaffolded (graph, generator
interface, scoring); `SchoolProgressStore`; the lesson DAG with unlock logic and the blunt opt-out
toggle; **M1 complete** in Lesson + Drill modes with all four hint tiers; School shell routing at
`/school` (already in the nav) rebuilt on the `ui-pokedex` kit. One module, fully finished, rather than
seven half-built.

### S2 — Engine generalized + M2, M3, M4 ✅

Prove the generator abstraction by adding three modules that reuse it without changing it — if S1's
interface was wrong, this is where it shows, cheaply. Mastery model lands here. The "What Changed" lens
rides along on M2/M4.

### S3 — Simulation Mode + M5, M6 ✅

Wire the R4 resolvers (`matchupAnalysis`, `coverage`) into scenario UIs. Reuses `MatchupGridComponent`
and `ChipToggleComponent` from `ui-pokedex`; new shared components go there, not into `domain-school`.

### S4 — Adaptive ✅

Placement test (the smart opt-out), spaced repetition over decayed lessons, weak-spot targeting that
biases drill sampling toward low-mastery lessons. Deliberately last among the functional releases: every
part needs real mastery data to tune against.

### S5 — Polish, a11y, i18n, M7 ⚠️ (i18n outstanding)

Design-system pass on the token architecture; keyboard-first drilling (answering without a mouse is the
whole point of rapid-fire); localized entity names via the existing language store; M7 Progression.

| Release | Focus | Effort (sessions) | Depends on |
|---|---|---|---|
| S0 ✅ | Era-correct `typeChart` resolver | 0.5–1 | — (Pokedex layer, independent) |
| S1 ✅ | Spine + M1 end-to-end | 3–4 | S0 *for era-correct lessons only* |
| S2 ✅ | Generalize + M2/M3/M4 | 3–4 | S1 |
| S3 ✅ | Simulation + M5/M6 | 2–3 | S1 (R4 resolvers exist) |
| S4 ✅ | Adaptive, placement, SRS | 2 | S2 (needs mastery data) |
| S5 ⚠️ | Polish, a11y, M7 done; i18n outstanding | 2 | continuous, finalized last |

S3 can interleave with S2 — it depends on S1's shell and the *already-built* R4 resolvers, not on S2.

## 8. Non-goals

- **Leaderboards and social features** — deferred per the ruleset. This is load-bearing: it is the reason
  client-side grading is acceptable (§3.3).
- **User accounts / cloud sync** — localStorage until the §3.4 trigger fires.
- **Hand-authored question banks** — violates the thesis. If a question cannot be generated, the fix is
  usually a missing query, not a hardcoded fact.
- **Battle simulation with turn resolution** — that is **Arena**'s engine. School's simulations end at the
  decision; they do not play out turns. When Arena's engine exists, School may *call* it rather than
  growing its own.
- **Damage calculator UI** — Arena's job. School teaches the math; Arena computes it at scale.
- **Video/animated content** — no pipeline, no dataset, no drift-free story.

## 9. Success criteria

- **Zero authored facts.** Every fact shown traces to a table; adding a generation to the dataset adds
  questions with no code change.
- **Era-correctness is verifiable.** With a gen-1 context set, no exercise references Dark, Steel, or
  Fairy, and Psychic's gen-1 dominance is reflected in matchup answers.
- **A generated exercise is never ambiguous.** Property tests assert that across every module, no
  generated question has two defensible answers — the failure mode that would destroy trust fastest.
- **Drill latency: a new question in < 50ms** for client-generated modules (§3.2), no network on the
  question path.
- **Progress survives reload**, and a seeded drill URL reproduces the exact same question sequence.
- **A returning player can name three things that changed since gen 3** after the "What Changed" lens.
- **Keyboard-only drilling** is fully possible, question to question.

## 10. Open questions

1. **Does School's era follow the Pokedex's active game, or is it independent?** Proposed: **follow by
   default** (one mental model, `PokedexContextStore` already global) with a School-local override —
   because deliberately drilling gen-1 mechanics while browsing gen-9 is a legitimate thing to want.
   Reflected as `settings.eraFollowsPokedex`.
2. **Does mastery decay?** Spaced repetition implies yes, but silently un-mastering a lesson feels
   punitive. Proposed: decay affects **drill sampling weight only**, never re-locks a lesson.
3. **How do we detect ambiguous generated questions at authoring time?** Proposed: every generator must
   return its full candidate set and assert exactly one maximal answer — enforced by the generator
   interface itself, not by reviewer diligence.
4. **Is M7 (Progression) School or Pokedex?** It overlaps heavily with Pokedex R3 depth pages. Proposed:
   School owns the *drilling*, Pokedex owns the *reference*, and M7's exercises deep-link into R3 pages.
5. **Should Simulation Mode wait for Arena's engine?** Proposed: no — S3's decision-only scenarios need
   no turn resolution, and blocking School on Phase 5 would invert the ruleset's own ordering.

**Settled during the build:** (1) era follows the Pokedex with a School-local override; (2) decay
changes sampling weight only and never re-locks, asserted by test; (3) `assertUnambiguous` runs inside
every generator, so an ambiguous question is a thrown error rather than a bad grade; (4) M7 drills,
Pokedex references; (5) Simulation Mode shipped in S3 without Arena.

## 11. Remaining work

Three known gaps, all deliberate rather than forgotten.

- **i18n — localized entity names.** The one unfinished S5 item. Names come from `humanize(slug)`
  today, so localizing means the API serving localized move/type/nature/species names *and* generators
  taking display names as data rather than deriving them from slugs. The translation tables are already
  seeded and few competitors do this well, so the value is real; the cost is that every generator's
  label construction changes.
- **Deep links bypass the curriculum graph.** `/school/lesson/:id` and `/school/simulation/:id` render
  regardless of lock state. Consistent, and arguably harmless in a single-player tool that already ships
  an unlock opt-out — but it is not what the dependency graph implies. A route guard would close it.
- **`move_changelog` is unapplied.** `moveMechanics` scopes moves by generation, so a gen-1 context
  cannot offer a gen-9 move, but per-era *stat* changes (gen-1 Blizzard at 90% accuracy) are not
  reflected. This is the remainder of the era-correctness work §3.5 tracks: the type chart is era-exact,
  move stats are not yet.

**Testing note.** The engine is heavily covered (239 tests); the Angular layer is not. Both bugs found
after S1 shipped were component-level — CDK state surviving an input change — and both passed a fully
green engine suite. Component specs are the place to invest next.
