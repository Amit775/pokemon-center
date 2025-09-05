import { Field, Int, ObjectType } from '@nestjs/graphql';
import { ConquestWarriorSkills as PrismaConquestWarriorSkills } from '@prisma/client';

@ObjectType()
export class ConquestWarriorSkills implements PrismaConquestWarriorSkills {
  @Field(() => Int)
  id: Int;

  @Field()
  identifier: String;

}
