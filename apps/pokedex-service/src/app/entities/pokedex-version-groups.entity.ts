import { Field, Int, ObjectType } from '@nestjs/graphql';
import { PokedexVersionGroups as PrismaPokedexVersionGroups } from '@prisma/client';

@ObjectType()
export class PokedexVersionGroups implements PrismaPokedexVersionGroups {
  @Field(() => Int)
  pokedex_id: number;

  @Field(() => Int)
  version_group_id: number;

}
