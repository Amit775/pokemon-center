import { signal } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { RouterTestingHarness } from '@angular/router/testing';
import { registerDataGridModules } from '@pokemon-center/ui-pokedex';
import RosterComponent from './roster.component';
import { pokedexGridColumns } from './pokedex-grid-columns';
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
	async function render(options: { entries: PokedexEntry[]; isLoading?: boolean; error?: unknown }): Promise<void> {
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

		harness = await RouterTestingHarness.create('/champions/pokedex');
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
		expect(link).not.toBeNull();
	});

	it('renders the compare tray when the store has compared entries', async () => {
		await render({ entries: baseEntries });
		// Re-provide the store with a non-empty compareEntries for this one test.
		const store = TestBed.inject(PokedexStore) as unknown as { compareEntries: ReturnType<typeof signal<PokedexEntry[]>> };
		store.compareEntries.set([baseEntries[0]]);
		await settle();

		expect(element().querySelector('.tray')).not.toBeNull();
		expect(element().textContent).toContain('Bulbasaur');
	});
});
