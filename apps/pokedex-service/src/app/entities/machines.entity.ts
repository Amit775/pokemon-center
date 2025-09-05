import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Machines as PrismaMachines } from '@prisma/client';

@ObjectType()
export class Machines implements PrismaMachines {
  @Field(() => Int)
  machine_number: Int;

  @Field(() => Int)
  version_group_id: Int;

  @Field(() => Int)
  item_id: Int;

  @Field(() => Int)
  move_id: Int;

}
