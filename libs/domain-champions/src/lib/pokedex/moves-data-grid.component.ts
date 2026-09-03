import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import type { GetRowIdFunc, GridState, StateUpdatedEvent } from 'ag-grid-community';
import { UiDataGridComponent } from '@pokemon-center/ui-pokedex';
import { movesGridColumns } from './moves-grid-columns';
import type { DetailMove } from './move.model';

const STATE_KEY = 'pokemon-center.champions-moves-grid.v1';

/** A Pokémon's legal moves. Column choices persist across Pokémon; the sort deliberately does not. */
@Component({
	selector: 'champions-moves-data-grid',
	changeDetection: ChangeDetectionStrategy.OnPush,
	imports: [UiDataGridComponent],
	template: `
		@if (changedCount() > 0) {
			<p class="lead"><strong>{{ changedCount() }}</strong> of these differ from the main series.</p>
		}

		<pokedex-data-grid
			[rowData]="rows()"
			[columnDefs]="columns"
			[getRowId]="getRowId"
			[sideBar]="false"
			[initialState]="initialState"
			(stateUpdated)="persistState($event)"
		/>

		@if (isApproximate()) {
			<p class="caveat">
				This learnset was supplemented from recent main-series games where the Champions data had gaps,
				so it may be slightly generous. Moves shown as changed are still accurate.
			</p>
		}
	`,
	styles: `
		:host {
			display: block;
			padding: var(--s-4, 1rem);
			--pokedex-grid-height: 32rem;
		}

		.lead {
			margin: 0 0 var(--s-3, 0.75rem);
			font-size: var(--fs-sm, 0.875rem);
		}

		.caveat {
			margin-top: var(--s-3, 0.75rem);
			font-size: var(--fs-xs, 0.75rem);
			color: var(--ink-muted);
			line-height: 1.5;
			max-width: 62ch;
		}
	`,
})
export class MovesDataGridComponent {
	readonly moves = input.required<readonly DetailMove[]>();
	readonly isApproximate = input(false);

	protected readonly columns = movesGridColumns;
	protected readonly rows = computed(() => [...this.moves()]);
	protected readonly changedCount = computed(() => this.moves().filter((move) => move.isOverridden).length);

	protected readonly getRowId: GetRowIdFunc<DetailMove> = (params) => params.data.name;

	/**
	 * Column visibility and order persist; the sort does not, because it is a per-Pokémon question.
	 * Grid State replaces the hand-rolled preferences store this component used to need.
	 */
	protected readonly initialState: GridState | undefined = readState();

	protected persistState(event: StateUpdatedEvent<DetailMove>): void {
		const { columnVisibility, columnOrder, columnSizing } = event.state;
		try {
			localStorage.setItem(STATE_KEY, JSON.stringify({ columnVisibility, columnOrder, columnSizing }));
		} catch {
			// A browser with storage disabled loses the preference, which is not worth an error.
		}
	}
}

function readState(): GridState | undefined {
	try {
		const raw = localStorage.getItem(STATE_KEY);
		return raw ? (JSON.parse(raw) as GridState) : undefined;
	} catch {
		return undefined;
	}
}
