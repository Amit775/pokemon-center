import { LiveAnnouncer } from '@angular/cdk/a11y';
import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import type { ColumnDef, ColumnOrderState, SortingState, ColumnVisibilityState, ColumnFiltersState } from '@tanstack/angular-table';
import { createDataTableColumns, type DataTableFeatures } from './data-table-columns';
import { UiDataTableComponent, type DataTableRowVariant } from './data-table.component';

interface DemoMove {
	name: string;
	power: number;
	accuracy: number;
}

/**
 * Deliberately not in alphabetical or numeric order, so "source order" is distinguishable from
 * either sorted order.
 */
const demoMoves: DemoMove[] = [
	{ name: 'Ember', power: 40, accuracy: 100 },
	{ name: 'Aerial Ace', power: 60, accuracy: 95 },
	{ name: 'Flamethrower', power: 90, accuracy: 85 },
];

const columnHelper = createDataTableColumns<DemoMove>();

/** Module scope, as consumers' columns must be. The display column exercises the non-sortable path. */
const demoColumns = columnHelper.columns([
	columnHelper.accessor('name', { header: 'Name', sortFn: 'alphanumeric' }),
	// `meta` only type-checks its keys because `dataTableFeatures` declares the `columnMeta` slot.
	// Without it, `{ alignment: 'end' }` would compile just as happily and align nothing.
	columnHelper.accessor('power', { header: 'Power', sortFn: 'basic', filterFn: 'inNumberRange', meta: { align: 'end', filterVariant: 'range' } }),
	columnHelper.display({ id: 'actions', header: 'Actions', cell: () => 'edit' }),
]);

/** A second module-scope set, so a runtime column swap can be tested without building one inline. */
const narrowColumns = columnHelper.columns([
	columnHelper.accessor('name', { header: 'Name', sortFn: 'alphanumeric' }),
	columnHelper.accessor('power', { header: 'Power', sortFn: 'basic' }),
]);

type DemoColumns = ColumnDef<DataTableFeatures, DemoMove>[];

@Component({
	selector: 'pokedex-data-table-host',
	changeDetection: ChangeDetectionStrategy.OnPush,
	imports: [UiDataTableComponent],
	template: `<pokedex-data-table [data]="rows()" [columns]="columns()" [(sorting)]="sorting" [(columnVisibility)]="visibility" [(columnOrder)]="order" [(columnFilters)]="columnFilters" [(globalFilter)]="globalFilter" [columnTracks]="tracks()" [rowVariant]="variant()" label="Demo moves" emptyLabel="No moves." />`,
})
class DataTableHostComponent {
	readonly rows = signal<DemoMove[]>(demoMoves);
	readonly columns = signal<DemoColumns>(demoColumns);
	readonly sorting = signal<SortingState>([]);
	readonly visibility = signal<ColumnVisibilityState>({});
	readonly order = signal<ColumnOrderState>([]);
	readonly columnFilters = signal<ColumnFiltersState>([]);
	readonly globalFilter = signal('');
	readonly tracks = signal<Readonly<Record<string, string>> | null>(null);
	readonly variant = signal<((row: DemoMove) => DataTableRowVariant | null) | null>(null);
}

/**
 * `test-setup.ts` calls `setupZonelessTestEnv()`, so these run in the application's change-detection
 * model. Assertions are on rendered text rather than state: state alone proves nothing about repaint.
 */
