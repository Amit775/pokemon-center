import { Field, Int, ObjectType } from '@nestjs/graphql';
import { PokemonItems as PrismaPokemonItems } from '@prisma/client';

@ObjectType()
export class PokemonItems implements PrismaPokemonItems {
  @Field(() => Int)
  pokemon_id: number;

  @Field(() => Int)
  version_id: number;

  @Field(() => Int)
  item_id: number;

  @Field(() => Int)
  rarity: number;

}
