import { Field, Int, ObjectType } from '@nestjs/graphql';
import { PokemonSpeciesFlavorSummaries as PrismaPokemonSpeciesFlavorSummaries } from '@prisma/client';

@ObjectType()
export class PokemonSpeciesFlavorSummaries implements PrismaPokemonSpeciesFlavorSummaries {
  @Field(() => Int)
  pokemon_species_id: number;

  @Field(() => Int)
  local_language_id: number;

  @Field(() => String, { nullable: true })
  flavor_summary: string;

}
