import { Field, Int, ObjectType } from '@nestjs/graphql';
import { ConquestWarriorArchetypes as PrismaConquestWarriorArchetypes } from '@prisma/client';

@ObjectType()
export class ConquestWarriorArchetypes implements PrismaConquestWarriorArchetypes {
  @Field(() => Int)
  id: number;

  @Field(() => String)
  identifier: string;

}
