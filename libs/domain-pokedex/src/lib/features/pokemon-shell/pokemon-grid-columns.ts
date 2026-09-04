import type { ColDef } from 'ag-grid-community';
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

/** Flattens the GraphQL row shape into what the grid actually renders and sorts by. */
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

/**
 * Module scope, not a component field — see the kit's own column-definition rule: a fresh array on
 * each change detection resets grid state (column order, sizing, sort, filters).
 */
export const pokemonGridColumns: ColDef<PokemonRow>[] = [
	{
		field: 'name',
		headerName: 'Name',
		flex: 2,
		minWidth: 220,
		filter: 'agTextColumnFilter',
		cellRenderer: PokemonNameCellComponent,
		// A default, not a lock: `initialSort` (unlike `sort`) only applies once, when the column is
		// first created, so a user sorting by another column afterwards isn't fought over.
		initialSort: 'asc',
	},
	{
		field: 'types',
		headerName: 'Types',
		width: 150,
		filter: 'agSetColumnFilter',
		cellRenderer: PokemonTypesCellComponent,
	},
	{ field: 'hp', headerName: 'HP', width: 90, type: 'numericColumn', filter: 'agNumberColumnFilter' },
	{ field: 'attack', headerName: 'Attack', width: 100, type: 'numericColumn', filter: 'agNumberColumnFilter' },
	{ field: 'defense', headerName: 'Defense', width: 100, type: 'numericColumn', filter: 'agNumberColumnFilter' },
	{ field: 'specialAttack', headerName: 'Sp. Atk', width: 100, type: 'numericColumn', filter: 'agNumberColumnFilter' },
	{ field: 'specialDefense', headerName: 'Sp. Def', width: 100, type: 'numericColumn', filter: 'agNumberColumnFilter' },
	{ field: 'speed', headerName: 'Speed', width: 100, type: 'numericColumn', filter: 'agNumberColumnFilter' },
	{ field: 'total', headerName: 'Total', width: 100, type: 'numericColumn', filter: 'agNumberColumnFilter' },
];
