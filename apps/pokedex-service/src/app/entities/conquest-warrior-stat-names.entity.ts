import { Field, Int, ObjectType } from '@nestjs/graphql';
import { ConquestWarriorStatNames as PrismaConquestWarriorStatNames } from '@prisma/client';

@ObjectType()
export class ConquestWarriorStatNames implements PrismaConquestWarriorStatNames {
  @Field(() => Int)
  warrior_stat_id: Int;

  @Field(() => Int)
  local_language_id: Int;

  @Field()
  name: String;

}
