import { Field, Int, ObjectType } from '@nestjs/graphql';
import { ItemFlavorText as PrismaItemFlavorText } from '@prisma/client';

@ObjectType()
export class ItemFlavorText implements PrismaItemFlavorText {
  @Field(() => Int)
  item_id: Int;

  @Field(() => Int)
  version_group_id: Int;

  @Field(() => Int)
  language_id: Int;

  @Field()
  flavor_text: String;

}
