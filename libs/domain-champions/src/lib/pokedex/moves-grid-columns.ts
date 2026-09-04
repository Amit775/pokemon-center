import type { ColDef } from 'ag-grid-community';
import { MoveNameCellComponent } from './move-name-cell.component';
import { TypeChipCellComponent } from './type-chip-cell.component';
import type { DetailMove } from './move.model';

/** Module scope, not a component field — a fresh array on each change detection resets grid state. */
export const movesGridColumns: ColDef<DetailMove>[] = [
	{
		field: 'name',
		headerName: 'Move',
		flex: 3,
		minWidth: 200,
		filter: 'agTextColumnFilter',
		cellRenderer: MoveNameCellComponent,
		autoHeight: true,
	},
	{
		field: 'type',
		headerName: 'Type',
		width: 110,
		filter: 'agSetColumnFilter',
		cellRenderer: TypeChipCellComponent,
	},
	{
		field: 'power',
		headerName: 'Power',
		width: 100,
		type: 'numericColumn',
		filter: 'agNumberColumnFilter',
	},
	{
		field: 'accuracy',
		headerName: 'Accuracy',
		width: 110,
		type: 'numericColumn',
		filter: 'agNumberColumnFilter',
	},
	{
		field: 'pp',
		headerName: 'PP',
		width: 90,
		type: 'numericColumn',
		filter: 'agNumberColumnFilter',
	},
];
