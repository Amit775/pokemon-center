import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { injectTable, type Table } from '@tanstack/angular-table';
import { dataTableFeatures, type DataTableFeatures } from '@pokemon-center/ui-pokedex';
import { pokemonColumns, toPokemonRow, type PokemonRow } from './pokemon-columns';

const rawRows = [
	{
		id: '6', canonicalId: 'pokemon:6', slug: 'charizard', identifier: 'charizard', height: 17, weight: 905,
		types: [
			{ slot: 1, type: { id: '10', identifier: 'fire' } },
			{ slot: 2, type: { id: '3', identifier: 'flying' } },
		],
		stats: [
			{ base_stat: 78, stat: { identifier: 'hp' } },
			{ base_stat: 84, stat: { identifier: 'attack' } },
			{ base_stat: 78, stat: { identifier: 'defense' } },
			{ base_stat: 109, stat: { identifier: 'special-attack' } },
			{ base_stat: 85, stat: { identifier: 'special-defense' } },
			{ base_stat: 100, stat: { identifier: 'speed' } },
		],
	},
	{
		id: '7', canonicalId: 'pokemon:7', slug: 'squirtle', identifier: 'squirtle', height: 5, weight: 90,
		types: [{ slot: 1, type: { id: '11', identifier: 'water' } }],
		stats: [
			{ base_stat: 44, stat: { identifier: 'hp' } },
			{ base_stat: 48, stat: { identifier: 'attack' } },
			{ base_stat: 65, stat: { identifier: 'defense' } },
			{ base_stat: 50, stat: { identifier: 'special-attack' } },
			{ base_stat: 64, stat: { identifier: 'special-defense' } },
			{ base_stat: 43, stat: { identifier: 'speed' } },
		],
	},
];

describe('toPokemonRow', () => {
	it('flattens types into a string array in slot order', () => {
		expect(toPokemonRow(rawRows[0]).types).toEqual(['fire', 'flying']);
	});

	it('flattens a single-type pokemon without a trailing undefined', () => {
		expect(toPokemonRow(rawRows[1]).types).toEqual(['water']);
	});

	it('maps each named stat to its own field', () => {
		const row = toPokemonRow(rawRows[0]);
		expect(row.hp).toBe(78);
		expect(row.attack).toBe(84);
		expect(row.defense).toBe(78);
		expect(row.specialAttack).toBe(109);
		expect(row.specialDefense).toBe(85);
		expect(row.speed).toBe(100);
	});

	it('computes the base stat total', () => {
		expect(toPokemonRow(rawRows[0]).total).toBe(78 + 84 + 78 + 109 + 85 + 100);
	});
});

@Component({ selector: 'pokedex-pokemon-columns-host', changeDetection: ChangeDetectionStrategy.OnPush, template: '' })
class ColumnsHostComponent {
	readonly table = injectTable(() => ({
		features: dataTableFeatures,
		columns: pokemonColumns,
		data: rawRows.map(toPokemonRow),
	}));
}

describe('pokemonColumns', () => {
	let table: Table<DataTableFeatures, PokemonRow>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({ imports: [ColumnsHostComponent] }).compileComponents();
		const fixture: ComponentFixture<ColumnsHostComponent> = TestBed.createComponent(ColumnsHostComponent);
		fixture.detectChanges();
		table = fixture.componentInstance.table;
	});

	it('facets the array-valued types column by individual type, not by combination', () => {
		const facets = table.getColumn('types')?.getFacetedUniqueValues();

		expect(facets?.get('fire')).toBe(1);
		expect(facets?.get('flying')).toBe(1);
		expect(facets?.get('water')).toBe(1);
	});

	it('filters the types column with arrIncludesSome', () => {
		table.setColumnFilters([{ id: 'types', value: ['water'] }]);

		expect(table.getFilteredRowModel().rows.map((row) => row.original.slug)).toEqual(['squirtle']);
	});

	it('sorts the total column numerically, descending first', () => {
		table.setSorting([{ id: 'total', desc: true }]);

		expect(table.getSortedRowModel().rows.map((row) => row.original.slug)).toEqual(['charizard', 'squirtle']);
	});

	it('facets a numeric stat column with correct min/max', () => {
		expect(table.getColumn('speed')?.getFacetedMinMaxValues()).toEqual([43, 100]);
	});
});
