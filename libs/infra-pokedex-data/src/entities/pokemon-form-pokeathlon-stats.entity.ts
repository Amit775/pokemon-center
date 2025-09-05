import { Field, Int, ObjectType } from '@nestjs/graphql';
import { PokemonFormPokeathlonStats as PrismaPokemonFormPokeathlonStats } from '@prisma/client';

@ObjectType()
export class PokemonFormPokeathlonStats implements PrismaPokemonFormPokeathlonStats {
  @Field(() => Int)
  pokemon_form_id!: number;

  @Field(() => Int)
  pokeathlon_stat_id!: number;

  @Field(() => Int)
  minimum_stat!: number;

  @Field(() => Int)
  base_stat!: number;

  @Field(() => Int)
  maximum_stat!: number;
}
