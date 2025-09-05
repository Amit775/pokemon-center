import { Field, Int, ObjectType } from '@nestjs/graphql';
import { ConquestMoveRanges as PrismaConquestMoveRanges } from '@prisma/client';

@ObjectType()
export class ConquestMoveRanges implements PrismaConquestMoveRanges {
  @Field(() => Int)
  id!: number;

  @Field(() => String)
  identifier!: string;

  @Field(() => Int)
  targets!: number;
}
