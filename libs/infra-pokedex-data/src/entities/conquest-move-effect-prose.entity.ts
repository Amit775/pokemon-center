import { Field, Int, ObjectType } from '@nestjs/graphql';
import { ConquestMoveEffectProse as PrismaConquestMoveEffectProse } from '@prisma/client';

@ObjectType()
export class ConquestMoveEffectProse implements PrismaConquestMoveEffectProse {
  @Field(() => Int)
  conquest_move_effect_id!: number;

  @Field(() => Int)
  local_language_id!: number;

  @Field(() => String, { nullable: true })
  short_effect!: string | null;

  @Field(() => String, { nullable: true })
  effect!: string | null;
}
