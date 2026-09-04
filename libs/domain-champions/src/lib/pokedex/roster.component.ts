import { ChangeDetectionStrategy, Component, computed, effect, inject, untracked } from '@angular/core';
import { RouterLink } from '@angular/router';
import type { GetRowIdFunc, GridApi, GridReadyEvent, IRowNode, SideBarDef } from 'ag-grid-community';
import { UiDataGridComponent, UiSkeletonComponent, pokedexSideBar } from '@pokemon-center/ui-pokedex';
import { CompareTrayComponent } from './compare-tray.component';
import { ChampionsFiltersPanelComponent, CHAMPIONS_FILTERS_PANEL_ID } from './filters/champions-filters-panel.component';
import { ExternalFiltersStore } from './filters/external-filters.store';
import { pokedexGridColumns } from './pokedex-grid-columns';
import type { PokedexEntry } from './pokedex-filter';
import { PokedexStore } from './pokedex.store';

/**
 * The shared side bar plus a third panel that belongs only here: the cross-cutting Champions
 * filters (`ExternalFiltersStore`), which no other grid has a use for. Extending `pokedexSideBar`
 * rather than editing it keeps the other four grids on the shared Columns/Filters-only side bar.
 */
const rosterSideBar: SideBarDef = {
	...pokedexSideBar,
	toolPanels: [
		...(pokedexSideBar.toolPanels ?? []),
		{
			id: CHAMPIONS_FILTERS_PANEL_ID,
			labelDefault: 'Champions filters',
			labelKey: 'championsFilters',
			iconKey: 'filter',
			toolPanel: ChampionsFiltersPanelComponent,
		},
	],
};

/**
 * The Champions Pokédex.
 *
 * Base forms only for now — Mega rows are a separate, not-yet-designed follow-up (sub-row vs.
 * `rowExpandingFeature` vs. their own row; see docs/superpowers/specs/2026-09-03-champions-pokedex-data-table-design.md).
 *
 * Types and stat ranges are AG Grid column filters, owned by the grid's own column state. The
 * rest of the old filter sidebar (matchup, counter search, move-learner search, owned-only, Mega)
 * reads more than one column or data outside any column, so it runs through AG Grid's External
 * Filter API instead: `ExternalFiltersStore` is the filter state, `isExternalFilterPresent`/
 * `doesExternalFilterPass` below are what the grid calls, and its own tool panel (registered in
 * `rosterSideBar` above) is where those filters will get their controls in a follow-up task.
 */
@Component({
	selector: 'champions-roster',
	changeDetection: ChangeDetectionStrategy.OnPush,
	imports: [CompareTrayComponent, RouterLink, UiDataGridComponent, UiSkeletonComponent],
	template: `
		<header class="masthead">
			<h1>Pokédex</h1>
			<a routerLink="/champions/pokedex/changes">What Champions changed →</a>
		</header>

		@if (store.isLoading()) {
			<pokedex-skeleton height="18rem" />
		} @else if (store.error()) {
			<p class="empty">
				The Champions API is not answering on <code>:3001</code>. Start it with
				<code>nx serve champions-service</code>.
			</p>
		} @else {
			<pokedex-data-grid
				[rowData]="entries()"
				[columnDefs]="columns"
				[getRowId]="getRowId"
				[sideBar]="sideBar"
				[isExternalFilterPresent]="isExternalFilterPresent"
				[doesExternalFilterPass]="doesExternalFilterPass"
				(gridReady)="onGridReady($event)"
			/>
		}

		<champions-compare-tray />
	`,
	styles: `
		:host {
			display: block;
			padding: var(--s-5, 1.5rem);
			max-width: 84rem;
			margin-inline: auto;
			--pokedex-grid-height: calc(100vh - 14rem);
		}

		.masthead {
			display: flex;
			justify-content: space-between;
			align-items: baseline;
			gap: var(--s-4, 1rem);
			flex-wrap: wrap;
			margin-bottom: var(--s-4, 1rem);
		}

		h1 {
			margin: 0;
			font-size: var(--fs-2xl, 2rem);
			letter-spacing: -0.02em;
		}

		.masthead a {
			font-size: var(--fs-sm, 0.875rem);
			color: var(--accent, #4f6df5);
			text-decoration: none;
			padding: 0.35rem 0.7rem;
			border: 1.5px solid var(--line);
			border-radius: var(--r-md, 8px);
			white-space: nowrap;
		}

		.masthead a:hover {
			border-color: var(--accent, #4f6df5);
		}

		.empty {
			color: var(--ink-muted);
			line-height: 1.6;
		}

		code {
			font-family: ui-monospace, monospace;
			font-size: 0.9em;
			background: var(--surface-sunken, rgba(128, 128, 128, 0.12));
			padding: 0.1em 0.35em;
			border-radius: var(--r-sm, 4px);
		}
	`,
})
export default class RosterComponent {
	protected readonly store = inject(PokedexStore);
	protected readonly externalFilters = inject(ExternalFiltersStore);

	/** Base forms only — Mega rows are excluded from this pass entirely, not merely hidden. */
	protected readonly entries = computed<PokedexEntry[]>(() => this.store.entries().filter((entry) => !entry.isMega));

	protected readonly columns = pokedexGridColumns;
	protected readonly getRowId: GetRowIdFunc<PokedexEntry> = (params) => params.data.slug;
	protected readonly sideBar = rosterSideBar;

	protected readonly isExternalFilterPresent = () => this.externalFilters.isPresent();
	protected readonly doesExternalFilterPass = (node: IRowNode<PokedexEntry>) => (node.data ? this.externalFilters.passes(node.data) : true);

	private gridApi: GridApi<PokedexEntry> | null = null;

	protected onGridReady(event: GridReadyEvent<PokedexEntry>): void {
		this.gridApi = event.api;
	}

	/**
	 * The grid does not watch `ExternalFiltersStore`'s signals — it only re-runs
	 * `doesExternalFilterPass` when told to. `version` is bumped by every mutation on the store,
	 * so reading it here and calling `onFilterChanged` on change is the one wire every filter
	 * needs, rather than one per field. Guarded for the window before `gridReady` fires.
	 */
	private readonly rerunExternalFilter = effect(() => {
		this.externalFilters.version();
		untracked(() => this.gridApi?.onFilterChanged());
	});
}
