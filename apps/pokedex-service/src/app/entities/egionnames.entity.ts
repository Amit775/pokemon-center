import { Field, Int, ObjectType } from '@nestjs/graphql';
import { RegionNames as PrismaRegionNames } from '@prisma/client';

@ObjectType()
export class RegionNames implements PrismaRegionNames {
  @Field(() => Int)
  region_id: Int;

  @Field(() => Int)
  local_language_id: Int;

  @Field()
  name: String;

}
