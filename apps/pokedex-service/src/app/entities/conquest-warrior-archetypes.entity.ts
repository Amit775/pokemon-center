import { Field, Int, ObjectType } from '@nestjs/graphql';
import { ConquestWarriorArchetypes as PrismaConquestWarriorArchetypes } from '@prisma/client';

@ObjectType()
export class ConquestWarriorArchetypes implements PrismaConquestWarriorArchetypes {
  @Field(() => Int)
  id: Int;

  @Field()
  identifier: String;

}
