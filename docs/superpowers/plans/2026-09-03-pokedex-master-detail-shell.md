# Pokédex Master-Detail Shell Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the Pokédex's card-grid list with a master-detail layout — a virtualized, filterable `pokedex-data-table` on the left, the existing Pokémon detail page in a `<router-outlet>` on the right — using the filtering/faceting/virtualization capabilities `pokedex-data-table` shipped in the prior plan (PR #20).

**Architecture:** A new `PokemonShellComponent` owns the full-dex `gqlResource` fetch and renders `pokedex-data-table` with real Pokémon columns (sprite+name, types, six base stats, total) built via `createDataTableColumns<PokemonRow>()`; row selection navigates to a nested `pokemon/:id` route rendered in the shell's own `<router-outlet>`, replacing today's sibling `pokemon`/`pokemon/:id` routes. The `PokemonList` GraphQL query gains `stats` (already resolvable server-side — no backend change) and drops server-side pagination in favor of fetching the full ~1,351-row table once, sorted/filtered/faceted entirely client-side. The old card grid, its filter bar, and now-dead saved-filter state are deleted once the shell replaces them.

**Tech Stack:** Angular 22 (signals, zoneless, standalone components), `@tanstack/angular-table@9.2.2` via `pokedex-data-table` (from `@pokemon-center/ui-pokedex`), Angular Router (nested routes), `@ngrx/signals` (`PokedexContextStore`, untouched except a dead-code removal), Jest 30 + zoneless test env.

**Spec:** `docs/table-plan.md`, Phase 5 ("Layout: master-detail shell" subsection) and Phase 5's "Data" subsection. Builds directly on `docs/superpowers/plans/2026-09-02-pokedex-data-table-filtering-faceting-virtualization.md` (merged, PR #20) — every `pokedex-data-table` input/model referenced below (`virtualScroll`, `rowHeight`, `viewportHeight`, `columnFilters`, `globalFilter`, `rowVariant`, `filterVariant` column meta) already exists and is tested.

## Global Constraints

