import type { ColDef } from 'ag-grid-community';
import type { PokedexEntry } from './pokedex-filter';
import { PokedexAbilityCellComponent } from './pokedex-ability-cell.component';
import { PokedexActionsCellComponent } from './pokedex-actions-cell.component';
import { PokedexNameCellComponent } from './pokedex-name-cell.component';
import { PokedexTypeListCellComponent } from './pokedex-type-list-cell.component';

/** Module scope, not a component field — a fresh array on each change detection resets grid state. */
export const pokedexGridColumns: ColDef<PokedexEntry>[] = [
	{
		field: 'name',
		headerName: 'Pokémon',
		flex: 2,
		minWidth: 220,
		filter: 'agTextColumnFilter',
		cellRenderer: PokedexNameCellComponent,
		autoHeight: true,
	},
	{
		// Phase 3 replaces this with the two-mode custom type filter.
		colId: 'types',
		headerName: 'Types',
		width: 140,
		valueGetter: (params) => params.data?.types ?? [],
		filter: 'agSetColumnFilter',
		filterParams: {
			// Without this, the Set Filter treats the whole `types` array as one opaque entry
			// instead of faceting each type separately — the AG Grid analogue of the
			// `getUniqueValues` trap the TanStack version hit. The Key Creator runs per element,
			// not on the array itself, so the identity function is enough for plain string types.
			keyCreator: (params: { value: string }) => params.value,
		},
		sortable: false,
		cellRenderer: PokedexTypeListCellComponent,
	},
	{
		colId: 'abilities',
		headerName: 'Abilities',
		flex: 1,
		minWidth: 160,
		valueGetter: (params) => params.data?.abilityNames ?? [],
		filter: 'agSetColumnFilter',
		filterParams: {
			// Same reasoning as Types: abilityNames is array-valued, and the Key Creator needs to
			// facet each ability separately rather than the row's whole ability list as one entry.
			keyCreator: (params: { value: string }) => params.value,
		},
		sortable: false,
		cellRenderer: PokedexAbilityCellComponent,
		autoHeight: true,
	},
	...statColumn('hp', 'HP'),
	...statColumn('attack', 'Attack'),
	...statColumn('defense', 'Defense'),
	...statColumn('specialAttack', 'Sp. Atk'),
	...statColumn('specialDefense', 'Sp. Def'),
	...statColumn('speed', 'Speed'),
	...statColumn('total', 'Total'),
	{
		colId: 'actions',
		headerName: 'Actions',
		width: 150,
		sortable: false,
		filter: false,
		suppressHeaderMenuButton: true,
		cellRenderer: PokedexActionsCellComponent,
	},
];

/** The seven numeric columns are identical but for their key and label. */
function statColumn(key: keyof PokedexEntry['baseStats'], headerName: string): ColDef<PokedexEntry>[] {
	return [
		{
			colId: key,
			headerName,
			width: 100,
			type: 'numericColumn',
			valueGetter: (params) => params.data?.baseStats[key],
			// Phase 3 replaces this with the landmark-seeded range filter.
			filter: 'agNumberColumnFilter',
		},
	];
}
