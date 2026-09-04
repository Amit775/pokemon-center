import { TestBed } from '@angular/core/testing';
import type { PokedexEntry } from '../pokedex-filter';
import { PokedexStore } from '../pokedex.store';
import { CounterFilterComponent } from './counter-filter.component';
import { ExternalFiltersStore } from './external-filters.store';

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
const roster: PokedexEntry[] = [garchomp];

function render() {
	TestBed.configureTestingModule({
		providers: [{ provide: PokedexStore, useValue: { entries: () => roster } }],
	});

	const fixture = TestBed.createComponent(CounterFilterComponent);
	fixture.detectChanges();

	return { fixture, filters: TestBed.inject(ExternalFiltersStore) };
}

describe('CounterFilterComponent', () => {
	it('renders nothing when no counter target is set', () => {
		const { fixture } = render();
		expect(fixture.nativeElement.querySelector('.banner')).toBeNull();
	});

	it("shows the target's name, not its slug, once a counter target is set", () => {
		const { fixture, filters } = render();

		filters.setCounterOf('garchomp');
		fixture.detectChanges();

		const banner = fixture.nativeElement.querySelector('.banner');
		expect(banner?.textContent).toContain('Garchomp');
		expect(banner?.textContent).not.toContain('garchomp');
	});

	it('is inert (renders nothing) when the target slug is not on the roster', () => {
		const { fixture, filters } = render();

		filters.setCounterOf('missingno');
		fixture.detectChanges();

		expect(fixture.nativeElement.querySelector('.banner')).toBeNull();
	});

	it('the dismiss button clears counterOf', () => {
		const { fixture, filters } = render();

		filters.setCounterOf('garchomp');
		fixture.detectChanges();
		expect(filters.counterOf()).toBe('garchomp');

		const dismiss = fixture.nativeElement.querySelector<HTMLButtonElement>('.banner button');
		if (!dismiss) throw new Error('No dismiss button found');
		dismiss.click();
		fixture.detectChanges();

		expect(filters.counterOf()).toBeNull();
		expect(fixture.nativeElement.querySelector('.banner')).toBeNull();
	});
});
