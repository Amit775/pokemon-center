# Champions Pokédex Data Table Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the Champions roster page's hand-rolled list/pagination and custom filter sidebar with `pokedex-data-table`, showing base-form Pokémon only.

**Architecture:** Four new small cell components (rendered per-row via `flexRenderComponent`), one new column-definitions module built with `createDataTableColumns<PokedexEntry>()`, and a rewritten `roster.component.ts` that feeds `PokedexStore.entries()` (Mega rows excluded) straight into `pokedex-data-table`, letting the table own all filtering/sorting itself. The custom filter sidebar and its store-level filter pipeline (`pokedex-filter.ts`, `pokedex.store.ts`'s `results()`/`filters()`) are disconnected from this page, not deleted.

**Tech Stack:** Angular 22 (signals, standalone, zoneless), `@tanstack/angular-table` v9 via `pokedex-data-table` (`libs/ui-pokedex`), Jest 30.

**Spec:** `docs/superpowers/specs/2026-09-03-champions-pokedex-data-table-design.md`

## Global Constraints

- No virtualization: omit `virtualScroll` on `pokedex-data-table` (defaults to `false`).
- Base forms only: the table's `[data]` is `store.entries().filter((entry) => !entry.isMega)`. Mega rows/sub-rows are out of scope.
- No master-detail: row navigation stays `routerLink="/champions/pokedex/:slug"` (a separate route), not an embedded detail pane.
- Array-valued filterable columns (Types, Abilities) MUST declare an explicit `getUniqueValues` accessor — without it, TanStack facets the whole array as one opaque key instead of one entry per element.
- Filterable columns MUST set both `meta: { filterVariant: 'set' | 'range' }` (drives the Filters panel UI) AND the matching `filterFn` (`'arrIncludesSome'` for set/array, `'inNumberRange'` for range/numeric) — `meta.filterVariant` alone does not wire up filtering.
- No stat fill-bar visuals this pass — plain right-aligned numbers (`meta: { align: 'end' }`), matching `moves-data-table.component.ts`'s Power/Accuracy/PP columns.
- Sorting/filtering state (`sorting`, `columnFilters`, `globalFilter`) are component-local signals on `RosterComponent`, never read from or written to `PokedexStore`.
- `pokedex.store.ts`, `pokedex-filter.ts`, `pokedex-url.ts` are not modified.
- `champions-compare-tray` stays wired exactly as it is today (reads `PokedexStore.compareEntries()`/`toggleCompare()` independently of the list).
- Never abbreviate "pokedex" (e.g. "pedex") in any file, selector, class, or identifier — grep for it before the final commit (Task 7).
- All new components: `ChangeDetectionStrategy.OnPush`, standalone (`imports: [...]` on the `@Component` decorator, no NgModules).

---

### Task 1: `PokedexNameCellComponent`

**Files:**
- Create: `libs/domain-champions/src/lib/pokedex/pokedex-name-cell.component.ts`
- Test: `libs/domain-champions/src/lib/pokedex/pokedex-name-cell.component.spec.ts`

**Interfaces:**
- Consumes: `PokedexEntry` (from `./pokedex-filter`) — needs `id`, `slug`, `name`, `nationalPokedexNumber`, `types`. `PokedexStore.isOwned(entry: Pick<PokedexEntry, 'slug' | 'megaOfSlug'>): boolean` (from `./pokedex.store`). `spriteSources(id: number)` and `EntityPortraitComponent` (from `@pokemon-center/ui-pokedex`).
- Produces: `PokedexNameCellComponent` with `entry = input.required<PokedexEntry>()`, selector `champions-pokedex-name-cell` — consumed by Task 5's column definitions via `flexRenderComponent`.

- [ ] **Step 1: Write the failing test**

```ts
// libs/domain-champions/src/lib/pokedex/pokedex-name-cell.component.spec.ts
import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { PokedexNameCellComponent } from './pokedex-name-cell.component';
import { PokedexStore } from './pokedex.store';
import type { PokedexEntry } from './pokedex-filter';

const bulbasaur: PokedexEntry = {
	id: 1,
	slug: 'bulbasaur',
	name: 'Bulbasaur',
	nationalPokedexNumber: 1,
	types: ['grass', 'poison'],
	baseStats: { hp: 45, attack: 49, defense: 49, specialAttack: 65, specialDefense: 65, speed: 45, total: 318 },
	isMega: false,
	hasMega: false,
	megaOfSlug: null,
	abilitySlugs: ['overgrow'],
	abilityNames: ['Overgrow'],
};

describe('PokedexNameCellComponent', () => {
	function render(owned: boolean) {
		TestBed.configureTestingModule({
			providers: [provideRouter([]), { provide: PokedexStore, useValue: { isOwned: () => owned } }],
		});

		const fixture = TestBed.createComponent(PokedexNameCellComponent);
		fixture.componentRef.setInput('entry', bulbasaur);
		fixture.detectChanges();
		return fixture;
	}

	it('renders the dex number and name', () => {
		const fixture = render(false);
		expect(fixture.nativeElement.textContent).toContain('#1');
		expect(fixture.nativeElement.textContent).toContain('Bulbasaur');
	});

	it('links to the detail route', () => {
		const fixture = render(false);
		const link: HTMLAnchorElement = fixture.nativeElement.querySelector('a.name');
		expect(link.getAttribute('href')).toBe('/champions/pokedex/bulbasaur');
	});

	it('shows an owned flag when the store reports it owned', () => {
		const fixture = render(true);
		expect(fixture.nativeElement.textContent).toContain('Owned');
	});

	it('shows no owned flag when not owned', () => {
		const fixture = render(false);
		expect(fixture.nativeElement.textContent).not.toContain('Owned');
	});
});
```

- [ ] **Step 2: Run the test to verify it fails**

Run: `npx nx test domain-champions --testFile=pokedex-name-cell.component.spec.ts`
Expected: FAIL — `Cannot find module './pokedex-name-cell.component'`

- [ ] **Step 3: Write the component**

```ts
// libs/domain-champions/src/lib/pokedex/pokedex-name-cell.component.ts
import { ChangeDetectionStrategy, Component, computed, inject, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { EntityPortraitComponent, spriteSources } from '@pokemon-center/ui-pokedex';
import type { PokedexEntry } from './pokedex-filter';
import { PokedexStore } from './pokedex.store';

/** Portrait, dex number, name and an owned flag — one table cell, rendered via `flexRenderComponent`. */
@Component({
	selector: 'champions-pokedex-name-cell',
	changeDetection: ChangeDetectionStrategy.OnPush,
	imports: [EntityPortraitComponent, RouterLink],
	template: `
		<a class="portrait" [routerLink]="link()" [attr.aria-label]="entry().name">
			<pokedex-entity-portrait
				[type]="entry().types[0]"
				[src]="sprite().src"
				[fallbackSrc]="sprite().fallbackSrc"
				[alt]="entry().name"
				[size]="40"
			/>
		</a>
		<a class="name" [routerLink]="link()">
			<span class="no">#{{ entry().nationalPokedexNumber }}</span>
			{{ entry().name }}
			@if (owned()) {
				<span class="flag">Owned</span>
			}
		</a>
	`,
	styles: `
		:host {
			display: flex;
			align-items: center;
			gap: var(--s-2, 0.5rem);
			min-width: 0;
		}
		.portrait {
			display: block;
			flex-shrink: 0;
		}
		.name {
			display: block;
			min-width: 0;
			overflow: hidden;
			text-overflow: ellipsis;
			white-space: nowrap;
			font-weight: 700;
			text-decoration: none;
			color: inherit;
		}
		.name:hover {
			color: var(--accent, #4f6df5);
		}
		.no {
			font-size: var(--fs-xs, 0.75rem);
			color: var(--ink-muted);
			font-variant-numeric: tabular-nums;
			margin-right: 0.25rem;
		}
		.flag {
			margin-left: 0.35rem;
			font-size: 0.6rem;
			text-transform: uppercase;
			letter-spacing: 0.06em;
			color: var(--success, #2e7d52);
			border: 1px solid currentcolor;
			border-radius: var(--r-pill, 999px);
			padding: 0 0.35rem;
		}
	`,
})
export class PokedexNameCellComponent {
	readonly entry = input.required<PokedexEntry>();

	private readonly store = inject(PokedexStore);

	protected readonly owned = computed(() => this.store.isOwned(this.entry()));
	protected readonly link = computed(() => ['/champions/pokedex', this.entry().slug]);

	protected sprite() {
		return spriteSources(this.entry().id);
	}
}
```

- [ ] **Step 4: Run the test to verify it passes**

Run: `npx nx test domain-champions --testFile=pokedex-name-cell.component.spec.ts`
Expected: PASS (4 tests)

- [ ] **Step 5: Commit**

```bash
git add libs/domain-champions/src/lib/pokedex/pokedex-name-cell.component.ts libs/domain-champions/src/lib/pokedex/pokedex-name-cell.component.spec.ts
git commit -m "feat(domain-champions): add PokedexNameCellComponent for the roster table"
```

---

### Task 2: `PokedexAbilityCellComponent`

**Files:**
- Create: `libs/domain-champions/src/lib/pokedex/pokedex-ability-cell.component.ts`
- Test: `libs/domain-champions/src/lib/pokedex/pokedex-ability-cell.component.spec.ts`

**Interfaces:**
- Consumes: `PokedexEntry` (`abilitySlugs: string[]`, `abilityNames: string[]`). `PokedexStore.abilityText(): Map<string, { name: string; effectText: string | null }>`.
- Produces: `PokedexAbilityCellComponent` with `entry = input.required<PokedexEntry>()`, selector `champions-pokedex-ability-cell`.

- [ ] **Step 1: Write the failing test**

```ts
// libs/domain-champions/src/lib/pokedex/pokedex-ability-cell.component.spec.ts
import { TestBed } from '@angular/core/testing';
import { PokedexAbilityCellComponent } from './pokedex-ability-cell.component';
import { PokedexStore } from './pokedex.store';
import type { PokedexEntry } from './pokedex-filter';

const bulbasaur: PokedexEntry = {
	id: 1,
	slug: 'bulbasaur',
	name: 'Bulbasaur',
	nationalPokedexNumber: 1,
	types: ['grass', 'poison'],
	baseStats: { hp: 45, attack: 49, defense: 49, specialAttack: 65, specialDefense: 65, speed: 45, total: 318 },
	isMega: false,
	hasMega: false,
	megaOfSlug: null,
	abilitySlugs: ['overgrow', 'chlorophyll'],
	abilityNames: ['Overgrow', 'Chlorophyll'],
};

describe('PokedexAbilityCellComponent', () => {
	function render() {
		TestBed.configureTestingModule({
			providers: [
				{
					provide: PokedexStore,
					useValue: {
						abilityText: () =>
							new Map([
								['overgrow', { name: 'Overgrow', effectText: 'Boosts Grass moves at low HP.' }],
								['chlorophyll', { name: 'Chlorophyll', effectText: null }],
							]),
					},
				},
			],
		});

		const fixture = TestBed.createComponent(PokedexAbilityCellComponent);
		fixture.componentRef.setInput('entry', bulbasaur);
		fixture.detectChanges();
		return fixture;
	}

	it('renders every ability name', () => {
		const fixture = render();
		expect(fixture.nativeElement.textContent).toContain('Overgrow');
		expect(fixture.nativeElement.textContent).toContain('Chlorophyll');
	});

	it('renders effect text as a tooltip child when the store has it', () => {
		const fixture = render();
		expect(fixture.nativeElement.textContent).toContain('Boosts Grass moves at low HP.');
	});

	it('makes each ability item focusable, for keyboard access to the tooltip', () => {
		const fixture = render();
		const items = fixture.nativeElement.querySelectorAll('li');
		expect(items).toHaveLength(2);
		items.forEach((item: HTMLElement) => expect(item.getAttribute('tabindex')).toBe('0'));
	});
});
```

- [ ] **Step 2: Run the test to verify it fails**

Run: `npx nx test domain-champions --testFile=pokedex-ability-cell.component.spec.ts`
Expected: FAIL — `Cannot find module './pokedex-ability-cell.component'`

- [ ] **Step 3: Write the component**

```ts
// libs/domain-champions/src/lib/pokedex/pokedex-ability-cell.component.ts
import { ChangeDetectionStrategy, Component, computed, inject, input } from '@angular/core';
import type { PokedexEntry } from './pokedex-filter';
import { PokedexStore } from './pokedex.store';

interface AbilityView {
	slug: string;
	name: string;
	effectText: string | null;
}

/** Ability names with a hover/focus tooltip carrying the effect text, ported from the old row card. */
@Component({
	selector: 'champions-pokedex-ability-cell',
	changeDetection: ChangeDetectionStrategy.OnPush,
	template: `
		<ul class="abilities">
			@for (ability of abilities(); track ability.slug) {
				<li tabindex="0">
					<span class="ability-name">{{ ability.name }}</span>
					@if (ability.effectText) {
						<span class="tip">{{ ability.effectText }}</span>
					}
				</li>
			}
		</ul>
	`,
	styles: `
		.abilities {
			list-style: none;
			margin: 0;
			padding: 0;
			display: grid;
			gap: 0.1rem;
			min-width: 0;
		}
		.abilities li {
			position: relative;
			cursor: help;
			width: fit-content;
			max-width: 100%;
			border-bottom: 1px dotted var(--line);
		}
		.ability-name {
			display: block;
			overflow: hidden;
			text-overflow: ellipsis;
			white-space: nowrap;
		}
		.abilities li:focus-visible {
			outline: 2px solid var(--accent, #4f6df5);
			outline-offset: 2px;
		}
		.tip {
			position: absolute;
			top: calc(100% + 0.3rem);
			left: 0;
			z-index: 5;
			display: none;
			width: max-content;
			max-width: 22rem;
			padding: 0.4rem 0.55rem;
			border-radius: var(--r-md, 8px);
			border: 1.5px solid var(--line);
			background: var(--surface);
			box-shadow: var(--shadow-md, 0 6px 18px rgba(0, 0, 0, 0.25));
			font-size: var(--fs-xs, 0.75rem);
			color: var(--ink);
			line-height: 1.45;
			white-space: normal;
		}
		.abilities li:hover .tip,
		.abilities li:focus .tip,
		.abilities li:focus-visible .tip {
			display: block;
		}
	`,
})
export class PokedexAbilityCellComponent {
	readonly entry = input.required<PokedexEntry>();

	private readonly store = inject(PokedexStore);

	protected readonly abilities = computed<AbilityView[]>(() => {
		const text = this.store.abilityText();
		const current = this.entry();

		return current.abilitySlugs.map((slug, index) => ({
			slug,
			name: current.abilityNames[index] ?? text.get(slug)?.name ?? slug,
			effectText: text.get(slug)?.effectText ?? null,
		}));
	});
}
```

- [ ] **Step 4: Run the test to verify it passes**

Run: `npx nx test domain-champions --testFile=pokedex-ability-cell.component.spec.ts`
Expected: PASS (3 tests)

- [ ] **Step 5: Commit**

```bash
git add libs/domain-champions/src/lib/pokedex/pokedex-ability-cell.component.ts libs/domain-champions/src/lib/pokedex/pokedex-ability-cell.component.spec.ts
git commit -m "feat(domain-champions): add PokedexAbilityCellComponent for the roster table"
```

---

### Task 3: `PokedexActionsCellComponent`

**Files:**
- Create: `libs/domain-champions/src/lib/pokedex/pokedex-actions-cell.component.ts`
- Test: `libs/domain-champions/src/lib/pokedex/pokedex-actions-cell.component.spec.ts`

**Interfaces:**
- Consumes: `PokedexEntry` (`slug`, `name`). `PokedexStore.isComparing(slug: string): boolean`, `PokedexStore.toggleCompare(slug: string): void`.
- Produces: `PokedexActionsCellComponent` with `entry = input.required<PokedexEntry>()`, selector `champions-pokedex-actions-cell`.

- [ ] **Step 1: Write the failing test**

```ts
// libs/domain-champions/src/lib/pokedex/pokedex-actions-cell.component.spec.ts
import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { PokedexActionsCellComponent } from './pokedex-actions-cell.component';
import { PokedexStore } from './pokedex.store';
import type { PokedexEntry } from './pokedex-filter';

const bulbasaur: PokedexEntry = {
	id: 1,
	slug: 'bulbasaur',
	name: 'Bulbasaur',
	nationalPokedexNumber: 1,
	types: ['grass', 'poison'],
	baseStats: { hp: 45, attack: 49, defense: 49, specialAttack: 65, specialDefense: 65, speed: 45, total: 318 },
	isMega: false,
	hasMega: false,
	megaOfSlug: null,
	abilitySlugs: ['overgrow'],
	abilityNames: ['Overgrow'],
};

describe('PokedexActionsCellComponent', () => {
	function render(comparing: boolean, toggleCompare = jest.fn()) {
		TestBed.configureTestingModule({
			providers: [provideRouter([]), { provide: PokedexStore, useValue: { isComparing: () => comparing, toggleCompare } }],
		});

		const fixture = TestBed.createComponent(PokedexActionsCellComponent);
		fixture.componentRef.setInput('entry', bulbasaur);
		fixture.detectChanges();
		return fixture;
	}

	it('links Box to the Box route with the species queued to add', () => {
		const fixture = render(false);
		const link: HTMLAnchorElement = fixture.nativeElement.querySelector('a[aria-label*="Box"]');
		expect(link.getAttribute('href')).toBe('/champions/box?add=bulbasaur');
	});

	it('links Sim to the Simulator route with the species queued on the left', () => {
		const fixture = render(false);
		const link: HTMLAnchorElement = fixture.nativeElement.querySelector('a[aria-label*="Simulator"]');
		expect(link.getAttribute('href')).toBe('/champions/simulator?left=bulbasaur');
	});

	it('toggles compare on click, passing this entry\'s slug', () => {
		const toggleCompare = jest.fn();
		const fixture = render(false, toggleCompare);
		const button: HTMLButtonElement = fixture.nativeElement.querySelector('button');

		button.click();

		expect(toggleCompare).toHaveBeenCalledWith('bulbasaur');
	});

	it('marks the compare button pressed when already comparing', () => {
		const fixture = render(true);
		const button: HTMLButtonElement = fixture.nativeElement.querySelector('button');
		expect(button.getAttribute('aria-pressed')).toBe('true');
	});
});
```

- [ ] **Step 2: Run the test to verify it fails**

Run: `npx nx test domain-champions --testFile=pokedex-actions-cell.component.spec.ts`
Expected: FAIL — `Cannot find module './pokedex-actions-cell.component'`

- [ ] **Step 3: Write the component**

```ts
// libs/domain-champions/src/lib/pokedex/pokedex-actions-cell.component.ts
import { ChangeDetectionStrategy, Component, computed, inject, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import type { PokedexEntry } from './pokedex-filter';
import { PokedexStore } from './pokedex.store';

/** Box/Sim links plus the Compare toggle, ported from the old row card's actions block. */
@Component({
	selector: 'champions-pokedex-actions-cell',
	changeDetection: ChangeDetectionStrategy.OnPush,
	imports: [RouterLink],
	template: `
		<div class="actions">
			<a routerLink="/champions/box" [queryParams]="{ add: entry().slug }" [attr.aria-label]="'Add ' + entry().name + ' to your Box'">
				Box
			</a>
			<a
				routerLink="/champions/simulator"
				[queryParams]="{ left: entry().slug }"
				[attr.aria-label]="'Open ' + entry().name + ' in the Simulator'"
			>
				Sim
			</a>
			<button
				type="button"
				[class.on]="comparing()"
				[attr.aria-pressed]="comparing()"
				[attr.aria-label]="(comparing() ? 'Remove ' : 'Add ') + entry().name + ' to the comparison'"
				(click)="store.toggleCompare(entry().slug)"
			>
				Compare
			</button>
		</div>
	`,
	styles: `
		.actions {
			display: flex;
			gap: 0.25rem;
		}
		.actions a,
		.actions button {
			font: inherit;
			font-size: 0.7rem;
			font-weight: 600;
			text-decoration: none;
			cursor: pointer;
			padding: 0.2rem 0.45rem;
			border-radius: var(--r-sm, 4px);
			border: 1.5px solid var(--line);
			background: var(--surface);
			color: var(--ink-muted);
			white-space: nowrap;
		}
		.actions a:hover,
		.actions button:hover {
			border-color: var(--accent, #4f6df5);
			color: var(--accent, #4f6df5);
		}
		.actions button.on {
			background: var(--accent, #4f6df5);
			border-color: var(--accent, #4f6df5);
			color: #fff;
		}
	`,
})
export class PokedexActionsCellComponent {
	readonly entry = input.required<PokedexEntry>();

	protected readonly store = inject(PokedexStore);

	protected readonly comparing = computed(() => this.store.isComparing(this.entry().slug));
}
```

- [ ] **Step 4: Run the test to verify it passes**

Run: `npx nx test domain-champions --testFile=pokedex-actions-cell.component.spec.ts`
Expected: PASS (4 tests)

- [ ] **Step 5: Commit**

```bash
git add libs/domain-champions/src/lib/pokedex/pokedex-actions-cell.component.ts libs/domain-champions/src/lib/pokedex/pokedex-actions-cell.component.spec.ts
git commit -m "feat(domain-champions): add PokedexActionsCellComponent for the roster table"
```

---

### Task 4: `PokedexTypeListCellComponent`

**Files:**
- Create: `libs/domain-champions/src/lib/pokedex/pokedex-type-list-cell.component.ts`
- Test: `libs/domain-champions/src/lib/pokedex/pokedex-type-list-cell.component.spec.ts`

**Interfaces:**
- Consumes: `TypeChipComponent` (from `@pokemon-center/ui-pokedex`), selector `pokedex-type-chip`, takes `[type]` and `size` inputs (confirmed usage in `pokemon-row.component.ts` and `moves-data-table.component.ts`).
- Produces: `PokedexTypeListCellComponent` with `types = input.required<string[]>()`, selector `champions-pokedex-type-list-cell` — renders one chip per type, for the Types column's cell.

- [ ] **Step 1: Write the failing test**

```ts
// libs/domain-champions/src/lib/pokedex/pokedex-type-list-cell.component.spec.ts
import { TestBed } from '@angular/core/testing';
import { PokedexTypeListCellComponent } from './pokedex-type-list-cell.component';

describe('PokedexTypeListCellComponent', () => {
	function render(types: string[]) {
		const fixture = TestBed.createComponent(PokedexTypeListCellComponent);
		fixture.componentRef.setInput('types', types);
		fixture.detectChanges();
		return fixture;
	}

	it('renders one chip per type', () => {
		const fixture = render(['grass', 'poison']);
		expect(fixture.nativeElement.querySelectorAll('pokedex-type-chip')).toHaveLength(2);
	});

	it('renders a single chip for a mono-type entry', () => {
		const fixture = render(['fire']);
		expect(fixture.nativeElement.querySelectorAll('pokedex-type-chip')).toHaveLength(1);
	});
});
```

- [ ] **Step 2: Run the test to verify it fails**

Run: `npx nx test domain-champions --testFile=pokedex-type-list-cell.component.spec.ts`
Expected: FAIL — `Cannot find module './pokedex-type-list-cell.component'`

- [ ] **Step 3: Write the component**

```ts
// libs/domain-champions/src/lib/pokedex/pokedex-type-list-cell.component.ts
import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { TypeChipComponent } from '@pokemon-center/ui-pokedex';

/** Renders every type of an array-valued Types column as a chip. */
@Component({
	selector: 'champions-pokedex-type-list-cell',
	changeDetection: ChangeDetectionStrategy.OnPush,
	imports: [TypeChipComponent],
	template: `
		<div class="chips">
			@for (type of types(); track type) {
				<pokedex-type-chip [type]="type" size="sm" />
			}
		</div>
	`,
	styles: `
		.chips {
			display: flex;
			flex-wrap: wrap;
			gap: 0.25rem;
		}
	`,
})
export class PokedexTypeListCellComponent {
	readonly types = input.required<string[]>();
}
```

- [ ] **Step 4: Run the test to verify it passes**

Run: `npx nx test domain-champions --testFile=pokedex-type-list-cell.component.spec.ts`
Expected: PASS (2 tests)

- [ ] **Step 5: Commit**

```bash
git add libs/domain-champions/src/lib/pokedex/pokedex-type-list-cell.component.ts libs/domain-champions/src/lib/pokedex/pokedex-type-list-cell.component.spec.ts
git commit -m "feat(domain-champions): add PokedexTypeListCellComponent for the roster table"
```

---

### Task 5: Column definitions (`pokedex-columns.ts`)

**Files:**
- Create: `libs/domain-champions/src/lib/pokedex/pokedex-columns.ts`
- Test: `libs/domain-champions/src/lib/pokedex/pokedex-columns.spec.ts`

**Interfaces:**
- Consumes: `createDataTableColumns<TRow>()` and `flexRenderComponent` (`@pokemon-center/ui-pokedex` re-exports `createDataTableColumns`; `flexRenderComponent` comes directly from `@tanstack/angular-table`, same as `moves-data-table.component.ts`). `injectTable`, `dataTableFeatures`, `type DataTableFeatures` for the test host (same pattern as `libs/ui-pokedex/src/lib/data-table/data-table-columns.spec.ts` — that file is not importable from `domain-champions`, so the test host is written fresh here using the same pattern). The four cell components from Tasks 1-4. `PokedexEntry` from `./pokedex-filter`.
- Produces: `pokedexColumns: ColumnDef<DataTableFeatures, PokedexEntry>[]` and `pokedexColumnTracks: Record<string, string>` — both consumed by Task 6's `roster.component.ts`. Column ids: `name`, `types`, `abilities`, `hp`, `attack`, `defense`, `specialAttack`, `specialDefense`, `speed`, `total`, `actions`.

- [ ] **Step 1: Write the failing test**

```ts
// libs/domain-champions/src/lib/pokedex/pokedex-columns.spec.ts
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { injectTable, type Table } from '@tanstack/angular-table';
import { dataTableFeatures, type DataTableFeatures } from '@pokemon-center/ui-pokedex';
import { pokedexColumns } from './pokedex-columns';
import type { PokedexEntry } from './pokedex-filter';

function entry(overrides: Partial<PokedexEntry>): PokedexEntry {
	return {
		id: 1,
		slug: 'bulbasaur',
		name: 'Bulbasaur',
		nationalPokedexNumber: 1,
		types: ['grass', 'poison'],
		baseStats: { hp: 45, attack: 49, defense: 49, specialAttack: 65, specialDefense: 65, speed: 45, total: 318 },
		isMega: false,
		hasMega: false,
		megaOfSlug: null,
		abilitySlugs: ['overgrow'],
		abilityNames: ['Overgrow'],
		...overrides,
	};
}

const rows: PokedexEntry[] = [
	entry({ slug: 'bulbasaur', name: 'Bulbasaur', nationalPokedexNumber: 1, types: ['grass', 'poison'], abilityNames: ['Overgrow'] }),
	entry({
		slug: 'charmander',
		name: 'Charmander',
		nationalPokedexNumber: 4,
		types: ['fire'],
		abilityNames: ['Blaze'],
		baseStats: { hp: 39, attack: 52, defense: 43, specialAttack: 60, specialDefense: 50, speed: 65, total: 309 },
	}),
	entry({
		slug: 'squirtle',
		name: 'Squirtle',
		nationalPokedexNumber: 7,
		types: ['water'],
		abilityNames: ['Torrent'],
		baseStats: { hp: 44, attack: 48, defense: 65, specialAttack: 50, specialDefense: 64, speed: 43, total: 314 },
	}),
];

/** No template — drives the table instance directly, same pattern as ui-pokedex's own column tests. */
@Component({ selector: 'pokedex-columns-test-host', changeDetection: ChangeDetectionStrategy.OnPush, template: '' })
class ColumnsTestHostComponent {
	readonly table = injectTable(() => ({ features: dataTableFeatures, columns: pokedexColumns, data: rows }));
}

describe('pokedexColumns', () => {
	let fixture: ComponentFixture<ColumnsTestHostComponent>;
	let table: Table<DataTableFeatures, PokedexEntry>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({ imports: [ColumnsTestHostComponent] }).compileComponents();
		fixture = TestBed.createComponent(ColumnsTestHostComponent);
		fixture.detectChanges();
		table = fixture.componentInstance.table;
	});

	it('filters rows whose Types include at least one selected type', () => {
		table.setColumnFilters([{ id: 'types', value: ['fire'] }]);
		fixture.detectChanges();

		expect(table.getFilteredRowModel().rows.map((row) => row.original.slug)).toEqual(['charmander']);
	});

	it('facets Types per element, not per array reference', () => {
		const facets = table.getColumn('types')?.getFacetedUniqueValues();

		expect(facets?.get('grass')).toBe(1);
		expect(facets?.get('poison')).toBe(1);
		expect(facets?.get('fire')).toBe(1);
		expect(facets?.get('water')).toBe(1);
	});

	it('filters rows whose Abilities include at least one selected ability', () => {
		table.setColumnFilters([{ id: 'abilities', value: ['Torrent'] }]);
		fixture.detectChanges();

		expect(table.getFilteredRowModel().rows.map((row) => row.original.slug)).toEqual(['squirtle']);
	});

	it('filters rows whose Speed falls within an inclusive range', () => {
		table.setColumnFilters([{ id: 'speed', value: [60, 70] }]);
		fixture.detectChanges();

		expect(table.getFilteredRowModel().rows.map((row) => row.original.slug)).toEqual(['charmander']);
	});

	it('sorts by name alphabetically', () => {
		table.setSorting([{ id: 'name', desc: false }]);
		fixture.detectChanges();

		expect(table.getRowModel().rows.map((row) => row.original.name)).toEqual(['Bulbasaur', 'Charmander', 'Squirtle']);
	});

	it('has an actions column with no filter variant', () => {
		const column = table.getColumn('actions');
		expect(column?.columnDef.meta?.filterVariant).toBeUndefined();
	});
});
```

- [ ] **Step 2: Run the test to verify it fails**

Run: `npx nx test domain-champions --testFile=pokedex-columns.spec.ts`
Expected: FAIL — `Cannot find module './pokedex-columns'`

- [ ] **Step 3: Write the column definitions**

```ts
// libs/domain-champions/src/lib/pokedex/pokedex-columns.ts
import { flexRenderComponent } from '@tanstack/angular-table';
import { createDataTableColumns } from '@pokemon-center/ui-pokedex';
import type { PokedexEntry } from './pokedex-filter';
import { PokedexAbilityCellComponent } from './pokedex-ability-cell.component';
import { PokedexActionsCellComponent } from './pokedex-actions-cell.component';
import { PokedexNameCellComponent } from './pokedex-name-cell.component';
import { PokedexTypeListCellComponent } from './pokedex-type-list-cell.component';

const columnHelper = createDataTableColumns<PokedexEntry>();

/**
 * Column definitions for the Champions roster table.
 *
 * Module scope, not a component field — `injectTable` memoises on `table.options.columns` by
 * identity, so a fresh array on every change detection would rebuild every column, header and
 * cell.
 */
export const pokedexColumns = columnHelper.columns([
	columnHelper.accessor('name', {
		header: 'Pokémon',
		sortFn: 'alphanumeric',
		cell: (context) => flexRenderComponent(PokedexNameCellComponent, { inputs: { entry: context.row.original } }),
	}),

	columnHelper.accessor('types', {
		id: 'types',
		header: 'Types',
		meta: { filterVariant: 'set' },
		filterFn: 'arrIncludesSome',
		// Without this, an array-valued column facets by array reference (one opaque key per row)
		// instead of one entry per type.
		getUniqueValues: (row) => row.types,
		cell: (context) => flexRenderComponent(PokedexTypeListCellComponent, { inputs: { types: context.getValue() } }),
	}),

	columnHelper.accessor('abilityNames', {
		id: 'abilities',
		header: 'Abilities',
		meta: { filterVariant: 'set' },
		filterFn: 'arrIncludesSome',
		getUniqueValues: (row) => row.abilityNames,
		// The cell needs the full entry (slugs + names) to look up effect text, not just the names
		// this column facets on.
		cell: (context) => flexRenderComponent(PokedexAbilityCellComponent, { inputs: { entry: context.row.original } }),
	}),

	columnHelper.accessor((entry) => entry.baseStats.hp, {
		id: 'hp',
		header: 'HP',
		sortFn: 'basic',
		meta: { align: 'end', filterVariant: 'range' },
		filterFn: 'inNumberRange',
	}),

	columnHelper.accessor((entry) => entry.baseStats.attack, {
		id: 'attack',
		header: 'Attack',
		sortFn: 'basic',
		meta: { align: 'end', filterVariant: 'range' },
		filterFn: 'inNumberRange',
	}),

	columnHelper.accessor((entry) => entry.baseStats.defense, {
		id: 'defense',
		header: 'Defense',
		sortFn: 'basic',
		meta: { align: 'end', filterVariant: 'range' },
		filterFn: 'inNumberRange',
	}),

	columnHelper.accessor((entry) => entry.baseStats.specialAttack, {
		id: 'specialAttack',
		header: 'Sp. Atk',
		sortFn: 'basic',
		meta: { align: 'end', filterVariant: 'range' },
		filterFn: 'inNumberRange',
	}),

	columnHelper.accessor((entry) => entry.baseStats.specialDefense, {
		id: 'specialDefense',
		header: 'Sp. Def',
		sortFn: 'basic',
		meta: { align: 'end', filterVariant: 'range' },
		filterFn: 'inNumberRange',
	}),

	columnHelper.accessor((entry) => entry.baseStats.speed, {
		id: 'speed',
		header: 'Speed',
		sortFn: 'basic',
		meta: { align: 'end', filterVariant: 'range' },
		filterFn: 'inNumberRange',
	}),

	columnHelper.accessor((entry) => entry.baseStats.total, {
		id: 'total',
		header: 'Total',
		sortFn: 'basic',
		meta: { align: 'end', filterVariant: 'range' },
		filterFn: 'inNumberRange',
	}),

	columnHelper.display({
		id: 'actions',
		header: 'Actions',
		cell: (context) => flexRenderComponent(PokedexActionsCellComponent, { inputs: { entry: context.row.original } }),
	}),
]);

/**
 * Explicit tracks: content-based tracks (`auto`, `fit-content`, …) resolve per row rather than per
 * column, since each row is its own grid container — see `pokedex-data-table`'s `columnTracks` doc.
 */
export const pokedexColumnTracks: Readonly<Record<string, string>> = {
	name: 'minmax(12rem, 1.4fr)',
	types: '8rem',
	abilities: 'minmax(8rem, 1fr)',
	hp: '4rem',
	attack: '4rem',
	defense: '4rem',
	specialAttack: '4rem',
	specialDefense: '4rem',
	speed: '4rem',
	total: '4.5rem',
	actions: '9rem',
};
```

- [ ] **Step 4: Export `dataTableFeatures` and `DataTableFeatures` from `@pokemon-center/ui-pokedex` for the test**

Check `libs/ui-pokedex/src/index.ts` — `dataTableFeatures` and `DataTableFeatures` are defined in `data-table-columns.ts`, which is already re-exported in full (`export * from './lib/data-table/data-table-columns';`). No change needed here; this step is a verification, not an edit. Confirm by running the test in Step 5 — if it fails on an unresolved import instead of the expected assertions, that re-export is missing and must be added to `libs/ui-pokedex/src/index.ts`.

- [ ] **Step 5: Run the test to verify it passes**

Run: `npx nx test domain-champions --testFile=pokedex-columns.spec.ts`
Expected: PASS (6 tests)

- [ ] **Step 6: Commit**

```bash
git add libs/domain-champions/src/lib/pokedex/pokedex-columns.ts libs/domain-champions/src/lib/pokedex/pokedex-columns.spec.ts
git commit -m "feat(domain-champions): add roster table column definitions"
```

---

### Task 6: Rewire `roster.component.ts`

**Files:**
- Modify: `libs/domain-champions/src/lib/pokedex/roster.component.ts`
- Create: `libs/domain-champions/src/lib/pokedex/roster.component.spec.ts` (none exists today)

**Interfaces:**
- Consumes: `pokedexColumns`, `pokedexColumnTracks` (Task 5). `UiDataTableComponent`, `UiSkeletonComponent`, `type ColumnFiltersState`, `type SortingState` (`@pokemon-center/ui-pokedex`). `PokedexStore.entries()`, `.isLoading()`, `.error()` (unchanged, already exist).
- Produces: `RosterComponent` (default export, selector `champions-roster`) with no public API consumed elsewhere — it is a routed page.

- [ ] **Step 1: Write the failing test**

```ts
// libs/domain-champions/src/lib/pokedex/roster.component.spec.ts
import { signal } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { RouterTestingHarness } from '@angular/router/testing';
import RosterComponent from './roster.component';
import { PokedexStore } from './pokedex.store';
import type { PokedexEntry } from './pokedex-filter';

function entry(overrides: Partial<PokedexEntry>): PokedexEntry {
	return {
		id: 1,
		slug: 'bulbasaur',
		name: 'Bulbasaur',
		nationalPokedexNumber: 1,
		types: ['grass', 'poison'],
		baseStats: { hp: 45, attack: 49, defense: 49, specialAttack: 65, specialDefense: 65, speed: 45, total: 318 },
		isMega: false,
		hasMega: false,
		megaOfSlug: null,
		abilitySlugs: ['overgrow'],
		abilityNames: ['Overgrow'],
		...overrides,
	};
}

const baseEntries: PokedexEntry[] = [
	entry({ slug: 'bulbasaur', name: 'Bulbasaur', nationalPokedexNumber: 1 }),
	entry({ slug: 'charmander', name: 'Charmander', nationalPokedexNumber: 4, types: ['fire'] }),
];

const megaEntry: PokedexEntry = entry({
	slug: 'charizard-mega-x',
	name: 'Mega Charizard X',
	nationalPokedexNumber: 6,
	isMega: true,
	megaOfSlug: 'charizard',
	types: ['fire', 'dragon'],
});

describe('RosterComponent', () => {
	// No stub needed for `<champions-compare-tray>`: the real CompareTrayComponent reads
	// `PokedexStore.compareEntries()` directly, and `@if (entries().length > 0)` renders nothing
	// for the empty array below — so it participates harmlessly rather than needing an override.
	function render(options: { entries: PokedexEntry[]; isLoading?: boolean; error?: unknown }) {
		const storeStub = {
			entries: signal(options.entries),
			isLoading: signal(options.isLoading ?? false),
			error: signal(options.error ?? null),
			isOwned: () => false,
			isComparing: () => false,
			toggleCompare: jest.fn(),
			abilityText: () => new Map(),
			compareEntries: signal([]),
		};

		TestBed.configureTestingModule({
			providers: [provideRouter([{ path: 'champions/pokedex', component: RosterComponent }]), { provide: PokedexStore, useValue: storeStub }],
		});

		return RouterTestingHarness.create('/champions/pokedex');
	}

	it('renders every base-form entry as a table row', async () => {
		const harness = await render({ entries: baseEntries });
		harness.fixture.detectChanges();

		const rows = (harness.routeNativeElement as HTMLElement).querySelectorAll('[role="row"]:not(.header-row)');
		expect(rows).toHaveLength(2);
		expect((harness.routeNativeElement as HTMLElement).textContent).toContain('Bulbasaur');
		expect((harness.routeNativeElement as HTMLElement).textContent).toContain('Charmander');
	});

	it('excludes Mega entries from the table', async () => {
		const harness = await render({ entries: [...baseEntries, megaEntry] });
		harness.fixture.detectChanges();

		expect((harness.routeNativeElement as HTMLElement).textContent).not.toContain('Mega Charizard X');
	});

	it('shows a loading skeleton while the store is loading', async () => {
		const harness = await render({ entries: [], isLoading: true });
		harness.fixture.detectChanges();

		expect((harness.routeNativeElement as HTMLElement).querySelector('pokedex-skeleton')).not.toBeNull();
	});

	it('shows the API error message when the store reports an error', async () => {
		const harness = await render({ entries: [], error: new Error('offline') });
		harness.fixture.detectChanges();

		expect((harness.routeNativeElement as HTMLElement).textContent).toContain('champions-service');
	});

	it('does not render the removed filter sidebar', async () => {
		const harness = await render({ entries: baseEntries });
		harness.fixture.detectChanges();

		expect((harness.routeNativeElement as HTMLElement).querySelector('champions-pokedex-filters')).toBeNull();
	});
});
```

- [ ] **Step 2: Run the test to verify it fails**

Run: `npx nx test domain-champions --testFile=roster.component.spec.ts`
Expected: FAIL — the current template still renders `<champions-pokedex-filters>` and a hand-rolled `<ul>`, and `PokedexStore` still expects `results()`/`relaxations()`/`hasActiveFilters()` on the stub, which this stub does not provide, so `store.results is not a function` (or similar) is expected here before Step 3 rewrites the component.

- [ ] **Step 3: Rewrite the component**

```ts
// libs/domain-champions/src/lib/pokedex/roster.component.ts
import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import {
	UiDataTableComponent,
	UiSkeletonComponent,
	type ColumnFiltersState,
	type SortingState,
} from '@pokemon-center/ui-pokedex';
import { CompareTrayComponent } from './compare-tray.component';
import { pokedexColumns, pokedexColumnTracks } from './pokedex-columns';
import type { PokedexEntry } from './pokedex-filter';
import { PokedexStore } from './pokedex.store';

/**
 * The Champions Pokédex.
 *
 * Base forms only for now — Mega rows are a separate, not-yet-designed follow-up (sub-row vs.
 * `rowExpandingFeature` vs. their own row; see docs/superpowers/specs/2026-09-03-champions-pokedex-data-table-design.md).
 *
 * Filtering and sorting are entirely owned by `pokedex-data-table`'s own column state, not by
 * `PokedexStore`. The richer custom filter sidebar this replaces (type/matchup pickers, stat-range
 * sliders, counter search, saved sets, move-learner search, owned-only) is deferred to a follow-up
 * task that extends the generic Filters panel — see the spec's "Out of scope" section.
 */
@Component({
	selector: 'champions-roster',
	changeDetection: ChangeDetectionStrategy.OnPush,
	imports: [CompareTrayComponent, RouterLink, UiDataTableComponent, UiSkeletonComponent],
	template: `
		<header class="masthead">
			<h1>Pokédex</h1>
			<a routerLink="/champions/pokedex/changes">What Champions changed →</a>
		</header>

		@if (store.isLoading()) {
			<pokedex-skeleton height="18rem" />
		} @else if (store.error()) {
			<p class="empty">
				The Champions API is not answering on <code>:3001</code>. Start it with
				<code>nx serve champions-service</code>.
			</p>
		} @else {
			<pokedex-data-table
				[data]="entries()"
				[columns]="columns"
				[columnTracks]="columnTracks"
				[(sorting)]="sorting"
				[(columnFilters)]="columnFilters"
				[(globalFilter)]="globalFilter"
				label="Champions Pokédex"
				emptyLabel="Nothing legal matches those filters."
			/>
		}

		<champions-compare-tray />
	`,
	styles: `
		:host {
			display: block;
			padding: var(--s-5, 1.5rem);
			max-width: 84rem;
			margin-inline: auto;
		}

		.masthead {
			display: flex;
			justify-content: space-between;
			align-items: baseline;
			gap: var(--s-4, 1rem);
			flex-wrap: wrap;
			margin-bottom: var(--s-4, 1rem);
		}

		h1 {
			margin: 0;
			font-size: var(--fs-2xl, 2rem);
			letter-spacing: -0.02em;
		}

		.masthead a {
			font-size: var(--fs-sm, 0.875rem);
			color: var(--accent, #4f6df5);
			text-decoration: none;
			padding: 0.35rem 0.7rem;
			border: 1.5px solid var(--line);
			border-radius: var(--r-md, 8px);
			white-space: nowrap;
		}

		.masthead a:hover {
			border-color: var(--accent, #4f6df5);
		}

		.empty {
			color: var(--ink-muted);
			line-height: 1.6;
		}

		code {
			font-family: ui-monospace, monospace;
			font-size: 0.9em;
			background: var(--surface-sunken, rgba(128, 128, 128, 0.12));
			padding: 0.1em 0.35em;
			border-radius: var(--r-sm, 4px);
		}
	`,
})
export default class RosterComponent {
	protected readonly store = inject(PokedexStore);

	/** Base forms only — Mega rows are excluded from this pass entirely, not merely hidden. */
	protected readonly entries = computed<PokedexEntry[]>(() => this.store.entries().filter((entry) => !entry.isMega));

	protected readonly columns = pokedexColumns;
	protected readonly columnTracks = pokedexColumnTracks;

	/** Component-local, not the store: this table owns its own filter/sort state entirely. */
	protected readonly sorting = signal<SortingState>([]);
	protected readonly columnFilters = signal<ColumnFiltersState>([]);
	protected readonly globalFilter = signal('');
}
```

- [ ] **Step 4: Run the test to verify it passes**

Run: `npx nx test domain-champions --testFile=roster.component.spec.ts`
Expected: PASS (5 tests)

- [ ] **Step 5: Commit**

```bash
git add libs/domain-champions/src/lib/pokedex/roster.component.ts libs/domain-champions/src/lib/pokedex/roster.component.spec.ts
git commit -m "refactor(domain-champions): replace the roster list and filter sidebar with the data table"
```

---

### Task 7: Delete dead files and final sanity checks

**Files:**
- Delete: `libs/domain-champions/src/lib/pokedex/pokedex-filters.component.ts`
- Delete: `libs/domain-champions/src/lib/pokedex/pokemon-row.component.ts`

**Interfaces:**
- Consumes: nothing new.
- Produces: nothing new — this task only removes now-dead code and verifies the whole domain still builds, lints, and tests clean.

- [ ] **Step 1: Confirm nothing else references the two files being deleted**

Run: `npx nx run-many --targets=lint --projects=domain-champions --skip-nx-cache` is not the right check here — use a direct search instead:

Run (PowerShell): `Select-String -Path "libs/domain-champions/src/**/*.ts" -Pattern "PokemonRowComponent|champions-pokemon-row|PokedexFiltersComponent|champions-pokedex-filters" -Exclude "pokemon-row.component.ts","pokedex-filters.component.ts"`

Expected: no matches (Task 6 already removed the only two references, inside `roster.component.ts`).

- [ ] **Step 2: Delete the two dead files**

```bash
git rm libs/domain-champions/src/lib/pokedex/pokedex-filters.component.ts
git rm libs/domain-champions/src/lib/pokedex/pokemon-row.component.ts
```

- [ ] **Step 3: Grep the whole domain for the "pedex" abbreviation typo**

Run: `grep -rn "pedex" libs/domain-champions/src` (or the `Grep` tool with pattern `pedex` over `libs/domain-champions/src`)

Expected: no matches. If any appear, they are typos introduced during this plan's implementation (the correct name is always `pokedex`) — fix them before continuing.

- [ ] **Step 4: Run the full domain-champions test suite**

Run: `npx nx test domain-champions --skip-nx-cache`
Expected: all tests pass, including every spec added in Tasks 1-6.

- [ ] **Step 5: Run lint and a production build**

Run: `npx nx lint domain-champions --skip-nx-cache`
Run: `npx nx build pokemon-center --skip-nx-cache` (`pokemon-center` is the only app that imports `domain-champions`, via `apps/pokemon-center/src/app/app.routes.ts`)
Expected: both green.

- [ ] **Step 6: Commit**

```bash
git add -A
git commit -m "chore(domain-champions): delete the row card and filter sidebar, dead after the table swap"
```
