# Arena — MVP Plan

_Status: **Stub** (execution Phase 5). Reconciled from Project Ruleset v1.0; see [master-plan.md](master-plan.md) for stack reasoning._

## Mission

A robust, mechanically accurate engine for **live, turn-based Pokemon battles.**

## MVP scope & core mechanic

- **Turn-based** battle system, exclusively (no real-time/speed-priority combat in the MVP).
- Integrated **Teambuilder** with **import/export** functionality.
- Real-time communication via **WebSockets** (`@nestjs/websockets` + Socket.IO).

## Architecture — engine-first

The battle engine is a **pure-TypeScript library** (`libs/domain-arena-engine`) with **zero framework coupling** — fully unit-testable and reusable by sibling projects (e.g. `pokemon-duel`). Per the "Engine-First Development" principle, the MVP prioritizes a flawless backend over a polished UI; the frontend is a simple representation of the JSON `BattleState`.

Guiding principle: **"Engine-First Development."**

## Data implications

Battle history is **mutable user data** (Postgres). Frontend battle state uses an `@ngrx/signals` store; Apollo Angular's normalized cache/subscriptions are reconsidered only if spectator mode arrives.

## MVP non-goals

- Advanced speed mechanics, spectator mode, and a polished UI — all deferred.
