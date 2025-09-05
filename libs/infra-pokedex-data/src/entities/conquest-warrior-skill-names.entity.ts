import { Field, Int, ObjectType } from '@nestjs/graphql';
import { ConquestWarriorSkillNames as PrismaConquestWarriorSkillNames } from '@prisma/client';

@ObjectType()
export class ConquestWarriorSkillNames implements PrismaConquestWarriorSkillNames {
  @Field(() => Int)
  skill_id!: number;

  @Field(() => Int)
  local_language_id!: number;

  @Field(() => String)
  name!: string;
}
