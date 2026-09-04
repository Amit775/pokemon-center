<<<<<<< HEAD
import { signal } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { RouterTestingHarness } from '@angular/router/testing';
import RosterComponent from './roster.component';
=======
import { Location } from '@angular/common';
import { signal } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { Router, provideRouter } from '@angular/router';
import { RouterTestingHarness } from '@angular/router/testing';
import type { GridApi } from 'ag-grid-community';
import { registerDataGridModules } from '@pokemon-center/ui-pokedex';
import RosterComponent from './roster.component';
import { CHAMPIONS_FILTERS_PANEL_ID } from './filters/champions-filters-panel.component';
import { ExternalFiltersStore } from './filters/external-filters.store';
import { pokedexGridColumns } from './pokedex-grid-columns';
>>>>>>> f7816b41ae4c752d2b9a67af25b86fcefe4abbeb
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
<<<<<<< HEAD
	// No stub needed for `<champions-compare-tray>`: the real CompareTrayComponent reads
	// `PokedexStore.compareEntries()` directly, and `@if (entries().length > 0)` renders nothing
	// for the empty array below — so it participates harmlessly rather than needing an override.
	function render(options: { entries: PokedexEntry[]; isLoading?: boolean; error?: unknown }) {
=======
	// The default 5s Jest timeout is occasionally too tight for a real AG Grid mount plus the
	// multi-frame framework-cell-renderer flush below, especially under load from the rest of the
	// suite (e.g. `pokedex-grid-columns.spec.ts` also creating real grids).
	jest.setTimeout(20000);

	let harness: RouterTestingHarness;

	function element(): HTMLElement {
		return harness.routeNativeElement as HTMLElement;
	}

	/**
	 * AG Grid defers framework (Angular) cell renderer creation into its own
	 * requestAnimationFrame-scheduled task queue, which `whenStable()` does not track (this is a
	 * zoneless app). Two real animation frames are enough to flush it — see
	 * `pokemon-shell.component.spec.ts`, which this technique is copied from.
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

	beforeEach(() => registerDataGridModules());

	// No stub needed for `<champions-compare-tray>`: the real CompareTrayComponent reads
	// `PokedexStore.compareEntries()` directly, and `@if (entries().length > 0)` renders nothing
	// for the empty array below — so it participates harmlessly rather than needing an override.
	async function render(options: {
		entries: PokedexEntry[];
		isLoading?: boolean;
		error?: unknown;
		url?: string;
		/** Runs after the testing module is configured but before the router navigates, so a test can seed state `onGridReady` will see. */
		beforeNavigate?: () => void;
	}): Promise<void> {
>>>>>>> f7816b41ae4c752d2b9a67af25b86fcefe4abbeb
		const storeStub = {
			entries: signal(options.entries),
			isLoading: signal(options.isLoading ?? false),
			error: signal(options.error ?? null),
			isOwned: () => false,
			isComparing: () => false,
			toggleCompare: jest.fn(),
			abilityText: () => new Map(),
			compareEntries: signal([]),
<<<<<<< HEAD
=======
			// Read unconditionally (typeChart) or when ownedOnly is active (owned) by
			// `ExternalFiltersStore.passes()`, which injects the real `PokedexStore` token — this
			// stub stands in for it in every test in this file, not just the external-filter ones.
			typeChart: () => ({}),
			owned: () => new Set<string>(),
			// Read by `MatchupFilterComponent` (Task 13), which the side bar's `championsFilters`
			// tool panel now renders for real instead of the placeholder it used to.
			types: () => [],
			// Read by `MoveLearnerFilterComponent` (Task 14), same tool panel, same reason: no move
			// is ever picked in these tests, but the panel is still constructed eagerly by the side
			// bar, so its autocomplete and "finding learners…" reads need somewhere safe to land.
			moveIndex: () => [],
			pickedMove: () => null,
			isLoadingLearners: () => false,
			moveLearners: () => null,
			patch: () => undefined,
			// Read by `FilterSetsComponent` (Task 15), rendered inside the same eagerly-constructed
			// `championsFilters` tool panel as the move-learner and ownership controls above — no
			// set is ever saved or applied in these tests, but the panel still reads `savedSets()`
			// on every render.
			savedSets: () => [],
			saveSet: jest.fn(),
			applySet: jest.fn(),
			deleteSet: jest.fn(),
>>>>>>> f7816b41ae4c752d2b9a67af25b86fcefe4abbeb
		};

		TestBed.configureTestingModule({
			providers: [provideRouter([{ path: 'champions/pokedex', component: RosterComponent }]), { provide: PokedexStore, useValue: storeStub }],
		});

<<<<<<< HEAD
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

	it('renders a column header for every configured column', async () => {
		const harness = await render({ entries: baseEntries });
		harness.fixture.detectChanges();

		const headers = (harness.routeNativeElement as HTMLElement).querySelectorAll('[role="columnheader"]');
		expect(headers).toHaveLength(11);
	});

	it('links each row to its detail page', async () => {
		const harness = await render({ entries: baseEntries });
		harness.fixture.detectChanges();

		const link: HTMLAnchorElement | null = (harness.routeNativeElement as HTMLElement).querySelector('a[href="/champions/pokedex/bulbasaur"]');
=======
		options.beforeNavigate?.();

		harness = await RouterTestingHarness.create(options.url ?? '/champions/pokedex');
		await settle();
	}

	it('renders every base-form entry as a grid row', async () => {
		await render({ entries: baseEntries });

		expect(element().querySelectorAll('.ag-row')).toHaveLength(2);
		expect(element().textContent).toContain('Bulbasaur');
		expect(element().textContent).toContain('Charmander');
	});

	it('excludes Mega entries from the grid', async () => {
		await render({ entries: [...baseEntries, megaEntry] });

		expect(element().querySelectorAll('.ag-row')).toHaveLength(2);
		expect(element().textContent).not.toContain('Mega Charizard X');
	});

	it('shows a loading skeleton while the store is loading', async () => {
		await render({ entries: [], isLoading: true });

		expect(element().querySelector('pokedex-skeleton')).not.toBeNull();
	});

	it('shows the API error message when the store reports an error', async () => {
		await render({ entries: [], error: new Error('offline') });

		expect(element().textContent).toContain('champions-service');
	});

	it('does not render the removed filter sidebar', async () => {
		await render({ entries: baseEntries });

		expect(element().querySelector('champions-pokedex-filters')).toBeNull();
	});

	it('renders the grid with a column for every configured column', async () => {
		await render({ entries: baseEntries });

		// A pure-data check (rather than counting rendered header DOM) that still catches a
		// dropped or accidentally duplicated column definition.
		expect(element().querySelector('ag-grid-angular')).not.toBeNull();
		expect(pokedexGridColumns).toHaveLength(11);
	});

	it('links each row to its detail page', async () => {
		await render({ entries: baseEntries });

		const link: HTMLAnchorElement | null = element().querySelector('a[href="/champions/pokedex/bulbasaur"]');
>>>>>>> f7816b41ae4c752d2b9a67af25b86fcefe4abbeb
		expect(link).not.toBeNull();
	});

	it('renders the compare tray when the store has compared entries', async () => {
<<<<<<< HEAD
		const harness = await render({ entries: baseEntries });
		// Re-provide the store with a non-empty compareEntries for this one test.
		const store = TestBed.inject(PokedexStore) as unknown as { compareEntries: ReturnType<typeof signal<PokedexEntry[]>> };
		store.compareEntries.set([baseEntries[0]]);
		harness.fixture.detectChanges();

		expect((harness.routeNativeElement as HTMLElement).querySelector('.tray')).not.toBeNull();
		expect((harness.routeNativeElement as HTMLElement).textContent).toContain('Bulbasaur');
=======
		await render({ entries: baseEntries });
		// Re-provide the store with a non-empty compareEntries for this one test.
		const store = TestBed.inject(PokedexStore) as unknown as { compareEntries: ReturnType<typeof signal<PokedexEntry[]>> };
		store.compareEntries.set([baseEntries[0]]);
		await settle();

		expect(element().querySelector('.tray')).not.toBeNull();
		expect(element().textContent).toContain('Bulbasaur');
	});

	/**
	 * The one test that renders the real roster and drives `ExternalFiltersStore` through it,
	 * rather than wiring a bare grid to the store directly (as `external-filters.store.spec.ts`
	 * does). That other suite proves the store's predicates are correct against the External
	 * Filter API; it says nothing about `RosterComponent`'s own `rerunExternalFilter` effect,
	 * `onGridReady`, or the `isExternalFilterPresent`/`doesExternalFilterPass` bindings, because it
	 * never constructs the component at all.
	 *
	 * Deliberately never calls `api.onFilterChanged()` — that is the whole point. If the effect
	 * were missing, mistyped, or read `version()` from inside `untracked` (so it stopped tracking
	 * changes), this test would still see the pre-filter row count after `settle()`.
	 */
	it('narrows the grid when ExternalFiltersStore changes, with no test-driven onFilterChanged call', async () => {
		// AG Grid animates a row leaving the filtered set out (`ag-opacity-zero`) rather than
		// removing it from the DOM immediately, and jsdom never fires the `transitionend` that
		// would let the animation finish — so a filtered-out row briefly (permanently, in jsdom)
		// lingers in the DOM at zero opacity. `visibleRowIds` reads what a user would actually see.
		function visibleRowIds(): string[] {
			return [...element().querySelectorAll('.ag-row')]
				.filter((row) => !row.classList.contains('ag-opacity-zero'))
				.map((row) => row.getAttribute('row-id'))
				.filter((id): id is string => id !== null)
				.sort();
		}

		const hasMegaEntry = entry({ slug: 'venusaur', name: 'Venusaur', nationalPokedexNumber: 3, hasMega: true });
		const noMegaEntry = entry({ slug: 'chikorita', name: 'Chikorita', nationalPokedexNumber: 152, types: ['grass'] });
		await render({ entries: [hasMegaEntry, noMegaEntry] });

		expect(visibleRowIds()).toEqual(['chikorita', 'venusaur']);

		const externalFilters = TestBed.inject(ExternalFiltersStore);
		externalFilters.setMega('has-mega');

		// No `api.onFilterChanged()` here — only the roster's own `rerunExternalFilter` effect,
		// reacting to `externalFilters.version()`, is allowed to make this happen.
		await settle();

		expect(visibleRowIds()).toEqual(['venusaur']);
	});

	/**
	 * Rule 3 of `pokedex-url.ts`'s codec: a URL carrying filter params wins outright over whatever
	 * `ExternalFiltersStore` already holds — it is not merged in. `ownedOnly` is set to `true`
	 * *before* the router navigates so it stands in for "whatever the recipient already had
	 * switched on"; the URL below carries only `mega`, with no `ownedOnly` param at all. A merge
	 * would leave `ownedOnly` untouched (still `true`); "wins outright" resets it to the decoded
	 * default (`false`) because the URL's own state says nothing was there.
	 */
	it('applies filter params from the URL on load, replacing rather than merging with active external filters', async () => {
		function visibleRowIds(): string[] {
			return [...element().querySelectorAll('.ag-row')]
				.filter((row) => !row.classList.contains('ag-opacity-zero'))
				.map((row) => row.getAttribute('row-id'))
				.filter((id): id is string => id !== null)
				.sort();
		}

		const hasMegaEntry = entry({ slug: 'venusaur', name: 'Venusaur', nationalPokedexNumber: 3, hasMega: true });
		const noMegaEntry = entry({ slug: 'chikorita', name: 'Chikorita', nationalPokedexNumber: 152, types: ['grass'] });

		let externalFilters!: ExternalFiltersStore;
		await render({
			entries: [hasMegaEntry, noMegaEntry],
			url: '/champions/pokedex?mega=has-mega',
			beforeNavigate: () => {
				externalFilters = TestBed.inject(ExternalFiltersStore);
				externalFilters.setOwnedOnly(true);
			},
		});

		expect(externalFilters.mega()).toBe('has-mega');
		// Not merged: the URL said nothing about `ownedOnly`, so it comes back to its default
		// rather than keeping the `true` set above.
		expect(externalFilters.ownedOnly()).toBe(false);
		expect(visibleRowIds()).toEqual(['venusaur']);

		// The read and the write must not fight: if `consumed` were not already `true` by the time
		// `writeUrl` first ran, or if it read a stale capture, the just-applied `mega` param could
		// come back blank or wrong here instead of echoing itself.
		expect(TestBed.inject(Location).path()).toContain('mega=has-mega');
	});

	/**
	 * The write half of Task 15's URL sync, restored to match the pre-migration roster's own
	 * `writeUrl` effect (`git show e2314fea^:.../roster.component.ts`): the current view is pushed
	 * back out to the query string on every change, with `replaceUrl: true` so a filter panel
	 * emitting a state per keystroke does not turn Back into an undo of individual characters.
	 */
	it('writes the current filters to the URL as they change, using replaceUrl rather than a new history entry', async () => {
		await render({ entries: baseEntries });

		const router = TestBed.inject(Router);
		const navigateSpy = jest.spyOn(router, 'navigate');
		const externalFilters = TestBed.inject(ExternalFiltersStore);

		externalFilters.setOwnedOnly(true);
		await settle();

		expect(navigateSpy).toHaveBeenCalledWith([], expect.objectContaining({ queryParams: expect.objectContaining({ ownedOnly: '1' }), replaceUrl: true }));
		expect(TestBed.inject(Location).path()).toContain('ownedOnly=1');
	});

	/**
	 * `ExternalFiltersStore` is root-scoped, so a bare visit (no query params at all) can still land
	 * on a non-empty view — state left over from an earlier visit in the same session, simulated
	 * here by setting `ownedOnly` before the bare navigation. `applyUrlStateIfPresent` rightly does
	 * nothing (there is nothing to apply), but without an explicit write the URL would stay bare
	 * while the grid is filtered, and a reload would silently drop the filter.
	 */
	it('writes the URL on a bare visit, so a stale external filter is not silently dropped on reload', async () => {
		await render({
			entries: baseEntries,
			beforeNavigate: () => TestBed.inject(ExternalFiltersStore).setOwnedOnly(true),
		});

		expect(TestBed.inject(Location).path()).toContain('ownedOnly=1');
	});

	/** Rule 1, on the write side: a cleared panel writes a bare URL, not one carrying stale params. */
	it('writes a bare URL once every filter is cleared', async () => {
		await render({ entries: baseEntries });

		const externalFilters = TestBed.inject(ExternalFiltersStore);
		externalFilters.setOwnedOnly(true);
		await settle();
		expect(TestBed.inject(Location).path()).toContain('ownedOnly=1');

		externalFilters.setOwnedOnly(false);
		await settle();

		const [, query] = TestBed.inject(Location).path().split('?');
		expect(query ?? '').toBe('');
	});

	/** Reads the private `gridApi` `onGridReady` stashes — the only handle a test has on the real grid. */
	function gridApi(): GridApi<PokedexEntry> | null {
		return (harness.routeDebugElement?.componentInstance as unknown as { gridApi: GridApi<PokedexEntry> | null }).gridApi;
	}

	/**
	 * The counter handoff from `pokemon-detail.component.ts` (and a shared link carrying
	 * `counterOf`/`ownedOnly`/`mega`) narrows the roster to a handful of rows via
	 * `ExternalFiltersStore`, but the panel that explains why — and offers a way to clear it — lives
	 * behind the side bar's closed default (`pokedexSideBar.defaultToolPanel: undefined`). Without
	 * `onGridReady` opening it, a recipient sees a near-empty grid with no visible explanation.
	 */
	it('opens the Champions filters panel when arriving with an external filter already active', async () => {
		await render({
			entries: baseEntries,
			beforeNavigate: () => TestBed.inject(ExternalFiltersStore).setOwnedOnly(true),
		});

		expect(gridApi()?.getOpenedToolPanel()).toBe(CHAMPIONS_FILTERS_PANEL_ID);
	});

	it('leaves the Champions filters panel closed when arriving with no external filter active', async () => {
		await render({ entries: baseEntries });

		expect(gridApi()?.getOpenedToolPanel()).toBeNull();
>>>>>>> f7816b41ae4c752d2b9a67af25b86fcefe4abbeb
	});
});
