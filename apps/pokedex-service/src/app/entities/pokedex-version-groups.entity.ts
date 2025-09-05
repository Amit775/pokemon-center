import { Field, Int, ObjectType } from '@nestjs/graphql';
import { PokedexVersionGroups as PrismaPokedexVersionGroups } from '@prisma/client';

@ObjectType()
export class PokedexVersionGroups implements PrismaPokedexVersionGroups {
  @Field(() => Int)
  pokedex_id: Int;

  @Field(() => Int)
  version_group_id: Int;

}
