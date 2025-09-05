import { Field, Int, ObjectType } from '@nestjs/graphql';
import { PokemonHabitats as PrismaPokemonHabitats } from '@prisma/client';

@ObjectType()
export class PokemonHabitats implements PrismaPokemonHabitats {
  @Field(() => Int)
  id!: number;

  @Field(() => String)
  identifier!: string;
}
