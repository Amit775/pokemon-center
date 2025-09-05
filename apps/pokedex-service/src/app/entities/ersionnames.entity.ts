import { Field, Int, ObjectType } from '@nestjs/graphql';
import { VersionNames as PrismaVersionNames } from '@prisma/client';

@ObjectType()
export class VersionNames implements PrismaVersionNames {
  @Field(() => Int)
  version_id: Int;

  @Field(() => Int)
  local_language_id: Int;

  @Field()
  name: String;

}
