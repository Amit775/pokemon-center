import { Field, Int, ObjectType } from '@nestjs/graphql';
import { ItemProse as PrismaItemProse } from '@prisma/client';

@ObjectType()
export class ItemProse implements PrismaItemProse {
  @Field(() => Int)
  item_id: Int;

  @Field(() => Int)
  local_language_id: Int;

  @Field(, { nullable: true })
  short_effect: String;

  @Field(, { nullable: true })
  effect: String;

}
