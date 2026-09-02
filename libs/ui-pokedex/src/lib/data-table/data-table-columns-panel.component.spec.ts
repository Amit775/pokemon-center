import { LiveAnnouncer } from '@angular/cdk/a11y';
import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { functionalUpdate, injectTable, type ColumnOrderState, type ColumnVisibilityState } from '@tanstack/angular-table';
import { createDataTableColumns, dataTableFeatures } from './data-table-columns';
import { DataTableColumnsPanelComponent } from './data-table-columns-panel.component';

interface DemoRow {
	name: string;
	power: number;
	accuracy?: number;
}

const columnHelper = createDataTableColumns<DemoRow>();
const columns = columnHelper.columns([
	columnHelper.accessor('name', { header: 'Name' }),
	columnHelper.accessor('power', { header: 'Power' }),
	columnHelper.display({ id: 'actions', header: 'Actions', cell: () => 'edit' }),
]);

/**
 * Four columns, for the reordering tests. Three cannot discriminate: with the hidden column between
 * the swapped pair, the right algorithm and the wrong one agree.
 */
const fourColumns = columnHelper.columns([
	columnHelper.accessor('name', { header: 'Name' }),
	columnHelper.accessor('power', { header: 'Power' }),
	columnHelper.accessor('accuracy', { header: 'Accuracy' }),
	columnHelper.display({ id: 'actions', header: 'Actions', cell: () => 'edit' }),
]);

const rows: DemoRow[] = [{ name: 'Ember', power: 40, accuracy: 100 }];

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

@Component({
	selector: 'pokedex-columns-panel-host-four',
	changeDetection: ChangeDetectionStrategy.OnPush,
	imports: [DataTableColumnsPanelComponent],
	template: `<pokedex-data-table-columns-panel [table]="table" label="Demo moves" />`,
})
class ColumnsPanelHostFourColumnsComponent {
	readonly visibility = signal<ColumnVisibilityState>({});
	readonly order = signal<ColumnOrderState>([]);

	readonly table = injectTable(() => ({
		features: dataTableFeatures,
		columns: fourColumns,
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

		checkboxAt(1).click();
		fixture.detectChanges();

		expect(announce).toHaveBeenLastCalledWith('Power shown');
	});

	it('refuses to hide the last visible column, and puts the checkbox back', () => {
		checkboxAt(1).click();
		checkboxAt(2).click();
		fixture.detectChanges();

		const nameCheckbox = checkboxAt(0);
		expect(nameCheckbox.getAttribute('aria-disabled')).toBe('true');

		// aria-disabled keeps it focusable, so the browser still flips the box; the handler has to
		// put it back or the DOM disagrees with the table.
		nameCheckbox.click();
		fixture.detectChanges();

		expect(nameCheckbox.checked).toBe(true);
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

describe('DataTableColumnsPanelComponent (with four columns)', () => {
	let fixture: ComponentFixture<ColumnsPanelHostFourColumnsComponent>;
	let announce: jest.SpyInstance;

	function element(): HTMLElement {
		return fixture.nativeElement as HTMLElement;
	}

	function panelRows(): HTMLElement[] {
		return Array.from(element().querySelectorAll<HTMLElement>('.columns-row'));
	}

	function moveButtons(rowIndex: number): HTMLButtonElement[] {
		const row = panelRows()[rowIndex];
		if (!row) throw new Error(`no panel row at index ${rowIndex}`);
		return Array.from(row.querySelectorAll<HTMLButtonElement>('button.move'));
	}

	beforeEach(async () => {
		await TestBed.configureTestingModule({ imports: [ColumnsPanelHostFourColumnsComponent] }).compileComponents();
		fixture = TestBed.createComponent(ColumnsPanelHostFourColumnsComponent);
		announce = jest.spyOn(TestBed.inject(LiveAnnouncer), 'announce');
		fixture.detectChanges();
	});

	afterEach(() => jest.restoreAllMocks());

	it('renders four columns in the panel', () => {
		expect(panelRows()).toHaveLength(4);
	});

	it('leaves a hidden column where it was when other columns are reordered', () => {
		const host = fixture.componentInstance;
		host.visibility.set({ name: false });
		fixture.detectChanges();

		// All four column rows still render (including the hidden Name). Move Accuracy (row 2) left.
		// The panel shows: Name (hidden, row 0), Power (row 1), Accuracy (row 2), Actions (row 3).
		moveButtons(2)[0].click(); // Move Accuracy left
		fixture.detectChanges();

		// Name is hidden at index 0 and must not move when Accuracy moves past Power.
		expect(host.order()).toEqual(['name', 'accuracy', 'power', 'actions']);
	});

	it('skips over a hidden neighbour rather than swapping with it', () => {
		// Swapping with the hidden column would reorder the model and change nothing on screen — a
		// control that looks broken because it did nothing.
		const host = fixture.componentInstance;
		host.visibility.set({ power: false });
		fixture.detectChanges();

		// Panel rows: Name (row 0), Power (hidden, row 1), Accuracy (row 2), Actions (row 3).
		// Move Accuracy (row 2) left, skipping over the hidden Power column.
		moveButtons(2)[0].click();
		fixture.detectChanges();

		// Accuracy should move past the hidden Power and land before Name.
		expect(host.order()).toEqual(['accuracy', 'name', 'power', 'actions']);
	});
});
