import { Field, Int, ObjectType } from '@nestjs/graphql';
import { EncounterMethodProse as PrismaEncounterMethodProse } from '@prisma/client';

@ObjectType()
export class EncounterMethodProse implements PrismaEncounterMethodProse {
  @Field(() => Int)
  encounter_method_id: Int;

  @Field(() => Int)
  local_language_id: Int;

  @Field()
  name: String;

}
