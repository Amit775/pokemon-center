import { Field, Int, ObjectType } from '@nestjs/graphql';
import { EncounterConditionProse as PrismaEncounterConditionProse } from '@prisma/client';

@ObjectType()
export class EncounterConditionProse implements PrismaEncounterConditionProse {
  @Field(() => Int)
  encounter_condition_id: Int;

  @Field(() => Int)
  local_language_id: Int;

  @Field()
  name: String;

}
