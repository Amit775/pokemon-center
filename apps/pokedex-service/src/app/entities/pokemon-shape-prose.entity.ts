import { Field, Int, ObjectType } from '@nestjs/graphql';
import { PokemonShapeProse as PrismaPokemonShapeProse } from '@prisma/client';

@ObjectType()
export class PokemonShapeProse implements PrismaPokemonShapeProse {
  @Field(() => Int)
  pokemon_shape_id: Int;

  @Field(() => Int)
  local_language_id: Int;

  @Field()
  name: String;

  @Field(, { nullable: true })
  awesome_name: String;

  @Field(, { nullable: true })
  description: String;

}
