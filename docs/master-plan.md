# Pokemon Center — Master Plan

_Last updated: 2026-07-18 · Status: approved stack modernization done (pnpm / Nx 23 / Angular 22 / TS 6.0 bridge / NestJS 11 / Prisma 7); this document defines what we build next and why._

## 1. What we are building

**Pokemon Center** is the data and services hub of the pokemon-verse. One canonical Pokemon database, exposed through one read-only GraphQL API, consumed by every sibling project (`pokedex`, `pokemon-duel`, `nuzlocke`, `pokeday`, `pokedata`, `pinball`) and by Pokemon Center's own three domains:

| Domain | Mission | Status |
|---|---|---|
| **Pokedex** | Interconnected knowledge base: Pokemon, moves, items, abilities, types. Advanced search/filtering, bi-directional linking. MVP scope: **Generation 1** | In progress — data layer exists, API missing |
| **School** | Interactive training ground: lessons + simulations generated from the mechanics data | Stub |
| **Arena** | Mechanically accurate turn-based battle engine over WebSockets, engine-first | Stub |

The strategic bet: **every domain and every sibling project is a projection of the same relational dataset.** Get the dataset and its API right once, and everything downstream gets cheaper.

## 2. Non-negotiables

- **Angular** (frontend), **Nx** (monorepo), **NestJS** (backend) — fixed by decree.
- **GraphQL** as the API surface (project ruleset).
- Canonical ID scheme: `pokemon:25`, `move:63` + human slug (`pikachu`) for URL/API lookups.
- Feature-branch workflow; API is **read-only** for reference data.

## 3. Architecture decisions (with alternatives considered)

### 3.1 Database: PostgreSQL — KEEP ✅

The dataset is the textbook case for a relational database: ~77 tables of heavily
interlinked reference data (pokemon ↔ moves ↔ types ↔ abilities are all many-to-many),
read-heavy, small (hundreds of MB), with strong referential integrity requirements.

Alternatives honestly considered:

- **SQLite** — genuinely viable for a read-only pokedex (zero ops, file-based, fast).
  Rejected because: (a) School and Arena will add *mutable user data* (progress,
  teams, battle history) where Postgres's concurrency wins; (b) multiple sibling
  projects hit the same server over the network; (c) Postgres full-text search
  replaces a whole Elasticsearch deployment (see 3.3).
- **Document store (Mongo)** — wrong shape. The data's value *is* its joins; denormalizing
  77 relations into documents recreates the join problem in application code.

Verdict: **Postgres 17 via Docker Compose.** Your instinct on SQL is correct — not as
dogma but because this dataset is relational in its bones.

### 3.2 ORM: Prisma 7 — KEEP ✅ (with one trim)

The deciding factor is the **generation chain**: `schema.prisma` → Prisma client
(typed queries) → `prisma-nestjs-graphql` → NestJS GraphQL entity classes for all 77
models, regenerated on every install. Replacing Prisma means hand-writing (or finding
another generator for) the entire GraphQL type layer.

Alternatives honestly considered:

- **Drizzle ORM** — excellent TS-first ORM, lighter runtime, closer to SQL. But no
  equivalent NestJS-GraphQL codegen ecosystem: we'd write ~77 ObjectTypes by hand or
  adopt Pothos and abandon the NestJS code-first idiom. Net loss for this project.
- **MikroORM 7** — first-class NestJS support, mature. Same story: no GraphQL type
  generation; more decorators to maintain by hand.
- **Kysely** — query builder, not an ORM; would pair with Pothos in a non-NestJS world.

Verdict: **Prisma 7 stays.** One improvement: configure the generator to stop emitting
mutation inputs/resolvers we will never use (read-only API) — smaller generated
surface, faster generation, faster typecheck.

### 3.3 Search: Postgres FTS first, Elasticsearch later — CHANGE ⚠️

Recommendation to **drop Elasticsearch from the MVP**. Reasons:

- MVP search needs are: name/prefix search, fuzzy matching, filtering by type/ability/
  stats. Postgres covers all of it with `pg_trgm` (fuzzy/ILIKE), generated `tsvector`
  columns (full-text), and plain SQL filters — inside the same database we already run.
- ES adds: a second container, an index-sync executor to keep correct, cluster
  health concerns, and version-coupling between client and server — all for
  capabilities Gen-1-scale data (151 pokemon, ~165 moves) will never stress.
- The `infra-pokedex-index` lib and `sync` executor stay in the repo, mothballed.
  If search requirements outgrow Postgres (multilingual analyzers, relevance tuning,
  millions of docs), re-activating them is a contained change behind the same
  GraphQL search resolver.

### 3.4 GraphQL server: @nestjs/apollo — KEEP (Yoga as noted alternative)

