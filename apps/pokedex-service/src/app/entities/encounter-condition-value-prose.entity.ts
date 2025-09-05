import { Field, Int, ObjectType } from '@nestjs/graphql';
import { EncounterConditionValueProse as PrismaEncounterConditionValueProse } from '@prisma/client';

@ObjectType()
export class EncounterConditionValueProse implements PrismaEncounterConditionValueProse {
  @Field(() => Int)
  encounter_condition_value_id: Int;

  @Field(() => Int)
  local_language_id: Int;

  @Field()
  name: String;

}
