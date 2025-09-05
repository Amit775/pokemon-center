import { Field, Int, ObjectType } from '@nestjs/graphql';
import { MoveBattleStyles as PrismaMoveBattleStyles } from '@prisma/client';

@ObjectType()
export class MoveBattleStyles implements PrismaMoveBattleStyles {
  @Field(() => Int)
  id: Int;

  @Field()
  identifier: String;

}
