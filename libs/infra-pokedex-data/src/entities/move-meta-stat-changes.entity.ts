import { Field, Int, ObjectType } from '@nestjs/graphql';
import { MoveMetaStatChanges as PrismaMoveMetaStatChanges } from '@prisma/client';

@ObjectType()
export class MoveMetaStatChanges implements PrismaMoveMetaStatChanges {
  @Field(() => Int)
  move_id!: number;

  @Field(() => Int)
  stat_id!: number;

  @Field(() => Int)
  change!: number;
}
