import type { MoveDetailQuery, MoveListQuery, PokemonDetailQuery, PokemonListQuery, PokemonMovesQuery, TypeMatchupsQuery } from './generated/graphql';

/** Convenience aliases so consumers don't need indexed-access gymnastics. */
export type PokemonListItem = PokemonListQuery['pokemonList'][number];
export type PokemonDetail = NonNullable<PokemonDetailQuery['pokemon']>;
export type PokemonMoveRow = PokemonMovesQuery['pokemonMoves'][number];
export type MoveListItem = MoveListQuery['moveList'][number];
export type MoveDetail = NonNullable<MoveDetailQuery['move']>;
export type TypeMatchups = NonNullable<TypeMatchupsQuery['type']>;
