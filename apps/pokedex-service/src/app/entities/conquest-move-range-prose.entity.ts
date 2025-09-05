import { Field, Int, ObjectType } from '@nestjs/graphql';
import { ConquestMoveRangeProse as PrismaConquestMoveRangeProse } from '@prisma/client';

@ObjectType()
export class ConquestMoveRangeProse implements PrismaConquestMoveRangeProse {
  @Field(() => Int)
  conquest_move_range_id: Int;

  @Field(() => Int)
  local_language_id: Int;

  @Field()
  name: String;

  @Field(, { nullable: true })
  description: String;

}
