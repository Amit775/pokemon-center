import { Field, Int, ObjectType } from '@nestjs/graphql';
import { ConquestTransformationWarriors as PrismaConquestTransformationWarriors } from '@prisma/client';

@ObjectType()
export class ConquestTransformationWarriors implements PrismaConquestTransformationWarriors {
  @Field(() => Int)
  transformation_id: number;

  @Field(() => Int)
  present_warrior_id: number;

}
