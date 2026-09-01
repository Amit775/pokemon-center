# Champions data pipeline — design

_Written 2026-09-01, ahead of Regulation Set M-C. Supersedes the pipeline description in
[champions-plan.md](champions-plan.md); that document's product sections still stand._

## The problem

Champions data reaches the application through three stages: `fetch` downloads two Bulbapedia
pages as wikitext, `derive` projects the mainline database through them into a single 654 KB
JSON file, and `seed` loads that file into the Champions database. The database topology is
right — Champions has its own Postgres instance, its own Prisma schema, its own generated
client, and no foreign key crosses into the mainline. Nothing about that needs changing.

The stages between the wiki and the database are what fail:

**The seed is a partial reset.** `champions_type_efficacy`, `champions_pokemon_ability` and
`champions_learnset` are emptied and rebuilt from the current roster, while every other table
is upserted and therefore accumulates. Loading M-C over an M-B database would leave a
`champions_pokemon` row for every dropped Pokémon with no learnset and no abilities attached.

**Regulation metadata is not derived.** `startsOn` is the string literal `'2026-06-17'` and
`isCurrent` is unconditionally `true`. M-C would be seeded carrying M-B's start date.

**The review gate does not work at its size.** The derived JSON is committed so that a
regulation change arrives as a readable diff. At 654 KB of tab-indented JSON, spanning both
reference data that changes on game patches and a legality list that changes every
regulation, the diff is not read. The one part a human could meaningfully check — which
Pokémon are on the roster — is a few hundred lines buried in tens of thousands.

**Parsed nuance is discarded.** `parseRoster` already extracts `availability`, `note`
("Regular form only") and `introducedIn` for every entry. `DerivedPokemon` has no field for
any of them, so all three are dropped between parse and projection.

**The parse has no floor.** Only a literal zero-entry parse throws. A Bulbapedia edit that
reshapes the roster template so that 208 species parse as 40 would seed a gutted roster and
report success.

**Nothing can be loaded before Bulbapedia is updated.** The roster page is the only input, so
the earliest M-C can be seeded is whenever a volunteer editor finishes rewriting it — which is
after the rotation, not before.

## Governing principle

**The Champions database is a disposable projection of exactly one regulation. Git holds the
history.**

When a regulation rotates, the database is dropped and rebuilt from scratch. Box entries,
teams and battle sessions are discarded with it; this is accepted. Nothing in the database
needs to represent two regulations, so nothing in it needs to be additive, versioned or
migrated.

Cross-regulation history does not disappear — it moves to where it is actually readable. The
committed inputs under `data/champions/` diff M-B against M-C as text, in git, which is where
someone would go to ask what changed anyway.

This principle is what licenses every simplification below. If two regulations ever need to be
resident at once, this document is the thing to revisit first.

## Schema changes

### `RegulationLegality` is removed

With one regulation resident, every row in the join table carries the same `regulation_id`. A
column with one distinct value is joined through on every read for nothing, and
`PokedexResolver.legalIds` currently round-trips ~283 integers out of the database and back in
as an `IN` clause on four separate queries.

Legality collapses onto the Pokémon row. Every `champions_pokemon` row is legal by
construction, because the loader only inserts the roster. What varies is *how* it is legal:

```prisma
enum LegalityStatus {
  LEGAL
  TRANSFER_ONLY
  EVENT_ONLY
  RESTRICTED
}
```

Three columns are added to `ChampionsPokemon`:

- `legality_status LegalityStatus @default(LEGAL)` — replaces membership in the join table.
- `restriction_note String?` — the caveat Bulbapedia attaches, e.g. "Regular form only", or
  Eternal Flower Floette's transfer requirement. Already parsed today, already discarded.
- `introduced_in String?` — the game version that added the entry, e.g. `1.1.0`.

`introduced_in` earns its column precisely *because* the database no longer holds the previous
regulation. It is the only remaining in-database answer to "what is new this set", and it is
free: the parser produces it already.

### `Regulation.is_current` is removed

The table holds one row, so "current" is not a fact that needs storing. `starts_on` and
`ends_on` already carry the window the countdown UI renders. Keeping a boolean alongside them
is a second source of truth for a question the dates answer.

The `Regulation` table itself stays: `code`, `name`, `starts_on`, `ends_on`, `notes`.

