import { ChangeDetectionStrategy, Component } from '@angular/core';
import type { IToolPanelAngularComp } from 'ag-grid-angular';
import type { IToolPanelParams } from 'ag-grid-community';
import { CounterFilterComponent } from './counter-filter.component';
import { MatchupFilterComponent } from './matchup-filter.component';

/** The side-bar id used both to register this panel and to open it, so the two never drift apart. */
export const CHAMPIONS_FILTERS_PANEL_ID = 'championsFilters';

/**
 * The third side-bar tool panel, alongside AG Grid's own Columns and Filters panels — see
 * `https://www.ag-grid.com/archive/36.1.0/angular-data-grid/component-tool-panel/`.
 *
 * Houses the cross-cutting Champions filters that read more than one column or data outside any
 * entry entirely — Task 12 built the engine (`ExternalFiltersStore`) both controls below mutate
 * directly, and the roster's own `rerunExternalFilter` effect re-runs the grid's filter whenever
 * that store's `version` changes, so neither control here talks to the grid at all.
 *
 * Move-learner, owned-only and Mega controls land here in a follow-up task.
 */
@Component({
	selector: 'champions-filters-panel',
	changeDetection: ChangeDetectionStrategy.OnPush,
	imports: [CounterFilterComponent, MatchupFilterComponent],
	template: `
		<champions-counter-filter />

		<fieldset>
			<legend>Matchup</legend>
			<champions-matchup-filter />
		</fieldset>

		<p class="placeholder">Move-learner, owned-only and Mega filters land here in a follow-up task.</p>
	`,
	styles: `
		:host {
			display: block;
			padding: var(--s-3, 0.75rem);
		}

		fieldset {
			border: none;
			border-top: 1px solid var(--line);
			margin: 0 0 var(--s-3, 0.75rem);
			padding: var(--s-3, 0.75rem) 0 0;
			display: grid;
			gap: var(--s-2, 0.5rem);
		}

		legend {
			padding: 0;
			font-size: var(--fs-xs, 0.75rem);
			text-transform: uppercase;
			letter-spacing: 0.12em;
			color: var(--ink-muted);
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
		// Both controls read/write `ExternalFiltersStore` (provided in root) directly — nothing
		// from the params is needed to initialize them.
	}

	refresh(_params: IToolPanelParams): boolean {
		// No per-instance state to reconcile here; returning `true` tells AG Grid not to recreate us.
		return true;
	}
}
