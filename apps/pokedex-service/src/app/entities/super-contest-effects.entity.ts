import { Field, Int, ObjectType } from '@nestjs/graphql';
import { SuperContestEffects as PrismaSuperContestEffects } from '@prisma/client';

@ObjectType()
export class SuperContestEffects implements PrismaSuperContestEffects {
  @Field(() => Int)
  id: Int;

  @Field(() => Int)
  appeal: Int;

}
