import { Field, Int, ObjectType } from '@nestjs/graphql';
import { EncounterConditionValues as PrismaEncounterConditionValues } from '@prisma/client';

@ObjectType()
export class EncounterConditionValues implements PrismaEncounterConditionValues {
  @Field(() => Int)
  id!: number;

  @Field(() => Int)
  encounter_condition_id!: number;

  @Field(() => String)
  identifier!: string;

  @Field(() => Int)
  is_default!: number;
}
