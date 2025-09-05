import { Field, Int, ObjectType } from '@nestjs/graphql';
import { ContestEffects as PrismaContestEffects } from '@prisma/client';

@ObjectType()
export class ContestEffects implements PrismaContestEffects {
  @Field(() => Int)
  id: Int;

  @Field(() => Int)
  appeal: Int;

  @Field(() => Int)
  jam: Int;

}
