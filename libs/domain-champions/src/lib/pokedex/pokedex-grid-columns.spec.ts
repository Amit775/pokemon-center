import { AllCommunityModule, ModuleRegistry, createGrid, type GridApi } from 'ag-grid-community';
import { AllEnterpriseModule } from 'ag-grid-enterprise';
import type { StatRangeColumnFilterParams } from './filters/stat-range-column-filter.component';
import { pokedexGridColumns } from './pokedex-grid-columns';
import { STAT_BOUNDS, TOTAL_BOUNDS, type PokedexEntry } from './pokedex-filter';

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

	/**
	 * Despite the name, this does not prove the Abilities column's `keyCreator` does the faceting:
	 * AG Grid v36's Set Filter splits an array-valued cell on its own (both its value extractor and
	 * `doesFilterPass`), before `keyCreator` ever runs — confirmed by temporarily removing that
	 * `keyCreator` and re-running this test unchanged, which still passes. See its comment in
	 * `pokedex-grid-columns.ts`. This guards only that the column stays array-valued and facetable
	 * per ability, however that faceting happens.
	 */
	it('facets Abilities per element (the grid does this natively, not the keyCreator), not per array reference', () => {
		const handler = api.getColumnFilterHandler<{ getFilterValues(): unknown[] }>('abilities');
		const values = handler?.getFilterValues() ?? [];

		expect(values).toEqual(expect.arrayContaining(['Overgrow', 'Blaze', 'Torrent', 'Rain Dish']));
		expect(values).toHaveLength(4);
	});

	it('gives the total column TOTAL_BOUNDS and the six stat columns STAT_BOUNDS', () => {
		const filterParams = (colId: string) =>
			(pokedexGridColumns.find((col) => col.colId === colId)?.filterParams as StatRangeColumnFilterParams).bounds;

		expect(filterParams('total')).toEqual(TOTAL_BOUNDS);
		for (const colId of ['hp', 'attack', 'defense', 'specialAttack', 'specialDefense', 'speed']) {
			expect(filterParams(colId)).toEqual(STAT_BOUNDS);
		}
	});
});

/**
 * The stat range columns' custom filter (see `StatRangeColumnFilterComponent` and `statColumn`),
 * proven the same way as the Types column: a real headless grid, driven purely through
 * `setFilterModel` and `forEachNodeAfterFilter`.
 *
 * `enableFilterHandlers: true` is required here for the same reason as the Types column — without
 * it, `doesFilterPass` is never invoked for a custom filter registered as
 * `filter: { component, doesFilterPass }`.
 */
describe('the stat range column custom filter', () => {
	let container: HTMLElement;
	let api: GridApi<PokedexEntry>;

	const statRows: PokedexEntry[] = [
		entry({ slug: 'slowest', name: 'Slowest', nationalPokedexNumber: 1, baseStats: { ...entry({}).baseStats, speed: 40 } }),
		// Sits exactly on the lower bound of the narrowed range below — must be included.
		entry({ slug: 'on-min', name: 'OnMin', nationalPokedexNumber: 2, baseStats: { ...entry({}).baseStats, speed: 80 } }),
		entry({ slug: 'middle', name: 'Middle', nationalPokedexNumber: 3, baseStats: { ...entry({}).baseStats, speed: 100 } }),
		// Sits exactly on the upper bound of the narrowed range below — must be included.
		entry({ slug: 'on-max', name: 'OnMax', nationalPokedexNumber: 4, baseStats: { ...entry({}).baseStats, speed: 130 } }),
		entry({ slug: 'fastest', name: 'Fastest', nationalPokedexNumber: 5, baseStats: { ...entry({}).baseStats, speed: 200 } }),
	];

	function displayedSlugs(): string[] {
		const slugs: string[] = [];
		api.forEachNodeAfterFilter((node) => {
			if (node.data) slugs.push(node.data.slug);
		});
		return slugs;
	}

	beforeEach(() => {
		container = document.createElement('div');
		document.body.appendChild(container);
		api = createGrid(container, {
			columnDefs: pokedexGridColumns,
			rowData: statRows,
			getRowId: (params) => params.data.slug,
			enableFilterHandlers: true,
		});
	});

	afterEach(() => {
		api.destroy();
		container.remove();
	});

	it('narrows to rows within the range, inclusive of both bounds', () => {
		api.setFilterModel({ speed: [80, 130] });

		expect(displayedSlugs().sort()).toEqual(['middle', 'on-max', 'on-min']);
	});

	it('excludes a value one below the minimum and one above the maximum', () => {
		api.setFilterModel({ speed: [41, 199] });

		expect(displayedSlugs().sort()).toEqual(['middle', 'on-max', 'on-min']);
	});

	it('clearing the filter model (the full-range/inactive state) shows every row again', () => {
		api.setFilterModel({ speed: [80, 130] });
		expect(displayedSlugs()).toHaveLength(3);

		api.setFilterModel(null);
		expect(displayedSlugs()).toHaveLength(5);
	});
});

