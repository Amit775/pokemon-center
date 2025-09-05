import { Field, Int, ObjectType } from '@nestjs/graphql';
import { PokemonFormNames as PrismaPokemonFormNames } from '@prisma/client';

@ObjectType()
export class PokemonFormNames implements PrismaPokemonFormNames {
  @Field(() => Int)
  pokemon_form_id!: number;

  @Field(() => Int)
  local_language_id!: number;

  @Field(() => String, { nullable: true })
  form_name!: string | null;

  @Field(() => String, { nullable: true })
  pokemon_name!: string | null;
}
