import { Field, Int, ObjectType } from '@nestjs/graphql';
import { MoveEffectChangelogProse as PrismaMoveEffectChangelogProse } from '@prisma/client';

@ObjectType()
export class MoveEffectChangelogProse implements PrismaMoveEffectChangelogProse {
  @Field(() => Int)
  move_effect_changelog_id: Int;

  @Field(() => Int)
  local_language_id: Int;

  @Field()
  effect: String;

}
