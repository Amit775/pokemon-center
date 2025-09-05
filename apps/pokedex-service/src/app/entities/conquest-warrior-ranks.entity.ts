import { Field, Int, ObjectType } from '@nestjs/graphql';
import { ConquestWarriorRanks as PrismaConquestWarriorRanks } from '@prisma/client';

@ObjectType()
export class ConquestWarriorRanks implements PrismaConquestWarriorRanks {
  @Field(() => Int)
  id: Int;

  @Field(() => Int)
  warrior_id: Int;

  @Field(() => Int)
  rank: Int;

  @Field(() => Int)
  skill_id: Int;

}
