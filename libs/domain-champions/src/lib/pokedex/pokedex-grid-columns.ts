import type { ColDef, DoesFilterPassParams } from 'ag-grid-community';
import { StatRangeColumnFilterComponent, type StatRangeColumnFilterParams } from './filters/stat-range-column-filter.component';
import { TypeColumnFilterComponent, type TypeColumnFilterModel } from './filters/type-column-filter.component';
import { PokedexAbilityCellComponent } from './pokedex-ability-cell.component';
import { PokedexActionsCellComponent } from './pokedex-actions-cell.component';
import { STAT_BOUNDS, TOTAL_BOUNDS, passesTypes, type PokedexEntry, type Range } from './pokedex-filter';
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

/**
 * The seven numeric columns are identical but for their key, label and bounds: `total` ranges
 * over `TOTAL_BOUNDS`, the six base stats each range over the narrower `STAT_BOUNDS`.
 *
 * One shared `StatRangeColumnFilterComponent` handles all seven — `doesFilterPass` closes over
 * `key` to read the right stat, and `filterParams` tells the component which bounds and landmarks
 * to seed its slider with. Requires `enableFilterHandlers` on the grid (set once, in
 * `UiDataGridComponent`), same as Types.
 */
function statColumn(key: keyof PokedexEntry['baseStats'], headerName: string): ColDef<PokedexEntry>[] {
	const bounds: Range = key === 'total' ? TOTAL_BOUNDS : STAT_BOUNDS;

	return [
		{
			colId: key,
			headerName,
			width: 100,
			type: 'numericColumn',
			valueGetter: (params) => params.data?.baseStats[key],
			filter: {
				component: StatRangeColumnFilterComponent,
				doesFilterPass: ({ model, data }: DoesFilterPassParams<PokedexEntry, unknown, Range>) => {
					const [min, max] = model;
					return data.baseStats[key] >= min && data.baseStats[key] <= max;
				},
			},
			filterParams: { statKey: key, label: headerName, bounds } satisfies StatRangeColumnFilterParams,
		},
	];
}
