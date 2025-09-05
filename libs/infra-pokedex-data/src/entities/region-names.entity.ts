import { Field, Int, ObjectType } from '@nestjs/graphql';
import { RegionNames as PrismaRegionNames } from '@prisma/client';

@ObjectType()
export class RegionNames implements PrismaRegionNames {
  @Field(() => Int)
  region_id!: number;

  @Field(() => Int)
  local_language_id!: number;

  @Field(() => String)
  name!: string;
}
