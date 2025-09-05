import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Encounters as PrismaEncounters } from '@prisma/client';

@ObjectType()
export class Encounters implements PrismaEncounters {
  @Field(() => Int)
  id!: number;

  @Field(() => Int)
  version_id!: number;

  @Field(() => Int)
  location_area_id!: number;

  @Field(() => Int)
  encounter_slot_id!: number;

  @Field(() => Int)
  pokemon_id!: number;

  @Field(() => Int)
  min_level!: number;

  @Field(() => Int)
  max_level!: number;
}
