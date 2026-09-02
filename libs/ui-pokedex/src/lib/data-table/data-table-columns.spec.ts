import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { injectTable, type Table } from '@tanstack/angular-table';
import { createDataTableColumns, dataTableFeatures, type DataTableFeatures } from './data-table-columns';

interface DemoRow {
	name: string;
	types: string[];
	generation: number;
	power: number;
}

const rows: DemoRow[] = [
	{ name: 'Charizard', types: ['fire', 'flying'], generation: 1, power: 84 },
	{ name: 'Blastoise', types: ['water'], generation: 1, power: 83 },
	{ name: 'Feraligatr', types: ['water'], generation: 2, power: 105 },
];

const columnHelper = createDataTableColumns<DemoRow>();
const columns = columnHelper.columns([
	columnHelper.accessor('name', { header: 'Name' }),
	columnHelper.accessor('types', { header: 'Types', filterFn: 'arrIncludesSome', getUniqueValues: (row) => row.types }),
	columnHelper.accessor('generation', { header: 'Generation', filterFn: 'arrHas' }),
	columnHelper.accessor('power', { header: 'Power', filterFn: 'inNumberRange' }),
]);

/** No template — this test drives the table instance directly and asserts on it, not on the DOM. */
@Component({
	selector: 'pokedex-filter-facet-host',
	changeDetection: ChangeDetectionStrategy.OnPush,
	template: '',
})
class FilterFacetHostComponent {
	readonly table = injectTable(() => ({ features: dataTableFeatures, columns, data: rows }));
}

describe('dataTableFeatures — filtering and faceting', () => {
	let fixture: ComponentFixture<FilterFacetHostComponent>;
	let table: Table<DataTableFeatures, DemoRow>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({ imports: [FilterFacetHostComponent] }).compileComponents();
		fixture = TestBed.createComponent(FilterFacetHostComponent);
		fixture.detectChanges();
		table = fixture.componentInstance.table;
	});

	it('filters rows whose array column includes at least one selected value (arrIncludesSome)', () => {
		table.setColumnFilters([{ id: 'types', value: ['fire'] }]);
		fixture.detectChanges();

		expect(table.getFilteredRowModel().rows.map((row) => row.original.name)).toEqual(['Charizard']);
	});

	it('filters rows whose scalar column equals one of the selected values (arrHas)', () => {
		table.setColumnFilters([{ id: 'generation', value: [2] }]);
		fixture.detectChanges();

		expect(table.getFilteredRowModel().rows.map((row) => row.original.name)).toEqual(['Feraligatr']);
	});

	it('filters rows whose numeric column falls within an inclusive range (inNumberRange)', () => {
		table.setColumnFilters([{ id: 'power', value: [90, 120] }]);
		fixture.detectChanges();

		expect(table.getFilteredRowModel().rows.map((row) => row.original.name)).toEqual(['Feraligatr']);
	});

	it('computes faceted unique values with occurrence counts for a column', () => {
		const facets = table.getColumn('types')?.getFacetedUniqueValues();

		expect(facets?.get('fire')).toBe(1);
		expect(facets?.get('water')).toBe(2);
	});

	it('computes faceted min/max for a numeric column', () => {
		expect(table.getColumn('power')?.getFacetedMinMaxValues()).toEqual([83, 105]);
	});

	it('narrows rows by the global filter across every column', () => {
		table.setGlobalFilter('char');
		fixture.detectChanges();

		expect(table.getFilteredRowModel().rows.map((row) => row.original.name)).toEqual(['Charizard']);
	});
});
