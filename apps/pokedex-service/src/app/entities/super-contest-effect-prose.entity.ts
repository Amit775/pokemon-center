import { Field, Int, ObjectType } from '@nestjs/graphql';
import { SuperContestEffectProse as PrismaSuperContestEffectProse } from '@prisma/client';

@ObjectType()
export class SuperContestEffectProse implements PrismaSuperContestEffectProse {
  @Field(() => Int)
  super_contest_effect_id: Int;

  @Field(() => Int)
  local_language_id: Int;

  @Field(, { nullable: true })
  flavor_text: String;

}
