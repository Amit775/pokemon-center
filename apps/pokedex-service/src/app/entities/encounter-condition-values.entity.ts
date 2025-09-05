import { Field, Int, ObjectType } from '@nestjs/graphql';
import { EncounterConditionValues as PrismaEncounterConditionValues } from '@prisma/client';

@ObjectType()
export class EncounterConditionValues implements PrismaEncounterConditionValues {
  @Field(() => Int)
  id: Int;

  @Field(() => Int)
  encounter_condition_id: Int;

  @Field()
  identifier: String;

  @Field(() => Int)
  is_default: Int;

}
