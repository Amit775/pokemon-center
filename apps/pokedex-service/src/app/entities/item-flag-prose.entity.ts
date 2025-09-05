import { Field, Int, ObjectType } from '@nestjs/graphql';
import { ItemFlagProse as PrismaItemFlagProse } from '@prisma/client';

@ObjectType()
export class ItemFlagProse implements PrismaItemFlagProse {
  @Field(() => Int)
  item_flag_id: Int;

  @Field(() => Int)
  local_language_id: Int;

  @Field()
  name: String;

  @Field(, { nullable: true })
  description: String;

}