- **No abbreviations** — spelled-out names throughout (matches this codebase's established rule; game-native abbreviations like HP/PP/STAB/IV/EV are exempt, but nothing else is).
- **Column definitions are module-scope constants, never rebuilt in a component field** — `coreColumnsFeature` memoises on `table.options.columns` by identity.
- **An array-valued column needs an explicit `getUniqueValues` accessor for its facets to be correct** (documented in `docs/table-plan.md` after the prior plan found it) — the Types column here is exactly this case (`type1`/`type2` collapse into one array).
- **`table.getRowModel()` reflects both filtering and sorting already** — this plan's shell does not call `getFilteredRowModel()` anywhere; it only ever reads through `pokedex-data-table`'s public API, which already gets this right internally.
- **Tokens only** — no raw hex/px-literal colors in any new styles; use the existing `var(--s-*)`/`var(--r-*)`/`var(--ink*)`/`var(--accent*)`/`var(--line)`/`var(--surface*)` custom properties.
- **Every interactive element keyboard-operable**, per kit rule 6 — row selection must work via a real anchor/button with a working `routerLink`, not a bare `(click)` on a `<div>`.
- Tests run in the zoneless environment already configured in `test-setup.ts` (`setupZonelessTestEnv()`) — assert on rendered DOM/text after `fixture.detectChanges()`, never on state alone.

---

## Task 1: Extend the `PokemonList` query and export `ColumnFiltersState`

**Files:**
- Modify: `libs/data-access-pokedex/src/lib/operations.graphql`
- Modify: `libs/data-access-pokedex/src/lib/generated/graphql.ts` (regenerated, not hand-edited — see Step 3)
- Modify: `libs/ui-pokedex/src/index.ts`
- Test: `libs/data-access-pokedex/src/lib/operations.graphql.spec.ts` (new file, a thin smoke test — see Step 1)

**Interfaces:**
- Consumes: nothing new. The backend already resolves `stats` on the `Pokemon` GraphQL type (`apps/pokedex-service/src/app/resolvers/pokemon.resolver.ts`'s `POKEMON_INCLUDE` already includes `stats: { include: { stat: true } }`) — this task only asks the frontend query for a field the server can already return. No backend file changes.
- Produces: `PokemonListQuery`'s row shape gains `stats: Array<{ base_stat: number, stat: { identifier: string } }>`; the `take`/`skip` arguments are dropped from the query (server defaults `take` to 50 — this task passes a value large enough to cover the whole table, since making `take` fully optional server-side is a larger change than this task needs). `@pokemon-center/ui-pokedex` gains a `ColumnFiltersState` type export, consumed by Task 4's shell.

This task is almost entirely a data-shape change with no new logic, so it is verified by a thin integration-style test hitting the real query shape (type-level, not a live HTTP call) plus running the existing `data-access-pokedex` suite to confirm nothing broke.

- [ ] **Step 1: Confirm current query shape (no code yet)**

Read `libs/data-access-pokedex/src/lib/operations.graphql`'s `PokemonList` operation. It currently reads:

```graphql
query PokemonList(
	$take: Int!
	$skip: Int!
	$search: String
	$versionGroup: String
	$types: [String!]
	$generation: Int
	$sortBy: String
	$sortDesc: Boolean
) {
	pokemonList(
		take: $take
		skip: $skip
		search: $search
		versionGroup: $versionGroup
		types: $types
		generation: $generation
		sortBy: $sortBy
		sortDesc: $sortDesc
	) {
		id
		canonicalId
		slug
		identifier
		height
		weight
		types {
			slot
			type {
				id
				identifier
			}
		}
	}
}
```

- [ ] **Step 2: Rewrite the operation**

```graphql
query PokemonList($take: Int!, $search: String, $versionGroup: String) {
	pokemonList(take: $take, search: $search, versionGroup: $versionGroup) {
		id
		canonicalId
		slug
		identifier
		height
		weight
		types {
			slot
			type {
				id
				identifier
			}
		}
		stats {
			base_stat
			stat {
				identifier
			}
		}
	}
}
```

Dropped: `skip` (always 0 — the shell fetches everything in one call, never pages), `types`/`generation`/`sortBy`/`sortDesc` (server-side filtering/sorting args — the shell filters and sorts entirely client-side through `pokedex-data-table`, per this plan's architecture; keeping them on the query would be dead server round-trip capability nothing calls). Kept: `search` (still useful as an optional server-side narrowing the global-search UI does *not* need, since client-side `globalFilter` already covers free-text search over the fully-loaded table — actually, on reflection this argument is now also unused by any caller in this plan; keep it only if Task 4 ends up wanting a server-assisted search fallback, otherwise drop it too. **Decide in Task 4 dispatch**: if nothing in Task 4 passes `search`, remove it here in Task 4's own commit rather than leaving an unused query variable — flag this as a note for whoever implements Task 4, not a blocker for this task.)

- [ ] **Step 3: Regenerate the typed client**

Find the codegen command — check `libs/data-access-pokedex/package.json` or the workspace root for a `graphql-codegen` script (search `grep -rn "graphql-codegen\|codegen" package.json libs/data-access-pokedex/*.json`). Run it. If no codegen script exists in this workspace (the `generated/graphql.ts` file may be maintained by a manual convention instead — check the file's header comment for a note), hand-edit `PokemonListQuery`'s type and `PokemonListDocument`'s embedded query string to match Step 2 exactly, keeping the `TypedDocumentString` wrapper pattern already used by every other operation in that file.

Expected resulting type (whether generated or hand-written):

```ts
export type PokemonListQuery = {
	pokemonList: Array<{
		id: string;
		canonicalId: string;
		slug: string;
		identifier: string;
		height: number;
		weight: number;
		types: Array<{ slot: number; type: { id: string; identifier: string } }>;
		stats: Array<{ base_stat: number; stat: { identifier: string } }>;
	}>;
};
```

- [ ] **Step 4: Export `ColumnFiltersState` from `ui-pokedex`**

In `libs/ui-pokedex/src/index.ts`, the type-only export line currently reads:

```ts
export type { ColumnDef, ColumnOrderState, SortingState, ColumnVisibilityState } from '@tanstack/angular-table';
```

Add `ColumnFiltersState`:

```ts
export type { ColumnDef, ColumnOrderState, SortingState, ColumnVisibilityState, ColumnFiltersState } from '@tanstack/angular-table';
```

- [ ] **Step 5: Smoke-test the new shape**

```ts
// libs/data-access-pokedex/src/lib/operations.graphql.spec.ts
import { PokemonListDocument } from './generated/graphql';

describe('PokemonList operation', () => {
	it('requests stats alongside types', () => {
		const query = PokemonListDocument.toString();

		expect(query).toContain('base_stat');
		expect(query).toContain('stat {');
		expect(query).not.toContain('$skip');
	});
});
```

- [ ] **Step 6: Run the suite**

Run: `npx nx test data-access-pokedex` and `npx nx test ui-pokedex`
Expected: PASS — the new spec, and no regression in either project (the `ui-pokedex` change is an additive type-only export).

- [ ] **Step 7: Commit**

```bash
git add libs/data-access-pokedex/src/lib/operations.graphql libs/data-access-pokedex/src/lib/generated/graphql.ts libs/data-access-pokedex/src/lib/operations.graphql.spec.ts libs/ui-pokedex/src/index.ts
git commit -m "feat(data-access-pokedex): add stats to PokemonList, drop server-side paging/filtering"
```

---

## Task 2: Relocate the shared sprite helpers out of `pokemon-list/`

Pure relocation, no behavior change. Done now because Task 6 deletes the `pokemon-list/` folder, and `pokemon-avater/pokemon-avatar.service.ts` and `.directive.ts` living inside it are consumed by `pokemon-page.component.ts` and `pokemon-about.component.ts` — files that survive this plan untouched. (Note: the existing folder name misspells "avatar" as "avater" — this task fixes the spelling as part of the move, since a rename touches every import site anyway and leaving a known misspelling in a *new* location would be pointless.)

**Files:**
- Create: `libs/domain-pokedex/src/lib/shared/pokemon-avatar/pokemon-avatar.service.ts`
- Create: `libs/domain-pokedex/src/lib/shared/pokemon-avatar/pokemon-avatar.directive.ts`
- Delete: `libs/domain-pokedex/src/lib/features/pokemon-list/pokemon-avater/pokemon-avatar.service.ts`
- Delete: `libs/domain-pokedex/src/lib/features/pokemon-list/pokemon-avater/pokemon-avatar.directive.ts`
- Modify: `libs/domain-pokedex/src/lib/features/pokemon-page/pokemon-page.component.ts`
- Modify: `libs/domain-pokedex/src/lib/features/pokemon-page/pokemon-about/pokemon-about.component.ts`
- Modify: `libs/domain-pokedex/src/lib/features/pokemon-list/pokemon-list.component.ts` (its own import path, until Task 6 deletes the whole file)

**Interfaces:**
- Consumes: nothing new.
- Produces: `localSpriteUrl`, `officialArtworkUrl` (from the service) and `PokemonAvatarDirective`, at `libs/domain-pokedex/src/lib/shared/pokemon-avatar/` instead of under `features/pokemon-list/pokemon-avater/`. Same exported names, same signatures — only the file path changes.

- [ ] **Step 1: Move the files verbatim**

```bash
mkdir -p libs/domain-pokedex/src/lib/shared/pokemon-avatar
git mv libs/domain-pokedex/src/lib/features/pokemon-list/pokemon-avater/pokemon-avatar.service.ts libs/domain-pokedex/src/lib/shared/pokemon-avatar/pokemon-avatar.service.ts
git mv libs/domain-pokedex/src/lib/features/pokemon-list/pokemon-avater/pokemon-avatar.directive.ts libs/domain-pokedex/src/lib/shared/pokemon-avatar/pokemon-avatar.directive.ts
```

If `pokemon-avatar.directive.ts` imports anything from `pokemon-avatar.service.ts` via a relative path, confirm the relative import still resolves after the move (both files moved together into the same new directory, so a same-directory relative import like `./pokemon-avatar.service` needs no change).

- [ ] **Step 2: Fix every consumer's import path**

In `libs/domain-pokedex/src/lib/features/pokemon-page/pokemon-page.component.ts`, change:
```ts
import { localSpriteUrl, officialArtworkUrl } from '../pokemon-list/pokemon-avater/pokemon-avatar.service';
```
to:
```ts
import { localSpriteUrl, officialArtworkUrl } from '../../shared/pokemon-avatar/pokemon-avatar.service';
```

In `libs/domain-pokedex/src/lib/features/pokemon-page/pokemon-about/pokemon-about.component.ts`, change:
```ts
import { PokemonAvatarDirective } from '../../pokemon-list/pokemon-avater/pokemon-avatar.directive';
```
to:
```ts
import { PokemonAvatarDirective } from '../../../shared/pokemon-avatar/pokemon-avatar.directive';
```

In `libs/domain-pokedex/src/lib/features/pokemon-list/pokemon-list.component.ts`, change its own:
```ts
import { localSpriteUrl, officialArtworkUrl } from './pokemon-avater/pokemon-avatar.service';
```
to:
```ts
import { localSpriteUrl, officialArtworkUrl } from '../../shared/pokemon-avatar/pokemon-avatar.service';
```
(This file is deleted in Task 6 — fixing its import here just keeps the branch compiling between tasks.)

Grep for any other reference before moving on: `grep -rn "pokemon-avater" libs/domain-pokedex/src` must return nothing.

- [ ] **Step 3: Run the suite**

Run: `npx nx test domain-pokedex`
Expected: PASS — every existing test in the project, unaffected by a pure path relocation.

- [ ] **Step 4: Commit**

```bash
git add -A
git commit -m "refactor(domain-pokedex): relocate pokemon-avatar helpers out of pokemon-list

Fixed the pokemon-avater misspelling in the new path. pokemon-page and
pokemon-about both depend on these, so they can't move with the rest
of pokemon-list when it's deleted."
```

---

## Task 3: Pokémon column definitions

A pure, independently-testable module — no component, no routing. This is the highest-logic-density task in this plan: it defines every column the shell's table shows, including the array-valued Types column's `getUniqueValues` accessor (the exact trap the prior plan documented) and the rich sprite/type cell renderers via `flexRenderComponent`.

**Files:**
- Create: `libs/domain-pokedex/src/lib/features/pokemon-shell/pokemon-columns.ts`
- Create: `libs/domain-pokedex/src/lib/features/pokemon-shell/pokemon-name-cell.component.ts`
- Create: `libs/domain-pokedex/src/lib/features/pokemon-shell/pokemon-types-cell.component.ts`
- Test: `libs/domain-pokedex/src/lib/features/pokemon-shell/pokemon-columns.spec.ts`

**Interfaces:**
- Consumes: `createDataTableColumns`, `TypeChipComponent`, `EntityPortraitComponent` from `@pokemon-center/ui-pokedex`; `flexRenderComponent` from `@tanstack/angular-table`; `localSpriteUrl`/`officialArtworkUrl` from Task 2's new path; the `PokemonListQuery` row shape from Task 1.
- Produces: `interface PokemonRow` (the flattened, per-row shape the table actually consumes — base stats pulled out of the `stats` array into named fields, types collapsed into a `types: string[]`); `function toPokemonRow(row: PokemonListQuery['pokemonList'][number]): PokemonRow`; `const pokemonColumns` (module-scope, built with `createDataTableColumns<PokemonRow>()`), consumed by Task 4's shell as `[columns]="pokemonColumns"`.

- [ ] **Step 1: Write the failing tests**

```ts
// libs/domain-pokedex/src/lib/features/pokemon-shell/pokemon-columns.spec.ts
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { injectTable, type Table } from '@tanstack/angular-table';
import { dataTableFeatures, type DataTableFeatures } from '@pokemon-center/ui-pokedex';
import { pokemonColumns, toPokemonRow, type PokemonRow } from './pokemon-columns';

const rawRows = [
	{
		id: '6', canonicalId: 'pokemon:6', slug: 'charizard', identifier: 'charizard', height: 17, weight: 905,
		types: [
			{ slot: 1, type: { id: '10', identifier: 'fire' } },
			{ slot: 2, type: { id: '3', identifier: 'flying' } },
		],
		stats: [
			{ base_stat: 78, stat: { identifier: 'hp' } },
			{ base_stat: 84, stat: { identifier: 'attack' } },
			{ base_stat: 78, stat: { identifier: 'defense' } },
			{ base_stat: 109, stat: { identifier: 'special-attack' } },
			{ base_stat: 85, stat: { identifier: 'special-defense' } },
			{ base_stat: 100, stat: { identifier: 'speed' } },
		],
	},
	{
		id: '7', canonicalId: 'pokemon:7', slug: 'squirtle', identifier: 'squirtle', height: 5, weight: 90,
		types: [{ slot: 1, type: { id: '11', identifier: 'water' } }],
		stats: [
			{ base_stat: 44, stat: { identifier: 'hp' } },
			{ base_stat: 48, stat: { identifier: 'attack' } },
			{ base_stat: 65, stat: { identifier: 'defense' } },
			{ base_stat: 50, stat: { identifier: 'special-attack' } },
			{ base_stat: 64, stat: { identifier: 'special-defense' } },
			{ base_stat: 43, stat: { identifier: 'speed' } },
		],
	},
];

describe('toPokemonRow', () => {
	it('flattens types into a string array in slot order', () => {
		expect(toPokemonRow(rawRows[0]).types).toEqual(['fire', 'flying']);
	});

	it('flattens a single-type pokemon without a trailing undefined', () => {
		expect(toPokemonRow(rawRows[1]).types).toEqual(['water']);
	});

	it('maps each named stat to its own field', () => {
		const row = toPokemonRow(rawRows[0]);
		expect(row.hp).toBe(78);
		expect(row.attack).toBe(84);
		expect(row.defense).toBe(78);
		expect(row.specialAttack).toBe(109);
		expect(row.specialDefense).toBe(85);
		expect(row.speed).toBe(100);
	});

	it('computes the base stat total', () => {
		expect(toPokemonRow(rawRows[0]).total).toBe(78 + 84 + 78 + 109 + 85 + 100);
	});
});

@Component({ selector: 'pokemon-columns-host', changeDetection: ChangeDetectionStrategy.OnPush, template: '' })
class ColumnsHostComponent {
	readonly table = injectTable(() => ({
		features: dataTableFeatures,
		columns: pokemonColumns,
		data: rawRows.map(toPokemonRow),
	}));
}

describe('pokemonColumns', () => {
	let table: Table<DataTableFeatures, PokemonRow>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({ imports: [ColumnsHostComponent] }).compileComponents();
		const fixture: ComponentFixture<ColumnsHostComponent> = TestBed.createComponent(ColumnsHostComponent);
		fixture.detectChanges();
		table = fixture.componentInstance.table;
	});

	it('facets the array-valued types column by individual type, not by combination', () => {
		const facets = table.getColumn('types')?.getFacetedUniqueValues();

		expect(facets?.get('fire')).toBe(1);
		expect(facets?.get('flying')).toBe(1);
		expect(facets?.get('water')).toBe(1);
	});

	it('filters the types column with arrIncludesSome', () => {
		table.setColumnFilters([{ id: 'types', value: ['water'] }]);

		expect(table.getFilteredRowModel().rows.map((row) => row.original.slug)).toEqual(['squirtle']);
	});

	it('sorts the total column numerically, descending first', () => {
		table.setSorting([{ id: 'total', desc: true }]);

		expect(table.getSortedRowModel().rows.map((row) => row.original.slug)).toEqual(['charizard', 'squirtle']);
	});

	it('facets a numeric stat column with correct min/max', () => {
		expect(table.getColumn('speed')?.getFacetedMinMaxValues()).toEqual([43, 100]);
	});
});
```

- [ ] **Step 2: Run the tests to verify they fail**

Run: `npx nx test domain-pokedex --testPathPattern=pokemon-columns.spec.ts`
Expected: FAIL — `./pokemon-columns` does not exist yet.

- [ ] **Step 3: Write the cell components**

**Row selection is a real link, not a click handler**: wrapping the cell's content in a `routerLink`
means the row is keyboard-operable and has a real href for free (kit rule 6), and the shell (Task 4)
never needs its own click wiring — `PokemonShellComponent`'s `rowVariant`/`selectedId` already react
to the route changing on their own. This was originally left as an open decision between this task
and Task 4; ruled during pre-flight in favor of this approach, folded into the component from the
start rather than revised later.

```ts
// libs/domain-pokedex/src/lib/features/pokemon-shell/pokemon-name-cell.component.ts
import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { EntityPortraitComponent } from '@pokemon-center/ui-pokedex';
import { localSpriteUrl, officialArtworkUrl } from '../../shared/pokemon-avatar/pokemon-avatar.service';

/** Sprite + name, packed into one cell — the table's Name column is more than a string. */
@Component({
	selector: 'pokedex-pokemon-name-cell',
	changeDetection: ChangeDetectionStrategy.OnPush,
	imports: [RouterLink, EntityPortraitComponent],
	template: `
		<a [routerLink]="['/pokedex', 'pokemon', pokemonId()]">
			<pokedex-entity-portrait [type]="primaryType()" [src]="spriteUrl()" [fallbackSrc]="artworkUrl()" [size]="32" [alt]="name()" />
			<span>{{ name() }}</span>
		</a>
	`,
	styles: `
		:host {
			display: flex;
			align-items: center;
		}
		a {
			display: flex;
			align-items: center;
			gap: var(--s-2);
			color: inherit;
			text-decoration: none;
		}
	`,
})
export class PokemonNameCellComponent {
	readonly pokemonId = input.required<number>();
	readonly name = input.required<string>();
	readonly primaryType = input<string>('normal');

	protected spriteUrl(): string {
		return localSpriteUrl(this.pokemonId());
	}

	protected artworkUrl(): string {
		return officialArtworkUrl(this.pokemonId());
	}
}
```

```ts
// libs/domain-pokedex/src/lib/features/pokemon-shell/pokemon-types-cell.component.ts
import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { TypeChipComponent } from '@pokemon-center/ui-pokedex';

/** Up to two type chips per row — a Pokémon's types collapse into one array column. */
@Component({
	selector: 'pokedex-pokemon-types-cell',
	changeDetection: ChangeDetectionStrategy.OnPush,
	imports: [TypeChipComponent],
	template: `
		@for (type of types(); track type) {
			<pokedex-type-chip [type]="type" size="sm" />
		}
	`,
	styles: `
		:host {
			display: flex;
			gap: var(--s-1);
		}
	`,
})
export class PokemonTypesCellComponent {
	readonly types = input.required<readonly string[]>();
}
```

- [ ] **Step 4: Write `pokemon-columns.ts`**

```ts
// libs/domain-pokedex/src/lib/features/pokemon-shell/pokemon-columns.ts
import { createDataTableColumns, type DataTableFeatures } from '@pokemon-center/ui-pokedex';
import { flexRenderComponent } from '@tanstack/angular-table';
import type { PokemonListQuery } from '@pokemon-center/data-access-pokedex';
import { PokemonNameCellComponent } from './pokemon-name-cell.component';
import { PokemonTypesCellComponent } from './pokemon-types-cell.component';

type RawPokemonRow = PokemonListQuery['pokemonList'][number];

export interface PokemonRow {
	id: number;
	canonicalId: string;
	slug: string;
	name: string;
	types: string[];
	hp: number;
	attack: number;
	defense: number;
	specialAttack: number;
	specialDefense: number;
	speed: number;
	total: number;
}

const STAT_IDENTIFIER_TO_FIELD: Record<string, keyof Pick<PokemonRow, 'hp' | 'attack' | 'defense' | 'specialAttack' | 'specialDefense' | 'speed'>> = {
	hp: 'hp',
	attack: 'attack',
	defense: 'defense',
	'special-attack': 'specialAttack',
	'special-defense': 'specialDefense',
	speed: 'speed',
};

/** Flattens the GraphQL row shape into what the table actually renders and sorts by. */
export function toPokemonRow(row: RawPokemonRow): PokemonRow {
	const stats = { hp: 0, attack: 0, defense: 0, specialAttack: 0, specialDefense: 0, speed: 0 };
	for (const entry of row.stats) {
		const field = STAT_IDENTIFIER_TO_FIELD[entry.stat.identifier];
		if (field) stats[field] = entry.base_stat;
	}

	return {
		id: Number(row.id),
		canonicalId: row.canonicalId,
		slug: row.slug,
		name: row.identifier,
		types: [...row.types].sort((first, second) => first.slot - second.slot).map((entry) => entry.type.identifier),
		...stats,
		total: stats.hp + stats.attack + stats.defense + stats.specialAttack + stats.specialDefense + stats.speed,
	};
}

const columnHelper = createDataTableColumns<PokemonRow>();

/**
 * Module scope, not a component field — see the kit's own column-definition rule: a fresh array
 * rebuilds every column, header group and cell on each state change.
 *
 * getUniqueValues on `types` is load-bearing, not decoration: without it, TanStack wraps each
 * row's whole types array as one opaque facet key (by reference) instead of counting `fire` and
 * `flying` separately — see docs/table-plan.md's Phase 5 note on this exact trap.
 */
export const pokemonColumns = columnHelper.columns([
	columnHelper.accessor('name', {
		header: 'Name',
		sortFn: 'alphanumeric',
		cell: (context) =>
			flexRenderComponent(PokemonNameCellComponent, {
				inputs: { pokemonId: context.row.original.id, name: context.getValue(), primaryType: context.row.original.types[0] ?? 'normal' },
			}),
	}),
	columnHelper.accessor('types', {
		header: 'Types',
		filterFn: 'arrIncludesSome',
		getUniqueValues: (row) => row.types,
		meta: { filterVariant: 'set' },
		cell: (context) => flexRenderComponent(PokemonTypesCellComponent, { inputs: { types: context.getValue() } }),
	}),
	columnHelper.accessor('hp', { header: 'HP', sortFn: 'basic', filterFn: 'inNumberRange', meta: { align: 'end', filterVariant: 'range' } }),
	columnHelper.accessor('attack', { header: 'Attack', sortFn: 'basic', filterFn: 'inNumberRange', meta: { align: 'end', filterVariant: 'range' } }),
	columnHelper.accessor('defense', { header: 'Defense', sortFn: 'basic', filterFn: 'inNumberRange', meta: { align: 'end', filterVariant: 'range' } }),
	columnHelper.accessor('specialAttack', { header: 'Sp. Atk', sortFn: 'basic', filterFn: 'inNumberRange', meta: { align: 'end', filterVariant: 'range' } }),
	columnHelper.accessor('specialDefense', { header: 'Sp. Def', sortFn: 'basic', filterFn: 'inNumberRange', meta: { align: 'end', filterVariant: 'range' } }),
	columnHelper.accessor('speed', { header: 'Speed', sortFn: 'basic', filterFn: 'inNumberRange', meta: { align: 'end', filterVariant: 'range' } }),
	columnHelper.accessor('total', { header: 'Total', sortFn: 'basic', meta: { align: 'end' } }),
]);
```

Note: `dataTableFeatures`/`DataTableFeatures` used by the test's host component must be exported from `@pokemon-center/ui-pokedex` for this test to compile — confirm they already are (`grep -n "dataTableFeatures\|DataTableFeatures" libs/ui-pokedex/src/index.ts`); if not, add them to the barrel in this task (one line each), since the type/value are otherwise unreachable outside `ui-pokedex`.

- [ ] **Step 5: Run the tests to verify they pass**

Run: `npx nx test domain-pokedex --testPathPattern=pokemon-columns.spec.ts`
Expected: PASS — all `toPokemonRow` and `pokemonColumns` cases green.

- [ ] **Step 6: Run the full project suite**

Run: `npx nx test domain-pokedex`
Expected: PASS — no regressions in the rest of the project.

- [ ] **Step 7: Commit**

```bash
git add libs/domain-pokedex/src/lib/features/pokemon-shell/
git commit -m "feat(domain-pokedex): add Pokemon table column definitions"
```

---

## Task 4: `PokemonShellComponent` and the empty-detail placeholder

**Files:**
- Create: `libs/domain-pokedex/src/lib/features/pokemon-shell/pokemon-shell.component.ts`
- Create: `libs/domain-pokedex/src/lib/features/pokemon-shell/pokemon-shell.component.html`
- Create: `libs/domain-pokedex/src/lib/features/pokemon-shell/pokemon-shell.component.scss`
- Create: `libs/domain-pokedex/src/lib/features/pokemon-shell/pokemon-empty-detail.component.ts`
- Test: `libs/domain-pokedex/src/lib/features/pokemon-shell/pokemon-shell.component.spec.ts`

**Interfaces:**
- Consumes: `pokedex-data-table` (`UiDataTableComponent`) from `@pokemon-center/ui-pokedex`; `PokemonListDocument`/`gqlResource` from `@pokemon-center/data-access-pokedex`; `pokemonColumns`/`toPokemonRow`/`PokemonRow` from Task 3; `ColumnFiltersState`/`SortingState` types from `@pokemon-center/ui-pokedex` (Task 1).
- Produces: `PokemonShellComponent` (selector `pokedex-pokemon-shell`) — renders the table on the left and a `<router-outlet>` on the right, owns `sorting`/`columnFilters`/`globalFilter` state, fetches the full dex once. `PokemonEmptyDetailComponent` (selector `pokedex-pokemon-empty-detail`) — a placeholder shown when no Pokémon is selected. Both are wired into routing in Task 5, not here — this task builds and tests them standing alone via a host route in the spec.

- [ ] **Step 1: Write the failing tests**

No test in this codebase currently exercises a `gqlResource`-based component with mocked HTTP —
there is no established precedent to match here, this sketch is establishing one. `gqlResource`
(`libs/data-access-pokedex/src/lib/gql-resource.ts`) is built on Angular's `httpResource`, which
issues a real `HttpClient` POST under the hood — `HttpTestingController` intercepts at the
`HttpBackend` level regardless of what calls into `HttpClient`, so it works here the same as it
would for a plain service call. Use the modern functional providers
(`provideHttpClient()`/`provideHttpClientTesting()`), not the deprecated `HttpClientTestingModule`
— this codebase is fully standalone/functional-providers already, and mixing in an NgModule-style
import would be a step backward.

```ts
// libs/domain-pokedex/src/lib/features/pokemon-shell/pokemon-shell.component.spec.ts
import { Component } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting, HttpTestingController } from '@angular/common/http/testing';
import { provideRouter } from '@angular/router';
import { RouterTestingHarness } from '@angular/router/testing';
import { POKEDEX_API_URL } from '@pokemon-center/data-access-pokedex';
import { PokemonShellComponent } from './pokemon-shell.component';
import { PokemonEmptyDetailComponent } from './pokemon-empty-detail.component';

const samplePokemon = [
	{
		id: '1', canonicalId: 'pokemon:1', slug: 'bulbasaur', identifier: 'bulbasaur', height: 7, weight: 69,
		types: [{ slot: 1, type: { id: '12', identifier: 'grass' } }],
		stats: [
			{ base_stat: 45, stat: { identifier: 'hp' } },
			{ base_stat: 49, stat: { identifier: 'attack' } },
			{ base_stat: 49, stat: { identifier: 'defense' } },
			{ base_stat: 65, stat: { identifier: 'special-attack' } },
			{ base_stat: 65, stat: { identifier: 'special-defense' } },
			{ base_stat: 45, stat: { identifier: 'speed' } },
		],
	},
	{
		id: '4', canonicalId: 'pokemon:4', slug: 'charmander', identifier: 'charmander', height: 6, weight: 85,
		types: [{ slot: 1, type: { id: '10', identifier: 'fire' } }],
		stats: [
			{ base_stat: 39, stat: { identifier: 'hp' } },
			{ base_stat: 52, stat: { identifier: 'attack' } },
			{ base_stat: 43, stat: { identifier: 'defense' } },
			{ base_stat: 60, stat: { identifier: 'special-attack' } },
			{ base_stat: 50, stat: { identifier: 'special-defense' } },
			{ base_stat: 65, stat: { identifier: 'speed' } },
		],
	},
];

describe('PokemonShellComponent', () => {
	let harness: RouterTestingHarness;

	function element(): HTMLElement {
		return harness.routeNativeElement as HTMLElement;
	}

	function respondWithSamplePokemon(): void {
		const httpMock = TestBed.inject(HttpTestingController);
		const request = httpMock.expectOne((req) => req.url === 'http://test-pokedex-api/graphql');
		request.flush({ data: { pokemonList: samplePokemon } });
	}

	beforeEach(async () => {
		// A trivial stub, not PokemonPageComponent — this spec proves PokemonShellComponent reacts
		// to its child route's :id param, not what the real detail page renders. Task 5's manual
		// check is what proves the real /pokedex/pokemon/:id path end to end.
		@Component({ selector: 'stub-detail', template: 'stub detail' })
		class StubDetailComponent {}

		await TestBed.configureTestingModule({
			providers: [
				provideHttpClient(),
				provideHttpClientTesting(),
				{ provide: POKEDEX_API_URL, useValue: 'http://test-pokedex-api/graphql' },
				provideRouter([
					{
						path: '',
						component: PokemonShellComponent,
						children: [
							{ path: '', component: PokemonEmptyDetailComponent },
							{ path: ':id', component: StubDetailComponent },
						],
					},
				]),
			],
		}).compileComponents();

		harness = await RouterTestingHarness.create('');
		respondWithSamplePokemon();
		harness.fixture.detectChanges();
		await harness.fixture.whenStable();
		harness.fixture.detectChanges();
	});

	it('renders every fetched pokemon as a table row', () => {
		const rows = element().querySelectorAll('[role="row"]:not(.header-row)');
		expect(rows).toHaveLength(2);
		expect(element().textContent).toContain('bulbasaur');
		expect(element().textContent).toContain('charmander');
	});

	it('shows the empty-detail placeholder when nothing is selected', () => {
		expect(element().textContent).toContain('Select a Pokémon');
	});

	it('enables virtualization on the table', () => {
		expect(element().querySelector('cdk-virtual-scroll-viewport')).not.toBeNull();
	});

	it('marks a row selected once its id matches the current route', async () => {
		await harness.navigateByUrl('/1');
		harness.fixture.detectChanges();

		const markedRow = Array.from(element().querySelectorAll('[role="row"]')).find((row) => row.classList.contains('marked'));
		expect(markedRow?.textContent).toContain('bulbasaur');
	});
});
```

Note: this test assumes `pokemon/:id` navigation is reachable at `/1` inside the harness's tiny route table — adjust the route array in `beforeEach` if `PokemonShellComponent`'s own template expects a specific child path shape once Step 3 is written; the important behaviors to prove are the four `it()` blocks, not the exact test route shape. If `RouterTestingHarness`/`HttpTestingController` aren't already used elsewhere in this project, check `libs/domain-pokedex`'s existing spec files for the established HTTP-mocking convention for `gqlResource`-based components (search `grep -rln "HttpTestingController\|gqlResource" libs/domain-pokedex/src/lib/features/*/*.spec.ts`) and match that pattern instead if it differs from the sketch above — the sketch is illustrative of *what* to prove, not a literal API contract with this codebase's existing HTTP-mock helpers.

- [ ] **Step 2: Run the tests to verify they fail**

Run: `npx nx test domain-pokedex --testPathPattern=pokemon-shell.component.spec.ts`
Expected: FAIL — neither component exists yet.

- [ ] **Step 3: Write `PokemonEmptyDetailComponent`**

```ts
// libs/domain-pokedex/src/lib/features/pokemon-shell/pokemon-empty-detail.component.ts
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
	selector: 'pokedex-pokemon-empty-detail',
	changeDetection: ChangeDetectionStrategy.OnPush,
	template: `<p>Select a Pokémon to see its details.</p>`,
	styles: `
		:host {
			display: flex;
			align-items: center;
			justify-content: center;
			height: 100%;
			color: var(--ink-muted);
		}
	`,
})
export class PokemonEmptyDetailComponent {}
```

- [ ] **Step 4: Write `PokemonShellComponent`**

```ts
// libs/domain-pokedex/src/lib/features/pokemon-shell/pokemon-shell.component.ts
import { ChangeDetectionStrategy, Component, computed } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';
import { PokemonListDocument, gqlResource } from '@pokemon-center/data-access-pokedex';
import { UiDataTableComponent, type ColumnFiltersState, type DataTableRowVariant, type SortingState } from '@pokemon-center/ui-pokedex';
import { pokemonColumns, toPokemonRow, type PokemonRow } from './pokemon-columns';

@Component({
	selector: 'pokedex-pokemon-shell',
	changeDetection: ChangeDetectionStrategy.OnPush,
	imports: [RouterModule, UiDataTableComponent],
	templateUrl: './pokemon-shell.component.html',
	styleUrl: './pokemon-shell.component.scss',
})
export class PokemonShellComponent {
	private readonly route = inject(ActivatedRoute);
	private readonly router = inject(Router);

	private readonly list = gqlResource(PokemonListDocument, () => ({ take: 2000 }));

	protected readonly rows = computed<PokemonRow[]>(() => (this.list.hasValue() ? (this.list.value()?.pokemonList ?? []).map(toPokemonRow) : []));
	protected readonly loading = computed(() => this.list.isLoading());

	protected readonly columns = pokemonColumns;
	protected readonly sorting = signal<SortingState>([{ id: 'name', desc: false }]);
	protected readonly columnFilters = signal<ColumnFiltersState>([]);
	protected readonly globalFilter = signal('');

	/** The selected id comes from the router, not a local signal — the URL is the source of truth. */
	protected readonly selectedId = toSignal(
		this.router.events.pipe(map(() => this.route.firstChild?.snapshot.paramMap.get('id') ?? null)),
		{ initialValue: this.route.snapshot.firstChild?.paramMap.get('id') ?? null },
	);

	protected readonly rowVariant = (row: PokemonRow): DataTableRowVariant | null => (String(row.id) === this.selectedId() ? 'marked' : null);
}
```

Note: `inject`/`signal` need adding to the `@angular/core` import list above (the sketch omits them for brevity in this brief — the actual file needs `inject, signal` alongside `ChangeDetectionStrategy, Component, computed`). Confirm `gqlResource`'s exact signature against `libs/data-access-pokedex/src/lib/gql-resource.ts` (read it — it's short) before wiring `take: 2000`; if it takes variables differently than shown here, match its real signature instead of this sketch.

- [ ] **Step 5: Write the template**

```html
<!-- libs/domain-pokedex/src/lib/features/pokemon-shell/pokemon-shell.component.html -->
<div class="shell">
	<div class="list-pane">
		@if (loading()) {
			<p>Loading…</p>
		} @else {
			<pokedex-data-table
				[data]="rows()"
				[columns]="columns"
				[(sorting)]="sorting"
				[(columnFilters)]="columnFilters"
				[(globalFilter)]="globalFilter"
				[rowVariant]="rowVariant"
				[virtualScroll]="true"
				[rowHeight]="48"
				[viewportHeight]="'calc(100vh - 160px)'"
				label="Pokédex"
				emptyLabel="No Pokémon match your filters."
			/>
		}
	</div>

	<div class="detail-pane">
		<router-outlet />
	</div>
</div>
```

Row selection needs no click wiring here — the Name cell (Task 3) is already a real `routerLink` anchor, so navigating IS selecting, and `selectedId`/`rowVariant` above react to the route changing on their own.

- [ ] **Step 6: Write the styles**

```scss
// libs/domain-pokedex/src/lib/features/pokemon-shell/pokemon-shell.component.scss
:host {
	display: block;
}

.shell {
	display: flex;
	gap: var(--s-4);
	align-items: flex-start;
}

.list-pane {
	flex: 1 1 640px;
	min-width: 0;
}

.detail-pane {
	flex: 1 1 480px;
	min-width: 0;
	position: sticky;
	top: var(--s-4);
}
```

- [ ] **Step 7: Run the tests to verify they pass**

Run: `npx nx test domain-pokedex --testPathPattern=pokemon-shell.component.spec.ts`
Expected: PASS.

- [ ] **Step 8: Run the full project suite**

Run: `npx nx test domain-pokedex`
Expected: PASS.

- [ ] **Step 9: Commit**

```bash
git add libs/domain-pokedex/src/lib/features/pokemon-shell/
git commit -m "feat(domain-pokedex): add the Pokemon master-detail shell"
```

---

## Task 5: Route restructure

**Files:**
- Modify: `libs/domain-pokedex/src/lib/lib.routes.ts`
- Modify: `libs/domain-pokedex/src/lib/features/pokemon-page/pokemon-page.component.ts` (the `goBack()` method's target)

**Interfaces:**
- Consumes: `PokemonShellComponent`, `PokemonEmptyDetailComponent` (Task 4).
- Produces: `pokemon` and `pokemon/:id` (with its existing `about`/`stats`/`moves`/`locations` children, untouched) become children of a new parent route rendering `PokemonShellComponent`, rather than siblings. Every other route in this file (`moves`, `moves/:id`, `abilities/:id`, `items/:id`, `types/:id`, `analyzer`, `coverage`, `compare`, `kit`) is untouched.

- [ ] **Step 1: Rewrite the `pokemon`/`pokemon/:id` routes**

Current (from `lib.routes.ts`):
```ts
{ path: '', redirectTo: 'pokemon', pathMatch: 'full' },
{ path: 'pokemon', loadComponent: () => import('./features/pokemon-list/pokemon-list.component').then((module) => module.PokemonListComponent) },
{
	path: 'pokemon/:id',
	loadComponent: () => import('./features/pokemon-page/pokemon-page.component').then((module) => module.PokemonPageComponent),
	children: [
		{ path: '', redirectTo: 'about', pathMatch: 'full' },
		{ path: 'about', loadComponent: () => import('./features/pokemon-page/pokemon-about/pokemon-about.component').then((module) => module.PokemonAboutComponent) },
		{ path: 'stats', loadComponent: () => import('./features/pokemon-page/pokemon-stats/pokemon-stats.component').then((module) => module.PokemonStatsComponent) },
		{ path: 'moves', loadComponent: () => import('./features/pokemon-page/pokemon-moves/pokemon-moves.component').then((module) => module.PokemonMovesComponent) },
		{ path: 'locations', loadComponent: () => import('./features/pokemon-page/pokemon-locations/pokemon-locations.component').then((module) => module.PokemonLocationsComponent) },
	],
},
```

Replace with:
```ts
{ path: '', redirectTo: 'pokemon', pathMatch: 'full' },
{
	path: 'pokemon',
	loadComponent: () => import('./features/pokemon-shell/pokemon-shell.component').then((module) => module.PokemonShellComponent),
	children: [
		{ path: '', loadComponent: () => import('./features/pokemon-shell/pokemon-empty-detail.component').then((module) => module.PokemonEmptyDetailComponent) },
		{
			path: ':id',
			loadComponent: () => import('./features/pokemon-page/pokemon-page.component').then((module) => module.PokemonPageComponent),
			children: [
				{ path: '', redirectTo: 'about', pathMatch: 'full' },
				{ path: 'about', loadComponent: () => import('./features/pokemon-page/pokemon-about/pokemon-about.component').then((module) => module.PokemonAboutComponent) },
				{ path: 'stats', loadComponent: () => import('./features/pokemon-page/pokemon-stats/pokemon-stats.component').then((module) => module.PokemonStatsComponent) },
				{ path: 'moves', loadComponent: () => import('./features/pokemon-page/pokemon-moves/pokemon-moves.component').then((module) => module.PokemonMovesComponent) },
				{ path: 'locations', loadComponent: () => import('./features/pokemon-page/pokemon-locations/pokemon-locations.component').then((module) => module.PokemonLocationsComponent) },
			],
		},
	],
},
```

Every other route entry in the file (from `{ path: 'moves', ... }` onward) is unchanged — do not touch them.

- [ ] **Step 2: Fix `PokemonPageComponent.goBack()`**

`pokemon-page.component.ts` currently has:
```ts
public goBack(): void {
	this.router.navigate(['/pokedex'], { state: { id: this.id() } });
}
```

The list is now always visible beside the detail pane, so "back" no longer means "leave and return to a full-page list" — it means "deselect, show the empty-detail placeholder." Change to a relative navigation to the parent's empty child route:
```ts
public goBack(): void {
	this.router.navigate(['..'], { relativeTo: this.route });
}
```
This requires injecting `ActivatedRoute` (`private readonly route = inject(ActivatedRoute);`) if not already present — check the file; it currently only injects `Router`. Add the `ActivatedRoute` import from `@angular/router` (already imported for `RouterModule`, so only the class name needs adding to the same import line) and the injection.

- [ ] **Step 3: Manual route verification**

This step is a manual check, not an automated one — routing behavior across lazy-loaded chunks is best confirmed by actually navigating the running app. Run: `npx nx serve pokemon-center`, visit `/pokedex/pokemon`, confirm the shell renders with the empty-detail placeholder on the right; click a row, confirm the URL becomes `/pokedex/pokemon/<id>/about` and the detail page renders in the right pane while the table stays mounted on the left; click "back," confirm the URL returns to `/pokedex/pokemon` and the empty-detail placeholder reappears without the table reloading. Report whether this was performed or still needs a human/browser-tooling session — do not claim it was checked if it wasn't.

- [ ] **Step 4: Run the suite**

Run: `npx nx test domain-pokedex`
Expected: PASS.

- [ ] **Step 5: Commit**

```bash
git add libs/domain-pokedex/src/lib/lib.routes.ts libs/domain-pokedex/src/lib/features/pokemon-page/pokemon-page.component.ts
git commit -m "feat(domain-pokedex): nest pokemon routes under the master-detail shell"
```

---

## Task 6: Delete the old card grid and dead saved-filter state

**Files:**
- Delete: `libs/domain-pokedex/src/lib/features/pokemon-list/` (entire directory: `pokemon-list.component.{ts,html,scss}`, `pokemon-filters/`, `pokemon-types.pipe.ts`)
- Modify: `libs/data-access-pokedex/src/lib/pokedex-context.store.ts`

**Interfaces:**
- Consumes: nothing — this task only removes code once Tasks 2–5 have fully replaced what it did.
- Produces: nothing new. `PokedexContextStore` loses `FilterSet`, `savedFilters`, `saveFilter`, `deleteFilter` — confirmed dead once `pokemon-filters.component.ts` (their only consumer) is deleted in this same task.

- [ ] **Step 1: Confirm nothing else references what's about to be deleted**

```bash
grep -rn "pokemon-list/pokemon-list.component\|PokemonListComponent" libs apps --include=*.ts | grep -v "features/pokemon-list/pokemon-list.component.ts"
grep -rn "PokemonFiltersComponent\|pokemon-filters" libs apps --include=*.ts | grep -v "features/pokemon-list/pokemon-filters"
grep -rn "PokemonTypesPipe" libs apps --include=*.ts | grep -v "features/pokemon-list/pokemon-types.pipe.ts"
grep -rn "savedFilters\|saveFilter\|deleteFilter\|FilterSet" libs apps --include=*.ts | grep -v "pokedex-context.store.ts" | grep -v "features/pokemon-list/pokemon-filters"
```
Every command above must return nothing (after Task 5 already removed `lib.routes.ts`'s reference to `PokemonListComponent`). If anything still matches, stop and report BLOCKED with what you found — do not delete out from under a live reference.

- [ ] **Step 2: Delete the directory**

```bash
git rm -r libs/domain-pokedex/src/lib/features/pokemon-list
```

- [ ] **Step 3: Remove the dead saved-filter state from `PokedexContextStore`**

In `libs/data-access-pokedex/src/lib/pokedex-context.store.ts`:
- Remove the `FilterSet` interface entirely.
- Remove `savedFilters: FilterSet[];` from `PokedexContextState` and from `initialState`.
- Remove the `saveFilter` and `deleteFilter` methods from `withMethods`.

Everything else in the store (theme, language, favorites, recent, activeVersionGroup) is untouched — those are consumed elsewhere and out of scope.

- [ ] **Step 4: Check for a spec file covering the removed store surface**

```bash
grep -n "saveFilter\|deleteFilter\|savedFilters\|FilterSet" libs/data-access-pokedex/src/lib/*.spec.ts
```
If any test references the removed surface, delete just those test cases (not the whole file) — the rest of `PokedexContextStore`'s test coverage stays.

- [ ] **Step 5: Run the full affected test suites**

Run: `npx nx test domain-pokedex` and `npx nx test data-access-pokedex`
Expected: PASS.

- [ ] **Step 6: Build the app**

Run: `npx nx build pokemon-center`
Expected: no errors — this is the strongest signal that nothing still imports the deleted files, since a dangling import fails the build even where a test wouldn't catch it.

- [ ] **Step 7: Commit**

```bash
git add -A
git commit -m "refactor(domain-pokedex): delete the card-grid list, replaced by the master-detail shell

Also removes FilterSet/savedFilters/saveFilter/deleteFilter from
PokedexContextStore -- dead code once pokemon-filters.component.ts,
their only consumer, is gone."
```

---

## Self-Review Notes

- **Spec coverage:** every element of `docs/table-plan.md`'s "Layout: master-detail shell" and "Data" subsections is covered — the GraphQL extension (Task 1), the nested-routing shell with `<router-outlet>` (Tasks 4–5), `rowVariant` → `'marked'` for the selected row (Task 4), full-dex client-side fetch replacing `take: 500` paging (Task 1 + 4), and deletion of the card grid with no `?view=cards` fallback (Task 6, per the explicit no-flag decision from the brainstorming session).
- **Not in this plan, by design:** Phase 5b (cross-entity search) — depends on this plan's shell existing as a stable place to put the search box and Move/Ability filter chips, and gets its own plan once this ships.
- **Known open decision, flagged inline rather than guessed at:** Task 4's Step 5 leaves the exact row-selection mechanism (routerLink-in-cell vs. a click handler) to be resolved during implementation, with a stated preference and reasoning — this is a real implementation-time choice affecting two files together (Task 3's name cell, Task 4's shell), not a placeholder.
- **Type consistency check:** `PokemonRow`, `toPokemonRow`, and `pokemonColumns` are used identically across Tasks 3 and 4 — no renamed field crept in between them.
