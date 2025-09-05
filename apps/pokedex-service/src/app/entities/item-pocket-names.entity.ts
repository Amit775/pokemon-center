import { Field, Int, ObjectType } from '@nestjs/graphql';
import { ItemPocketNames as PrismaItemPocketNames } from '@prisma/client';

@ObjectType()
export class ItemPocketNames implements PrismaItemPocketNames {
  @Field(() => Int)
  item_pocket_id: Int;

  @Field(() => Int)
  local_language_id: Int;

  @Field()
  name: String;

}
