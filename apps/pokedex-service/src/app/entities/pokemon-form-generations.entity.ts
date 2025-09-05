import { Field, Int, ObjectType } from '@nestjs/graphql';
import { PokemonFormGenerations as PrismaPokemonFormGenerations } from '@prisma/client';

@ObjectType()
export class PokemonFormGenerations implements PrismaPokemonFormGenerations {
  @Field(() => Int)
  pokemon_form_id: Int;

  @Field(() => Int)
  generation_id: Int;

  @Field(() => Int)
  game_index: Int;

}
