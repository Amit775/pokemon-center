import { Field, Int, ObjectType } from '@nestjs/graphql';
import { MoveMetaStatChanges as PrismaMoveMetaStatChanges } from '@prisma/client';

@ObjectType()
export class MoveMetaStatChanges implements PrismaMoveMetaStatChanges {
  @Field(() => Int)
  move_id: Int;

  @Field(() => Int)
  stat_id: Int;

  @Field(() => Int)
  change: Int;

}
