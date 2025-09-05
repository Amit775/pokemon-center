import { Field, Int, ObjectType } from '@nestjs/graphql';
import { PokemonSpeciesProse as PrismaPokemonSpeciesProse } from '@prisma/client';

@ObjectType()
export class PokemonSpeciesProse implements PrismaPokemonSpeciesProse {
  @Field(() => Int)
  pokemon_species_id: Int;

  @Field(() => Int)
  local_language_id: Int;

  @Field(, { nullable: true })
  form_description: String;

}
