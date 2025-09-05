import { Field, Int, ObjectType } from '@nestjs/graphql';
import { ConquestWarriorNames as PrismaConquestWarriorNames } from '@prisma/client';

@ObjectType()
export class ConquestWarriorNames implements PrismaConquestWarriorNames {
  @Field(() => Int)
  warrior_id: Int;

  @Field(() => Int)
  local_language_id: Int;

  @Field()
  name: String;

}
