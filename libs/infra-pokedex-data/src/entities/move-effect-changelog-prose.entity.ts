import { Field, Int, ObjectType } from '@nestjs/graphql';
import { MoveEffectChangelogProse as PrismaMoveEffectChangelogProse } from '@prisma/client';

@ObjectType()
export class MoveEffectChangelogProse implements PrismaMoveEffectChangelogProse {
  @Field(() => Int)
  move_effect_changelog_id!: number;

  @Field(() => Int)
  local_language_id!: number;

  @Field(() => String)
  effect!: string;
}
