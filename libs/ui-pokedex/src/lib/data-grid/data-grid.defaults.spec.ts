import { pokedexDefaultColDef, pokedexSideBar } from './data-grid.defaults';

describe('grid defaults', () => {
	it('makes every column sortable, resizable and filterable by default', () => {
		expect(pokedexDefaultColDef.sortable).toBe(true);
		expect(pokedexDefaultColDef.resizable).toBe(true);
		expect(pokedexDefaultColDef.filter).toBe(true);
	});

	it('offers both the columns and filters tool panels', () => {
		const ids = (pokedexSideBar.toolPanels ?? []).map((panel) => (typeof panel === 'string' ? panel : panel.id));
		expect(ids).toEqual(['columns', 'filters']);
	});

	it('does not open a tool panel by default, so the grid opens at full width', () => {
		expect(pokedexSideBar.defaultToolPanel).toBeUndefined();
	});
});
