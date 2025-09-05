import { Field, Int, ObjectType } from '@nestjs/graphql';
import { EvolutionChains as PrismaEvolutionChains } from '@prisma/client';

@ObjectType()
export class EvolutionChains implements PrismaEvolutionChains {
  @Field(() => Int)
  id!: number;

  @Field(() => Int, { nullable: true })
  baby_trigger_item_id!: number | null;
}
