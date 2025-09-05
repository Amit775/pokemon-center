import { Field, Int, ObjectType } from '@nestjs/graphql';
import { MoveEffectChangelog as PrismaMoveEffectChangelog } from '@prisma/client';

@ObjectType()
export class MoveEffectChangelog implements PrismaMoveEffectChangelog {
  @Field(() => Int)
  id!: number;

  @Field(() => Int)
  effect_id!: number;

  @Field(() => Int)
  changed_in_version_group_id!: number;
}
