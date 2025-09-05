import { Field, Int, ObjectType } from '@nestjs/graphql';
import { ConquestWarriorSkills as PrismaConquestWarriorSkills } from '@prisma/client';

@ObjectType()
export class ConquestWarriorSkills implements PrismaConquestWarriorSkills {
  @Field(() => Int)
  id!: number;

  @Field(() => String)
  identifier!: string;
}
