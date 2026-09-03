import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import type { ICellRendererParams } from 'ag-grid-community';
import { PokemonNameCellComponent } from './pokemon-name-cell.component';
import type { PokemonRow } from './pokemon-grid-columns';

const baseRow: PokemonRow = {
	id: 6,
	canonicalId: 'pokemon:6',
	slug: 'charizard',
	name: 'charizard',
	types: ['fire', 'flying'],
	hp: 78,
	attack: 84,
	defense: 78,
	specialAttack: 109,
	specialDefense: 85,
	speed: 100,
	total: 534,
};

function paramsFor(data: PokemonRow | undefined): ICellRendererParams<PokemonRow> {
	return { data } as ICellRendererParams<PokemonRow>;
}

describe('PokemonNameCellComponent', () => {
	beforeEach(() => TestBed.configureTestingModule({ providers: [provideRouter([])] }));

	it('renders the name and a routerLink to the pokemon detail', () => {
		const fixture = TestBed.createComponent(PokemonNameCellComponent);
		fixture.componentInstance.agInit(paramsFor(baseRow));
		fixture.detectChanges();

		expect(fixture.nativeElement.textContent).toContain('charizard');
		expect(fixture.nativeElement.querySelector('a').getAttribute('href')).toBe('/6');
	});

	it('renders nothing for the null params.data guard path', () => {
		const fixture = TestBed.createComponent(PokemonNameCellComponent);
		fixture.componentInstance.agInit(paramsFor(undefined));
		fixture.detectChanges();

		expect(fixture.nativeElement.textContent.trim()).toBe('');
	});

	it('updates on refresh with a new row', () => {
		const fixture = TestBed.createComponent(PokemonNameCellComponent);
		fixture.componentInstance.agInit(paramsFor(baseRow));
		fixture.detectChanges();

		const changed = fixture.componentInstance.refresh(paramsFor({ ...baseRow, id: 7, name: 'squirtle' }));
		fixture.detectChanges();

		expect(changed).toBe(true);
		expect(fixture.nativeElement.textContent).toContain('squirtle');
	});
});
