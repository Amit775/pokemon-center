import { Field, Int, ObjectType } from '@nestjs/graphql';
import { ItemFlagProse as PrismaItemFlagProse } from '@prisma/client';

@ObjectType()
export class ItemFlagProse implements PrismaItemFlagProse {
  @Field(() => Int)
  item_flag_id: number;

  @Field(() => Int)
  local_language_id: number;

  @Field(() => String)
  name: string;

  @Field(() => String, { nullable: true })
  description: string;

}
