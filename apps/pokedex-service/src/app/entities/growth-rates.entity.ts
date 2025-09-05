import { Field, Int, ObjectType } from '@nestjs/graphql';
import { GrowthRates as PrismaGrowthRates } from '@prisma/client';

@ObjectType()
export class GrowthRates implements PrismaGrowthRates {
  @Field(() => Int)
  id: Int;

  @Field()
  identifier: String;

  @Field()
  formula: String;

}
