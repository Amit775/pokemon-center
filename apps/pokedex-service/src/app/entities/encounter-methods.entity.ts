import { Field, Int, ObjectType } from '@nestjs/graphql';
import { EncounterMethods as PrismaEncounterMethods } from '@prisma/client';

@ObjectType()
export class EncounterMethods implements PrismaEncounterMethods {
  @Field(() => Int)
  id: Int;

  @Field()
  identifier: String;

  @Field(() => Int)
  order: Int;

}