## Pipeline changes

The derived JSON is removed, and `derive` and `seed` merge into a single `load` stage. The
review gate moves upstream to a small, hand-editable roster file — the artifact a human can
exercise judgement over — and the mechanical projection stops producing a committed artifact
nobody reads.

```
champions:fetch     Bulbapedia ──► data/champions/raw/{roster,changes}.wikitext
                                   data/champions/raw/manifest.json

champions:roster    raw/roster.wikitext ──► data/champions/regulations/<code>/roster.tsv
                                            data/champions/regulations/<code>/regulation.json
                    Proposes only. Refuses to overwrite an existing file without --force.

champions:load      regulations/<code>/roster.tsv     ─┐
                    regulations/<code>/regulation.json ├──► Champions Postgres
                    raw/changes.wikitext               │    (truncate, then insert)
                    mainline Postgres (DATABASE_URL)  ─┘

champions:reset     Truncate the Champions database. Requires --confirm.

champions:refresh   fetch → roster → load
```

### `data/champions/regulations/<code>/roster.tsv`

One line per entry, tab-separated, with a header row. Columns: `pokedex_number`, `species`,
`form`, `form_suffix`, `section`, `type1`, `type2`, `availability`, `note`, `introduced_in`.

Roughly 300 lines. Diffable, sortable, and editable in any editor without a JSON parser in the
way. This is the file a human reads when M-C lands, and the file they can write *by hand* from
the game before Bulbapedia has been updated at all.

TSV rather than JSON specifically because it is the file meant to be hand-edited. The
regulation metadata beside it stays JSON because it is five scalar fields, where TSV's
advantages do not apply.

### `data/champions/regulations/<code>/regulation.json`

```json
{
  "code": "M-C",
  "name": "Regulation Set M-C",
  "startsOn": "2026-09-03",
  "endsOn": "2026-11-25",
  "notes": null
}
```

`champions:roster` fills this from the roster page's prose line ("Until September 2, 2026, the
current roster is Regular Roster M-B") where it can, and leaves fields null where it cannot.
`startsOn` in particular is not stated on that page, which is why it is hardcoded today; making
it a committed field means it is entered once, visibly, rather than being a literal in a
TypeScript file.

### `champions:load`

Reads the committed roster and regulation files, the move overrides from `changes.wikitext`,
and the mainline database. Truncates the Champions database, then inserts. Because the database
is empty at the start of every load, the drift-reconciliation machinery in the current seed
(`reportRowCountsAndThrowOnDrift`, the `deduplicateRows` warnings, the mixed
upsert/`deleteMany` strategy) is no longer guarding anything and goes away with it.

`--dry-run` performs the whole projection and prints the per-table counts and the unresolved
list without writing. This replaces the committed JSON as the pre-load review step, and is
strictly more useful: it reports what *would* land, against the mainline database as it stands
right now.

### Sanity gates

`load` refuses to write, rather than warning, when:

- The roster page's own prose count ("208 Pokémon species are available, as well as 75 Mega
  Evolutions") disagrees with what parsed. The comparison is against **distinct national
  Pokédex numbers in the species section**, not against row count — rows include regional
  forms, so several rows share a number and a raw row count would never match the stated
  figure. Any difference is printed; a difference above 5% refuses the load. The claim and the
  rows are both on the same page, so a gap that size means the template shape moved rather
  than that the prose lags an edit.
- Regulation dates are missing, unparseable, or `endsOn` precedes `startsOn`.
- Any roster line fails to resolve to a mainline row *in the species section*. Unresolvable
  entries in the "Other forms" section stay a warning, since cosmetic forms legitimately have
  no distinct mainline row.

The existing `unresolved` list is kept and printed; it stops being a field in a file nobody
opens and becomes loader output.

### Wikitext, contained

Wikitext is not removed. As long as Bulbapedia is the only place the roster is published as
text, the dependency is real, and pretending otherwise would mean hand-maintaining 300 rows
permanently.

What changes is its authority. Today the wiki *is* the source of truth, read at derive time.
After this change it produces a *proposal*, which a human commits; `load` reads only the
committed file. A wiki edit cannot reach the database without passing through a reviewed diff,
and a roster can be entered by hand before the wiki has caught up.

