import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Machines as PrismaMachines } from '@prisma/client';

@ObjectType()
export class Machines implements PrismaMachines {
  @Field(() => Int)
  machine_number: number;

  @Field(() => Int)
  version_group_id: number;

  @Field(() => Int)
  item_id: number;

  @Field(() => Int)
  move_id: number;

}
