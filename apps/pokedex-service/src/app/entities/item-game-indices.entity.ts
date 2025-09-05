import { Field, Int, ObjectType } from '@nestjs/graphql';
import { ItemGameIndices as PrismaItemGameIndices } from '@prisma/client';

@ObjectType()
export class ItemGameIndices implements PrismaItemGameIndices {
  @Field(() => Int)
  item_id: Int;

  @Field(() => Int)
  generation_id: Int;

  @Field(() => Int)
  game_index: Int;

}
