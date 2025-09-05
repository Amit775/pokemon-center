import { Field, Int, ObjectType } from '@nestjs/graphql';
import { ContestEffectProse as PrismaContestEffectProse } from '@prisma/client';

@ObjectType()
export class ContestEffectProse implements PrismaContestEffectProse {
  @Field(() => Int)
  contest_effect_id: number;

  @Field(() => Int)
  local_language_id: number;

  @Field(() => String, { nullable: true })
  flavor_text: string;

  @Field(() => String, { nullable: true })
  effect: string;

}
