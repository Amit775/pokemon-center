import { LiveAnnouncer } from '@angular/cdk/a11y';
import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import type { ColumnDef, SortingState } from '@tanstack/angular-table';
import { createDataTableColumns, type DataTableFeatures } from './data-table-columns';
import { UiDataTableComponent } from './data-table.component';

interface DemoMove {
	name: string;
	power: number;
}

/**
 * Deliberately not in alphabetical or numeric order, so "source order" is distinguishable from
 * either sorted order.
 */
const demoMoves: DemoMove[] = [
	{ name: 'Ember', power: 40 },
	{ name: 'Aerial Ace', power: 60 },
	{ name: 'Flamethrower', power: 90 },
];

const columnHelper = createDataTableColumns<DemoMove>();

/**
 * Module scope, as every consumer's columns must be — a fresh array on each change detection would
 * invalidate the memo dependency for every column, header group and cell.
 *
 * The display column is here to exercise the non-sortable path: it has no accessor, so
 * `getCanSort()` is false for it, and it must render neither a button nor an `aria-sort`.
 */
const demoColumns = columnHelper.columns([
	columnHelper.accessor('name', { header: 'Name', sortFn: 'alphanumeric' }),
	columnHelper.accessor('power', { header: 'Power', sortFn: 'basic' }),
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
	template: `<pokedex-data-table [data]="rows()" [columns]="columns()" [(sorting)]="sorting" [columnTracks]="tracks()" label="Demo moves" emptyLabel="No moves." />`,
})
class DataTableHostComponent {
	readonly rows = signal<DemoMove[]>(demoMoves);
	readonly columns = signal<DemoColumns>(demoColumns);
	readonly sorting = signal<SortingState>([]);
	readonly tracks = signal<readonly string[] | null>(null);
}

/**
 * `src/test-setup.ts` calls `setupZonelessTestEnv()`, so these run in the same change detection
 * model as the application: no Zone.js, nothing patching `addEventListener`, and
 * `detectChanges()` repainting only what a signal actually invalidated. That is why every
 * assertion below is on rendered text rather than on state — state alone would prove nothing about
 * the repaint, which is the whole question.
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

	// Each click is followed by its own detectChanges(), and that is load-bearing rather than
	// stylistic: `getNextSortingOrder` derives from the table's sorting atom, which an Angular effect
	// updates, so clicks batched into a single tick all compute the same next direction and the
	// second one is a no-op. A real user never hits this; three .click() calls followed by one
	// detectChanges() hits it every time and reads like a library bug.
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
	 * The one assertion that pins the announcer's stale-read trap.
	 *
	 * `injectTable` pushes options into the table through an Angular effect, so inside the click
	 * handler `column.getIsSorted()` still holds the **pre-click** value. Swap the model read in
	 * `toggleSort` for `column.getIsSorted()` and every other test in this file still passes while
	 * the component announces "Power not sorted" on the click that just sorted it descending — which
	 * is why this test exists and why the first assertion is the load-bearing one.
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
	 * jsdom does no layout, so nothing here proves the columns *look* right — but the custom
	 * property is the single value the entire grid rests on, and it is readable. What these pin is
	 * that it is written at all, that the override replaces the default, and that a wrong track
	 * count is not silent.
	 */
	it('defaults the track list to an even split across the leaf columns', () => {
		expect(trackList()).toBe('repeat(3, minmax(0, 1fr))');
	});

	it('lets columnTracks override the default', () => {
		host.tracks.set(['2fr', '1fr', '1fr']);
		fixture.detectChanges();

		expect(trackList()).toBe('2fr 1fr 1fr');
	});

	it('warns in development when the track count does not match the column count', () => {
		// The only guard on a break no test can catch: a wrong count silently wraps each row onto
		// implicit grid rows, and jsdom cannot see that happen.
		const warn = jest.spyOn(console, 'warn').mockImplementation(() => undefined);

		host.tracks.set(['2fr', '1fr']);
		fixture.detectChanges();

		expect(warn).toHaveBeenCalledWith(expect.stringContaining('columnTracks has 2 entries but the table has 3 columns'));
	});

	/**
	 * Runtime column-set reactivity, which nothing else here covers: every other track-list test
	 * either goes through `columnTracks` or never changes the column set.
	 *
	 * It does **not** pin the explicit `this.columns()` read in `gridTemplateColumns` — that was
	 * checked by deleting the line, and this test still passed, because reaching through
	 * `this.table` establishes a dependency of its own. What this pins is the observable behaviour:
	 * swap the columns and the track list follows. That holds however the dependency is provided,
	 * which is the property worth protecting.
	 */
	it('recomputes the track list when the column set changes at runtime', () => {
		expect(trackList()).toBe('repeat(3, minmax(0, 1fr))');

		host.columns.set(narrowColumns);
		fixture.detectChanges();

		expect(trackList()).toBe('repeat(2, minmax(0, 1fr))');
		expect(columnHeaders()).toHaveLength(2);
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
});
