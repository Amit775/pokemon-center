import { Field, Int, ObjectType } from '@nestjs/graphql';
import { MoveProse as PrismaMoveProse } from '@prisma/client';

@ObjectType()
export class MoveProse implements PrismaMoveProse {
  @Field(() => Int)
  move_id!: number;

  @Field(() => Int)
  local_language_id!: number;

  @Field(() => String, { nullable: true })
  short_effect!: string | null;

  @Field(() => String, { nullable: true })
  effect!: string | null;
}
