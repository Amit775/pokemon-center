import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Berries as PrismaBerries } from '@prisma/client';

@ObjectType()
export class Berries implements PrismaBerries {
  @Field(() => Int)
  id!: number;

  @Field(() => Int)
  item_id!: number;

  @Field(() => Int)
  firmness_id!: number;

  @Field(() => Int, { nullable: true })
  natural_gift_power!: number | null;

  @Field(() => Int, { nullable: true })
  natural_gift_type_id!: number | null;

  @Field(() => Int)
  size!: number;

  @Field(() => Int)
  max_harvest!: number;

  @Field(() => Int)
  growth_time!: number;

  @Field(() => Int)
  soil_dryness!: number;

  @Field(() => Int)
  smoothness!: number;
}
