import { Field, Int, ObjectType } from '@nestjs/graphql';
import { MoveFlagProse as PrismaMoveFlagProse } from '@prisma/client';

@ObjectType()
export class MoveFlagProse implements PrismaMoveFlagProse {
  @Field(() => Int)
  move_flag_id: Int;

  @Field(() => Int)
  local_language_id: Int;

  @Field()
  name: String;

  @Field(, { nullable: true })
  description: String;

}