Apollo Server 5 via `@nestjs/apollo` is already wired and patched (5.5.1).
**GraphQL Yoga** (`@graphql-yoga/nestjs`) is lighter and faster; it remains a drop-in
NestJS driver swap if Apollo ever annoys us. Not worth churn today.

API conventions:
- Read-only: only `Query` types are exposed; no mutations for reference data.
- Pagination: offset-based `take`/`skip` initially (matches Prisma), cursor/Relay
  connections only if a consumer actually needs them.
- Lookups by canonical id (`pokemon:25`) *and* slug (`pikachu`).

### 3.5 Frontend data layer: GraphQL Codegen + httpResource — NEW ✅

For Angular 22, prefer the platform primitives over a heavy client:

- **`@graphql-codegen/cli`** generates typed documents + result types from the running
  schema into a shared lib (`libs/data-access-pokedex`), which sibling projects can
  also consume — typed queries for free across the whole pokemon-verse.
- **`httpResource`/`resource`** (Angular 22 signals API) executes the queries — no
  Apollo Angular cache layer needed for read-only reference data that never mutates.
- **Apollo Angular** reconsidered only if we later need normalized caching or
  subscriptions in the frontend (Arena spectator mode, perhaps).

### 3.6 State management: Angular signals; @ngrx/signals only where stores emerge

Components use `signal`/`computed`/`linkedSignal` directly. `@ngrx/signals` (already
installed, currently unused) earns its place when a real cross-component store appears
(e.g. School progress, Arena battle state). If none appears by Arena MVP, drop it.

### 3.7 Arena realtime: NestJS WebSockets gateway (Socket.IO) — per ruleset, unchanged

`@nestjs/websockets` + Socket.IO when Arena starts. The battle engine itself is a pure
TypeScript lib (`libs/domain-arena-engine`) with zero framework coupling —
"engine-first" per the ruleset — so it is unit-testable and reusable (e.g. by
`pokemon-duel`).

### 3.8 Testing: Jest 30 today; watch Vitest

Jest 30 works and is green. Angular's ecosystem is drifting toward Vitest; revisit when
Nx's Angular+Vitest story is default-on. Not a today problem.

## 4. Data pipeline (the "fully functioning database")

```
data/csv (79 PokeAPI-format files, committed)
   │  nx run pokedex:seed        (dependency-ordered createMany, idempotent via skipDuplicates)
   ▼
PostgreSQL 17  (docker compose up -d postgres; schema via prisma migrate)
   │  prisma generate            (postinstall: client + GraphQL entities)
   ▼
apps/pokedex-service  (NestJS + Apollo, read-only resolvers)
   ▼
GraphQL over HTTP  ──► pokemon-center app, pokedex, pokemon-duel, nuzlocke, …
```

Migration hygiene: today the schema was only ever `db push`ed. First action is a real
baseline migration (`prisma migrate dev --name init`) so every machine and sibling
project can reproduce the database deterministically.

## 5. Execution phases

**Phase 1 — Database up (unblocks everything)**
1. `docker compose up -d postgres`
2. `pnpm prisma migrate dev --name init` (baseline migration, committed)
3. `pnpm nx run pokedex:seed` → verify row counts (pokemon=1302? gen-1 filter applies at API level, seed everything)
4. Add `pg_trgm` extension + trigram indexes on `identifier` columns (search prep) as a follow-up migration

**Phase 2 — GraphQL API (the heart)**
1. `PrismaService` (injectable, adapter-pg) in `apps/pokedex-service`
2. `GraphQLModule` (Apollo, code-first, schema autogenerated)
3. Read-only resolvers: Pokemon, PokemonSpecies, Moves, Abilities, Types, Items — built on generated entities; offset pagination; id+slug lookups
4. Search query backed by Postgres (`pg_trgm` fuzzy + filters)
5. e2e smoke tests against the seeded DB; commit generated SDL snapshot

**Phase 3 — Typed consumption**
1. `libs/data-access-pokedex`: GraphQL Codegen setup emitting typed documents
2. Wire pokemon-center's list/detail pages to the API via `httpResource`
3. Document the endpoint + codegen recipe for sibling projects (one README)

**Phase 4 — School MVP** (curriculum from mechanics data; lessons/simulations)
**Phase 5 — Arena MVP** (pure-TS battle engine lib → WebSocket gateway → minimal UI)

**Deferred / mothballed:** Elasticsearch + `sync` executor (until search outgrows
Postgres), Relay pagination, TS 7 native (waiting on Angular/ts-jest), Vitest.

## 6. Conventions

- IDs: `“{entity}:{numericId}”` canonical, slug for human lookups — enforced at the resolver layer (DB keeps plain integer PKs; do not leak DB keys into API identity).
- Generated code (`prisma-client/`, `entities/`) is committed, eslint-ignored, regenerated by `postinstall` — never hand-edited.
- All work on feature branches; conventional commits; PRs into `main`.
