import { Field, Int, ObjectType } from '@nestjs/graphql';
import { PokemonSpeciesFlavorText as PrismaPokemonSpeciesFlavorText } from '@prisma/client';

@ObjectType()
export class PokemonSpeciesFlavorText implements PrismaPokemonSpeciesFlavorText {
  @Field(() => Int)
  species_id!: number;

  @Field(() => Int)
  version_id!: number;

  @Field(() => Int)
  language_id!: number;

  @Field(() => String)
  flavor_text!: string;
}
