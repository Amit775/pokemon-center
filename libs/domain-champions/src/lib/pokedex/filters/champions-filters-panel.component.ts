import { ChangeDetectionStrategy, Component } from '@angular/core';
import type { IToolPanelAngularComp } from 'ag-grid-angular';
import type { IToolPanelParams } from 'ag-grid-community';

/** The side-bar id used both to register this panel and to open it, so the two never drift apart. */
export const CHAMPIONS_FILTERS_PANEL_ID = 'championsFilters';

/**
 * The third side-bar tool panel, alongside AG Grid's own Columns and Filters panels — see
 * `https://www.ag-grid.com/archive/36.1.0/angular-data-grid/component-tool-panel/`.
 *
 * An empty shell for now: this task builds the registration and the external filter engine
 * (`ExternalFiltersStore`) it will read from, and a follow-up task fills this panel with the
 * matchup, counter, move-learner, owned-only and Mega controls. Registered only at the roster's
 * call site, not in the shared `pokedexSideBar` default the other four grids use.
 */
@Component({
	selector: 'champions-filters-panel',
	changeDetection: ChangeDetectionStrategy.OnPush,
	template: `
		<p class="placeholder">Matchup, counter, move-learner, owned-only and Mega filters land here in a follow-up task.</p>
	`,
	styles: `
		:host {
			display: block;
			padding: var(--s-3, 0.75rem);
		}

		.placeholder {
			margin: 0;
			font-size: var(--fs-sm, 0.875rem);
			color: var(--ink-muted);
			line-height: 1.5;
		}
	`,
})
export class ChampionsFiltersPanelComponent implements IToolPanelAngularComp {
	agInit(_params: IToolPanelParams): void {
		// Nothing to initialize yet — the panel has no controls until a follow-up task adds them.
	}

	refresh(_params: IToolPanelParams): boolean {
		// No per-instance state to reconcile yet; returning `true` tells AG Grid not to recreate us.
		return true;
	}
}
