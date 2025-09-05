import { Field, Int, ObjectType } from '@nestjs/graphql';
import { EncounterMethods as PrismaEncounterMethods } from '@prisma/client';

@ObjectType()
export class EncounterMethods implements PrismaEncounterMethods {
  @Field(() => Int)
  id!: number;

  @Field(() => String)
  identifier!: string;

  @Field(() => Int)
  order!: number;
}
