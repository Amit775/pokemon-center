import { Field, Int, ObjectType } from '@nestjs/graphql';
import { PokemonHabitatNames as PrismaPokemonHabitatNames } from '@prisma/client';

@ObjectType()
export class PokemonHabitatNames implements PrismaPokemonHabitatNames {
  @Field(() => Int)
  pokemon_habitat_id: number;

  @Field(() => Int)
  local_language_id: number;

  @Field(() => String)
  name: string;

}
