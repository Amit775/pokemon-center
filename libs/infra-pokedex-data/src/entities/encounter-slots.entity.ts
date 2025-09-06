import { Field, Int, ObjectType } from '@nestjs/graphql';
import { EncounterSlots as PrismaEncounterSlots } from '@prisma/client';

@ObjectType()
export class EncounterSlots implements PrismaEncounterSlots {
  @Field(() => Int)
  id!: number;

  @Field(() => Int)
  version_group_id!: number;

  @Field(() => Int)
  encounter_method_id!: number;

  @Field(() => Int, { nullable: true })
  slot!: number | null;

  @Field(() => Int)
  rarity!: number;
}
