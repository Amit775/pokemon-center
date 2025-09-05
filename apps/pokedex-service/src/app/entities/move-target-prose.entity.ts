import { Field, Int, ObjectType } from '@nestjs/graphql';
import { MoveTargetProse as PrismaMoveTargetProse } from '@prisma/client';

@ObjectType()
export class MoveTargetProse implements PrismaMoveTargetProse {
  @Field(() => Int)
  move_target_id: number;

  @Field(() => Int)
  local_language_id: number;

  @Field(() => String)
  name: string;

  @Field(() => String, { nullable: true })
  description: string;

}
