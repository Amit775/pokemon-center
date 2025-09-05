import { Field, Int, ObjectType } from '@nestjs/graphql';
import { ConquestMoveEffectProse as PrismaConquestMoveEffectProse } from '@prisma/client';

@ObjectType()
export class ConquestMoveEffectProse implements PrismaConquestMoveEffectProse {
  @Field(() => Int)
  conquest_move_effect_id: Int;

  @Field(() => Int)
  local_language_id: Int;

  @Field(, { nullable: true })
  short_effect: String;

  @Field(, { nullable: true })
  effect: String;

}
