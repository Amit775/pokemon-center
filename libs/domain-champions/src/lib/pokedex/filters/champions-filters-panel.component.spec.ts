import { TestBed } from '@angular/core/testing';
import type { PokedexEntry } from '../pokedex-filter';
import { PokedexStore } from '../pokedex.store';
import { ChampionsFiltersPanelComponent } from './champions-filters-panel.component';
import { ExternalFiltersStore } from './external-filters.store';

const garchomp: PokedexEntry = {
	id: 1,
	slug: 'garchomp',
	name: 'Garchomp',
	nationalPokedexNumber: 1,
	types: ['dragon', 'ground'],
	baseStats: { hp: 80, attack: 80, defense: 80, specialAttack: 80, specialDefense: 80, speed: 80, total: 480 },
	isMega: false,
	hasMega: true,
	megaOfSlug: null,
	abilitySlugs: [],
	abilityNames: [],
};

const garchompMega: PokedexEntry = {
	...garchomp,
	id: 2,
	slug: 'garchomp-mega',
	name: 'Mega Garchomp',
	isMega: true,
	hasMega: false,
	megaOfSlug: 'garchomp',
};

const roster: PokedexEntry[] = [garchomp, garchompMega];

/**
 * The panel is a thin `IToolPanelAngularComp` shell — Task 12's `agInit`/`refresh` contract is
 * exercised at the roster level. What matters here is that the shell actually mounts every
 * control rather than the placeholder it used to render, and that they share the one
 * `ExternalFiltersStore` instance (`providedIn: 'root'`) the roster's grid wiring reads.
 */
describe('ChampionsFiltersPanelComponent', () => {
	function render(owned: ReadonlySet<string> = new Set()) {
		TestBed.configureTestingModule({
			providers: [
				{
					provide: PokedexStore,
					useValue: {
						types: () => [],
						entries: () => roster,
						owned: () => owned,
						typeChart: () => ({}),
						moveIndex: () => [],
						pickedMove: () => null,
						isLoadingLearners: () => false,
						moveLearners: () => null,
						patch: () => undefined,
						// Read by `FilterSetsComponent` (Task 15), rendered at the bottom of this panel.
						savedSets: () => [],
						saveSet: jest.fn(),
						applySet: jest.fn(),
						deleteSet: jest.fn(),
					},
				},
			],
		});
		const fixture = TestBed.createComponent(ChampionsFiltersPanelComponent);
		fixture.componentInstance.agInit({} as never);
		fixture.detectChanges();
		return { fixture, filters: TestBed.inject(ExternalFiltersStore) };
	}

	function megaButton(fixture: { nativeElement: HTMLElement }): HTMLButtonElement {
		const button = fixture.nativeElement.querySelector<HTMLButtonElement>('.tri');
		if (!button) throw new Error('No Mega tri-state button found');
		return button;
	}

	it('mounts every control: matchup, counter-target, move-learner, ownership and Mega', () => {
		const { fixture } = render(new Set(['garchomp']));

		expect(fixture.nativeElement.querySelector('champions-counter-filter')).not.toBeNull();
		expect(fixture.nativeElement.querySelector('champions-matchup-filter')).not.toBeNull();
		expect(fixture.nativeElement.querySelector('champions-move-learner-filter')).not.toBeNull();
		expect(fixture.nativeElement.querySelector('champions-ownership-filter')).not.toBeNull();
		expect(fixture.nativeElement.querySelector('.tri')).not.toBeNull();
		expect(fixture.nativeElement.querySelector('.placeholder')).toBeNull();
	});

	it('refresh reports true, so AG Grid never recreates the panel', () => {
		const { fixture } = render();
		expect(fixture.componentInstance.refresh({} as never)).toBe(true);
	});

	it('every control reads and writes the same root-provided ExternalFiltersStore', () => {
		const { fixture, filters } = render();

		filters.setCounterOf('garchomp');
		fixture.detectChanges();

		expect(fixture.nativeElement.querySelector('.banner')?.textContent).toContain('Garchomp');
	});

	describe('the Mega tri-state button', () => {
		it('starts idle, with the generic label', () => {
			const { fixture } = render();
			expect(megaButton(fixture).textContent?.trim()).toContain('Mega Evolution');
		});

		it('cycles empty → has a Mega → has no Mega → empty, in that exact order', () => {
			const { fixture, filters } = render();

			megaButton(fixture).click();
			fixture.detectChanges();
			expect(filters.mega()).toBe('has-mega');
			expect(megaButton(fixture).textContent?.trim()).toContain('Has a Mega');

			megaButton(fixture).click();
			fixture.detectChanges();
			expect(filters.mega()).toBe('no-mega');
			expect(megaButton(fixture).textContent?.trim()).toContain('Has no Mega');

			megaButton(fixture).click();
			fixture.detectChanges();
			expect(filters.mega()).toBe('any');
			expect(megaButton(fixture).textContent?.trim()).toContain('Mega Evolution');
		});

		it('each of the three states filters the roster correctly', () => {
			const { fixture, filters } = render();

			expect(filters.passes(garchomp)).toBe(true);
			expect(filters.passes(garchompMega)).toBe(true);

			megaButton(fixture).click(); // has-mega
			fixture.detectChanges();
			expect(filters.passes(garchomp)).toBe(true);
			expect(filters.passes(garchompMega)).toBe(true);

			megaButton(fixture).click(); // no-mega
			fixture.detectChanges();
			expect(filters.passes(garchomp)).toBe(false);
			expect(filters.passes(garchompMega)).toBe(false);

			megaButton(fixture).click(); // back to any
			fixture.detectChanges();
			expect(filters.passes(garchomp)).toBe(true);
			expect(filters.passes(garchompMega)).toBe(true);
		});
	});
});
