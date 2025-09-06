import { Field, Int, ObjectType } from '@nestjs/graphql';
import { ConquestWarriorStatNames as PrismaConquestWarriorStatNames } from '@prisma/client';

@ObjectType()
export class ConquestWarriorStatNames implements PrismaConquestWarriorStatNames {
  @Field(() => Int)
  warrior_stat_id!: number;

  @Field(() => Int)
  local_language_id!: number;

  @Field(() => String)
  name!: string;
}
