import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';
import type {
	ColDef,
	GetRowIdFunc,
	GridReadyEvent,
	GridState,
	IRowNode,
	IsExternalFilterPresent,
	RowClassRules,
	SideBarDef,
	StateUpdatedEvent,
} from 'ag-grid-community';
import { pokedexDefaultColDef, pokedexSideBar } from './data-grid.defaults';
import { pokedexGridTheme } from './data-grid.theme';

/**
 * The one grid in the design system.
 *
 * Deliberately thin: AG Grid is the product, and wrapping its API in our own would mean
 * re-implementing and then maintaining a second, worse version of it. This owns only what must be
 * identical everywhere — the theme, the shared defaults, the side bar, and the container height
 * AG Grid needs but cannot supply itself, plus `enableFilterHandlers` below.
 *
 * `enableFilterHandlers` is required for any custom (application-authored) column filter registered
 * as `filter: { component, doesFilterPass }` — e.g. Champions' Types column filter. Without it, the
 * grid still renders that component's popup, but silently never calls `doesFilterPass`: the v36 docs
 * say so directly ("To configure custom filters, first enable the grid option
 * `enableFilterHandlers`"), and it is confirmed by the shipped source
 * (`ColumnFilterService.createHandlerFunc` in `ag-grid-community`), which only reads
 * `filter.doesFilterPass`/`filter.handler` off the column def when this flag is on. Grid-provided
 * filters (`agSetColumnFilter`, `agNumberColumnFilter`, …) are unaffected — they always use filter
 * handlers regardless of this option — so turning it on here is additive, not a behavior change for
 * every other column already on this grid.
 */
@Component({
	selector: 'pokedex-data-grid',
	changeDetection: ChangeDetectionStrategy.OnPush,
	imports: [AgGridAngular],
	template: `
		<ag-grid-angular
			[theme]="theme"
			[enableFilterHandlers]="true"
			[rowData]="rowData()"
			[columnDefs]="columnDefs()"
			[defaultColDef]="defaultColDef()"
			[sideBar]="sideBar()"
			[getRowId]="getRowId()"
			[initialState]="initialState()"
			[isExternalFilterPresent]="isExternalFilterPresent()"
			[doesExternalFilterPass]="doesExternalFilterPass()"
			[rowClassRules]="rowClassRules()"
			(gridReady)="gridReady.emit($event)"
			(stateUpdated)="stateUpdated.emit($event)"
		/>
	`,
	styles: `
		:host {
			display: block;
			/*
				AG Grid fills its parent under the default domLayout, so a container with no intrinsic
				height renders the grid at zero height. Consumers override the custom property.
			*/
			height: var(--pokedex-grid-height, 600px);
			width: 100%;
		}

		ag-grid-angular {
			height: 100%;
			width: 100%;
		}
	`,
})
export class UiDataGridComponent<TRow> {
	readonly rowData = input.required<TRow[]>();
	readonly columnDefs = input.required<ColDef<TRow>[]>();

	/** Required by AG Grid for correct row identity across data updates. Must be pure and stable. */
	readonly getRowId = input<GetRowIdFunc<TRow> | undefined>(undefined);

	readonly defaultColDef = input<ColDef>(pokedexDefaultColDef);
	readonly sideBar = input<SideBarDef | boolean>(pokedexSideBar);
	readonly initialState = input<GridState | undefined>(undefined);

	/** External Filter API — used by cross-cutting filters that are not bound to a column. */
	readonly isExternalFilterPresent = input<IsExternalFilterPresent<TRow> | undefined>(undefined);
	readonly doesExternalFilterPass = input<((node: IRowNode<TRow>) => boolean) | undefined>(undefined);

	/**
	 * Conditional row CSS classes (e.g. a "currently selected" highlight for a master-detail view).
	 * AG Grid only re-evaluates these when told to — a consumer driving the rule from state outside
	 * the grid (like a route param) must call `api.redrawRows()` itself after that state changes.
	 */
	readonly rowClassRules = input<RowClassRules<TRow> | undefined>(undefined);

	readonly gridReady = output<GridReadyEvent<TRow>>();
	readonly stateUpdated = output<StateUpdatedEvent<TRow>>();

	protected readonly theme = pokedexGridTheme;
}
