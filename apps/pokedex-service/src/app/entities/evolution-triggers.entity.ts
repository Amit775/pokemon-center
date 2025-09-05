import { Field, Int, ObjectType } from '@nestjs/graphql';
import { EvolutionTriggers as PrismaEvolutionTriggers } from '@prisma/client';

@ObjectType()
export class EvolutionTriggers implements PrismaEvolutionTriggers {
  @Field(() => Int)
  id: Int;

  @Field()
  identifier: String;

}
