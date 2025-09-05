import { Field, Int, ObjectType } from '@nestjs/graphql';
import { MoveProse as PrismaMoveProse } from '@prisma/client';

@ObjectType()
export class MoveProse implements PrismaMoveProse {
  @Field(() => Int)
  move_id: Int;

  @Field(() => Int)
  local_language_id: Int;

  @Field(, { nullable: true })
  short_effect: String;

  @Field(, { nullable: true })
  effect: String;

}
