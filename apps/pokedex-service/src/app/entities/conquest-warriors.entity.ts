import { Field, Int, ObjectType } from '@nestjs/graphql';
import { ConquestWarriors as PrismaConquestWarriors } from '@prisma/client';

@ObjectType()
export class ConquestWarriors implements PrismaConquestWarriors {
  @Field(() => Int)
  id: Int;

  @Field()
  identifier: String;

  @Field(() => Int)
  gender_id: Int;

  @Field(() => Int)
  archetype_id: Int;

}
