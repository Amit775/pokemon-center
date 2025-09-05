import { Field, Int, ObjectType } from '@nestjs/graphql';
import { PokemonForms as PrismaPokemonForms } from '@prisma/client';

@ObjectType()
export class PokemonForms implements PrismaPokemonForms {
  @Field(() => Int)
  id: number;

  @Field()
  identifier: string;

  @Field({ nullable: true })
  form_identifier?: string;

  @Field(() => Int)
  pokemon_id: number;

  @Field(() => Int)
  introduced_in_version_group_id: number;

  @Field(() => Int)
  is_default: number;

  @Field(() => Int)
  is_battle_only: number;

  @Field(() => Int)
  is_mega: number;

  @Field(() => Int)
  form_order: number;

  @Field(() => Int)
  order: number;
}
