import { Field, Int, ObjectType } from '@nestjs/graphql';
import { ContestCombos as PrismaContestCombos } from '@prisma/client';

@ObjectType()
export class ContestCombos implements PrismaContestCombos {
  @Field(() => Int)
  first_move_id: number;

  @Field(() => Int)
  second_move_id: number;

}
