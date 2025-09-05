import { Field, Int, ObjectType } from '@nestjs/graphql';
import { ContestTypeNames as PrismaContestTypeNames } from '@prisma/client';

@ObjectType()
export class ContestTypeNames implements PrismaContestTypeNames {
  @Field(() => Int)
  contest_type_id: Int;

  @Field(() => Int)
  local_language_id: Int;

  @Field()
  name: String;

  @Field(, { nullable: true })
  flavor: String;

  @Field(, { nullable: true })
  color: String;

}
