import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { DeferBlockBehavior, DeferBlockState, TestBed, type ComponentFixture } from '@angular/core/testing';
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
 * exactly the regression the earlier TanStack migration introduced.
 *
 * This proves the fix holds through the same seam that broke it, and through the actual click: the
 * button that fires this action lives inside a `@defer (when showMatchups())` block, so an earlier
 * version of this suite called `showAllCounters` directly via a cast, skipping the DOM entirely.
 * That left the one-line `(seeAll)="showAllCounters(pokemon.slug)"` template binding — the exact
 * kind of thing a migration silently drops — with no coverage at all. Angular's defer-block testing
 * API (`fixture.getDeferBlocks()` / `DeferBlockFixture.render()`) renders that content for real, so
 * there is no need for the cast: every test below clicks the actual rendered button.
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
		// The default in this Angular version already, but explicit because the whole point of
		// this file is exercising the deferred content rather than skipping it.
		deferBlockBehavior: DeferBlockBehavior.Manual,
		providers: [provideHttpClient(), provideHttpClientTesting(), provideRouter([]), { provide: PokedexStore, useValue: pokedexStub() }],
	});

	const router = TestBed.inject(Router);
	jest.spyOn(router, 'navigate').mockResolvedValue(true);

	const fixture = TestBed.createComponent(PokemonDetailComponent);
	fixture.componentRef.setInput('slug', 'garchomp');
	fixture.detectChanges();

	return { fixture, router, externalFilters: TestBed.inject(ExternalFiltersStore) };
}

function mustFindButton(root: HTMLElement, text: string): HTMLButtonElement {
	const button = [...root.querySelectorAll<HTMLButtonElement>('button')].find((candidate) => candidate.textContent?.includes(text));
	if (!button) throw new Error(`No button found containing "${text}"`);
	return button;
}

/**
 * Opens the "Matchups" panel (the `@defer` block's trigger, `showMatchups()`) and renders its real
 * content — the two `<champions-counter-list>`s, including the "See every answer" button this
 * suite exists to click. Nothing here is a stand-in: this is the exact sequence a user opening the
 * section triggers.
 */
async function revealCounterLists(fixture: ComponentFixture<PokemonDetailComponent>): Promise<void> {
	mustFindButton(fixture.nativeElement, 'What beats').click();
	fixture.detectChanges();

	const deferBlocks = await fixture.getDeferBlocks();
	if (deferBlocks.length === 0) throw new Error('No @defer block found — "Matchups" may not have expanded');
	await deferBlocks[0].render(DeferBlockState.Complete);
	fixture.detectChanges();
}

describe('PokemonDetailComponent — the cross-page "answers to X" handoff', () => {
	it('clicking the real "See every answer" button points ExternalFiltersStore at the target and navigates to the roster', async () => {
		const { fixture, router, externalFilters } = renderDetail();
		expect(externalFilters.counterOf()).toBeNull();

		await revealCounterLists(fixture);

		// The "What beats Garchomp" list's button — the other list (direction="outgoing") never
		// gets `showSeeAll`, so there is exactly one of these in the rendered content.
		mustFindButton(fixture.nativeElement, 'See every answer in the Pokédex').click();

		expect(externalFilters.counterOf()).toBe('garchomp');
		expect(router.navigate).toHaveBeenCalledWith(['/champions/pokedex']);
	});

	it('the target set by that real click survives the navigation and actually narrows the roster grid', async () => {
		const { fixture, externalFilters } = renderDetail();

		await revealCounterLists(fixture);
		mustFindButton(fixture.nativeElement, 'See every answer in the Pokédex').click();

		// `ExternalFiltersStore` is `providedIn: 'root'`: this is the same instance a freshly
		// routed-to roster component would inject, which is what makes the handoff work at all.
		expect(TestBed.inject(ExternalFiltersStore)).toBe(externalFilters);

		// A real grid, standing in for the roster this navigation lands on. Nothing here is
		// stubbed: `isExternalFilterPresent`/`doesExternalFilterPass` call the exact store methods
		// `roster.component.ts` wires up, over the store the detail page's button just wrote to.
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
