import { constructTable, type RowData } from '@tanstack/angular-table';
import { createDataTableColumns, dataTableFeatures } from './data-table-columns';

interface DemoRow extends RowData {
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
	columnHelper.accessor('types', { header: 'Types', filterFn: 'arrIncludesSome' }),
	columnHelper.accessor('generation', { header: 'Generation', filterFn: 'arrHas' }),
	columnHelper.accessor('power', { header: 'Power', filterFn: 'inNumberRange' }),
]);

describe('dataTableFeatures — filtering and faceting', () => {
	function buildTable() {
		return constructTable({
			features: dataTableFeatures,
			columns,
			data: rows,
			state: {},
			onColumnFiltersChange: () => undefined,
			onGlobalFilterChange: () => undefined,
		});
	}

	it('filters rows whose array column includes at least one selected value (arrIncludesSome)', () => {
		const table = buildTable();
		table.setColumnFilters([{ id: 'types', value: ['fire'] }]);

		expect(table.getFilteredRowModel().rows.map((row) => row.original.name)).toEqual(['Charizard']);
	});

	it('filters rows whose scalar column equals one of the selected values (arrHas)', () => {
		const table = buildTable();
		table.setColumnFilters([{ id: 'generation', value: [2] }]);

		expect(table.getFilteredRowModel().rows.map((row) => row.original.name)).toEqual(['Feraligatr']);
	});

	it('filters rows whose numeric column falls within an inclusive range (inNumberRange)', () => {
		const table = buildTable();
		table.setColumnFilters([{ id: 'power', value: [90, 120] }]);

		expect(table.getFilteredRowModel().rows.map((row) => row.original.name)).toEqual(['Feraligatr']);
	});

	it('computes faceted unique values with occurrence counts for a column', () => {
		const table = buildTable();

		const facets = table.getColumn('types')?.getFacetedUniqueValues();

		expect(facets?.get('fire')).toBe(1);
		expect(facets?.get('water')).toBe(2);
	});

	it('computes faceted min/max for a numeric column', () => {
		const table = buildTable();

		expect(table.getColumn('power')?.getFacetedMinMaxValues()).toEqual([83, 105]);
	});

	it('narrows rows by the global filter across every column', () => {
		const table = buildTable();
		table.setGlobalFilter('char');

		expect(table.getFilteredRowModel().rows.map((row) => row.original.name)).toEqual(['Charizard']);
	});
});
