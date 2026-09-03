import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { PokedexNameCellComponent } from './pokedex-name-cell.component';
import { PokedexStore } from './pokedex.store';
import type { PokedexEntry } from './pokedex-filter';

const bulbasaur: PokedexEntry = {
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
};

describe('PokedexNameCellComponent', () => {
	function render(owned: boolean) {
		TestBed.configureTestingModule({
			providers: [provideRouter([]), { provide: PokedexStore, useValue: { isOwned: () => owned } }],
		});

		const fixture = TestBed.createComponent(PokedexNameCellComponent);
		fixture.componentRef.setInput('entry', bulbasaur);
		fixture.detectChanges();
		return fixture;
	}

	it('renders the dex number and name', () => {
		const fixture = render(false);
		expect(fixture.nativeElement.textContent).toContain('#1');
		expect(fixture.nativeElement.textContent).toContain('Bulbasaur');
	});

	it('links to the detail route', () => {
		const fixture = render(false);
		const link: HTMLAnchorElement = fixture.nativeElement.querySelector('a.name');
		expect(link.getAttribute('href')).toBe('/champions/pokedex/bulbasaur');
	});

	it('shows an owned flag when the store reports it owned', () => {
		const fixture = render(true);
		expect(fixture.nativeElement.textContent).toContain('Owned');
	});

	it('shows no owned flag when not owned', () => {
		const fixture = render(false);
		expect(fixture.nativeElement.textContent).not.toContain('Owned');
	});
});
