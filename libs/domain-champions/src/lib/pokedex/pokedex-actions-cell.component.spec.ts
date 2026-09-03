import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { PokedexActionsCellComponent } from './pokedex-actions-cell.component';
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

describe('PokedexActionsCellComponent', () => {
	function render(comparing: boolean, toggleCompare = jest.fn()) {
		TestBed.configureTestingModule({
			providers: [provideRouter([]), { provide: PokedexStore, useValue: { isComparing: () => comparing, toggleCompare } }],
		});

		const fixture = TestBed.createComponent(PokedexActionsCellComponent);
		fixture.componentRef.setInput('entry', bulbasaur);
		fixture.detectChanges();
		return fixture;
	}

	it('links Box to the Box route with the species queued to add', () => {
		const fixture = render(false);
		const link: HTMLAnchorElement = fixture.nativeElement.querySelector('a[aria-label*="Box"]');
		expect(link.getAttribute('href')).toBe('/champions/box?add=bulbasaur');
	});

	it('links Sim to the Simulator route with the species queued on the left', () => {
		const fixture = render(false);
		const link: HTMLAnchorElement = fixture.nativeElement.querySelector('a[aria-label*="Simulator"]');
		expect(link.getAttribute('href')).toBe('/champions/simulator?left=bulbasaur');
	});

	it('toggles compare on click, passing this entry\'s slug', () => {
		const toggleCompare = jest.fn();
		const fixture = render(false, toggleCompare);
		const button: HTMLButtonElement = fixture.nativeElement.querySelector('button');

		button.click();

		expect(toggleCompare).toHaveBeenCalledWith('bulbasaur');
	});

	it('marks the compare button pressed when already comparing', () => {
		const fixture = render(true);
		const button: HTMLButtonElement = fixture.nativeElement.querySelector('button');
		expect(button.getAttribute('aria-pressed')).toBe('true');
	});

	it('does not mark the compare button pressed when not comparing', () => {
		const fixture = render(false);
		const button: HTMLButtonElement = fixture.nativeElement.querySelector('button');
		expect(button.getAttribute('aria-pressed')).toBe('false');
	});
});
