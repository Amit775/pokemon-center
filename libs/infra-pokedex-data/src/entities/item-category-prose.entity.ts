import { Field, Int, ObjectType } from '@nestjs/graphql';
import { ItemCategoryProse as PrismaItemCategoryProse } from '@prisma/client';

@ObjectType()
export class ItemCategoryProse implements PrismaItemCategoryProse {
  @Field(() => Int)
  item_category_id!: number;

  @Field(() => Int)
  local_language_id!: number;

  @Field(() => String)
  name!: string;
}
