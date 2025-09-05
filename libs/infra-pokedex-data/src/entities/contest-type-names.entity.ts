import { Field, Int, ObjectType } from '@nestjs/graphql';
import { ContestTypeNames as PrismaContestTypeNames } from '@prisma/client';

@ObjectType()
export class ContestTypeNames implements PrismaContestTypeNames {
  @Field(() => Int)
  contest_type_id!: number;

  @Field(() => Int)
  local_language_id!: number;

  @Field(() => String)
  name!: string;

  @Field(() => String, { nullable: true })
  flavor!: string | null;

  @Field(() => String, { nullable: true })
  color!: string | null;
}
