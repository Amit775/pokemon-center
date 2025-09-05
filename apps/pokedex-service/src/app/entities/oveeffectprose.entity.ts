import { Field, Int, ObjectType } from '@nestjs/graphql';
import { MoveEffectProse as PrismaMoveEffectProse } from '@prisma/client';

@ObjectType()
export class MoveEffectProse implements PrismaMoveEffectProse {
  @Field(() => Int)
  move_effect_id: Int;

  @Field(() => Int)
  local_language_id: Int;

  @Field(, { nullable: true })
  short_effect: String;

  @Field(, { nullable: true })
  effect: String;

}
