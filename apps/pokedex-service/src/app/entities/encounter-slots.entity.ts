import { Field, Int, ObjectType } from '@nestjs/graphql';
import { EncounterSlots as PrismaEncounterSlots } from '@prisma/client';

@ObjectType()
export class EncounterSlots implements PrismaEncounterSlots {
  @Field(() => Int)
  id: Int;

  @Field(() => Int)
  version_group_id: Int;

  @Field(() => Int)
  encounter_method_id: Int;

  @Field(() => Int, { nullable: true })
  slot: Int;

  @Field(() => Int)
  rarity: Int;

}
