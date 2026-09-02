import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import {
	ButtonComponent,
	EntityPortraitComponent,
	POKEMON_TYPES,
	PokemonCardComponent,
	SectionHeadingComponent,
	StatBarComponent,
	TypeChipComponent,
	UiCardComponent,
	UiDataTableComponent,
	UiSkeletonComponent,
	UiTabsComponent,
	createDataTableColumns,
	type ColumnOrderState,
	type DataTableRowVariant,
	type SortingState,
	type ColumnVisibilityState,
} from '@pokemon-center/ui-pokedex';

interface KitMove {
	name: string;
	type: string;
	power: number;
	accuracy: number;
}

const moveColumnHelper = createDataTableColumns<KitMove>();

/**
 * Module scope, not a component field — the shape consumers should copy, since nothing type-checks
 * it and a fresh array rebuilds every column, header and cell.
 *
 * The `actions` display column carries an explicit `cell` because there is no default one, and it
 * exercises the non-sortable header path. The numeric columns carry `align: 'end'`, applied to the
 * header as well as the cell, which is here to be looked at.
 */
const moveColumns = moveColumnHelper.columns([
	moveColumnHelper.accessor('name', { header: 'Move', sortFn: 'alphanumeric' }),
	moveColumnHelper.accessor('type', { header: 'Type', sortFn: 'alphanumeric', filterFn: 'arrHas', meta: { filterVariant: 'set' } }),
	moveColumnHelper.accessor('power', { header: 'Power', sortFn: 'basic', filterFn: 'inNumberRange', meta: { align: 'end', filterVariant: 'range' } }),
	moveColumnHelper.accessor('accuracy', { header: 'Accuracy', sortFn: 'basic', meta: { align: 'end' } }),
	moveColumnHelper.display({ id: 'actions', header: 'Actions', cell: () => 'add' }),
]);

interface KitRoster {
	id: number;
	name: string;
	generation: number;
	power: number;
}

const rosterColumnHelper = createDataTableColumns<KitRoster>();
const rosterColumns = rosterColumnHelper.columns([
	rosterColumnHelper.accessor('name', { header: 'Name', sortFn: 'alphanumeric' }),
	rosterColumnHelper.accessor('generation', { header: 'Generation', sortFn: 'basic', filterFn: 'arrHas', meta: { align: 'end', filterVariant: 'set' } }),
	rosterColumnHelper.accessor('power', { header: 'Power', sortFn: 'basic', filterFn: 'inNumberRange', meta: { align: 'end', filterVariant: 'range' } }),
]);

/** 1,200 synthetic rows — in the neighborhood of the real Pokédex's 1,351, for an honest demo of virtualization. */
function buildKitRoster(): KitRoster[] {
	return Array.from({ length: 1200 }, (_, index) => ({
		id: index + 1,
		name: `Roster Mon ${index + 1}`,
		generation: (index % 9) + 1,
		power: 30 + ((index * 7) % 140),
	}));
}

