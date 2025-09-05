import { Field, Int, ObjectType } from '@nestjs/graphql';
import { PokemonEggGroups as PrismaPokemonEggGroups } from '@prisma/client';

@ObjectType()
export class PokemonEggGroups implements PrismaPokemonEggGroups {
  @Field(() => Int)
  species_id!: number;

  @Field(() => Int)
  egg_group_id!: number;
}
