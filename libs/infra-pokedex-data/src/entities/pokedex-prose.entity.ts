import { Field, Int, ObjectType } from '@nestjs/graphql';
import { PokedexProse as PrismaPokedexProse } from '@prisma/client';

@ObjectType()
export class PokedexProse implements PrismaPokedexProse {
  @Field(() => Int)
  pokedex_id!: number;

  @Field(() => Int)
  local_language_id!: number;

  @Field(() => String)
  name!: string;

  @Field(() => String, { nullable: true })
  description!: string | null;
}
