import { Field, Int, ObjectType } from '@nestjs/graphql';
import { PokemonStats as PrismaPokemonStats } from '@prisma/client';

@ObjectType()
export class PokemonStats implements PrismaPokemonStats {
  @Field(() => Int)
  pokemon_id: number;

  @Field(() => Int)
  stat_id: number;

  @Field(() => Int)
  base_stat: number;

  @Field(() => Int)
  effort: number;
}
