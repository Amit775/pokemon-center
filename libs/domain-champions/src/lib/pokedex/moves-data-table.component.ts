import { ChangeDetectionStrategy, Component, computed, inject, input, signal } from '@angular/core';
import {
	TypeChipComponent,
	UiDataTableComponent,
	createDataTableColumns,
	type DataTableRowVariant,
	type SortingState,
} from '@pokemon-center/ui-pokedex';
import { flexRenderComponent } from '@tanstack/angular-table';
import { MoveNameCellComponent } from './move-name-cell.component';
import { MovesTablePreferencesStore } from './moves-table-preferences.store';
import type { DetailMove } from './move.model';

const columnHelper = createDataTableColumns<DetailMove>();

/** Module scope, not a component field: a fresh array rebuilds every column, header and cell. */
const moveColumns = columnHelper.columns([
	// A component, not a string: this cell packs name, effect, chance, tags and note.
	columnHelper.accessor('name', {
		header: 'Move',
		sortFn: 'alphanumeric',
		cell: (context) => flexRenderComponent(MoveNameCellComponent, { inputs: { move: context.row.original } }),
	}),

	columnHelper.accessor('type', {
		header: 'Type',
		sortFn: 'alphanumeric',
		cell: (context) => flexRenderComponent(TypeChipComponent, { inputs: { type: context.getValue(), size: 'sm' } }),
	}),

	/*
		Three nullable numbers, and each needs both lines below.

		sortUndefined: 'last' — the default `1` means "undefined last ascending, undefined FIRST
		descending", and numeric columns sort descending first, so it would put every status move at
		the top of the first click on Power.

		The explicit cell — once the accessor maps null to undefined the renderer emits nothing at
		all, so the em-dash has to be written out. The change that fixes the sort breaks the display.
	*/
	columnHelper.accessor((move) => move.power ?? undefined, {
		id: 'power',
		header: 'Power',
		sortFn: 'basic',
		sortUndefined: 'last',
		meta: { align: 'end' },
		cell: (context) => context.getValue() ?? '—',
	}),

	columnHelper.accessor((move) => move.accuracy ?? undefined, {
		id: 'accuracy',
		header: 'Accuracy',
		sortFn: 'basic',
		sortUndefined: 'last',
		meta: { align: 'end' },
		cell: (context) => context.getValue() ?? '—',
	}),

	columnHelper.accessor((move) => move.pp ?? undefined, {
		id: 'pp',
		header: 'PP',
		sortFn: 'basic',
		sortUndefined: 'last',
		meta: { align: 'end' },
		cell: (context) => context.getValue() ?? '—',
	}),
]);

/**
 * Type is a fixed `6rem`, not `auto`: every row is its own grid container, so a content-based track
 * resolves per row — measured, the Type column wandered 26px and never lined up with its header.
 * 6rem clears the widest type name, and clears it by more at larger root font sizes.
 *
 * Keyed by column id, since a hidden or moved column makes position meaningless.
 */
const moveColumnTracks = {
	name: 'minmax(0, 3fr)',
	type: '6rem',
	power: '5rem',
	accuracy: '5rem',
	pp: '4rem',
};

/** A Pokémon's legal moves, sortable. */
@Component({
	selector: 'champions-moves-data-table',
	changeDetection: ChangeDetectionStrategy.OnPush,
	imports: [UiDataTableComponent],
	template: `
		@if (changedCount() > 0) {
			<p class="lead"><strong>{{ changedCount() }}</strong> of these differ from the main series.</p>
		}

		<pokedex-data-table
			[data]="rows()"
			[columns]="columns"
			[columnTracks]="columnTracks"
			[(sorting)]="sorting"
			[columnVisibility]="preferences.columnVisibility()"
			(columnVisibilityChange)="preferences.applyVisibilityUpdate($event)"
			[columnOrder]="preferences.columnOrder()"
			(columnOrderChange)="preferences.applyOrderUpdate($event)"
			[rowVariant]="rowVariant"
			label="Legal moves"
			emptyLabel="No legal moves in this regulation."
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
export class MovesDataTableComponent {
	readonly moves = input.required<readonly DetailMove[]>();
	readonly isApproximate = input(false);

	protected readonly columns = moveColumns;
	protected readonly columnTracks = moveColumnTracks;

	/** Column choices persist across Pokémon; the sort below deliberately does not. */
	protected readonly preferences = inject(MovesTablePreferencesStore);

	/**
	 * A computed copy, not a spread inside `injectTable`: `createCoreRowModel` memoises on
	 * `table.options.data` by identity, so an inline spread rebuilds every row on every sort.
	 */
	protected readonly rows = computed(() => [...this.moves()]);

	/** Local, not the URL: a glance-level preference, and the roster's codec owns `sort`/`desc`. */
	protected readonly sorting = signal<SortingState>([]);

	protected readonly changedCount = computed(() => this.moves().filter((move) => move.isOverridden).length);

	/** The kit owns the paint; this only supplies the meaning. A class from here could not match. */
	protected readonly rowVariant = (move: DetailMove): DataTableRowVariant | null =>
		move.isOverridden ? 'marked' : null;
}
