import { createDataTableColumns } from '@pokemon-center/ui-pokedex';
import { flexRenderComponent } from '@tanstack/angular-table';
import type { PokemonListQuery } from '@pokemon-center/data-access-pokedex';
import { PokemonNameCellComponent } from './pokemon-name-cell.component';
import { PokemonTypesCellComponent } from './pokemon-types-cell.component';

type RawPokemonRow = PokemonListQuery['pokemonList'][number];

type StatIdentifier = 'hp' | 'attack' | 'defense' | 'special-attack' | 'special-defense' | 'speed';

export interface PokemonRow {
	id: number;
	canonicalId: string;
	slug: string;
	name: string;
	types: string[];
	hp: number;
	attack: number;
	defense: number;
	specialAttack: number;
	specialDefense: number;
	speed: number;
	total: number;
}

const STAT_IDENTIFIER_TO_FIELD: Record<StatIdentifier, keyof Pick<PokemonRow, 'hp' | 'attack' | 'defense' | 'specialAttack' | 'specialDefense' | 'speed'>> = {
	hp: 'hp',
	attack: 'attack',
	defense: 'defense',
	'special-attack': 'specialAttack',
	'special-defense': 'specialDefense',
	speed: 'speed',
};

/** Flattens the GraphQL row shape into what the table actually renders and sorts by. */
export function toPokemonRow(row: RawPokemonRow): PokemonRow {
	const stats = { hp: 0, attack: 0, defense: 0, specialAttack: 0, specialDefense: 0, speed: 0 };
	for (const entry of row.stats) {
		const field = STAT_IDENTIFIER_TO_FIELD[entry.stat.identifier as StatIdentifier];
		if (field) stats[field] = entry.base_stat;
	}

	return {
		id: Number(row.id),
		canonicalId: row.canonicalId,
		slug: row.slug,
		name: row.identifier,
		types: [...row.types].sort((first, second) => first.slot - second.slot).map((entry) => entry.type.identifier),
		...stats,
		total: stats.hp + stats.attack + stats.defense + stats.specialAttack + stats.specialDefense + stats.speed,
	};
}

const columnHelper = createDataTableColumns<PokemonRow>();

/**
 * Module scope, not a component field — see the kit's own column-definition rule: a fresh array
 * rebuilds every column, header group and cell on each state change.
 *
 * getUniqueValues on `types` is load-bearing, not decoration: without it, TanStack wraps each
 * row's whole types array as one opaque facet key (by reference) instead of counting `fire` and
 * `flying` separately — see docs/table-plan.md's Phase 5 note on this exact trap.
 */
export const pokemonColumns = columnHelper.columns([
	columnHelper.accessor('name', {
		header: 'Name',
		sortFn: 'alphanumeric',
		cell: (context) =>
			flexRenderComponent(PokemonNameCellComponent, {
				inputs: { pokemonId: context.row.original.id, name: context.getValue(), primaryType: context.row.original.types[0] ?? 'normal' },
			}),
	}),
	columnHelper.accessor('types', {
		header: 'Types',
		filterFn: 'arrIncludesSome',
		getUniqueValues: (row) => row.types,
		meta: { filterVariant: 'set' },
		cell: (context) => flexRenderComponent(PokemonTypesCellComponent, { inputs: { types: context.getValue() } }),
	}),
	columnHelper.accessor('hp', { header: 'HP', sortFn: 'basic', filterFn: 'inNumberRange', meta: { align: 'end', filterVariant: 'range' } }),
	columnHelper.accessor('attack', { header: 'Attack', sortFn: 'basic', filterFn: 'inNumberRange', meta: { align: 'end', filterVariant: 'range' } }),
	columnHelper.accessor('defense', { header: 'Defense', sortFn: 'basic', filterFn: 'inNumberRange', meta: { align: 'end', filterVariant: 'range' } }),
	columnHelper.accessor('specialAttack', { header: 'Sp. Atk', sortFn: 'basic', filterFn: 'inNumberRange', meta: { align: 'end', filterVariant: 'range' } }),
	columnHelper.accessor('specialDefense', { header: 'Sp. Def', sortFn: 'basic', filterFn: 'inNumberRange', meta: { align: 'end', filterVariant: 'range' } }),
	columnHelper.accessor('speed', { header: 'Speed', sortFn: 'basic', filterFn: 'inNumberRange', meta: { align: 'end', filterVariant: 'range' } }),
	columnHelper.accessor('total', { header: 'Total', sortFn: 'basic', meta: { align: 'end' } }),
]);
