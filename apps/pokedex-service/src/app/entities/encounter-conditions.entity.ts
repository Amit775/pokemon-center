import { Field, Int, ObjectType } from '@nestjs/graphql';
import { EncounterConditions as PrismaEncounterConditions } from '@prisma/client';

@ObjectType()
export class EncounterConditions implements PrismaEncounterConditions {
  @Field(() => Int)
  id: number;

  @Field(() => String)
  identifier: string;

}