/**
 * The Types column's custom filter (see `TypeColumnFilterComponent` and `passesTypes`), proven the
 * strongest way available: a real headless grid, driven purely through `setFilterModel` and
 * `forEachNodeAfterFilter`, rather than asserting on the filter model in isolation.
 *
 * `enableFilterHandlers: true` is required here for the same reason it is set on the real app's
 * `UiDataGridComponent` — without it, `doesFilterPass` is never invoked for a custom filter
 * registered as `filter: { component, doesFilterPass }`.
 */
describe('the Types column custom filter', () => {
	let container: HTMLElement;
	let api: GridApi<PokedexEntry>;

	const typeRows: PokedexEntry[] = [
		entry({ slug: 'charmander', name: 'Charmander', nationalPokedexNumber: 4, types: ['fire'] }),
		// A dual-type Pokémon carrying one of the exact-mode chips: it must NOT count as "a Fire
		// type" under the exact reading — the whole point of `passesTypes`.
		entry({ slug: 'charizard', name: 'Charizard', nationalPokedexNumber: 6, types: ['fire', 'flying'] }),
		entry({ slug: 'squirtle', name: 'Squirtle', nationalPokedexNumber: 7, types: ['water'] }),
	];

	function displayedSlugs(): string[] {
		const slugs: string[] = [];
		api.forEachNodeAfterFilter((node) => {
			if (node.data) slugs.push(node.data.slug);
		});
		return slugs;
	}

	beforeEach(() => {
		container = document.createElement('div');
		document.body.appendChild(container);
		api = createGrid(container, {
			columnDefs: pokedexGridColumns,
			rowData: typeRows,
			getRowId: (params) => params.data.slug,
			enableFilterHandlers: true,
		});
	});

	afterEach(() => {
		api.destroy();
		container.remove();
	});

	it('exact mode with one chip matches mono-types only, not a dual-type Pokémon containing it', () => {
		api.setFilterModel({ types: { types: ['fire'], mode: 'exact' } });

		expect(displayedSlugs()).toEqual(['charmander']);
	});

	it('exact mode with the full pair matches only that exact dual type', () => {
		api.setFilterModel({ types: { types: ['fire', 'flying'], mode: 'exact' } });

		expect(displayedSlugs()).toEqual(['charizard']);
	});

	it('any mode matches every Pokémon with at least one of the selected types, mono or dual', () => {
		api.setFilterModel({ types: { types: ['fire', 'water'], mode: 'any' } });

		expect(displayedSlugs().sort()).toEqual(['charizard', 'charmander', 'squirtle']);
	});

	it('clearing the filter model shows every row again', () => {
		api.setFilterModel({ types: { types: ['fire'], mode: 'exact' } });
		expect(displayedSlugs()).toHaveLength(1);

		api.setFilterModel(null);
		expect(displayedSlugs()).toHaveLength(3);
	});
});
