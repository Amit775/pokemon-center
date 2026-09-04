import { TestBed } from '@angular/core/testing';
import type { PokedexEntry } from '../pokedex-filter';
import { PokedexStore } from '../pokedex.store';
import { ExternalFiltersStore } from './external-filters.store';
import { OwnershipFilterComponent } from './ownership-filter.component';

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
const gardevoir = entry({ id: 2, slug: 'gardevoir', name: 'Gardevoir', types: ['psychic', 'fairy'] });
const roster: PokedexEntry[] = [garchomp, gardevoir];

function render(owned: ReadonlySet<string>) {
	TestBed.configureTestingModule({
		providers: [{ provide: PokedexStore, useValue: { owned: () => owned, typeChart: () => ({}), entries: () => roster } }],
	});

	const fixture = TestBed.createComponent(OwnershipFilterComponent);
	fixture.detectChanges();

	return { fixture, filters: TestBed.inject(ExternalFiltersStore) };
}

function checkbox(fixture: { nativeElement: HTMLElement }): HTMLInputElement | null {
	return fixture.nativeElement.querySelector<HTMLInputElement>('.check input');
}

describe('OwnershipFilterComponent', () => {
	it('renders nothing when the Box is empty — a dead checkbox is worse than no checkbox', () => {
		const { fixture } = render(new Set());
		expect(fixture.nativeElement.querySelector('.check')).toBeNull();
	});

	it('shows the checkbox with the Box count once something is owned', () => {
		const { fixture } = render(new Set(['garchomp']));
		expect(fixture.nativeElement.querySelector('.check')?.textContent).toContain('1');
	});

	it('checking the box sets ExternalFiltersStore.ownedOnly, which narrows to boxed species', () => {
		const { fixture, filters } = render(new Set(['garchomp']));

		const input = checkbox(fixture);
		if (!input) throw new Error('No ownership checkbox found');
		input.checked = true;
		input.dispatchEvent(new Event('change'));
		fixture.detectChanges();

		expect(filters.ownedOnly()).toBe(true);
		expect(filters.passes(garchomp)).toBe(true);
		expect(filters.passes(gardevoir)).toBe(false);
	});

	it('unchecking clears the filter again', () => {
		const { fixture, filters } = render(new Set(['garchomp']));
		filters.setOwnedOnly(true);
		fixture.detectChanges();

		const input = checkbox(fixture);
		if (!input) throw new Error('No ownership checkbox found');
		expect(input.checked).toBe(true);

		input.checked = false;
		input.dispatchEvent(new Event('change'));
		fixture.detectChanges();

		expect(filters.ownedOnly()).toBe(false);
		expect(filters.passes(gardevoir)).toBe(true);
	});
});
