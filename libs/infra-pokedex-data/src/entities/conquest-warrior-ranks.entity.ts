import { Field, Int, ObjectType } from '@nestjs/graphql';
import { ConquestWarriorRanks as PrismaConquestWarriorRanks } from '@prisma/client';

@ObjectType()
export class ConquestWarriorRanks implements PrismaConquestWarriorRanks {
  @Field(() => Int)
  id!: number;

  @Field(() => Int)
  warrior_id!: number;

  @Field(() => Int)
  rank!: number;

  @Field(() => Int)
  skill_id!: number;
}
