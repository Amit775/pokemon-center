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
	hasMega: false,
	megaOfSlug: null,
	abilitySlugs: [],
	abilityNames: [],
};

/**
 * The panel is a thin `IToolPanelAngularComp` shell — Task 12's `agInit`/`refresh` contract is
 * exercised at the roster level. What matters here is that the shell actually mounts both
 * controls rather than the placeholder it used to render, and that they share the one
 * `ExternalFiltersStore` instance (`providedIn: 'root'`) the roster's grid wiring reads.
 */
describe('ChampionsFiltersPanelComponent', () => {
	function render() {
		TestBed.configureTestingModule({
			providers: [{ provide: PokedexStore, useValue: { types: () => [], entries: () => [garchomp] } }],
		});
		const fixture = TestBed.createComponent(ChampionsFiltersPanelComponent);
		fixture.componentInstance.agInit({} as never);
		fixture.detectChanges();
		return { fixture, filters: TestBed.inject(ExternalFiltersStore) };
	}

	it('mounts the matchup and counter-target controls', () => {
		const { fixture } = render();

		expect(fixture.nativeElement.querySelector('champions-counter-filter')).not.toBeNull();
		expect(fixture.nativeElement.querySelector('champions-matchup-filter')).not.toBeNull();
	});

	it('refresh reports true, so AG Grid never recreates the panel', () => {
		const { fixture } = render();
		expect(fixture.componentInstance.refresh({} as never)).toBe(true);
	});

	it('both controls read and write the same root-provided ExternalFiltersStore', () => {
		const { fixture, filters } = render();

		filters.setCounterOf('garchomp');
		fixture.detectChanges();

		expect(fixture.nativeElement.querySelector('.banner')?.textContent).toContain('Garchomp');
	});
});
