import { Field, Int, ObjectType } from '@nestjs/graphql';
import { PokemonSpeciesFlavorSummaries as PrismaPokemonSpeciesFlavorSummaries } from '@prisma/client';

@ObjectType()
export class PokemonSpeciesFlavorSummaries implements PrismaPokemonSpeciesFlavorSummaries {
  @Field(() => Int)
  pokemon_species_id: Int;

  @Field(() => Int)
  local_language_id: Int;

  @Field(, { nullable: true })
  flavor_summary: String;

}
