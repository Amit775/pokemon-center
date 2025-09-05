import { Field, Int, ObjectType } from '@nestjs/graphql';
import { ContestTypes as PrismaContestTypes } from '@prisma/client';

@ObjectType()
export class ContestTypes implements PrismaContestTypes {
  @Field(() => Int)
  id!: number;

  @Field(() => String)
  identifier!: string;
}
