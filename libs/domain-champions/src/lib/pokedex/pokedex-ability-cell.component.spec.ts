import { TestBed } from '@angular/core/testing';
<<<<<<< HEAD
=======
import type { ICellRendererParams } from 'ag-grid-community';
>>>>>>> f7816b41ae4c752d2b9a67af25b86fcefe4abbeb
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

<<<<<<< HEAD
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
=======
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
>>>>>>> f7816b41ae4c752d2b9a67af25b86fcefe4abbeb
		fixture.detectChanges();
		return fixture;
	}

	it('renders every ability name', () => {
		const fixture = render();
		expect(fixture.nativeElement.textContent).toContain('Overgrow');
		expect(fixture.nativeElement.textContent).toContain('Chlorophyll');
	});

<<<<<<< HEAD
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

	it('renders no tip for an ability with no effect text', () => {
		const fixture = render();
		const items = fixture.nativeElement.querySelectorAll('li');
		// Chlorophyll (index 1) has effectText: null in the store stub above.
		expect(items[1].querySelector('.tip')).toBeNull();
=======
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
>>>>>>> f7816b41ae4c752d2b9a67af25b86fcefe4abbeb
	});
});
