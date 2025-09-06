import { Field, Int, ObjectType } from '@nestjs/graphql';
import { LocationAreaEncounterRates as PrismaLocationAreaEncounterRates } from '@prisma/client';

@ObjectType()
export class LocationAreaEncounterRates implements PrismaLocationAreaEncounterRates {
  @Field(() => Int)
  location_area_id!: number;

  @Field(() => Int)
  encounter_method_id!: number;

  @Field(() => Int)
  version_id!: number;

  @Field(() => Int)
  rate!: number;
}
