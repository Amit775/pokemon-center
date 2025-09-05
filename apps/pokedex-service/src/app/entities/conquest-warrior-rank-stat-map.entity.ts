import { Field, Int, ObjectType } from '@nestjs/graphql';
import { ConquestWarriorRankStatMap as PrismaConquestWarriorRankStatMap } from '@prisma/client';

@ObjectType()
export class ConquestWarriorRankStatMap implements PrismaConquestWarriorRankStatMap {
  @Field(() => Int)
  warrior_rank_id: Int;

  @Field(() => Int)
  warrior_stat_id: Int;

  @Field(() => Int)
  base_stat: Int;

}
