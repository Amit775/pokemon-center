import { Component, signal } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import type { ColDef, PostSortRows, RowClassRules } from 'ag-grid-community';
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
});
