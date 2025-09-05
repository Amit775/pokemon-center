import { Field, Int, ObjectType } from '@nestjs/graphql';
import { PokemonShapes as PrismaPokemonShapes } from '@prisma/client';

@ObjectType()
export class PokemonShapes implements PrismaPokemonShapes {
  @Field(() => Int)
  id: number;

  @Field(() => String)
  identifier: string;

}
