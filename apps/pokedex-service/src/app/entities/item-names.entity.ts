import { Field, Int, ObjectType } from '@nestjs/graphql';
import { ItemNames as PrismaItemNames } from '@prisma/client';

@ObjectType()
export class ItemNames implements PrismaItemNames {
  @Field(() => Int)
  item_id: number;

  @Field(() => Int)
  local_language_id: number;

  @Field(() => String)
  name: string;

}
