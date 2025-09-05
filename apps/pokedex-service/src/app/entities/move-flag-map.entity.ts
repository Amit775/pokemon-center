import { Field, Int, ObjectType } from '@nestjs/graphql';
import { MoveFlagMap as PrismaMoveFlagMap } from '@prisma/client';

@ObjectType()
export class MoveFlagMap implements PrismaMoveFlagMap {
  @Field(() => Int)
  move_id: Int;

  @Field(() => Int)
  move_flag_id: Int;

}
