import { Field, Int, ObjectType } from '@nestjs/graphql';
import { PokedexProse as PrismaPokedexProse } from '@prisma/client';

@ObjectType()
export class PokedexProse implements PrismaPokedexProse {
  @Field(() => Int)
  pokedex_id: Int;

  @Field(() => Int)
  local_language_id: Int;

  @Field()
  name: String;

  @Field(, { nullable: true })
  description: String;

}
