import { Field, Int, ObjectType } from '@nestjs/graphql';
import { SuperContestCombos as PrismaSuperContestCombos } from '@prisma/client';

@ObjectType()
export class SuperContestCombos implements PrismaSuperContestCombos {
  @Field(() => Int)
  first_move_id!: number;

  @Field(() => Int)
  second_move_id!: number;
}
