import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Versions as PrismaVersions } from '@prisma/client';

@ObjectType()
export class Versions implements PrismaVersions {
  @Field(() => Int)
  id: number;

  @Field(() => Int)
  version_group_id: number;

  @Field(() => String)
  identifier: string;

}
