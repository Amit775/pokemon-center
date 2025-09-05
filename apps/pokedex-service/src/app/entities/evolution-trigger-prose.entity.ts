import { Field, Int, ObjectType } from '@nestjs/graphql';
import { EvolutionTriggerProse as PrismaEvolutionTriggerProse } from '@prisma/client';

@ObjectType()
export class EvolutionTriggerProse implements PrismaEvolutionTriggerProse {
  @Field(() => Int)
  evolution_trigger_id: Int;

  @Field(() => Int)
  local_language_id: Int;

  @Field()
  name: String;

}
