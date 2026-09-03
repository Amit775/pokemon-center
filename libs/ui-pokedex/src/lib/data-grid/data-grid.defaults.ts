import type { ColDef, SideBarDef } from 'ag-grid-community';

/** Applied to every column of every grid unless a column overrides it. */
export const pokedexDefaultColDef: ColDef = {
	sortable: true,
	resizable: true,
	filter: true,
	floatingFilter: false,
	minWidth: 80,
};

/**
 * The side bar: the Columns and Filters tool panels.
 *
 * Both are Enterprise features — if they render as nothing, read the console for AG Grid's
 * `error #200`, which names the module that is missing rather than the API being wrong.
 */
export const pokedexSideBar: SideBarDef = {
	toolPanels: [
		{
			id: 'columns',
			labelDefault: 'Columns',
			labelKey: 'columns',
			iconKey: 'columns',
			toolPanel: 'agColumnsToolPanel',
		},
		{
			id: 'filters',
			labelDefault: 'Filters',
			labelKey: 'filters',
			iconKey: 'filter',
			toolPanel: 'agFiltersToolPanel',
		},
	],
	position: 'right',
	defaultToolPanel: undefined,
};
