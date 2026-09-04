import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { provideRouter, Router } from '@angular/router';
import { AllCommunityModule, ModuleRegistry, createGrid, type GridApi } from 'ag-grid-community';
import { AllEnterpriseModule } from 'ag-grid-enterprise';
import type { TypeChart } from '@pokemon-center/champions-engine';
import { ExternalFiltersStore } from './filters/external-filters.store';
import type { PokedexEntry } from './pokedex-filter';
import { PokedexStore } from './pokedex.store';
import PokemonDetailComponent from './pokemon-detail.component';

ModuleRegistry.registerModules([AllCommunityModule, AllEnterpriseModule]);

/**
 * The regression this file exists to catch: `pokemon-detail.component.ts`'s "show all counters"
 * action used to write `PokedexStore.patch({ counterOf: slug })` — the old filter sidebar's state,
 * which the roster grid has not read since Task 12 moved cross-cutting filters onto
 * `ExternalFiltersStore`. That left the button navigating to a roster that silently ignored it,
 * exactly the regression the earlier TanStack migration introduced. This proves the fix holds
 * through the same seam that broke it: a real navigation-adjacent handoff between two components
 * via the `providedIn: 'root'` store, ending in a real AG Grid actually narrowing.
 */

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

const garchomp = entry({ id: 1, slug: 'garchomp', name: 'Garchomp', types: ['dragon', 'ground'] });
const corviknight = entry({ id: 2, slug: 'corviknight', name: 'Corviknight', types: ['flying', 'steel'] });
const azumarill = entry({ id: 3, slug: 'azumarill', name: 'Azumarill', types: ['water', 'fairy'] });
const roster: PokedexEntry[] = [garchomp, corviknight, azumarill];

/** Only the rows these tests need; `typeEffectiveness` treats a missing pairing as neutral (1). */
const chart: TypeChart = {
	dragon: { dragon: 2, steel: 0.5, fairy: 0, water: 1, flying: 1, ghost: 1, ground: 1, fire: 1 },
	fairy: { dragon: 2, steel: 0.5, dark: 2, fire: 1, water: 1, flying: 1, ghost: 1, ground: 1 },
	ground: { steel: 2, fire: 2, flying: 0, dragon: 1, fairy: 1, ghost: 1, water: 1 },
};

function pokedexStub() {
	return {
		entries: () => roster,
		typeChart: () => chart,
		isLoading: () => false,
		neighbours: () => ({ prev: null, next: null }),
		isOwned: () => false,
	};
}

function renderDetail() {
	TestBed.configureTestingModule({
		providers: [provideHttpClient(), provideHttpClientTesting(), provideRouter([]), { provide: PokedexStore, useValue: pokedexStub() }],
	});

	const router = TestBed.inject(Router);
	jest.spyOn(router, 'navigate').mockResolvedValue(true);

	const fixture = TestBed.createComponent(PokemonDetailComponent);
	fixture.componentRef.setInput('slug', 'garchomp');
	fixture.detectChanges();

	return { fixture, router, externalFilters: TestBed.inject(ExternalFiltersStore) };
}

/** `showAllCounters` is `protected` — the same access every rendering-focused spec in this repo avoids by clicking a button; here it is invoked directly because the button lives behind an `@defer` block gated on `showMatchups`, a presentation detail this test is not about. */
function triggerShowAllCounters(component: PokemonDetailComponent, slug: string): void {
	(component as unknown as { showAllCounters(slug: string): void }).showAllCounters(slug);
}

describe('PokemonDetailComponent — the cross-page "answers to X" handoff', () => {
	it('points ExternalFiltersStore at the target (not the retired PokedexStore field) and navigates to the roster', () => {
		const { fixture, router, externalFilters } = renderDetail();
		expect(externalFilters.counterOf()).toBeNull();

		triggerShowAllCounters(fixture.componentInstance, 'garchomp');

		expect(externalFilters.counterOf()).toBe('garchomp');
		expect(router.navigate).toHaveBeenCalledWith(['/champions/pokedex']);
	});

	it('the target set from the detail page survives the navigation and actually narrows the roster grid', () => {
		const { fixture, externalFilters } = renderDetail();

		// The detail page's action — the same call the "See every answer" button makes.
		triggerShowAllCounters(fixture.componentInstance, 'garchomp');

		// `ExternalFiltersStore` is `providedIn: 'root'`: this is the same instance a freshly
		// routed-to roster component would inject, which is what makes the handoff work at all.
		expect(TestBed.inject(ExternalFiltersStore)).toBe(externalFilters);

		// A real grid, standing in for the roster this navigation lands on. Nothing here is
		// stubbed: `isExternalFilterPresent`/`doesExternalFilterPass` call the exact store methods
		// `roster.component.ts` wires up, over the store the detail page just wrote to.
		const container = document.createElement('div');
		document.body.appendChild(container);
		const api: GridApi<PokedexEntry> = createGrid(container, {
			columnDefs: [{ field: 'slug' }],
			rowData: roster,
			getRowId: (params) => params.data.slug,
			enableFilterHandlers: true,
			isExternalFilterPresent: () => externalFilters.isPresent(),
			doesExternalFilterPass: (node) => (node.data ? externalFilters.passes(node.data) : true),
		});

		api.onFilterChanged();

		const slugs: string[] = [];
		api.forEachNodeAfterFilter((node) => {
			if (node.data) slugs.push(node.data.slug);
		});

		// Azumarill and Corviknight answer Garchomp; Garchomp itself never answers itself.
		expect(slugs.sort()).toEqual(['azumarill', 'corviknight']);

		api.destroy();
		container.remove();
	});
});
