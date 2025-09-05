import { Field, Int, ObjectType } from '@nestjs/graphql';
import { PokemonShapeProse as PrismaPokemonShapeProse } from '@prisma/client';

@ObjectType()
export class PokemonShapeProse implements PrismaPokemonShapeProse {
  @Field(() => Int)
  pokemon_shape_id!: number;

  @Field(() => Int)
  local_language_id!: number;

  @Field(() => String)
  name!: string;

  @Field(() => String, { nullable: true })
  awesome_name!: string | null;

  @Field(() => String, { nullable: true })
  description!: string | null;
}
