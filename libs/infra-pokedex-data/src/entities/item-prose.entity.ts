import { Field, Int, ObjectType } from '@nestjs/graphql';
import { ItemProse as PrismaItemProse } from '@prisma/client';

@ObjectType()
export class ItemProse implements PrismaItemProse {
  @Field(() => Int)
  item_id!: number;

  @Field(() => Int)
  local_language_id!: number;

  @Field(() => String, { nullable: true })
  short_effect!: string | null;

  @Field(() => String, { nullable: true })
  effect!: string | null;
}
