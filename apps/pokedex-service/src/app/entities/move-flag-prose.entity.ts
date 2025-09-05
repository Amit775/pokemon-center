import { Field, Int, ObjectType } from '@nestjs/graphql';
import { MoveFlagProse as PrismaMoveFlagProse } from '@prisma/client';

@ObjectType()
export class MoveFlagProse implements PrismaMoveFlagProse {
  @Field(() => Int)
  move_flag_id: number;

  @Field(() => Int)
  local_language_id: number;

  @Field(() => String)
  name: string;

  @Field(() => String, { nullable: true })
  description: string;

}
