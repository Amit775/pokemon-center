import { TestBed } from '@angular/core/testing';
import { PokedexAbilityCellComponent } from './pokedex-ability-cell.component';
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
	abilitySlugs: ['overgrow', 'chlorophyll'],
	abilityNames: ['Overgrow', 'Chlorophyll'],
};

describe('PokedexAbilityCellComponent', () => {
	function render() {
		TestBed.configureTestingModule({
			providers: [
				{
					provide: PokedexStore,
					useValue: {
						abilityText: () =>
							new Map([
								['overgrow', { name: 'Overgrow', effectText: 'Boosts Grass moves at low HP.' }],
								['chlorophyll', { name: 'Chlorophyll', effectText: null }],
							]),
					},
				},
			],
		});

		const fixture = TestBed.createComponent(PokedexAbilityCellComponent);
		fixture.componentRef.setInput('entry', bulbasaur);
		fixture.detectChanges();
		return fixture;
	}

	it('renders every ability name', () => {
		const fixture = render();
		expect(fixture.nativeElement.textContent).toContain('Overgrow');
		expect(fixture.nativeElement.textContent).toContain('Chlorophyll');
	});

	it('renders effect text as a tooltip child when the store has it', () => {
		const fixture = render();
		expect(fixture.nativeElement.textContent).toContain('Boosts Grass moves at low HP.');
	});

	it('makes each ability item focusable, for keyboard access to the tooltip', () => {
		const fixture = render();
		const items = fixture.nativeElement.querySelectorAll('li');
		expect(items).toHaveLength(2);
		items.forEach((item: HTMLElement) => expect(item.getAttribute('tabindex')).toBe('0'));
	});
});
