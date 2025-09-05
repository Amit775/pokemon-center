import { Field, Int, ObjectType } from '@nestjs/graphql';
import { ItemFlavorText as PrismaItemFlavorText } from '@prisma/client';

@ObjectType()
export class ItemFlavorText implements PrismaItemFlavorText {
  @Field(() => Int)
  item_id: number;

  @Field(() => Int)
  version_group_id: number;

  @Field(() => Int)
  language_id: number;

  @Field(() => String)
  flavor_text: string;

}
