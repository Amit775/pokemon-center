import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { injectTable, type Table } from '@tanstack/angular-table';
import { dataTableFeatures, type DataTableFeatures } from '@pokemon-center/ui-pokedex';
import { pokedexColumns } from './pokedex-columns';
import type { PokedexEntry } from './pokedex-filter';

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
	entry({ slug: 'bulbasaur', name: 'Bulbasaur', nationalPokedexNumber: 1, types: ['grass', 'poison'], abilityNames: ['Overgrow'] }),
	entry({
		slug: 'charmander',
		name: 'Charmander',
		nationalPokedexNumber: 4,
		types: ['fire'],
		abilityNames: ['Blaze'],
		baseStats: { hp: 39, attack: 52, defense: 43, specialAttack: 60, specialDefense: 50, speed: 65, total: 309 },
	}),
	entry({
		slug: 'squirtle',
		name: 'Squirtle',
		nationalPokedexNumber: 7,
		types: ['water'],
		abilityNames: ['Torrent'],
		baseStats: { hp: 44, attack: 48, defense: 65, specialAttack: 50, specialDefense: 64, speed: 43, total: 314 },
	}),
];

/** No template — drives the table instance directly, same pattern as ui-pokedex's own column tests. */
@Component({ selector: 'champions-pokedex-columns-test-host', changeDetection: ChangeDetectionStrategy.OnPush, template: '' })
class ColumnsTestHostComponent {
	readonly table = injectTable(() => ({ features: dataTableFeatures, columns: pokedexColumns, data: rows }));
}

describe('pokedexColumns', () => {
	let fixture: ComponentFixture<ColumnsTestHostComponent>;
	let table: Table<DataTableFeatures, PokedexEntry>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({ imports: [ColumnsTestHostComponent] }).compileComponents();
		fixture = TestBed.createComponent(ColumnsTestHostComponent);
		fixture.detectChanges();
		table = fixture.componentInstance.table;
	});

	it('filters rows whose Types include at least one selected type', () => {
		table.setColumnFilters([{ id: 'types', value: ['fire'] }]);
		fixture.detectChanges();

		expect(table.getFilteredRowModel().rows.map((row) => row.original.slug)).toEqual(['charmander']);
	});

	it('facets Types per element, not per array reference', () => {
		const facets = table.getColumn('types')?.getFacetedUniqueValues();

		expect(facets?.get('grass')).toBe(1);
		expect(facets?.get('poison')).toBe(1);
		expect(facets?.get('fire')).toBe(1);
		expect(facets?.get('water')).toBe(1);
	});

	it('filters rows whose Abilities include at least one selected ability', () => {
		table.setColumnFilters([{ id: 'abilities', value: ['Torrent'] }]);
		fixture.detectChanges();

		expect(table.getFilteredRowModel().rows.map((row) => row.original.slug)).toEqual(['squirtle']);
	});

	it('filters rows whose Speed falls within an inclusive range', () => {
		table.setColumnFilters([{ id: 'speed', value: [60, 70] }]);
		fixture.detectChanges();

		expect(table.getFilteredRowModel().rows.map((row) => row.original.slug)).toEqual(['charmander']);
	});

	it('sorts by name alphabetically', () => {
		table.setSorting([{ id: 'name', desc: false }]);
		fixture.detectChanges();

		expect(table.getRowModel().rows.map((row) => row.original.name)).toEqual(['Bulbasaur', 'Charmander', 'Squirtle']);
	});

	it('has an actions column with no filter variant', () => {
		const column = table.getColumn('actions');
		expect(column?.columnDef.meta?.filterVariant).toBeUndefined();
	});
});
