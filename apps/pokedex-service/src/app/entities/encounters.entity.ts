import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Encounters as PrismaEncounters } from '@prisma/client';

@ObjectType()
export class Encounters implements PrismaEncounters {
  @Field(() => Int)
  id: Int;

  @Field(() => Int)
  version_id: Int;

  @Field(() => Int)
  location_area_id: Int;

  @Field(() => Int)
  encounter_slot_id: Int;

  @Field(() => Int)
  pokemon_id: Int;

  @Field(() => Int)
  min_level: Int;

  @Field(() => Int)
  max_level: Int;

}
