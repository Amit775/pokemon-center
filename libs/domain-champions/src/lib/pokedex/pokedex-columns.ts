import { flexRenderComponent } from '@tanstack/angular-table';
import { createDataTableColumns } from '@pokemon-center/ui-pokedex';
import type { PokedexEntry } from './pokedex-filter';
import { PokedexAbilityCellComponent } from './pokedex-ability-cell.component';
import { PokedexActionsCellComponent } from './pokedex-actions-cell.component';
import { PokedexNameCellComponent } from './pokedex-name-cell.component';
import { PokedexTypeListCellComponent } from './pokedex-type-list-cell.component';

const columnHelper = createDataTableColumns<PokedexEntry>();

/**
 * Column definitions for the Champions roster table.
 *
 * Module scope, not a component field — `injectTable` memoises on `table.options.columns` by
 * identity, so a fresh array on every change detection would rebuild every column, header and
 * cell.
 */
export const pokedexColumns = columnHelper.columns([
	columnHelper.accessor('name', {
		header: 'Pokémon',
		sortFn: 'alphanumeric',
		cell: (context) => flexRenderComponent(PokedexNameCellComponent, { inputs: { entry: context.row.original } }),
	}),

	columnHelper.accessor('types', {
		id: 'types',
		header: 'Types',
		meta: { filterVariant: 'set' },
		filterFn: 'arrIncludesSome',
		// Without this, an array-valued column facets by array reference (one opaque key per row)
		// instead of one entry per type.
		getUniqueValues: (row) => row.types,
		cell: (context) => flexRenderComponent(PokedexTypeListCellComponent, { inputs: { types: context.getValue() } }),
	}),

	columnHelper.accessor('abilityNames', {
		id: 'abilities',
		header: 'Abilities',
		meta: { filterVariant: 'set' },
		filterFn: 'arrIncludesSome',
		getUniqueValues: (row) => row.abilityNames,
		// The cell needs the full entry (slugs + names) to look up effect text, not just the names
		// this column facets on.
		cell: (context) => flexRenderComponent(PokedexAbilityCellComponent, { inputs: { entry: context.row.original } }),
	}),

	columnHelper.accessor((entry) => entry.baseStats.hp, {
		id: 'hp',
		header: 'HP',
		sortFn: 'basic',
		meta: { align: 'end', filterVariant: 'range' },
		filterFn: 'inNumberRange',
	}),

	columnHelper.accessor((entry) => entry.baseStats.attack, {
		id: 'attack',
		header: 'Attack',
		sortFn: 'basic',
		meta: { align: 'end', filterVariant: 'range' },
		filterFn: 'inNumberRange',
	}),

	columnHelper.accessor((entry) => entry.baseStats.defense, {
		id: 'defense',
		header: 'Defense',
		sortFn: 'basic',
		meta: { align: 'end', filterVariant: 'range' },
		filterFn: 'inNumberRange',
	}),

	columnHelper.accessor((entry) => entry.baseStats.specialAttack, {
		id: 'specialAttack',
		header: 'Sp. Atk',
		sortFn: 'basic',
		meta: { align: 'end', filterVariant: 'range' },
		filterFn: 'inNumberRange',
	}),

	columnHelper.accessor((entry) => entry.baseStats.specialDefense, {
		id: 'specialDefense',
		header: 'Sp. Def',
		sortFn: 'basic',
		meta: { align: 'end', filterVariant: 'range' },
		filterFn: 'inNumberRange',
	}),

	columnHelper.accessor((entry) => entry.baseStats.speed, {
		id: 'speed',
		header: 'Speed',
		sortFn: 'basic',
		meta: { align: 'end', filterVariant: 'range' },
		filterFn: 'inNumberRange',
	}),

	columnHelper.accessor((entry) => entry.baseStats.total, {
		id: 'total',
		header: 'Total',
		sortFn: 'basic',
		meta: { align: 'end', filterVariant: 'range' },
		filterFn: 'inNumberRange',
	}),

	columnHelper.display({
		id: 'actions',
		header: 'Actions',
		cell: (context) => flexRenderComponent(PokedexActionsCellComponent, { inputs: { entry: context.row.original } }),
	}),
]);

/**
 * Explicit tracks: content-based tracks (`auto`, `fit-content`, …) resolve per row rather than per
 * column, since each row is its own grid container — see `pokedex-data-table`'s `columnTracks` doc.
 */
export const pokedexColumnTracks: Readonly<Record<string, string>> = {
	name: 'minmax(12rem, 1.4fr)',
	types: '8rem',
	abilities: 'minmax(8rem, 1fr)',
	hp: '4rem',
	attack: '4rem',
	defense: '4rem',
	specialAttack: '4rem',
	specialDefense: '4rem',
	speed: '4rem',
	total: '4.5rem',
	actions: '9rem',
};
