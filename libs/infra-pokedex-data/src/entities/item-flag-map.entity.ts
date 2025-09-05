import { Field, Int, ObjectType } from '@nestjs/graphql';
import { ItemFlagMap as PrismaItemFlagMap } from '@prisma/client';

@ObjectType()
export class ItemFlagMap implements PrismaItemFlagMap {
  @Field(() => Int)
  item_id!: number;

  @Field(() => Int)
  item_flag_id!: number;
}
