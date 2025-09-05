import { Field, Int, ObjectType } from '@nestjs/graphql';
import { EvolutionChains as PrismaEvolutionChains } from '@prisma/client';

@ObjectType()
export class EvolutionChains implements PrismaEvolutionChains {
  @Field(() => Int)
  id: Int;

  @Field(() => Int, { nullable: true })
  baby_trigger_item_id: Int;

}
