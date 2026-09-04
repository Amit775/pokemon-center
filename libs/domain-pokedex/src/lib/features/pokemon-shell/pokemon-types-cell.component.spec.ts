import { TestBed } from '@angular/core/testing';
import type { ICellRendererParams } from 'ag-grid-community';
import { PokemonTypesCellComponent } from './pokemon-types-cell.component';
import type { PokemonRow } from './pokemon-grid-columns';

function paramsFor(value: string[] | null | undefined): ICellRendererParams<PokemonRow, string[]> {
	return { value } as ICellRendererParams<PokemonRow, string[]>;
}

describe('PokemonTypesCellComponent', () => {
	it('renders a chip for each type', () => {
		const fixture = TestBed.createComponent(PokemonTypesCellComponent);
		fixture.componentInstance.agInit(paramsFor(['fire', 'flying']));
		fixture.detectChanges();

		const chips = fixture.nativeElement.querySelectorAll('pokedex-type-chip');
		expect(chips).toHaveLength(2);
		expect(chips[0].textContent).toContain('fire');
		expect(chips[1].textContent).toContain('flying');
	});

	it('renders no chips for the null params.value guard path', () => {
		const fixture = TestBed.createComponent(PokemonTypesCellComponent);
		fixture.componentInstance.agInit(paramsFor(null));
		fixture.detectChanges();

		expect(fixture.nativeElement.querySelector('pokedex-type-chip')).toBeNull();
	});

	it('updates on refresh with new types', () => {
		const fixture = TestBed.createComponent(PokemonTypesCellComponent);
		fixture.componentInstance.agInit(paramsFor(['fire']));
		fixture.detectChanges();

		const changed = fixture.componentInstance.refresh(paramsFor(['water']));
		fixture.detectChanges();

		expect(changed).toBe(true);
		expect(fixture.nativeElement.textContent).toContain('water');
		expect(fixture.nativeElement.textContent).not.toContain('fire');
	});
});
