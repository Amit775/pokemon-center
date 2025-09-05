import { Field, Int, ObjectType } from '@nestjs/graphql';
import { GrowthRates as PrismaGrowthRates } from '@prisma/client';

@ObjectType()
export class GrowthRates implements PrismaGrowthRates {
  @Field(() => Int)
  id: number;

  @Field(() => String)
  identifier: string;

  @Field(() => String)
  formula: string;

}
