import { Field, Int, ObjectType } from '@nestjs/graphql';
import { LocationAreaEncounterRates as PrismaLocationAreaEncounterRates } from '@prisma/client';

@ObjectType()
export class LocationAreaEncounterRates implements PrismaLocationAreaEncounterRates {
  @Field(() => Int)
  location_area_id: Int;

  @Field(() => Int)
  encounter_method_id: Int;

  @Field(() => Int)
  version_id: Int;

  @Field(() => Int)
  rate: Int;

}
