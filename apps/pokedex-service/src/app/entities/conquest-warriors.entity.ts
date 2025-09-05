import { Field, Int, ObjectType } from '@nestjs/graphql';
import { ConquestWarriors as PrismaConquestWarriors } from '@prisma/client';

@ObjectType()
export class ConquestWarriors implements PrismaConquestWarriors {
  @Field(() => Int)
  id: number;

  @Field(() => String)
  identifier: string;

  @Field(() => Int)
  gender_id: number;

  @Field(() => Int)
  archetype_id: number;

}
