import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { functionalUpdate, injectTable, type ColumnFiltersState } from '@tanstack/angular-table';
import { createDataTableColumns, dataTableFeatures } from './data-table-columns';
import { DataTableFiltersPanelComponent } from './data-table-filters-panel.component';

interface DemoRow {
	name: string;
	type: string;
	power: number;
	generation: number;
}

const columnHelper = createDataTableColumns<DemoRow>();
const columns = columnHelper.columns([
	columnHelper.accessor('name', { header: 'Name' }),
	columnHelper.accessor('type', { header: 'Type', filterFn: 'arrHas', meta: { filterVariant: 'set' } }),
	columnHelper.accessor('power', { header: 'Power', filterFn: 'inNumberRange', meta: { filterVariant: 'range' } }),
	columnHelper.accessor('generation', { header: 'Generation', filterFn: 'arrHas', meta: { filterVariant: 'set' } }),
]);
const rows: DemoRow[] = [
	{ name: 'Ember', type: 'Fire', power: 40, generation: 1 },
	{ name: 'Flamethrower', type: 'Fire', power: 90, generation: 1 },
	{ name: 'Surf', type: 'Water', power: 90, generation: 2 },
];

@Component({
	selector: 'pokedex-filters-panel-host',
	changeDetection: ChangeDetectionStrategy.OnPush,
	imports: [DataTableFiltersPanelComponent],
	template: `<pokedex-data-table-filters-panel [table]="table" label="Demo moves" />`,
})
class FiltersPanelHostComponent {
	private readonly filters = signal<ColumnFiltersState>([]);

	readonly table = injectTable(() => ({
		features: dataTableFeatures,
		columns,
		data: rows,
		state: { columnFilters: this.filters() },
		onColumnFiltersChange: (update) => this.filters.set(functionalUpdate(update, this.filters())),
	}));
}

describe('DataTableFiltersPanelComponent', () => {
	let fixture: ComponentFixture<FiltersPanelHostComponent>;
	let host: FiltersPanelHostComponent;

	function element(): HTMLElement {
		return fixture.nativeElement as HTMLElement;
	}
	function filtersTrigger(): HTMLButtonElement {
		const found = element().querySelector<HTMLButtonElement>('.filters-trigger');
		if (!found) throw new Error('the Filters trigger is missing');
		return found;
	}
	function setCheckbox(columnId: string, value: string): HTMLInputElement {
		const found = element().querySelector<HTMLInputElement>(`input[type=checkbox][data-column-id="${columnId}"][value="${value}"]`);
		if (!found) throw new Error(`no checkbox for ${columnId}=${value}`);
		return found;
	}
	function rangeInput(columnId: string, bound: 'min' | 'max'): HTMLInputElement {
		const found = element().querySelector<HTMLInputElement>(`input[type=number][data-column-id="${columnId}"][data-bound="${bound}"]`);
		if (!found) throw new Error(`no ${bound} input for ${columnId}`);
		return found;
	}

	beforeEach(async () => {
		await TestBed.configureTestingModule({ imports: [FiltersPanelHostComponent] }).compileComponents();
		fixture = TestBed.createComponent(FiltersPanelHostComponent);
		host = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('only lists columns that declare a filterVariant', () => {
		filtersTrigger().click();
		fixture.detectChanges();

		expect(element().querySelector('[data-column-id="name"]')).toBeNull();
		expect(element().querySelectorAll('[data-column-id="type"]').length).toBeGreaterThan(0);
	});

	it('renders one checkbox per faceted unique value, with its occurrence count, for a set column', () => {
		filtersTrigger().click();
		fixture.detectChanges();

		const fireCheckbox = setCheckbox('type', 'Fire');
		expect(fireCheckbox.parentElement?.textContent).toContain('Fire');
		expect(fireCheckbox.parentElement?.textContent).toContain('2');
	});

	it('checking a set-column checkbox sets the column filter to the checked values', () => {
		filtersTrigger().click();
		fixture.detectChanges();

		setCheckbox('type', 'Fire').click();
		fixture.detectChanges();

		expect(host.table.getColumn('type')?.getFilterValue()).toEqual(['Fire']);
	});

	it('unchecking the only checked value clears the column filter entirely', () => {
		filtersTrigger().click();
		fixture.detectChanges();
		setCheckbox('type', 'Fire').click();
		fixture.detectChanges();

		setCheckbox('type', 'Fire').click();
		fixture.detectChanges();

		expect(host.table.getColumn('type')?.getFilterValue()).toBeUndefined();
	});

	it('a numeric set column narrows the table by its raw value, not a stringified one', () => {
		filtersTrigger().click();
		fixture.detectChanges();

		setCheckbox('generation', '1').click(); // the checkbox's DOM value attribute is stringified for display; that's fine
		fixture.detectChanges();

		// If the filter value were the string '1', filterFn_arrHas's strict === against the raw
		// numeric cell value would match nothing and the table would narrow to zero rows.
		expect(host.table.getColumn('generation')?.getFilterValue()).toEqual([1]);
		expect(host.table.getFilteredRowModel().rows.map((row) => row.original.name)).toEqual(['Ember', 'Flamethrower']);
	});

	it("seeds a range column's min/max inputs from the faceted bounds", () => {
		filtersTrigger().click();
		fixture.detectChanges();

		expect(rangeInput('power', 'min').placeholder).toBe('40');
		expect(rangeInput('power', 'max').placeholder).toBe('90');
	});

	it('typing into a range input sets the column filter to [min, max]', () => {
		filtersTrigger().click();
		fixture.detectChanges();

		const min = rangeInput('power', 'min');
		min.value = '80';
		min.dispatchEvent(new Event('input'));
		fixture.detectChanges();

		expect(host.table.getColumn('power')?.getFilterValue()).toEqual([80, undefined]);
	});
});
