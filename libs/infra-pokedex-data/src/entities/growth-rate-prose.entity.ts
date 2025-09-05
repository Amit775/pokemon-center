import { Field, Int, ObjectType } from '@nestjs/graphql';
import { GrowthRateProse as PrismaGrowthRateProse } from '@prisma/client';

@ObjectType()
export class GrowthRateProse implements PrismaGrowthRateProse {
  @Field(() => Int)
  growth_rate_id!: number;

  @Field(() => Int)
  local_language_id!: number;

  @Field(() => String)
  name!: string;
}
