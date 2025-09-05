import { Field, Int, ObjectType } from '@nestjs/graphql';
import { PokemonAbilitiesPast as PrismaPokemonAbilitiesPast } from '@prisma/client';

@ObjectType()
export class PokemonAbilitiesPast implements PrismaPokemonAbilitiesPast {
  @Field(() => Int)
  pokemon_id: number;

  @Field(() => Int)
  generation_id: number;

  @Field(() => Int)
  ability_id: number;

  @Field(() => Int)
  is_hidden: number;

  @Field(() => Int)
  slot: number;
}
