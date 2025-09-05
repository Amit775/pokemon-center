import { Field, Int, ObjectType } from '@nestjs/graphql';
import { PokemonSpeciesFlavorText as PrismaPokemonSpeciesFlavorText } from '@prisma/client';

@ObjectType()
export class PokemonSpeciesFlavorText implements PrismaPokemonSpeciesFlavorText {
  @Field(() => Int)
  species_id: Int;

  @Field(() => Int)
  version_id: Int;

  @Field(() => Int)
  language_id: Int;

  @Field()
  flavor_text: String;

}
