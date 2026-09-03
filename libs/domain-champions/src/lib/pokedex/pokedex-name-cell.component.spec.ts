import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import type { ICellRendererParams } from 'ag-grid-community';
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

function paramsFor(data: PokedexEntry | undefined): ICellRendererParams<PokedexEntry> {
	return { data } as ICellRendererParams<PokedexEntry>;
}

describe('PokedexNameCellComponent', () => {
	function render(owned: boolean) {
		TestBed.configureTestingModule({
			providers: [provideRouter([]), { provide: PokedexStore, useValue: { isOwned: () => owned } }],
		});

		const fixture = TestBed.createComponent(PokedexNameCellComponent);
		fixture.componentInstance.agInit(paramsFor(bulbasaur));
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

	it('renders nothing for the null params.data guard path', () => {
		TestBed.configureTestingModule({
			providers: [provideRouter([]), { provide: PokedexStore, useValue: { isOwned: () => false } }],
		});
		const fixture = TestBed.createComponent(PokedexNameCellComponent);
		fixture.componentInstance.agInit(paramsFor(undefined));
		fixture.detectChanges();

		expect(fixture.nativeElement.textContent.trim()).toBe('');
	});

	it('updates on refresh with a new entry', () => {
		const fixture = render(false);

		const changed = fixture.componentInstance.refresh(paramsFor({ ...bulbasaur, slug: 'charmander', name: 'Charmander', nationalPokedexNumber: 4 }));
		fixture.detectChanges();

		expect(changed).toBe(true);
		expect(fixture.nativeElement.textContent).toContain('Charmander');
	});
});
