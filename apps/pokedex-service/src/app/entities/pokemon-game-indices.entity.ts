import { Field, Int, ObjectType } from '@nestjs/graphql';
import { PokemonGameIndices as PrismaPokemonGameIndices } from '@prisma/client';

@ObjectType()
export class PokemonGameIndices implements PrismaPokemonGameIndices {
  @Field(() => Int)
  pokemon_id: number;

  @Field(() => Int)
  version_id: number;

  @Field(() => Int)
  game_index: number;

}
