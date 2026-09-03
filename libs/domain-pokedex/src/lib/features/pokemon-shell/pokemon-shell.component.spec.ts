import { Component } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting, HttpTestingController } from '@angular/common/http/testing';
import { provideRouter } from '@angular/router';
import { RouterTestingHarness } from '@angular/router/testing';
import { POKEDEX_API_URL } from '@pokemon-center/data-access-pokedex';
import { registerDataGridModules } from '@pokemon-center/ui-pokedex';
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
		registerDataGridModules();

		// A trivial stub, not PokemonPageComponent — this spec proves PokemonShellComponent reacts
		// to its child route's :id param, not what the real detail page renders. Task 5's manual
		// check is what proves the real /pokedex/pokemon/:id path end to end.
		@Component({ selector: 'pokedex-stub-detail', template: 'stub detail' })
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

		// AG Grid defers framework (Angular) cell renderer creation into its own
		// requestAnimationFrame-scheduled task queue, which `whenStable()` does not track. Give it a
		// couple of real animation frames to flush before asserting on cell-rendered content.
		await new Promise((resolve) => requestAnimationFrame(resolve));
		await new Promise((resolve) => requestAnimationFrame(resolve));
		harness.fixture.detectChanges();
	});

	it('renders the grid with every fetched pokemon', () => {
		expect(element().querySelector('ag-grid-angular')).not.toBeNull();
		expect(element().textContent).toContain('bulbasaur');
		expect(element().textContent).toContain('charmander');
	});

	it('shows the empty-detail placeholder when nothing is selected', () => {
		expect(element().textContent).toContain('Select a Pokémon');
	});

	it('renders the tools navigation with links to every pokedex tool', () => {
		const links = element().querySelectorAll('.tools-nav a');
		expect(links).toHaveLength(5);
		expect(element().textContent).toContain('Pokedex');
		expect(element().textContent).toContain('Moves');
		expect(element().textContent).toContain('Analyzer');
		expect(element().textContent).toContain('Coverage');
		expect(element().textContent).toContain('Compare');
	});
});
