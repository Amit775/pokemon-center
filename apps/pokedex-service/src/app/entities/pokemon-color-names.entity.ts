import { Field, Int, ObjectType } from '@nestjs/graphql';
import { PokemonColorNames as PrismaPokemonColorNames } from '@prisma/client';

@ObjectType()
export class PokemonColorNames implements PrismaPokemonColorNames {
  @Field(() => Int)
  pokemon_color_id: Int;

  @Field(() => Int)
  local_language_id: Int;

  @Field()
  name: String;

}
