import { Field, Int, ObjectType } from '@nestjs/graphql';
import { GrowthRateProse as PrismaGrowthRateProse } from '@prisma/client';

@ObjectType()
export class GrowthRateProse implements PrismaGrowthRateProse {
  @Field(() => Int)
  growth_rate_id: Int;

  @Field(() => Int)
  local_language_id: Int;

  @Field()
  name: String;

}
