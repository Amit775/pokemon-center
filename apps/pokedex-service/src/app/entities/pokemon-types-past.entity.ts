import { Field, Int, ObjectType } from '@nestjs/graphql';
import { PokemonTypesPast as PrismaPokemonTypesPast } from '@prisma/client';

@ObjectType()
export class PokemonTypesPast implements PrismaPokemonTypesPast {
	@Field(() => Int)
	pokemon_id: number;

	@Field(() => Int)
	generation_id: number;

	@Field(() => Int)
	type_id: number;

	@Field(() => Int)
	slot: number;
}
