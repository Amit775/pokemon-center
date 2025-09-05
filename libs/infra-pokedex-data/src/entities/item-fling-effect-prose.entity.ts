import { Field, Int, ObjectType } from '@nestjs/graphql';
import { ItemFlingEffectProse as PrismaItemFlingEffectProse } from '@prisma/client';

@ObjectType()
export class ItemFlingEffectProse implements PrismaItemFlingEffectProse {
  @Field(() => Int)
  item_fling_effect_id!: number;

  @Field(() => Int)
  local_language_id!: number;

  @Field(() => String)
  effect!: string;
}
