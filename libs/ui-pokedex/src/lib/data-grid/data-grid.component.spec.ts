import { Component, signal } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import type { IFilterDisplayAngularComp } from 'ag-grid-angular';
import type { ColDef, DoesFilterPassParams, FilterDisplayParams, GridApi, GridReadyEvent, PostSortRows, RowClassRules } from 'ag-grid-community';
import { readFileSync } from 'node:fs';
import { join } from 'node:path';
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

@Component({
	selector: 'pokedex-data-grid-row-class-test-host',
	imports: [UiDataGridComponent],
	template: `<pokedex-data-grid [rowData]="rowData()" [columnDefs]="columnDefs()" [getRowId]="getRowId" [rowClassRules]="rowClassRules" />`,
})
class DataGridRowClassTestHostComponent {
	readonly rowData = signal(rows);
	readonly columnDefs = signal(columns);
	readonly getRowId = (params: { data: DemoRow }) => params.data.id;
	readonly rowClassRules: RowClassRules<DemoRow> = { marked: (params) => params.data?.id === '2' };
}

@Component({
	selector: 'pokedex-data-grid-post-sort-test-host',
	imports: [UiDataGridComponent],
	template: `<pokedex-data-grid [rowData]="rowData()" [columnDefs]="columnDefs()" [getRowId]="getRowId" [postSortRows]="postSortRows" />`,
})
class DataGridPostSortTestHostComponent {
	readonly rowData = signal(rows);
	readonly columnDefs = signal(columns);
	readonly getRowId = (params: { data: DemoRow }) => params.data.id;
	/** Reverses the grid's natural (insertion) order — highest `power` first. */
	readonly postSortRows: PostSortRows<DemoRow> = (params) => {
		params.nodes.sort((first, second) => (second.data?.power ?? 0) - (first.data?.power ?? 0));
	};
}

/**
 * A minimal custom column filter (`filter: { component, doesFilterPass }`), the shape that only
 * works when the grid has `enableFilterHandlers` set. It has no real UI of its own — the test below
 * drives it purely through `api.setFilterModel`, never through the popup — because the thing under
 * test is whether `doesFilterPass` gets called at all, not the filter's own affordance.
 */
@Component({
	selector: 'pokedex-data-grid-trivial-filter',
	template: '',
})
class TrivialPowerFilterComponent implements IFilterDisplayAngularComp<DemoRow, unknown, number> {
	agInit(_params: FilterDisplayParams<DemoRow, unknown, number>): void {
		/* no UI: the model is set directly via api.setFilterModel in the test */
	}

	refresh(_params: FilterDisplayParams<DemoRow, unknown, number>): boolean {
		return true;
	}
}

const customFilterColumns: ColDef<DemoRow>[] = [
	{ field: 'name' },
	{
		colId: 'power',
		field: 'power',
		filter: {
			component: TrivialPowerFilterComponent,
			doesFilterPass: ({ model, data }: DoesFilterPassParams<DemoRow, unknown, number>) => data.power >= model,
		},
	},
];

@Component({
	selector: 'pokedex-data-grid-custom-filter-test-host',
	imports: [UiDataGridComponent],
	template: `<pokedex-data-grid [rowData]="rowData()" [columnDefs]="columnDefs()" [getRowId]="getRowId" (gridReady)="onGridReady($event)" />`,
})
class DataGridCustomFilterTestHostComponent {
	readonly rowData = signal(rows);
	readonly columnDefs = signal(customFilterColumns);
	readonly getRowId = (params: { data: DemoRow }) => params.data.id;
	api?: GridApi<DemoRow>;

	onGridReady(event: GridReadyEvent<DemoRow>): void {
		this.api = event.api;
	}
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

	it('forwards rowClassRules to ag-grid-angular so a rule can mark a specific row', async () => {
		const fixture = TestBed.createComponent(DataGridRowClassTestHostComponent);
		fixture.detectChanges();
		await fixture.whenStable();
		fixture.detectChanges();

		const element: HTMLElement = fixture.nativeElement;
		const rowsWithClass = Array.from(element.querySelectorAll('[row-id]')).filter((row) => row.classList.contains('marked'));
		expect(rowsWithClass).toHaveLength(1);
		expect(rowsWithClass[0].getAttribute('row-id')).toBe('2');
	});

