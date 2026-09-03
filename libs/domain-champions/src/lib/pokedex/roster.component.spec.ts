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
		expect(link).not.toBeNull();
	});

	it('renders the compare tray when the store has compared entries', async () => {
		const harness = await render({ entries: baseEntries });
		// Re-provide the store with a non-empty compareEntries for this one test.
		const store = TestBed.inject(PokedexStore) as unknown as { compareEntries: ReturnType<typeof signal<PokedexEntry[]>> };
		store.compareEntries.set([baseEntries[0]]);
		harness.fixture.detectChanges();

		expect((harness.routeNativeElement as HTMLElement).querySelector('.tray')).not.toBeNull();
		expect((harness.routeNativeElement as HTMLElement).textContent).toContain('Bulbasaur');
	});
});
