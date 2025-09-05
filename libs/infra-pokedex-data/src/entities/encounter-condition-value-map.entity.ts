import { Field, Int, ObjectType } from '@nestjs/graphql';
import { EncounterConditionValueMap as PrismaEncounterConditionValueMap } from '@prisma/client';

@ObjectType()
export class EncounterConditionValueMap implements PrismaEncounterConditionValueMap {
  @Field(() => Int)
  encounter_id!: number;

  @Field(() => Int)
  encounter_condition_value_id!: number;
}