describe('UiDataTableComponent', () => {
	let fixture: ComponentFixture<DataTableHostComponent>;
	let host: DataTableHostComponent;
	let announce: jest.SpyInstance;

	function element(): HTMLElement {
		return fixture.nativeElement as HTMLElement;
	}

	function grid(): HTMLElement {
		const found = element().querySelector<HTMLElement>('[role="table"]');
		if (!found) throw new Error('the grid is missing');
		return found;
	}

	function headerButtons(): HTMLButtonElement[] {
		return Array.from(element().querySelectorAll<HTMLButtonElement>('.header-cell button'));
	}

	function columnHeaders(): HTMLElement[] {
		return Array.from(element().querySelectorAll<HTMLElement>('[role="columnheader"]'));
	}

	function bodyRows(): HTMLElement[] {
		return Array.from(element().querySelectorAll<HTMLElement>('[role="row"]:not(.header-row)'));
	}

	function nameColumn(): string[] {
		return bodyRows().map((row) => (row.querySelector('.cell')?.textContent ?? '').trim());
	}

	function trackList(): string {
		return grid().style.getPropertyValue('--pokedex-table-columns');
	}

	/** A real click, then a repaint — the event has to travel through Angular's listener on its own. */
	function clickHeader(index: number): void {
		headerButtons()[index].click();
		fixture.detectChanges();
	}

	beforeEach(async () => {
		await TestBed.configureTestingModule({ imports: [DataTableHostComponent] }).compileComponents();
		fixture = TestBed.createComponent(DataTableHostComponent);
		host = fixture.componentInstance;
		// providedIn: 'root', so the component and the test see the same instance without providers.
		announce = jest.spyOn(TestBed.inject(LiveAnnouncer), 'announce');
		fixture.detectChanges();
	});

	afterEach(() => {
		jest.restoreAllMocks();
	});

	it('renders every row in source order when nothing is sorted', () => {
		expect(nameColumn()).toEqual(['Ember', 'Aerial Ace', 'Flamethrower']);
		expect(columnHeaders()).toHaveLength(3);
	});

	it('re-orders the rendered rows when the model is written to directly, with no table involvement', () => {
		// The property a shareable URL is built on: a link carrying a sort restores the view by
		// writing to the consumer's state, never by reaching into the table.
		host.sorting.set([{ id: 'power', desc: true }]);
		fixture.detectChanges();

		expect(nameColumn()).toEqual(['Flamethrower', 'Aerial Ace', 'Ember']);
		expect(columnHeaders()[1].getAttribute('aria-sort')).toBe('descending');
	});

	it('emits the new sort through the model when a header is clicked', () => {
		expect(host.sorting()).toEqual([]);

		clickHeader(0);

		expect(host.sorting()).toEqual([{ id: 'name', desc: false }]);
		expect(nameColumn()).toEqual(['Aerial Ace', 'Ember', 'Flamethrower']);
	});

	// One detectChanges() per click is load-bearing: `getNextSortingOrder` reads the table's atom,
	// which an effect updates, so batched clicks all compute the same direction.
	it('cycles a string column ascending, descending, none', () => {
		clickHeader(0);
		expect(host.sorting()).toEqual([{ id: 'name', desc: false }]);
		expect(columnHeaders()[0].getAttribute('aria-sort')).toBe('ascending');
		expect(nameColumn()).toEqual(['Aerial Ace', 'Ember', 'Flamethrower']);

		clickHeader(0);
		expect(host.sorting()).toEqual([{ id: 'name', desc: true }]);
		expect(columnHeaders()[0].getAttribute('aria-sort')).toBe('descending');
		expect(nameColumn()).toEqual(['Flamethrower', 'Ember', 'Aerial Ace']);

		clickHeader(0);
		expect(host.sorting()).toEqual([]);
		expect(columnHeaders()[0].getAttribute('aria-sort')).toBe('none');
		expect(nameColumn()).toEqual(['Ember', 'Aerial Ace', 'Flamethrower']);
	});

	it('cycles a numeric column descending, ascending, none', () => {
		// Descending first is TanStack's inferred default for numeric values, not a mistake: the
		// first click on "Power" giving the strongest move is what the reader wanted.
		clickHeader(1);
		expect(host.sorting()).toEqual([{ id: 'power', desc: true }]);
		expect(columnHeaders()[1].getAttribute('aria-sort')).toBe('descending');
		expect(nameColumn()).toEqual(['Flamethrower', 'Aerial Ace', 'Ember']);

		clickHeader(1);
		expect(host.sorting()).toEqual([{ id: 'power', desc: false }]);
		expect(columnHeaders()[1].getAttribute('aria-sort')).toBe('ascending');
		expect(nameColumn()).toEqual(['Ember', 'Aerial Ace', 'Flamethrower']);

		clickHeader(1);
		expect(host.sorting()).toEqual([]);
		expect(columnHeaders()[1].getAttribute('aria-sort')).toBe('none');
		expect(nameColumn()).toEqual(['Ember', 'Aerial Ace', 'Flamethrower']);
	});

	/**
	 * Pins the announcer's stale-read trap: swap the model read in `toggleSort` for
	 * `column.getIsSorted()` and every other test still passes while this one reports "not sorted".
	 */
	it('announces the direction it just moved to, not the one it came from', () => {
		clickHeader(1);
		expect(announce).toHaveBeenLastCalledWith('Power sorted descending');

		clickHeader(1);
		expect(announce).toHaveBeenLastCalledWith('Power sorted ascending');

		clickHeader(1);
		expect(announce).toHaveBeenLastCalledWith('Power not sorted');
	});

	it('gives a column that cannot sort neither a button nor an aria-sort', () => {
		// An aria-sort on a column that can never sort is a false promise to a screen reader.
		expect(headerButtons()).toHaveLength(2);
		expect(columnHeaders()[2].hasAttribute('aria-sort')).toBe(false);
		expect(columnHeaders()[2].querySelector('button')).toBeNull();
	});

	/**
	 * jsdom does no layout, so none of this proves the columns *look* right — but the custom property
	 * is the value the whole grid rests on, and it is readable.
	 */
	it('defaults the track list to an even split across the leaf columns', () => {
		expect(trackList()).toBe('repeat(3, minmax(0, 1fr))');
	});

	it('lets columnTracks override the default, keyed by column id', () => {
		host.tracks.set({ name: '2fr', power: '1fr', actions: '1fr' });
		fixture.detectChanges();

		expect(trackList()).toBe('2fr 1fr 1fr');
	});

	it('falls back to a flexible track for any column the map does not mention', () => {
		host.tracks.set({ power: '5rem' });
		fixture.detectChanges();

		expect(trackList()).toBe('minmax(0, 1fr) 5rem minmax(0, 1fr)');
	});

	it('warns in development about a track keyed to a column that does not exist', () => {
		// It cannot misalign anything — an unread key is simply unread — but it is always a mistake,
		// and it is how a renamed column quietly loses the width someone chose for it.
		const warn = jest.spyOn(console, 'warn').mockImplementation(() => undefined);

		host.tracks.set({ name: '2fr', pwoer: '1fr' });
		fixture.detectChanges();

		expect(warn).toHaveBeenCalledWith(expect.stringContaining('unknown columns (pwoer)'));
	});

	/**
	 * The break that actually shipped once: each row is its own grid, so a content-based track
	 * resolves per row — a type column wandered 26px, and `scrollWidth` cannot see it.
	 */
	it('warns in development about a content-based track', () => {
		const warn = jest.spyOn(console, 'warn').mockImplementation(() => undefined);

		host.tracks.set({ name: '2fr', power: 'auto', actions: 'minmax(0, max-content)' });
		fixture.detectChanges();

		expect(warn).toHaveBeenCalledWith(expect.stringContaining('auto, minmax(0, max-content)'));
	});

	it('does not warn about lengths, percentages or fr', () => {
		// `var(--auto-width)` is the false positive worth pinning: it contains `auto` and is fine.
		const warn = jest.spyOn(console, 'warn').mockImplementation(() => undefined);

		host.tracks.set({ name: 'minmax(0, 3fr)', power: '20%', actions: 'var(--auto-width)' });
		fixture.detectChanges();

		expect(warn).not.toHaveBeenCalledWith(expect.stringContaining('content-based track'));
	});

	/**
	 * Runtime column-set reactivity, which nothing else covers. It does *not* pin the explicit
	 * `this.columns()` read — deleting that passes too — but the observable behaviour, which holds
	 * however the dependency is provided.
	 */
	it('recomputes the track list when the column set changes at runtime', () => {
		expect(trackList()).toBe('repeat(3, minmax(0, 1fr))');

		host.columns.set(narrowColumns);
		fixture.detectChanges();

		expect(trackList()).toBe('repeat(2, minmax(0, 1fr))');
		expect(columnHeaders()).toHaveLength(2);
	});

	function headerText(): string[] {
		return columnHeaders().map((header) => (header.textContent ?? '').replace(/[↑↓↕]/g, '').trim());
	}

	it('hides both the header and the cell of a hidden column', () => {
		host.visibility.set({ power: false });
		fixture.detectChanges();

		expect(headerText()).toEqual(['Name', 'Actions']);
		expect(bodyRows()[0].querySelectorAll('.cell')).toHaveLength(2);
	});

	it('follows the visible columns in the track list', () => {
		host.visibility.set({ power: false });
		fixture.detectChanges();

		expect(trackList()).toBe('repeat(2, minmax(0, 1fr))');
	});

	it('gives the empty row a colspan of the visible column count, not the total', () => {
		// The third of the three getAll*/getVisible* sites, and the one that gets forgotten — nothing
		// in the type system objects to leaving it behind.
		host.rows.set([]);
		host.visibility.set({ power: false });
		fixture.detectChanges();

		expect(element().querySelector('.empty-cell')?.getAttribute('aria-colspan')).toBe('2');
	});

	it('renders the header and the empty label when there are no rows', () => {
		host.rows.set([]);
		fixture.detectChanges();

		expect(headerButtons()).toHaveLength(2);
		expect(bodyRows()).toHaveLength(1);
		expect(element().querySelector('.empty-cell')?.textContent?.trim()).toBe('No moves.');
	});

	it('labels the grid for assistive technology', () => {
		expect(grid().getAttribute('aria-label')).toBe('Demo moves');
	});

	/**
	 * The three below carry the same caveat, and it is not a formality:
	 * **`jest-preset-angular` strips component styles**, so nothing here can see a background
	 * colour, a text alignment or a scrollbar. What they prove is that the *hook fires* — the class
	 * lands on the right element, the wrapper exists — and nothing whatsoever about appearance.
	 * Only the browser pass can say the row is tinted, the numbers line up or the table scrolls.
	 */
	it('paints a row variant where the consumer asks for one, and leaves the rest alone', () => {
		expect(bodyRows().every((row) => !row.classList.contains('marked'))).toBe(true);

		host.variant.set((row) => (row.name === 'Aerial Ace' ? 'marked' : null));
		fixture.detectChanges();

		// The static `row` class survives the [class] binding — it merges rather than replacing,
		// which is the property the whole grid layout rests on.
		expect(bodyRows().map((row) => row.classList.contains('marked'))).toEqual([false, true, false]);
		expect(bodyRows().every((row) => row.classList.contains('row'))).toBe(true);

		host.variant.set(null);
		fixture.detectChanges();

		expect(bodyRows().every((row) => !row.classList.contains('marked'))).toBe(true);
		expect(bodyRows().every((row) => row.classList.contains('row'))).toBe(true);
	});

	it('carries a column meta alignment onto the cell and onto its header', () => {
		// The header half is the one worth pinning: a right-aligned column under a left-aligned
		// header reads as a bug, and it is the half an implementer forgets.
		expect(columnHeaders()[1].classList.contains('align-end')).toBe(true);
		expect(columnHeaders()[0].classList.contains('align-end')).toBe(false);

		const firstRowCells = Array.from(bodyRows()[0].querySelectorAll<HTMLElement>('.cell'));
		expect(firstRowCells[1].classList.contains('align-end')).toBe(true);
		expect(firstRowCells[0].classList.contains('align-end')).toBe(false);
	});

	it('wraps the grid in a horizontal scroller', () => {
		// Without it a narrow viewport does not scroll the table, it clips it: .table is
		// overflow: hidden so the header background clips at the radius, and pokedex-card is
		// overflow: hidden as well. A clipped row is unreachable, which is a loss of information.
		const scroller = element().querySelector('.scroller');
		expect(scroller).not.toBeNull();
		expect(scroller?.contains(grid())).toBe(true);
	});

	it('renders the Columns trigger inside the full table', () => {
		const trigger = element().querySelector<HTMLButtonElement>('.columns-trigger');
		expect(trigger).not.toBeNull();
		expect(trigger?.textContent?.trim()).toBe('Columns 3/3');
	});

	it('hides a column when its checkbox is toggled in the Columns panel', () => {
		// Open the Columns panel by clicking the trigger
		const trigger = element().querySelector<HTMLButtonElement>('.columns-trigger');
		expect(trigger).not.toBeNull();
		trigger!.click();
		fixture.detectChanges();

		// Find and click the Power column checkbox
		const panelRows = Array.from(element().querySelectorAll<HTMLElement>('.columns-row'));
		const powerCheckbox = panelRows[1]?.querySelector<HTMLInputElement>('input[type=checkbox]');
		expect(powerCheckbox).not.toBeNull();

		powerCheckbox!.click();
		fixture.detectChanges();

		// Verify the Power column is now hidden from the table
		expect(headerText()).toEqual(['Name', 'Actions']);
		expect(bodyRows()[0].querySelectorAll('.cell')).toHaveLength(2);
	});

	// ---- filtering state ----

	describe('UiDataTableComponent — filtering state', () => {
		it('narrows the rendered rows when columnFilters is written to directly', () => {
			host.columnFilters.set([{ id: 'power', value: [80, 100] }]);
			fixture.detectChanges();

			expect(nameColumn()).toEqual(['Flamethrower']);
		});

		it('narrows the rendered rows when globalFilter is written to directly', () => {
			host.globalFilter.set('aerial');
			fixture.detectChanges();

			expect(nameColumn()).toEqual(['Aerial Ace']);
		});

		it('clearing globalFilter restores every row', () => {
			host.globalFilter.set('aerial');
			fixture.detectChanges();
			host.globalFilter.set('');
			fixture.detectChanges();

			expect(nameColumn()).toEqual(['Ember', 'Aerial Ace', 'Flamethrower']);
		});

		it('renders the Filters panel and narrows the table when a filterable column is checked', () => {
			const trigger = element().querySelector<HTMLButtonElement>('.filters-trigger');
			if (!trigger) throw new Error('the Filters trigger is missing');
			trigger.click();
			fixture.detectChanges();

			const min = element().querySelector<HTMLInputElement>('input[type=number][data-column-id="power"][data-bound="min"]');
			if (!min) throw new Error('no min input for power');
			min.value = '70';
			min.dispatchEvent(new Event('input'));
			fixture.detectChanges();

			expect(nameColumn()).toEqual(['Flamethrower']);
		});
	});
});
