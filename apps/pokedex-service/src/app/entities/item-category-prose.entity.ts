import { Field, Int, ObjectType } from '@nestjs/graphql';
import { ItemCategoryProse as PrismaItemCategoryProse } from '@prisma/client';

@ObjectType()
export class ItemCategoryProse implements PrismaItemCategoryProse {
  @Field(() => Int)
  item_category_id: Int;

  @Field(() => Int)
  local_language_id: Int;

  @Field()
  name: String;

}
