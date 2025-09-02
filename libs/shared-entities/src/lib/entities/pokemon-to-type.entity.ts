import { Field, Int, ObjectType } from '@nestjs/graphql';
import { PokemonToType as PrismaPokemonToType } from '@prisma/client';
import { Pokemon } from './pokemon.entity';
import { Type } from './type.entity';

@ObjectType()
export class PokemonToType implements PrismaPokemonToType {
	@Field(() => Int)
	pokemonId: number;

	@Field(() => Int)
	typeId: number;

	@Field(() => Pokemon)
	pokemon: Pokemon;

	@Field(() => Type)
	type: Type;
}
