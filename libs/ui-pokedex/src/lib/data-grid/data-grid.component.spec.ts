import { Component, signal } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import type { ColDef } from 'ag-grid-community';
import { UiDataGridComponent } from './data-grid.component';
import { registerDataGridModules } from './data-grid.setup';

interface DemoRow {
	id: string;
	name: string;
	power: number;
}

const rows: DemoRow[] = [
	{ id: '1', name: 'Ember', power: 40 },
	{ id: '2', name: 'Flamethrower', power: 90 },
];

const columns: ColDef<DemoRow>[] = [{ field: 'name' }, { field: 'power' }];

@Component({
	selector: 'pokedex-data-grid-test-host',
	imports: [UiDataGridComponent],
	template: `<pokedex-data-grid [rowData]="rowData()" [columnDefs]="columnDefs()" [getRowId]="getRowId" />`,
})
class DataGridTestHostComponent {
	readonly rowData = signal(rows);
	readonly columnDefs = signal(columns);
	readonly getRowId = (params: { data: DemoRow }) => params.data.id;
}

describe('UiDataGridComponent', () => {
	beforeEach(() => registerDataGridModules());

	it('renders the grid with the supplied columns', async () => {
		const fixture = TestBed.createComponent(DataGridTestHostComponent);
		fixture.detectChanges();
		await fixture.whenStable();
		fixture.detectChanges();

		const element: HTMLElement = fixture.nativeElement;
		expect(element.querySelector('ag-grid-angular')).not.toBeNull();
		expect(element.textContent).toContain('Ember');
	});

	it('gives the grid container an explicit height, without which AG Grid renders at zero height', () => {
		const fixture = TestBed.createComponent(DataGridTestHostComponent);
		fixture.detectChanges();

		const host = fixture.nativeElement.querySelector('pokedex-data-grid') as HTMLElement;
		expect(getComputedStyle(host).height).not.toBe('0px');
	});
});