`raw/roster.wikitext` continues to be overwritten in place on each fetch. It is git-tracked, so
overwriting it *is* the changelog — `git diff` on that file is the M-B to M-C comparison in its
most direct form. Per-regulation raw snapshots would add files without adding information.

## Service layer changes

`PokedexResolver.legalIds` is deleted. Every `champions_pokemon` row is legal, so the four
queries that currently pre-fetch an id array and filter with `id: { in: legal }` query the
table directly. The `megaForms` nested filter in `championsPokedex` loses its `where` clause
for the same reason. The resolver gets shorter and one round trip per request disappears.

The `regulation` argument on `championsSearch`, `championsRoster`, `championsRosterCount` and
`championsPokedex` is removed. With one regulation resident it selects nothing, and an argument
that silently does nothing is worse than no argument.

`RegulationResolver` keeps `currentRegulation`, now a plain `findFirst` over the single row,
with `legalCount` from `championsPokemon.count()` instead of `_count: { legality }`. The
`regulations` list query is removed — its contract is "history is retained so rosters stay
diffable", which is no longer true of the database, and codegen shows `RegulationListDocument`
has no call site.

`Regulation.isCurrent` is removed from the GraphQL model. No template renders it, but the
`ActiveRegulation` interface in `libs/data-access-champions/src/lib/regulation.store.ts` declares it
explicitly — deliberately, so that type drift surfaces at the declaration rather than as
`unknown` inside a template — so that interface is edited alongside the model and the
`operations.graphql` selection set.

`BoxResolver` stops resolving a regulation before saving a team and reads the single row
directly.

`operations.graphql` and the generated types regenerate from these.

## Deliberately unchanged

- The two-database topology, both Prisma schemas' generators, and the mainline schema.
- `champions:fetch` and the MediaWiki client.
- `wikitext.ts` parsing, other than routing its output into the roster file. Its tests stand.
- The mainline projection logic in `derive` — version group selection, the fallback learnset
  union, `learnset_is_approximate`, Mega base-form resolution, move override application. This
  moves into `load` unchanged; it is the part that works.
- Every table below the reference layer: `KnownSet`, `BoxPokemon`, `Team`, `BattleSession` and
  their children keep their current shape. They are emptied by a reset, not restructured.

## Testing

`wikitext.spec.ts` covers parsing today and continues to. New coverage:

- Roster file round-trip: parse a wikitext fixture, write TSV, read it back, assert the entries
  match — including an entry with a note and an entry with a form suffix.
- Each sanity gate rejects, with a fixture that trips it and one that passes.
- Regulation metadata parsing, including the unparseable-date and missing-header cases.

`load` is exercised against a database in the existing integration style rather than mocked;
the assertion that matters is that a load over a populated database leaves exactly the row
counts of a load over an empty one.

## Rollout for M-C

The work lands against M-B, which is live until 2 September 2026, and is verified by rebuilding
the M-B database from `regulations/M-B/` and confirming the application behaves identically.
That is the regression test: same roster, same counts, same screens.

When M-C is announced, either path works and neither needs code changes:

1. **Wiki first** — `champions:refresh`, review the roster diff, done.
2. **Game first** — copy `regulations/M-B/roster.tsv` to `regulations/M-C/`, edit it against
   the in-game list, write `regulation.json`, run `champions:load`. Bulbapedia catches up
   later; `champions:roster` then regenerates the proposal and the diff shows any disagreement
   between what was typed and what the wiki says.

Path 2 is the reason for this design. It is the difference between being ready for M-C and
waiting for a volunteer editor.

## Conventions

Implementation follows [AGENTS.md](../AGENTS.md): no abbreviations in identifiers, and no
explanatory comments in TypeScript — the reasoning belongs here and in commit messages. Prisma
`///` doc comments are schema data and stay.

## Open questions

- **Does M-C restrict beyond the roster?** `LegalityStatus` covers availability caveats
  Bulbapedia already states. If M-C introduces competitive restrictions the roster page does
  not express — restricted-legendary slot limits, item clauses — that is a further change, and
  `Regulation.notes` holds it as prose until the shape is known. Deciding that shape now,
  without a single example, would be a guess.
- **Is `startsOn` for M-C knowable before the rotation?** If the announcement states only an
  end date, `startsOn` is entered as the day M-B ends.
