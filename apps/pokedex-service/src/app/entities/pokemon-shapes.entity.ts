import { Field, Int, ObjectType } from '@nestjs/graphql';
import { PokemonShapes as PrismaPokemonShapes } from '@prisma/client';

@ObjectType()
export class PokemonShapes implements PrismaPokemonShapes {
  @Field(() => Int)
  id: Int;

  @Field()
  identifier: String;

}
