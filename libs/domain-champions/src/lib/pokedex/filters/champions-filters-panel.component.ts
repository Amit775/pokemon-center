import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import type { IToolPanelAngularComp } from 'ag-grid-angular';
import type { GridApi, IToolPanelParams } from 'ag-grid-community';
import type { MegaFilter, PokedexEntry } from '../pokedex-filter';
import { CounterFilterComponent } from './counter-filter.component';
import { ExternalFiltersStore } from './external-filters.store';
import { FilterSetsComponent } from './filter-sets.component';
import { MatchupFilterComponent } from './matchup-filter.component';
import { MoveLearnerFilterComponent } from './move-learner-filter.component';
import { OwnershipFilterComponent } from './ownership-filter.component';

/** The side-bar id used both to register this panel and to open it, so the two never drift apart. */
export const CHAMPIONS_FILTERS_PANEL_ID = 'championsFilters';

/** Empty → has a Mega → has no Mega → empty — the exact order the retired sidebar's `cycleMega` used. */
const MEGA_CYCLE: Record<MegaFilter, MegaFilter> = { any: 'has-mega', 'has-mega': 'no-mega', 'no-mega': 'any' };

/**
 * The third side-bar tool panel, alongside AG Grid's own Columns and Filters panels — see
 * `https://www.ag-grid.com/archive/36.1.0/angular-data-grid/component-tool-panel/`.
 *
 * Houses the cross-cutting Champions filters that read more than one column or data outside any
 * entry entirely — Task 12 built the engine (`ExternalFiltersStore`) every control below mutates
 * directly, and the roster's own `rerunExternalFilter` effect re-runs the grid's filter whenever
 * that store's `version` changes, so nothing here talks to the grid at all.
 *
 * The Mega tri-state lives inline rather than as its own component: unlike the move-learner and
 * ownership controls (each with its own async fetch or its own hide-when-empty rule to get
 * wrong), it is one button whose entire behavior is "cycle `ExternalFiltersStore.mega` and reflect
 * it back" — see `cycleMega` below, ported from the retired sidebar's `PokedexStore.cycleMega`.
 *
 * Task 15's saved-sets UI (`FilterSetsComponent`) also lives here rather than as a fourth side-bar
 * tab, because it needs to read and write the grid's own column filter model as well as this
 * store — and `agInit` below is the one place in this component tree that receives the grid's
 * `GridApi` for free, via `IToolPanelParams`.
 */
@Component({
	selector: 'champions-filters-panel',
	changeDetection: ChangeDetectionStrategy.OnPush,
	imports: [CounterFilterComponent, FilterSetsComponent, MatchupFilterComponent, MoveLearnerFilterComponent, OwnershipFilterComponent],
	template: `
		<champions-counter-filter />

		<champions-ownership-filter />

		<fieldset>
			<legend>Matchup</legend>
			<champions-matchup-filter />
		</fieldset>

		<fieldset>
			<legend>Move</legend>
			<champions-move-learner-filter />
		</fieldset>

		<fieldset>
			<legend>Mega Evolution</legend>
			<!--
				One control, three states, cycled by clicking. A pair of checkboxes for "has" and
				"has not" would let you tick both, which means nothing.
			-->
			<button type="button" class="tri" (click)="cycleMega()" [attr.aria-label]="megaLabel()">
				<span class="box" [class.yes]="filters.mega() === 'has-mega'" [class.no]="filters.mega() === 'no-mega'">
					{{ filters.mega() === 'has-mega' ? '✓' : filters.mega() === 'no-mega' ? '✕' : '' }}
				</span>
				{{ megaLabel() }}
			</button>
		</fieldset>

		<champions-filter-sets [gridApi]="gridApi()" />
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

		champions-ownership-filter {
			display: block;
			margin-bottom: var(--s-3, 0.75rem);
		}

		.tri {
			display: flex;
			align-items: center;
			gap: 0.5rem;
			font: inherit;
			font-size: var(--fs-sm, 0.875rem);
			cursor: pointer;
			padding: 0.3rem 0.5rem;
			border-radius: var(--r-md, 8px);
			border: 1.5px solid var(--line);
			background: var(--surface);
			color: var(--ink-muted);
			width: fit-content;
			min-height: 2.1rem;
		}

		.box {
			display: inline-flex;
			align-items: center;
			justify-content: center;
			width: 1.1rem;
			height: 1.1rem;
			border-radius: var(--r-sm, 4px);
			border: 1.5px solid var(--line);
			font-size: 0.75rem;
			line-height: 1;
		}

		.box.yes {
			border-color: var(--success, #2e7d52);
			color: var(--success, #2e7d52);
		}

		.box.no {
			border-color: var(--danger, #d1495b);
			color: var(--danger, #d1495b);
		}
	`,
})
export class ChampionsFiltersPanelComponent implements IToolPanelAngularComp {
	protected readonly filters = inject(ExternalFiltersStore);

	/** Forwarded to `FilterSetsComponent` — see the class doc for why it is captured here. */
	protected readonly gridApi = signal<GridApi<PokedexEntry> | null>(null);

	protected readonly megaLabel = computed(() => {
		const mega = this.filters.mega();
		return mega === 'has-mega' ? 'Has a Mega' : mega === 'no-mega' ? 'Has no Mega' : 'Mega Evolution';
	});

	protected cycleMega(): void {
		this.filters.setMega(MEGA_CYCLE[this.filters.mega()]);
	}

	agInit(params: IToolPanelParams<PokedexEntry>): void {
		// Every filter control reads/writes `ExternalFiltersStore` (provided in root) directly —
		// only the saved-sets section needs anything from `params`.
		this.gridApi.set(params.api ?? null);
	}

	refresh(_params: IToolPanelParams): boolean {
		// No per-instance state to reconcile here; returning `true` tells AG Grid not to recreate us.
		return true;
	}
}
