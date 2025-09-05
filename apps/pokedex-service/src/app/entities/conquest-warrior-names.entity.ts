import { Field, Int, ObjectType } from '@nestjs/graphql';
import { ConquestWarriorNames as PrismaConquestWarriorNames } from '@prisma/client';

@ObjectType()
export class ConquestWarriorNames implements PrismaConquestWarriorNames {
  @Field(() => Int)
  warrior_id: number;

  @Field(() => Int)
  local_language_id: number;

  @Field(() => String)
  name: string;

}
