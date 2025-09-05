import { Field, Int, ObjectType } from '@nestjs/graphql';
import { ContestEffectProse as PrismaContestEffectProse } from '@prisma/client';

@ObjectType()
export class ContestEffectProse implements PrismaContestEffectProse {
  @Field(() => Int)
  contest_effect_id: Int;

  @Field(() => Int)
  local_language_id: Int;

  @Field(, { nullable: true })
  flavor_text: String;

  @Field(, { nullable: true })
  effect: String;

}
