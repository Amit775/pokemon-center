import type { ColDef, DoesFilterPassParams } from 'ag-grid-community';
import { TypeColumnFilterComponent, type TypeColumnFilterModel } from './filters/type-column-filter.component';
import { PokedexAbilityCellComponent } from './pokedex-ability-cell.component';
import { PokedexActionsCellComponent } from './pokedex-actions-cell.component';
import { passesTypes, type PokedexEntry } from './pokedex-filter';
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
		// The two-mode custom type filter — see `TypeColumnFilterComponent` and `passesTypes`.
		// Requires `enableFilterHandlers` on the grid (set once, in `UiDataGridComponent`): without
		// it, `doesFilterPass` below is never invoked. See that component for why.
		colId: 'types',
		headerName: 'Types',
		width: 140,
		valueGetter: (params) => params.data?.types ?? [],
		filter: {
			component: TypeColumnFilterComponent,
			doesFilterPass: ({ model, data }: DoesFilterPassParams<PokedexEntry, unknown, TypeColumnFilterModel>) =>
				passesTypes(data, { types: model.types, typeMode: model.mode }),
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
