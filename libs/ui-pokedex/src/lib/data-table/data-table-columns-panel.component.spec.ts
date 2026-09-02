import { LiveAnnouncer } from '@angular/cdk/a11y';
import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { functionalUpdate, injectTable, type ColumnOrderState, type ColumnVisibilityState } from '@tanstack/angular-table';
import { createDataTableColumns, dataTableFeatures } from './data-table-columns';
import { DataTableColumnsPanelComponent } from './data-table-columns-panel.component';

interface DemoRow {
	name: string;
	power: number;
}

const columnHelper = createDataTableColumns<DemoRow>();
const columns = columnHelper.columns([
	columnHelper.accessor('name', { header: 'Name' }),
	columnHelper.accessor('power', { header: 'Power' }),
	columnHelper.display({ id: 'actions', header: 'Actions', cell: () => 'edit' }),
]);
const rows: DemoRow[] = [{ name: 'Ember', power: 40 }];

@Component({
	selector: 'pokedex-columns-panel-host',
	changeDetection: ChangeDetectionStrategy.OnPush,
	imports: [DataTableColumnsPanelComponent],
	template: `<pokedex-data-table-columns-panel [table]="table" label="Demo moves" />`,
})
class ColumnsPanelHostComponent {
	readonly visibility = signal<ColumnVisibilityState>({});
	readonly order = signal<ColumnOrderState>([]);

	readonly table = injectTable(() => ({
		features: dataTableFeatures,
		columns,
		data: rows,
		state: { columnVisibility: this.visibility(), columnOrder: this.order() },
		onColumnVisibilityChange: (update) => this.visibility.set(functionalUpdate(update, this.visibility())),
		onColumnOrderChange: (update) => this.order.set(functionalUpdate(update, this.order())),
	}));
}

describe('DataTableColumnsPanelComponent', () => {
	let fixture: ComponentFixture<ColumnsPanelHostComponent>;
	let announce: jest.SpyInstance;

	function element(): HTMLElement {
		return fixture.nativeElement as HTMLElement;
	}
	function panelRows(): HTMLElement[] {
		return Array.from(element().querySelectorAll<HTMLElement>('.columns-row'));
	}
	function checkboxAt(index: number): HTMLInputElement {
		const found = panelRows()[index]?.querySelector<HTMLInputElement>('input[type=checkbox]');
		if (!found) throw new Error(`no checkbox in panel row ${index}`);
		return found;
	}
	function columnsTrigger(): HTMLButtonElement {
		const found = element().querySelector<HTMLButtonElement>('.columns-trigger');
		if (!found) throw new Error('the Columns trigger is missing');
		return found;
	}
	function moveButtons(rowIndex: number): HTMLButtonElement[] {
		const row = panelRows()[rowIndex];
		if (!row) throw new Error(`no panel row at index ${rowIndex}`);
		return Array.from(row.querySelectorAll<HTMLButtonElement>('button.move'));
	}

	beforeEach(async () => {
		await TestBed.configureTestingModule({ imports: [ColumnsPanelHostComponent] }).compileComponents();
		fixture = TestBed.createComponent(ColumnsPanelHostComponent);
		announce = jest.spyOn(TestBed.inject(LiveAnnouncer), 'announce');
		fixture.detectChanges();
	});

	afterEach(() => jest.restoreAllMocks());

	it('counts visible against total on the trigger', () => {
		expect(columnsTrigger().textContent?.trim()).toBe('Columns 3/3');
	});

	it('toggles a column and announces the state it moved to', () => {
		checkboxAt(1).click();
		fixture.detectChanges();

		expect(announce).toHaveBeenLastCalledWith('Power hidden');
		expect(columnsTrigger().textContent?.trim()).toBe('Columns 2/3');
	});

	it('refuses to hide the last visible column', () => {
		checkboxAt(1).click();
		checkboxAt(2).click();
		fixture.detectChanges();

		const nameCheckbox = checkboxAt(0);
		expect(nameCheckbox.getAttribute('aria-disabled')).toBe('true');
	});

	it('announces the state a column moved to, not the one it came from', () => {
		moveButtons(1)[0].click();
		fixture.detectChanges();
		expect(announce).toHaveBeenLastCalledWith('Power moved left');

		moveButtons(0)[1].click();
		fixture.detectChanges();
		expect(announce).toHaveBeenLastCalledWith('Power moved right');
	});

	it('moves a column left and right, writing the whole order', () => {
		const host = fixture.componentInstance;
		moveButtons(1)[0].click();
		fixture.detectChanges();

		expect(host.order()).toEqual(['power', 'name', 'actions']);
	});

	it('disables the move buttons at the ends without making them unfocusable', () => {
		expect(moveButtons(0)[0].getAttribute('aria-disabled')).toBe('true');
		expect(moveButtons(0)[0].hasAttribute('disabled')).toBe(false);
		expect(moveButtons(2)[1].getAttribute('aria-disabled')).toBe('true');
	});
});
