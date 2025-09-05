import { Field, Int, ObjectType } from '@nestjs/graphql';
import { MoveBattleStyles as PrismaMoveBattleStyles } from '@prisma/client';

@ObjectType()
export class MoveBattleStyles implements PrismaMoveBattleStyles {
  @Field(() => Int)
  id: number;

  @Field(() => String)
  identifier: string;

}
