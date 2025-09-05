import { Field, Int, ObjectType } from '@nestjs/graphql';
import { PokemonFormPokeathlonStats as PrismaPokemonFormPokeathlonStats } from '@prisma/client';

@ObjectType()
export class PokemonFormPokeathlonStats implements PrismaPokemonFormPokeathlonStats {
  @Field(() => Int)
  pokemon_form_id: Int;

  @Field(() => Int)
  pokeathlon_stat_id: Int;

  @Field(() => Int)
  minimum_stat: Int;

  @Field(() => Int)
  base_stat: Int;

  @Field(() => Int)
  maximum_stat: Int;

}
