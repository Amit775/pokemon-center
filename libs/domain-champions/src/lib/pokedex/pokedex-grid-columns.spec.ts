import { AllCommunityModule, ModuleRegistry, createGrid, type GridApi } from 'ag-grid-community';
import { AllEnterpriseModule } from 'ag-grid-enterprise';
import { pokedexGridColumns } from './pokedex-grid-columns';
import type { PokedexEntry } from './pokedex-filter';

ModuleRegistry.registerModules([AllCommunityModule, AllEnterpriseModule]);

function entry(overrides: Partial<PokedexEntry>): PokedexEntry {
	return {
		id: 1,
		slug: 'bulbasaur',
		name: 'Bulbasaur',
		nationalPokedexNumber: 1,
		types: ['grass', 'poison'],
		baseStats: { hp: 45, attack: 49, defense: 49, specialAttack: 65, specialDefense: 65, speed: 45, total: 318 },
		isMega: false,
		hasMega: false,
		megaOfSlug: null,
		abilitySlugs: ['overgrow'],
		abilityNames: ['Overgrow'],
		...overrides,
	};
}

const rows: PokedexEntry[] = [
	entry({ slug: 'bulbasaur', name: 'Bulbasaur', types: ['grass', 'poison'], abilityNames: ['Overgrow'] }),
	entry({ slug: 'charmander', name: 'Charmander', nationalPokedexNumber: 4, types: ['fire'], abilityNames: ['Blaze'] }),
	entry({ slug: 'squirtle', name: 'Squirtle', nationalPokedexNumber: 7, types: ['water'], abilityNames: ['Torrent', 'Rain Dish'] }),
];

describe('pokedexGridColumns', () => {
	let container: HTMLElement;
	let api: GridApi<PokedexEntry>;

	beforeEach(() => {
		container = document.createElement('div');
		document.body.appendChild(container);
		api = createGrid(container, { columnDefs: pokedexGridColumns, rowData: rows, getRowId: (params) => params.data.slug });
	});

	afterEach(() => {
		api.destroy();
		container.remove();
	});

	it('has 11 columns', () => {
		expect(pokedexGridColumns).toHaveLength(11);
	});

	it('facets Types per element, not per array reference', () => {
		const handler = api.getColumnFilterHandler<{ getFilterValues(): unknown[] }>('types');
		const values = handler?.getFilterValues() ?? [];

		expect(values).toEqual(expect.arrayContaining(['grass', 'poison', 'fire', 'water']));
		// One entry per type, not one opaque entry per row's array reference.
		expect(values).toHaveLength(4);
	});

	it('facets Abilities per element, not per array reference', () => {
		const handler = api.getColumnFilterHandler<{ getFilterValues(): unknown[] }>('abilities');
		const values = handler?.getFilterValues() ?? [];

		expect(values).toEqual(expect.arrayContaining(['Overgrow', 'Blaze', 'Torrent', 'Rain Dish']));
		expect(values).toHaveLength(4);
	});

	it('filters rows whose Types include the selected type', () => {
		api.setFilterModel({ types: { filterType: 'set', values: ['fire'] } });

		const displayedSlugs: string[] = [];
		api.forEachNodeAfterFilter((node) => {
			if (node.data) displayedSlugs.push(node.data.slug);
		});

		expect(displayedSlugs).toEqual(['charmander']);
	});
});
