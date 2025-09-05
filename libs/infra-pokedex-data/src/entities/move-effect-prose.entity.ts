import { Field, Int, ObjectType } from '@nestjs/graphql';
import { MoveEffectProse as PrismaMoveEffectProse } from '@prisma/client';

@ObjectType()
export class MoveEffectProse implements PrismaMoveEffectProse {
  @Field(() => Int)
  move_effect_id!: number;

  @Field(() => Int)
  local_language_id!: number;

  @Field(() => String, { nullable: true })
  short_effect!: string | null;

  @Field(() => String, { nullable: true })
  effect!: string | null;
}
