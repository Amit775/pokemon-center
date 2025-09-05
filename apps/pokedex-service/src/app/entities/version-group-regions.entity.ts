import { Field, Int, ObjectType } from '@nestjs/graphql';
import { VersionGroupRegions as PrismaVersionGroupRegions } from '@prisma/client';

@ObjectType()
export class VersionGroupRegions implements PrismaVersionGroupRegions {
  @Field(() => Int)
  version_group_id: Int;

  @Field(() => Int)
  region_id: Int;

}
