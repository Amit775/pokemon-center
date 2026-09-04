import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import type { ICellRendererParams } from 'ag-grid-community';
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

function paramsFor(data: PokedexEntry | undefined): ICellRendererParams<PokedexEntry> {
	return { data } as ICellRendererParams<PokedexEntry>;
}

describe('PokedexActionsCellComponent', () => {
	function render(comparing: boolean, toggleCompare = jest.fn()) {
		TestBed.configureTestingModule({
			providers: [provideRouter([]), { provide: PokedexStore, useValue: { isComparing: () => comparing, toggleCompare } }],
		});

		const fixture = TestBed.createComponent(PokedexActionsCellComponent);
		fixture.componentInstance.agInit(paramsFor(bulbasaur));
		fixture.detectChanges();
		return fixture;
	}

	it('links to the Box with the slug queued to add', () => {
		const fixture = render(false);
		const link: HTMLAnchorElement = fixture.nativeElement.querySelector('a[aria-label="Add Bulbasaur to your Box"]');
		expect(link.getAttribute('href')).toBe('/champions/box?add=bulbasaur');
	});

	it('links to the Simulator with the slug queued on the left', () => {
		const fixture = render(false);
		const link: HTMLAnchorElement = fixture.nativeElement.querySelector('a[aria-label="Open Bulbasaur in the Simulator"]');
		expect(link.getAttribute('href')).toBe('/champions/simulator?left=bulbasaur');
	});

	it('toggles compare on the store when the Compare button is clicked', () => {
		const toggleCompare = jest.fn();
		const fixture = render(false, toggleCompare);

		const button: HTMLButtonElement = fixture.nativeElement.querySelector('button');
		button.click();

		expect(toggleCompare).toHaveBeenCalledWith('bulbasaur');
	});

	it('marks the Compare button pressed when the store reports it comparing', () => {
		const fixture = render(true);
		const button: HTMLButtonElement = fixture.nativeElement.querySelector('button');

		expect(button.getAttribute('aria-pressed')).toBe('true');
		expect(button.classList.contains('on')).toBe(true);
	});

	it('renders nothing for the null params.data guard path', () => {
		TestBed.configureTestingModule({
			providers: [provideRouter([]), { provide: PokedexStore, useValue: { isComparing: () => false, toggleCompare: jest.fn() } }],
		});
		const fixture = TestBed.createComponent(PokedexActionsCellComponent);
		fixture.componentInstance.agInit(paramsFor(undefined));
		fixture.detectChanges();

		expect(fixture.nativeElement.querySelector('.actions')).toBeNull();
	});

	it('updates on refresh with a new entry', () => {
		const fixture = render(false);

		const changed = fixture.componentInstance.refresh(paramsFor({ ...bulbasaur, slug: 'charmander', name: 'Charmander' }));
		fixture.detectChanges();

		expect(changed).toBe(true);
		expect(fixture.nativeElement.querySelector('a[aria-label="Add Charmander to your Box"]')).not.toBeNull();
	});
});