	it('forwards postSortRows to ag-grid-angular so a ranking can reorder rows after the grid sorts', async () => {
		const fixture = TestBed.createComponent(DataGridPostSortTestHostComponent);
		fixture.detectChanges();
		await fixture.whenStable();
		fixture.detectChanges();

		const element: HTMLElement = fixture.nativeElement;
		const rowIds = Array.from(element.querySelectorAll('[row-id]')).map((row) => row.getAttribute('row-id'));

		// Natural (insertion) order is ['1', '2']; the host's postSortRows ranks by power
		// descending, so this only holds if the input actually reaches ag-grid-angular.
		expect(rowIds).toEqual(['2', '1']);
	});

	it('gives the grid container an explicit height, without which AG Grid renders at zero height', () => {
		// Not testable via a rendered fixture in this repo's Jest setup: `jest-preset-angular`'s
		// `replaceResources` transformer (build/transformers/replace-resources.js) strips every
		// Component's `styles` property — array or (as here) template-literal string — from the
		// decorator before compilation, for every component in every spec, not just this one.
		// Confirmed empirically: `TestBed.createComponent` here produces zero `<style>` elements,
		// no `adoptedStyleSheets`, and no inline `style` attribute anywhere in the document, so
		// `getComputedStyle(host).height` is `''` whether or not the `:host { height: ... }` rule
		// exists in the source — verified by temporarily deleting the rule and re-running: the
		// result was identical (`''`) in both cases. A DOM-rendered assertion here cannot fail
		// (the exact defect this fix was asked to close), it can only ever produce a false pass.
		//
		// So this guards the rule the only way that is actually falsifiable under this pipeline:
		// reading the component's own source. It fails the moment the `height:` declaration
		// referencing the custom property is removed, and real rendered height is left to Task 16's
		// browser check, same as row-rendering is for the test above.
		const source = readFileSync(join(__dirname, 'data-grid.component.ts'), 'utf8');
		expect(source).toMatch(/height:\s*var\(--pokedex-grid-height,\s*600px\)/);
	});

	/**
	 * Guards `[enableFilterHandlers]="true"` on the wrapper itself. Every other custom-filter test in
	 * this codebase (Champions' Types and stat-range filters) passes that flag to its own headless
	 * `createGrid` call, so none of them would notice if the wrapper stopped setting it. This one
	 * renders through `UiDataGridComponent` and drives a custom `filter: { component, doesFilterPass }`
	 * column purely via `api.setFilterModel` — the same technique `pokedex-grid-columns.spec.ts` uses —
	 * so it fails if `enableFilterHandlers` is ever removed from the template.
	 *
	 * Falsifiability confirmed by hand: temporarily deleting `[enableFilterHandlers]="true"` from
	 * `data-grid.component.ts` makes this test fail (both rows stay visible because `doesFilterPass`
	 * is never called), and restoring it makes it pass again.
	 */
	it('sets enableFilterHandlers on the grid so a custom column filter actually filters rows', async () => {
		const fixture = TestBed.createComponent(DataGridCustomFilterTestHostComponent);
		fixture.detectChanges();
		await fixture.whenStable();
		fixture.detectChanges();

		// AG Grid defers framework (Angular) cell renderer / gridReady wiring into its own
		// requestAnimationFrame-scheduled task queue, which `whenStable()` does not track in this
		// zoneless app — same technique `roster.component.spec.ts`'s `flushFrameworkCellRenderers`
		// uses, copied from `pokemon-shell.component.spec.ts`.
		for (let i = 0; i < 6; i++) {
			await new Promise((resolve) => requestAnimationFrame(resolve));
		}
		fixture.detectChanges();

		const api = fixture.componentInstance.api;
		if (!api) throw new Error('gridReady never fired');

		const displayedRowCount = () => {
			let count = 0;
			api.forEachNodeAfterFilter(() => count++);
			return count;
		};

		expect(displayedRowCount()).toBe(2);

		api.setFilterModel({ power: 50 });
		await fixture.whenStable();
		fixture.detectChanges();

		expect(displayedRowCount()).toBe(1);
	});
});
