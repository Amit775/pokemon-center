import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Pokemon as PrismaPokemon } from '@prisma/client';

@ObjectType()
export class Pokemon implements PrismaPokemon {
  @Field(() => Int)
  id: number;

  @Field(() => String)
  identifier: string;

  @Field(() => Int)
  species_id: number;

  @Field(() => Int)
  height: number;

  @Field(() => Int)
  weight: number;

  @Field(() => Int)
  base_experience: number;

  @Field(() => Int)
  order: number;

  @Field(() => Int)
  is_default: number;

}
