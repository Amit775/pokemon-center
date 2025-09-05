import { Field, Int, ObjectType } from '@nestjs/graphql';
import { MoveTargetProse as PrismaMoveTargetProse } from '@prisma/client';

@ObjectType()
export class MoveTargetProse implements PrismaMoveTargetProse {
  @Field(() => Int)
  move_target_id: Int;

  @Field(() => Int)
  local_language_id: Int;

  @Field()
  name: String;

  @Field(, { nullable: true })
  description: String;

}
