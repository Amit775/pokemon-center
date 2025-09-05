import { Field, Int, ObjectType } from '@nestjs/graphql';
import { PokemonFormTypes as PrismaPokemonFormTypes } from '@prisma/client';

@ObjectType()
export class PokemonFormTypes implements PrismaPokemonFormTypes {
  @Field(() => Int)
  pokemon_form_id: Int;

  @Field(() => Int)
  type_id: Int;

  @Field(() => Int)
  slot: Int;

}
