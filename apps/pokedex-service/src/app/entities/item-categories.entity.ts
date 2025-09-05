import { Field, Int, ObjectType } from '@nestjs/graphql';
import { ItemCategories as PrismaItemCategories } from '@prisma/client';

@ObjectType()
export class ItemCategories implements PrismaItemCategories {
  @Field(() => Int)
  id: number;

  @Field(() => Int)
  pocket_id: number;

  @Field(() => String)
  identifier: string;

}
