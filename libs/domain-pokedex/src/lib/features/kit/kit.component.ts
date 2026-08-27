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
	type SortingState,
} from '@pokemon-center/ui-pokedex';

interface KitMove {
	name: string;
	type: string;
	power: number;
	accuracy: number;
}

const moveColumnHelper = createDataTableColumns<KitMove>();

/**
 * Module scope, not a component field — this is the demo that shows consumers the shape to copy.
 *
 * `injectTable` re-runs its options initializer whenever a signal inside it changes, and
 * `coreColumnsFeature` memoises on `table.options.columns` by identity, so an array rebuilt per
 * change detection reconstructs every column, header group and cell with its memos cold. Nothing
 * type-checks this, which is precisely why the demo has to model it.
 *
 * The `actions` column is a `display` column, and it carries an explicit `cell` on purpose:
 * `getDefaultColumnDef` supplies a default `header` but **no default `cell`**, and a display column
 * has no accessor — so without one it renders as a blank stripe on the single screen where layout
 * is being judged. It also exercises the non-sortable header path.
 */
const moveColumns = moveColumnHelper.columns([
	moveColumnHelper.accessor('name', { header: 'Move', sortFn: 'alphanumeric' }),
	moveColumnHelper.accessor('type', { header: 'Type', sortFn: 'alphanumeric' }),
	moveColumnHelper.accessor('power', { header: 'Power', sortFn: 'basic' }),
	moveColumnHelper.accessor('accuracy', { header: 'Accuracy', sortFn: 'basic' }),
	moveColumnHelper.display({ id: 'actions', header: 'Actions', cell: () => 'add' }),
]);

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
				[columnTracks]="moveColumnTracks"
				label="Example moves"
				emptyLabel="No moves match."
			/>
			<p class="sort-readout">
				Sort state, owned out here rather than inside the table: <strong>{{ sortDescription() }}</strong>
			</p>

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

	protected readonly moveRows: KitMove[] = [
		{ name: 'Flamethrower', type: 'Fire', power: 90, accuracy: 100 },
		{ name: 'Aerial Ace', type: 'Flying', power: 60, accuracy: 100 },
		{ name: 'Thunderbolt', type: 'Electric', power: 90, accuracy: 100 },
		{ name: 'Ember', type: 'Fire', power: 40, accuracy: 100 },
		{ name: 'Focus Blast', type: 'Fighting', power: 120, accuracy: 70 },
	];

	/**
	 * A bare signal, because on this screen nothing outside the table reads the sort. A real
	 * surface whose sort belongs in the URL backs the same input with a `signalStore` instead — the
	 * table cannot tell the difference, which is the point of the `model()`.
	 */
	protected readonly moveSorting = signal<SortingState>([]);

	/** A wide name column and narrow numeric ones — the override Phase 2's moves table needs. */
	protected readonly moveColumnTracks = ['2fr', '1fr', '1fr', '1fr', '1fr'];

	/** A computed, not a method — a template-called method re-runs on every change detection. */
	protected readonly sortDescription = computed(() => {
		const [entry] = this.moveSorting();
		if (!entry) return 'none';
		return `${entry.id} ${entry.desc ? 'descending' : 'ascending'}`;
	});
}
