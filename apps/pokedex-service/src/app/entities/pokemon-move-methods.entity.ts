import { Field, Int, ObjectType } from '@nestjs/graphql';
import { PokemonMoveMethods as PrismaPokemonMoveMethods } from '@prisma/client';

@ObjectType()
export class PokemonMoveMethods implements PrismaPokemonMoveMethods {
  @Field(() => Int)
  id: Int;

  @Field()
  identifier: String;

}
