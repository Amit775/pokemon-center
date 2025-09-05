import { Field, Int, ObjectType } from '@nestjs/graphql';
import { ConquestMoveDisplacements as PrismaConquestMoveDisplacements } from '@prisma/client';

@ObjectType()
export class ConquestMoveDisplacements implements PrismaConquestMoveDisplacements {
  @Field(() => Int)
  id!: number;

  @Field(() => String)
  identifier!: string;

  @Field(() => Int)
  affects_target!: number;
}
