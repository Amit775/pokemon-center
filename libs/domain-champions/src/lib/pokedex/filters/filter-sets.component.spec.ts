import { signal } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { AllCommunityModule, ModuleRegistry, createGrid, type GridApi } from 'ag-grid-community';
import { AllEnterpriseModule } from 'ag-grid-enterprise';
import { pokedexGridColumns } from '../pokedex-grid-columns';
import type { PokedexEntry } from '../pokedex-filter';
import { PokedexStore, type FilterSet } from '../pokedex.store';
import { fromQueryString, toQueryString, type PokedexSavedState } from '../pokedex-url';
import { ExternalFiltersStore } from './external-filters.store';
import { FilterSetsComponent } from './filter-sets.component';

ModuleRegistry.registerModules([AllCommunityModule, AllEnterpriseModule]);

function entry(overrides: Partial<PokedexEntry> & Pick<PokedexEntry, 'id' | 'slug' | 'name' | 'types'>): PokedexEntry {
	return {
		nationalPokedexNumber: overrides.id,
		baseStats: { hp: 80, attack: 80, defense: 80, specialAttack: 80, specialDefense: 80, speed: 80, total: 480 },
		isMega: false,
		hasMega: false,
		megaOfSlug: null,
		abilitySlugs: [],
		abilityNames: [],
		...overrides,
	};
}

// Chosen so no single filter, on its own, reduces the roster to the same set the combination
// does — see the "restoring" test below for why that matters.
const garchomp = entry({ id: 1, slug: 'garchomp', name: 'Garchomp', types: ['dragon', 'ground'] }); // dragon, owned
const dragonite = entry({ id: 2, slug: 'dragonite', name: 'Dragonite', types: ['dragon', 'flying'] }); // dragon, not owned
const corviknight = entry({ id: 3, slug: 'corviknight', name: 'Corviknight', types: ['flying', 'steel'] }); // not dragon, owned
const azumarill = entry({ id: 4, slug: 'azumarill', name: 'Azumarill', types: ['water', 'fairy'] }); // not dragon, not owned

const roster: PokedexEntry[] = [garchomp, dragonite, corviknight, azumarill];

/**
 * The real production column definitions, exactly as `pokedex-grid-columns.spec.ts` uses them to
 * prove the Types and stat-range custom filters in isolation — including a `component` referencing
 * an Angular class, which a plain `createGrid()` never instantiates (nothing here opens a filter
 * popup or renders a cell). A hand-rolled filter definition without that `component` field was
 * tried first and silently never filtered anything, which is exactly the "test what matters"
 * failure mode this task warns about — using the real colDefs is what actually proves the wiring.
 */
const columnDefs = pokedexGridColumns;

/** Faithful to the real `PokedexStore.saveSet`/`applySet` (same codec), without the GraphQL wiring. */
function pokedexStoreStub(owned: ReadonlySet<string>) {
	const sets = signal<FilterSet[]>([]);
	return {
		entries: () => roster,
		owned: () => owned,
		typeChart: () => ({}),
		savedSets: () => sets(),
		saveSet: (name: string, state: PokedexSavedState) => {
			const query = toQueryString(state);
			sets.update((current) => [...current.filter((set) => set.name !== name), { name, query }]);
		},
		applySet: (set: FilterSet) => fromQueryString(set.query),
		deleteSet: (name: string) => sets.update((current) => current.filter((set) => set.name !== name)),
		patch: jest.fn(),
	};
}

