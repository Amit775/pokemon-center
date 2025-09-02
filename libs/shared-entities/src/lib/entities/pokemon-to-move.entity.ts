import { Field, Int, ObjectType } from '@nestjs/graphql';
import { PokemonToMove as PrismaPokemonToMove } from '@prisma/client';
import { Pokemon } from './pokemon.entity';
import { Move } from './move.entity';

@ObjectType()
export class PokemonToMove implements PrismaPokemonToMove {
	@Field(() => Int)
	pokemonId: number;

	@Field(() => Int)
	moveId: number;

	@Field(() => Pokemon)
	pokemon: Pokemon;

	@Field(() => Move)
	move: Move;
}
