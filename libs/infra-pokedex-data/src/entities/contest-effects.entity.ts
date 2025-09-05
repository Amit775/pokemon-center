import { Field, Int, ObjectType } from '@nestjs/graphql';
import { ContestEffects as PrismaContestEffects } from '@prisma/client';

@ObjectType()
export class ContestEffects implements PrismaContestEffects {
  @Field(() => Int)
  id!: number;

  @Field(() => Int)
  appeal!: number;

  @Field(() => Int)
  jam!: number;
}
