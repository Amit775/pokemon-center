import { Field, Int, ObjectType } from '@nestjs/graphql';
import { ConquestPokemonStats as PrismaConquestPokemonStats } from '@prisma/client';

@ObjectType()
export class ConquestPokemonStats implements PrismaConquestPokemonStats {
  @Field(() => Int)
  pokemon_species_id: Int;

  @Field(() => Int)
  conquest_stat_id: Int;

  @Field(() => Int)
  base_stat: Int;

}
