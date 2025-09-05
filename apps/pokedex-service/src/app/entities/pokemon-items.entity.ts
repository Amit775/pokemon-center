import { Field, Int, ObjectType } from '@nestjs/graphql';
import { PokemonItems as PrismaPokemonItems } from '@prisma/client';

@ObjectType()
export class PokemonItems implements PrismaPokemonItems {
  @Field(() => Int)
  pokemon_id: Int;

  @Field(() => Int)
  version_id: Int;

  @Field(() => Int)
  item_id: Int;

  @Field(() => Int)
  rarity: Int;

}
