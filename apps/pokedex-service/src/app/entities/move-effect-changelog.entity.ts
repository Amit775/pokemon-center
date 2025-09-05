import { Field, Int, ObjectType } from '@nestjs/graphql';
import { MoveEffectChangelog as PrismaMoveEffectChangelog } from '@prisma/client';

@ObjectType()
export class MoveEffectChangelog implements PrismaMoveEffectChangelog {
  @Field(() => Int)
  id: Int;

  @Field(() => Int)
  effect_id: Int;

  @Field(() => Int)
  changed_in_version_group_id: Int;

}
