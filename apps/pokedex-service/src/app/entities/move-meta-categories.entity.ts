import { Field, Int, ObjectType } from '@nestjs/graphql';
import { MoveMetaCategories as PrismaMoveMetaCategories } from '@prisma/client';

@ObjectType()
export class MoveMetaCategories implements PrismaMoveMetaCategories {
  @Field(() => Int)
  id: Int;

  @Field()
  identifier: String;

}
