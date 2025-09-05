import { Field, Int, ObjectType } from '@nestjs/graphql';
import { ConquestWarriorStats as PrismaConquestWarriorStats } from '@prisma/client';

@ObjectType()
export class ConquestWarriorStats implements PrismaConquestWarriorStats {
  @Field(() => Int)
  id: Int;

  @Field()
  identifier: String;

}
