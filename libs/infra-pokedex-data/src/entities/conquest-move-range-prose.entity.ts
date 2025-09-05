import { Field, Int, ObjectType } from '@nestjs/graphql';
import { ConquestMoveRangeProse as PrismaConquestMoveRangeProse } from '@prisma/client';

@ObjectType()
export class ConquestMoveRangeProse implements PrismaConquestMoveRangeProse {
  @Field(() => Int)
  conquest_move_range_id!: number;

  @Field(() => Int)
  local_language_id!: number;

  @Field(() => String)
  name!: string;

  @Field(() => String, { nullable: true })
  description!: string | null;
}
