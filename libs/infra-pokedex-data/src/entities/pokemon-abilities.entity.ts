import { Field, Int, ObjectType } from '@nestjs/graphql';
import { PokemonAbilities as PrismaPokemonAbilities } from '@prisma/client';

@ObjectType()
export class PokemonAbilities implements PrismaPokemonAbilities {
  @Field(() => Int)
  pokemon_id!: number;

  @Field(() => Int)
  ability_id!: number;

  @Field(() => Int)
  is_hidden!: number;

  @Field(() => Int)
  slot!: number;
}
