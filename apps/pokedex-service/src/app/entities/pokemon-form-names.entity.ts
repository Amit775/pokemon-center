import { Field, Int, ObjectType } from '@nestjs/graphql';
import { PokemonFormNames as PrismaPokemonFormNames } from '@prisma/client';

@ObjectType()
export class PokemonFormNames implements PrismaPokemonFormNames {
  @Field(() => Int)
  pokemon_form_id: Int;

  @Field(() => Int)
  local_language_id: Int;

  @Field(, { nullable: true })
  form_name: String;

  @Field(, { nullable: true })
  pokemon_name: String;

}
