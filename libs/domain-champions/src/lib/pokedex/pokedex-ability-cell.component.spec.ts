import { TestBed } from '@angular/core/testing';
import type { ICellRendererParams } from 'ag-grid-community';
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

function paramsFor(data: PokedexEntry | undefined): ICellRendererParams<PokedexEntry> {
	return { data } as ICellRendererParams<PokedexEntry>;
}

describe('PokedexAbilityCellComponent', () => {
	function render(abilityText: Map<string, { name: string; effectText: string }> = new Map()) {
		TestBed.configureTestingModule({
			providers: [{ provide: PokedexStore, useValue: { abilityText: () => abilityText } }],
		});

		const fixture = TestBed.createComponent(PokedexAbilityCellComponent);
		fixture.componentInstance.agInit(paramsFor(bulbasaur));
		fixture.detectChanges();
		return fixture;
	}

	it('renders every ability name', () => {
		const fixture = render();
		expect(fixture.nativeElement.textContent).toContain('Overgrow');
		expect(fixture.nativeElement.textContent).toContain('Chlorophyll');
	});

	it('renders the effect text tooltip when the store has it', () => {
		const fixture = render(new Map([['overgrow', { name: 'Overgrow', effectText: 'Powers up Grass moves in a pinch.' }]]));
		expect(fixture.nativeElement.textContent).toContain('Powers up Grass moves in a pinch.');
	});

	it('renders nothing for the null params.data guard path', () => {
		TestBed.configureTestingModule({
			providers: [{ provide: PokedexStore, useValue: { abilityText: () => new Map() } }],
		});
		const fixture = TestBed.createComponent(PokedexAbilityCellComponent);
		fixture.componentInstance.agInit(paramsFor(undefined));
		fixture.detectChanges();

		expect(fixture.nativeElement.querySelectorAll('li')).toHaveLength(0);
	});

	it('updates on refresh with a new entry', () => {
		const fixture = render();

		const changed = fixture.componentInstance.refresh(
			paramsFor({ ...bulbasaur, abilitySlugs: ['blaze'], abilityNames: ['Blaze'] }),
		);
		fixture.detectChanges();

		expect(changed).toBe(true);
		expect(fixture.nativeElement.textContent).toContain('Blaze');
		expect(fixture.nativeElement.textContent).not.toContain('Overgrow');
	});
});
