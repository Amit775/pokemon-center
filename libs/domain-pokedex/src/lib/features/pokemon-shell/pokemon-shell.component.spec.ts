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

const bulbasaur = {
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
};

const charmander = {
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
};

const samplePokemon = [bulbasaur, charmander];

describe('PokemonShellComponent', () => {
	// The default 5s Jest timeout is occasionally too tight for a real AG Grid mount plus the
	// multi-frame framework-cell-renderer flush below, especially under load from the rest of the
	// suite (e.g. `pokedex-grid-columns.spec.ts` also creating real grids) — same reasoning as
	// `roster.component.spec.ts:48`.
	jest.setTimeout(20000);

	let harness: RouterTestingHarness;

	function element(): HTMLElement {
		return harness.routeNativeElement as HTMLElement;
	}

	/**
	 * AG Grid defers framework (Angular) cell renderer creation into its own
	 * requestAnimationFrame-scheduled task queue, which `whenStable()` does not track (this is a
	 * zoneless app, and AG Grid only treats work as zone-trackable when it detects Zone.js or an
	 * explicit `window.AG_GRID_UNDER_TEST`, neither of which is true here). Two real animation
	 * frames were enough in isolation, but flaky under the same load `jest.setTimeout` above guards
	 * against — real animation frames run at whatever rate the CPU is free to give them, and the
	 * rest of the suite (e.g. `pokedex-grid-columns.spec.ts` also creating real grids) can starve
	 * two of them. Six matches `roster.component.spec.ts`'s identical helper, which does not flake
	 * under the same load.
	 */
	async function flushFrameworkCellRenderers(): Promise<void> {
		for (let i = 0; i < 6; i++) {
			await new Promise((resolve) => requestAnimationFrame(resolve));
		}
		harness.fixture.detectChanges();
	}

	async function settle(): Promise<void> {
		harness.fixture.detectChanges();
		await harness.fixture.whenStable();
		harness.fixture.detectChanges();
		await flushFrameworkCellRenderers();
	}

	/** Boots the shell at `url`, flushes the mocked GraphQL response with `pokemonList`, and settles the grid. */
	async function createHarness(pokemonList: unknown[] = samplePokemon, url = ''): Promise<void> {
		harness = await RouterTestingHarness.create(url);
		const httpMock = TestBed.inject(HttpTestingController);
		const request = httpMock.expectOne((req) => req.url === 'http://test-pokedex-api/graphql');
		request.flush({ data: { pokemonList } });
		await settle();
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
	});

	it('renders the grid with every fetched pokemon', async () => {
		await createHarness();

		expect(element().querySelector('ag-grid-angular')).not.toBeNull();
		expect(element().textContent).toContain('bulbasaur');
		expect(element().textContent).toContain('charmander');
	});

	it('shows the empty-detail placeholder when nothing is selected', async () => {
		await createHarness();

		expect(element().textContent).toContain('Select a Pokémon');
	});

	it('renders the tools navigation with links to every pokedex tool', async () => {
		await createHarness();

		const links = element().querySelectorAll('.tools-nav a');
		expect(links).toHaveLength(5);
		expect(element().textContent).toContain('Pokedex');
		expect(element().textContent).toContain('Moves');
		expect(element().textContent).toContain('Analyzer');
		expect(element().textContent).toContain('Coverage');
		expect(element().textContent).toContain('Compare');
	});

	it('opens sorted by name ascending regardless of fetch order', async () => {
		// Fetch order is reversed on purpose: if `initialSort` on the name column were dropped, the
		// grid would render in this same (wrong) order and the test would catch it.
		await createHarness([charmander, bulbasaur]);

		// Scoped to `role="gridcell"` so the header cell (also `col-id="name"`) isn't counted as a row.
		const names = Array.from(element().querySelectorAll('[role="gridcell"][col-id="name"]')).map((cell) => cell.textContent?.trim());
		expect(names).toEqual(['bulbasaur', 'charmander']);
	});

	it('marks the row selected once its id matches the current route, and only that row', async () => {
		await createHarness();

		// Nothing selected yet: no row should carry the highlight.
		expect(element().querySelectorAll('.ag-row.marked')).toHaveLength(0);

		await harness.navigateByUrl('/1');
		// The route change is what drives `rowClassRules` here — AG Grid does not re-evaluate the
		// rule on its own, so the shell asks it to redraw. That redraw recreates the row (framework
		// cell renderers included), so the same animation-frame flush as initial mount applies again.
		await settle();

		const markedRows = Array.from(element().querySelectorAll('.ag-row.marked'));
		expect(markedRows).toHaveLength(1);
		expect(markedRows[0].textContent).toContain('bulbasaur');
		expect(element().querySelector('[row-id="4"]')?.classList.contains('marked')).toBe(false);
	});
});
