import { TestBed } from '@angular/core/testing';
import type { ICellRendererParams } from 'ag-grid-community';
import { TypeChipCellComponent } from './type-chip-cell.component';

function paramsFor(value: string | null | undefined): ICellRendererParams<unknown, string> {
	return { value } as ICellRendererParams<unknown, string>;
}

describe('TypeChipCellComponent', () => {
	it('renders a chip for the given type', () => {
		const fixture = TestBed.createComponent(TypeChipCellComponent);
		fixture.componentInstance.agInit(paramsFor('fire'));
		fixture.detectChanges();

		const chip = fixture.nativeElement.querySelector('pokedex-type-chip');
		expect(chip).not.toBeNull();
		expect(chip.textContent).toContain('fire');
	});

	it('renders no chip for the null params.value guard path', () => {
		const fixture = TestBed.createComponent(TypeChipCellComponent);
		fixture.componentInstance.agInit(paramsFor(null));
		fixture.detectChanges();

		expect(fixture.nativeElement.querySelector('pokedex-type-chip')).toBeNull();
	});

	it('updates on refresh with a new type', () => {
		const fixture = TestBed.createComponent(TypeChipCellComponent);
		fixture.componentInstance.agInit(paramsFor('fire'));
		fixture.detectChanges();

		const changed = fixture.componentInstance.refresh(paramsFor('water'));
		fixture.detectChanges();

		expect(changed).toBe(true);
		expect(fixture.nativeElement.querySelector('pokedex-type-chip').textContent).toContain('water');
	});
});
