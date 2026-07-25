# School — MVP Plan

_Status: **Stub** (execution Phase 4). Depends on the Pokedex GraphQL API (Phase 3). Reconciled from Project Ruleset v1.0; see [master-plan.md](master-plan.md) for stack reasoning._

## Mission

A practical training ground that directly translates game knowledge into improved battle performance — a curriculum **derived from core Pokemon mechanics**, built on the same relational dataset the Pokedex exposes.

## MVP scope & features

- **Core Curriculum** with two modes:
  - **Lesson Mode** — explanatory teaching, content **dynamically generated** from the mechanics data (not hand-authored).
  - **Simulation Mode** — interactive practice scenarios.
- **Curriculum dependency graph** — lessons carry prerequisites, with an **opt-out for experienced users** to skip ahead.
- **Multi-tiered hint system** for simulations (progressive disclosure rather than a single reveal).

Guiding principle: **interactive and responsive learning.**

## Raw material (already planned upstream)

The Pokedex **R4 "intelligence" tools** are School's lesson engine in disguise (see [pokedex-product-plan.md](pokedex-product-plan.md) §R4):

- **Matchup Analyzer** — ranked best attackers against a defender, honoring the era-correct type chart, STAB, and stats. Explicitly "School's first lesson engine in disguise."
- **Coverage Checker**, **Compare**, and **"Can it learn?"** feed simulation and lesson content.

## Data implications

School introduces **mutable user data** (curriculum progress, completed lessons) — one of the reasons the stack is Postgres rather than SQLite (see [master-plan.md §3.1](master-plan.md)). Progress state uses an `@ngrx/signals` store on the frontend.

## MVP non-goals

- **Social features** (leaderboards) — deferred.
- **User accounts / cloud sync** — localStorage until a second device actually matters (per the pokedex non-goals).
