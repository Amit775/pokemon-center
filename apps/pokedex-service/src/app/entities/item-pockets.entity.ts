import { Field, Int, ObjectType } from '@nestjs/graphql';
import { ItemPockets as PrismaItemPockets } from '@prisma/client';

@ObjectType()
export class ItemPockets implements PrismaItemPockets {
  @Field(() => Int)
  id: number;

  @Field()
  identifier: string;
}
