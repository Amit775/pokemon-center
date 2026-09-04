import { TestBed } from '@angular/core/testing';
<<<<<<< HEAD
import { PokedexTypeListCellComponent } from './pokedex-type-list-cell.component';

describe('PokedexTypeListCellComponent', () => {
	function render(types: string[]) {
		const fixture = TestBed.createComponent(PokedexTypeListCellComponent);
		fixture.componentRef.setInput('types', types);
		fixture.detectChanges();
		return fixture;
	}

	it('renders one chip per type', () => {
		const fixture = render(['grass', 'poison']);
		expect(fixture.nativeElement.querySelectorAll('pokedex-type-chip')).toHaveLength(2);
	});

	it('renders a single chip for a mono-type entry', () => {
		const fixture = render(['fire']);
		expect(fixture.nativeElement.querySelectorAll('pokedex-type-chip')).toHaveLength(1);
=======
import type { ICellRendererParams } from 'ag-grid-community';
import { PokedexTypeListCellComponent } from './pokedex-type-list-cell.component';

function paramsFor(value: string[] | undefined): ICellRendererParams<unknown, string[]> {
	return { value } as ICellRendererParams<unknown, string[]>;
}

describe('PokedexTypeListCellComponent', () => {
	it('renders a chip for every type', () => {
		const fixture = TestBed.createComponent(PokedexTypeListCellComponent);
		fixture.componentInstance.agInit(paramsFor(['grass', 'poison']));
		fixture.detectChanges();

		const chips = fixture.nativeElement.querySelectorAll('pokedex-type-chip');
		expect(chips).toHaveLength(2);
		expect(fixture.nativeElement.textContent).toContain('grass');
		expect(fixture.nativeElement.textContent).toContain('poison');
	});

	it('renders no chips for the null params.value guard path', () => {
		const fixture = TestBed.createComponent(PokedexTypeListCellComponent);
		fixture.componentInstance.agInit(paramsFor(undefined));
		fixture.detectChanges();

		expect(fixture.nativeElement.querySelectorAll('pokedex-type-chip')).toHaveLength(0);
	});

	it('updates on refresh with a new type list', () => {
		const fixture = TestBed.createComponent(PokedexTypeListCellComponent);
		fixture.componentInstance.agInit(paramsFor(['grass', 'poison']));
		fixture.detectChanges();

		const changed = fixture.componentInstance.refresh(paramsFor(['fire']));
		fixture.detectChanges();

		expect(changed).toBe(true);
		const chips = fixture.nativeElement.querySelectorAll('pokedex-type-chip');
		expect(chips).toHaveLength(1);
		expect(fixture.nativeElement.textContent).toContain('fire');
>>>>>>> f7816b41ae4c752d2b9a67af25b86fcefe4abbeb
	});
});
