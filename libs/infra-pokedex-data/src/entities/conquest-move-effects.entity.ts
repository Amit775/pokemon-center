import { Field, Int, ObjectType } from '@nestjs/graphql';
import { ConquestMoveEffects as PrismaConquestMoveEffects } from '@prisma/client';

@ObjectType()
export class ConquestMoveEffects implements PrismaConquestMoveEffects {
  @Field(() => Int)
  id!: number;
}
