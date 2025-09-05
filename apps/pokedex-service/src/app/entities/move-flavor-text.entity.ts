import { Field, Int, ObjectType } from '@nestjs/graphql';
import { MoveFlavorText as PrismaMoveFlavorText } from '@prisma/client';

@ObjectType()
export class MoveFlavorText implements PrismaMoveFlavorText {
  @Field(() => Int)
  move_id: Int;

  @Field(() => Int)
  version_group_id: Int;

  @Field(() => Int)
  language_id: Int;

  @Field()
  flavor_text: String;

}
