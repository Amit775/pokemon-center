import { Field, Int, ObjectType } from '@nestjs/graphql';
import { PokemonColors as PrismaPokemonColors } from '@prisma/client';

@ObjectType()
export class PokemonColors implements PrismaPokemonColors {
  @Field(() => Int)
  id: Int;

  @Field()
  identifier: String;

}