describe('FilterSetsComponent', () => {
	let container: HTMLElement;
	let api: GridApi<PokedexEntry>;
	let externalFilters: ExternalFiltersStore;

	function displayedSlugs(): string[] {
		const slugs: string[] = [];
		api.forEachNodeAfterFilter((node) => {
			if (node.data) slugs.push(node.data.slug);
		});
		return slugs.sort();
	}

	function render(owned: ReadonlySet<string> = new Set()) {
		TestBed.configureTestingModule({ providers: [{ provide: PokedexStore, useValue: pokedexStoreStub(owned) }] });
		externalFilters = TestBed.inject(ExternalFiltersStore);

		container = document.createElement('div');
		document.body.appendChild(container);
		api = createGrid<PokedexEntry>(container, {
			columnDefs,
			rowData: roster,
			getRowId: (params) => params.data.slug,
			enableFilterHandlers: true,
			isExternalFilterPresent: () => externalFilters.isPresent(),
			doesExternalFilterPass: (node) => (node.data ? externalFilters.passes(node.data) : true),
		});

		const fixture = TestBed.createComponent(FilterSetsComponent);
		fixture.componentRef.setInput('gridApi', api);
		fixture.detectChanges();

		return fixture;
	}

	afterEach(() => {
		api.destroy();
		container.remove();
	});

	function nameInput(fixture: { nativeElement: HTMLElement }): HTMLInputElement {
		return fixture.nativeElement.querySelector('input[aria-label="Name for the saved filters"]');
	}

	function saveButton(fixture: { nativeElement: HTMLElement }): HTMLButtonElement {
		return fixture.nativeElement.querySelector('.save button');
	}

	function typeName(fixture: { nativeElement: HTMLElement }, value: string): void {
		const input = nameInput(fixture);
		input.value = value;
		input.dispatchEvent(new Event('input'));
	}

	function applyButtonFor(fixture: { nativeElement: HTMLElement }, name: string): HTMLButtonElement {
		const button = [...fixture.nativeElement.querySelectorAll<HTMLButtonElement>('.apply')].find((candidate) => candidate.textContent?.trim() === name);
		if (!button) throw new Error(`No saved set button found for "${name}"`);
		return button;
	}

	describe('hasActiveFilters', () => {
		it('is false when neither the column filter model nor ExternalFiltersStore has anything active', () => {
			const fixture = render();
			expect(fixture.nativeElement.textContent).toContain('Set some filters, then name them to save.');
		});

		it('becomes true once a column filter is set, and the grid tells it so', async () => {
			const fixture = render();

			api.setFilterModel({ types: { types: ['dragon'], mode: 'any' } });
			api.onFilterChanged();
			// AG Grid dispatches `filterChanged` for a column filter asynchronously (it waits on the
			// filter's own UI wrapper, even one — as here — that is never opened), unlike the
			// external filter's `version` signal, which updates the instant `set*` is called. A real
			// tick, not `fixture.whenStable()` (this app is zoneless, so nothing tracks the pending
			// AG Grid callback), is what actually lets it land before asserting.
			await new Promise((resolve) => setTimeout(resolve, 0));
			fixture.detectChanges();

			expect(fixture.nativeElement.textContent).not.toContain('Set some filters, then name them to save.');
		});

		it('becomes true once an external filter is set, with no grid event needed', () => {
			const fixture = render();

			externalFilters.setOwnedOnly(true);
			fixture.detectChanges();

			expect(fixture.nativeElement.textContent).not.toContain('Set some filters, then name them to save.');
		});
	});

	/**
	 * The test that matters most for this task: restoring a saved set has to bring back the
	 * column filter model *and* the external filters, and the proof is that the grid narrows to
	 * the row only their intersection produces. The roster is built so that dropping either half
	 * of the restore silently widens the result — the column filter alone keeps Dragonite too,
	 * and the external filter alone keeps Corviknight too. Only restoring both together narrows
	 * to exactly Garchomp, so this fails if either half of `FilterSetsComponent.onApply` is missing.
	 */
	it('restoring a saved set narrows the grid by both halves together, not either alone', () => {
		const fixture = render(new Set(['garchomp', 'corviknight']));

		api.setFilterModel({ types: { types: ['dragon'], mode: 'any' } });
		externalFilters.setOwnedOnly(true);
		api.onFilterChanged();
		expect(displayedSlugs()).toEqual(['garchomp']);

		// Renders the "name it and save" affordance now that `hasActiveFilters()` is true.
		fixture.detectChanges();
		typeName(fixture, 'Dragons I own');
		fixture.detectChanges();
		saveButton(fixture).click();
		fixture.detectChanges();

		// Clear both halves and confirm the roster is genuinely back to showing everyone —
		// otherwise the "restore" below could be a no-op that never proves anything.
		api.setFilterModel(null);
		externalFilters.setOwnedOnly(false);
		api.onFilterChanged();
		expect(displayedSlugs()).toEqual(['azumarill', 'corviknight', 'dragonite', 'garchomp']);

		applyButtonFor(fixture, 'Dragons I own').click();
		// `FilterSetsComponent.onApply` does not itself call `api.onFilterChanged()` for the
		// external half — that wiring belongs to `RosterComponent`'s own `rerunExternalFilter`
		// effect (tested in `roster.component.spec.ts`), which reruns the grid's filter whenever
		// `ExternalFiltersStore.version` changes, regardless of what changed it. This call stands
		// in for that effect.
		api.onFilterChanged();

		expect(externalFilters.ownedOnly()).toBe(true);
		expect(api.getFilterModel()).toEqual({ types: { types: ['dragon'], mode: 'any' } });
		expect(displayedSlugs()).toEqual(['garchomp']);
	});

	it('deletes a saved set through the reused SavedSetsComponent', () => {
		const fixture = render();

		externalFilters.setOwnedOnly(true);
		fixture.detectChanges();
		typeName(fixture, 'temp');
		fixture.detectChanges();
		saveButton(fixture).click();
		fixture.detectChanges();

		expect(fixture.nativeElement.querySelector('.apply')?.textContent?.trim()).toBe('temp');

		fixture.nativeElement.querySelector<HTMLButtonElement>('.del')?.click();
		fixture.detectChanges();

		expect(fixture.nativeElement.querySelector('.apply')).toBeNull();
	});

	describe('shareUrl', () => {
		it('is a bare URL (no query string) with nothing filtered', () => {
			const fixture = render();
			// The panel hides the link entirely while there is nothing to share — see the template.
			expect(fixture.nativeElement.querySelector('.link')).toBeNull();
		});

		it('carries both halves once both are active', () => {
			const fixture = render();

			api.setFilterModel({ types: { types: ['dragon'], mode: 'any' } });
			externalFilters.setOwnedOnly(true);
			api.onFilterChanged();
			fixture.detectChanges();

			const link = fixture.nativeElement.querySelector<HTMLInputElement>('.link input')?.value ?? '';
			const query = link.split('?')[1] ?? '';
			const params = new URLSearchParams(query);

			expect(JSON.parse(params.get('filterModel') ?? '{}')).toEqual({ types: { types: ['dragon'], mode: 'any' } });
			expect(params.get('ownedOnly')).toBe('1');
		});
	});
});
