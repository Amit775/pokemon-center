import { Field, Int, ObjectType } from '@nestjs/graphql';
import { PokemonSpeciesProse as PrismaPokemonSpeciesProse } from '@prisma/client';

@ObjectType()
export class PokemonSpeciesProse implements PrismaPokemonSpeciesProse {
  @Field(() => Int)
  pokemon_species_id: number;

  @Field(() => Int)
  local_language_id: number;

  @Field(() => String, { nullable: true })
  form_description: string;

}