/** Living demo of the ui-pokedex kit — eyeball every component in both themes. */
@Component({
	standalone: true,
	selector: 'pokedex-kit',
	changeDetection: ChangeDetectionStrategy.OnPush,
	imports: [
		TypeChipComponent,
		StatBarComponent,
		PokemonCardComponent,
		EntityPortraitComponent,
		UiCardComponent,
		SectionHeadingComponent,
		UiSkeletonComponent,
		UiTabsComponent,
		ButtonComponent,
		UiDataTableComponent,
	],
	template: `
		<div class="kit">
			<h1>ui-pokedex kit</h1>

			<pokedex-section-heading label="Buttons" />
			<div class="row">
				<button pokedex-button type="button">Default</button>
				<button pokedex-button="primary" type="button">Primary</button>
				<button pokedex-button type="button" disabled>Disabled</button>
				<a pokedex-button href="#buttons">Anchor</a>
			</div>

			<pokedex-section-heading label="Type chips" />
			<div class="row">
				@for (t of types; track t) {
					<pokedex-type-chip [type]="t" />
				}
			</div>

			<pokedex-section-heading label="Pokemon cards" />
			<div class="grid">
				<pokedex-pokemon-card pokedexNumber="006" name="Charizard" [types]="['fire', 'flying']" [selected]="true" />
				<pokedex-pokemon-card pokedexNumber="001" name="Bulbasaur" [types]="['grass', 'poison']" />
				<pokedex-pokemon-card pokedexNumber="025" name="Pikachu" [types]="['electric']" />
				<pokedex-pokemon-card pokedexNumber="094" name="Gengar" [types]="['ghost', 'poison']" />
			</div>

			<pokedex-section-heading label="Card + portrait + stat bars" />
			<pokedex-card>
				<div class="detail">
					<pokedex-entity-portrait type="fire" [size]="120" />
					<div class="stats">
						<pokedex-tabs [tabs]="tabs" [(value)]="tab" />
						@if (tab() === 'stats') {
							<pokedex-stat-bar label="HP" [value]="78" type="fire" />
							<pokedex-stat-bar label="Attack" [value]="84" type="fire" />
							<pokedex-stat-bar label="Defense" [value]="78" type="fire" />
							<pokedex-stat-bar label="Sp. Atk" [value]="109" type="fire" />
							<pokedex-stat-bar label="Sp. Def" [value]="85" type="fire" />
							<pokedex-stat-bar label="Speed" [value]="100" type="fire" />
						} @else {
							<p>Tab content for “{{ tab() }}”.</p>
						}
					</div>
				</div>
			</pokedex-card>

			<pokedex-section-heading label="Data table" />
			<pokedex-data-table
				[data]="moveRows"
				[columns]="moveColumns"
				[(sorting)]="moveSorting"
				[(columnVisibility)]="moveColumnVisibility"
				[(columnOrder)]="moveColumnOrder"
				[columnTracks]="moveColumnTracks"
				[rowVariant]="moveRowVariant"
				label="Example moves"
				emptyLabel="No moves match."
			/>
			<p class="sort-readout">
				Sort state, owned out here rather than inside the table: <strong>{{ sortDescription() }}</strong>
			</p>

			<pokedex-section-heading label="Data table — virtualized, filtered" />
			<pokedex-data-table
				[data]="rosterRows"
				[columns]="rosterColumns"
				[(sorting)]="rosterSorting"
				[virtualScroll]="true"
				[rowHeight]="40"
				[viewportHeight]="'400px'"
				label="Roster (demo)"
				emptyLabel="No rows match."
			/>

			<pokedex-section-heading label="Skeletons" />
			<div class="skel">
				<pokedex-skeleton width="120px" height="120px" radius="50%" />
				<div style="flex:1; display:flex; flex-direction:column; gap:.5rem">
					<pokedex-skeleton width="40%" height="1.4rem" />
					<pokedex-skeleton width="70%" />
					<pokedex-skeleton width="60%" />
				</div>
			</div>
		</div>
	`,
	styles: `
		:host {
			display: block;
			height: calc(100vh - 60px);
			overflow-y: auto;
		}
		.kit {
			padding: var(--s-5);
			max-width: 60rem;
		}
		h1 {
			color: var(--ink);
		}
		.row {
			display: flex;
			flex-wrap: wrap;
			gap: var(--s-2);
		}
		.grid {
			display: grid;
			grid-template-columns: repeat(auto-fill, minmax(170px, 1fr));
			gap: var(--s-3);
		}
		.detail {
			display: flex;
			gap: var(--s-5);
			align-items: center;
			padding: var(--s-5);
		}
		.stats {
			flex: 1;
		}
		.stats pokedex-tabs {
			margin-bottom: var(--s-3);
		}
		p {
			color: var(--ink-muted);
		}
		.skel {
			display: flex;
			gap: var(--s-4);
			align-items: center;
		}
		.sort-readout {
			font-size: var(--fs-xs);
		}
	`,
})
export class KitComponent {
	protected readonly types = POKEMON_TYPES;
	protected readonly tabs = [
		{ label: 'About', value: 'about' },
		{ label: 'Stats', value: 'stats' },
		{ label: 'Moves', value: 'moves' },
	];
	protected readonly tab = signal('stats');

	protected readonly moveColumns = moveColumns;
	protected readonly rosterColumns = rosterColumns;
	protected readonly rosterRows: KitRoster[] = buildKitRoster();
	protected readonly rosterSorting = signal<SortingState>([]);

	protected readonly moveRows: KitMove[] = [
		{ name: 'Flamethrower', type: 'Fire', power: 90, accuracy: 100 },
		{ name: 'Aerial Ace', type: 'Flying', power: 60, accuracy: 100 },
		{ name: 'Thunderbolt', type: 'Electric', power: 90, accuracy: 100 },
		{ name: 'Ember', type: 'Fire', power: 40, accuracy: 100 },
		{ name: 'Focus Blast', type: 'Fighting', power: 120, accuracy: 70 },
	];

	/** A bare signal here; a real surface backs the same input with a store. The table cannot tell. */
	protected readonly moveSorting = signal<SortingState>([]);

	/**
	 * A wide name column and narrow numeric ones — the override a real moves table needs.
	 *
	 * Every entry is an `fr`, and that is the pattern to copy. **A content-based track — `auto`,
	 * `min-content`, `max-content`, `fit-content()` — is a bug here.** Each row is its own grid
	 * container rather than a `subgrid` of the table, so a content-based track resolves against
	 * that row alone and the column's left edge wanders from row to row instead of lining up with
	 * its header. The kit warns in development if one appears. Keyed by column id, since an index
	 * cannot follow a column that moved.
	 */
	protected readonly moveColumnTracks = {
		name: '2fr',
		type: '1fr',
		power: '1fr',
		accuracy: '1fr',
		actions: '1fr',
	};

	/** One column starts hidden, so the trigger reads "Columns 4/5" and the panel is worth opening. */
	protected readonly moveColumnVisibility = signal<ColumnVisibilityState>({ actions: false });
	protected readonly moveColumnOrder = signal<ColumnOrderState>([]);

	/** One marked row, so the kit's only row modifier is visible in both themes. */
	protected readonly moveRowVariant = (move: KitMove): DataTableRowVariant | null =>
		move.accuracy < 100 ? 'marked' : null;

	/** A computed, not a method: a template-called method re-runs on every change detection. */
	protected readonly sortDescription = computed(() => {
		const [entry] = this.moveSorting();
		if (!entry) return 'none';
		return `${entry.id} ${entry.desc ? 'descending' : 'ascending'}`;
	});
}
