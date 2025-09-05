import { Field, Int, ObjectType } from '@nestjs/graphql';
import { PokemonColors as PrismaPokemonColors } from '@prisma/client';

@ObjectType()
export class PokemonColors implements PrismaPokemonColors {
  @Field(() => Int)
  id: number;

  @Field(() => String)
  identifier: string;

}
