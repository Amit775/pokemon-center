import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Pokedexes as PrismaPokedexes } from '@prisma/client';

@ObjectType()
export class Pokedexes implements PrismaPokedexes {
  @Field(() => Int)
  id!: number;

  @Field(() => Int)
  region_id!: number;

  @Field(() => String)
  identifier!: string;

  @Field(() => Int)
  is_main_series!: number;
}
