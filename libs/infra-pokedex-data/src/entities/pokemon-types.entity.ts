import { Field, Int, ObjectType } from '@nestjs/graphql';
import { PokemonTypes as PrismaPokemonTypes } from '@prisma/client';

@ObjectType()
export class PokemonTypes implements PrismaPokemonTypes {
  @Field(() => Int)
  pokemon_id!: number;

  @Field(() => Int)
  type_id!: number;

  @Field(() => Int)
  slot!: number;
}
