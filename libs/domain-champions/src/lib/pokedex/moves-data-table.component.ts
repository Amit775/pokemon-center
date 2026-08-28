import { ChangeDetectionStrategy, Component, computed, input, signal } from '@angular/core';
import {
	TypeChipComponent,
	UiDataTableComponent,
	createDataTableColumns,
	type DataTableRowVariant,
	type SortingState,
} from '@pokemon-center/ui-pokedex';
import { flexRenderComponent } from '@tanstack/angular-table';
import { MoveNameCellComponent } from './move-name-cell.component';
import type { DetailMove } from './moves-table.component';

const columnHelper = createDataTableColumns<DetailMove>();

/**
 * The learnset columns, at module scope because they must be.
 *
 * `injectTable` re-runs its options initializer whenever a signal read inside it changes, and
 * `coreColumnsFeature` memoises on `table.options.columns` **by identity** — so an array rebuilt in
 * a component field is a fresh array on every sort click, and every column, header group and cell
 * is reconstructed with its memos cold. Nothing checks this; a component field type-checks
 * perfectly.
 */
const moveColumns = columnHelper.columns([
	/*
		The Move column is a component, not a string. A learnset row packs six things into this one
		cell — name, the "changed" badge, the effect sentence, the effect chance, the ability-hook
		tags and the override note — and a cell that returns a component renders through
		`flexRenderComponent`, which mounts it properly rather than stringifying it. It also updates
		across a re-sort rather than sticking to the row it first mounted on.
	*/
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
		The three nullable numbers, and each needs both lines below or it breaks in a different way.

		`sortUndefined: 'last'` — the string forms return early from `createSortedRowModel`'s
		comparator; the numeric form `1` falls through to `sortInt = aUndefined ? 1 : -1` and is then
		inverted by `if (isDesc) sortInt *= -1`, so it means "undefined last **ascending**, undefined
		**first descending**". Numeric columns sort descending first, so relying on the default puts
		every status move at the top of the very first click on Power.

		The explicit `cell` — once the accessor maps null to undefined,
		`mapToFlexRenderTypedContent` classifies it as `kind: 'null'` and the renderer emits nothing
		at all, measured as ["40", "", "150", ""]. The change that fixes the sorting is the change
		that breaks the display, so the em-dash has to be written out rather than left to the
		default cell.
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
 * Wide enough for a sentence in the Move column, tight enough to keep the numbers together.
 *
 * Type is a fixed `6rem` rather than `auto`, and that is not a tuning preference. Every row is its
 * own grid container — Phase 1 chose that over `subgrid` so a windowed body keeps working — so a
 * content-based track resolves **independently per row**: measured, the Type column's left edge
 * wandered 26px between rows and never lined up with its own header, because "fighting" is a wider
 * word than "ice". Only lengths, percentages and `fr` resolve identically across independent
 * grids. 6rem clears the widest type name at this font size.
 */
const moveColumnTracks = ['minmax(0, 3fr)', '6rem', '5rem', '5rem', '4rem'];

/**
 * A Pokémon's legal moves, sortable.
 *
 * The same content as `champions-moves-table`, rendered through the kit's `pokedex-data-table` so
 * that "which of these hits hardest" and "which of these never misses" are one click rather than a
 * read of forty rows. Behind `?view=table` while both renderings coexist — see `view-mode.ts`.
 *
 * The inputs match `champions-moves-table` exactly, so the detail page swaps one for the other and
 * changes nothing else.
 */
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

	/**
	 * The mutable copy the table wants, computed rather than written inline.
	 *
	 * `moves` is `readonly DetailMove[]` and the kit's `data` is `TRow[]`, so a copy is unavoidable
	 * — but a spread written inside `injectTable`'s initializer would be a fresh array on every
	 * sort click, and `createCoreRowModel`'s `memoDeps` is `[table.options.data]` by identity, so
	 * every row would be rebuilt on every sort. Exactly the twin of the columns rule above.
	 */
	protected readonly rows = computed(() => [...this.moves()]);

	/**
	 * A local signal, not the URL and not a store.
	 *
	 * This is a sub-view of a detail page and the sort is a glance-level preference — nothing
	 * outside the table reads it, and the roster's codec already owns `sortBy`/`sortDescending` on
	 * a different route, so putting a second meaning on those names would give one question two
	 * answers. Promoting it later is a one-line change to a `model()`.
	 */
	protected readonly sorting = signal<SortingState>([]);

	protected readonly changedCount = computed(() => this.moves().filter((move) => move.isOverridden).length);

	/**
	 * Moves Champions changed read differently from the rest of the list, so they are tinted.
	 *
	 * The kit owns the vocabulary and the paint; this only supplies the meaning. A class string
	 * would not work — the row lives in the kit's view, so a rule written in this component's
	 * styles could never match it.
	 */
	protected readonly rowVariant = (move: DetailMove): DataTableRowVariant | null =>
		move.isOverridden ? 'marked' : null;
}
