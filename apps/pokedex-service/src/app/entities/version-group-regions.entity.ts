import { Field, Int, ObjectType } from '@nestjs/graphql';
import { VersionGroupRegions as PrismaVersionGroupRegions } from '@prisma/client';

@ObjectType()
export class VersionGroupRegions implements PrismaVersionGroupRegions {
  @Field(() => Int)
  version_group_id: number;

  @Field(() => Int)
  region_id: number;

}
