import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Berries as PrismaBerries } from '@prisma/client';

@ObjectType()
export class Berries implements PrismaBerries {
  @Field(() => Int)
  id: Int;

  @Field(() => Int)
  item_id: Int;

  @Field(() => Int)
  firmness_id: Int;

  @Field(() => Int, { nullable: true })
  natural_gift_power: Int;

  @Field(() => Int, { nullable: true })
  natural_gift_type_id: Int;

  @Field(() => Int)
  size: Int;

  @Field(() => Int)
  max_harvest: Int;

  @Field(() => Int)
  growth_time: Int;

  @Field(() => Int)
  soil_dryness: Int;

  @Field(() => Int)
  smoothness: Int;

}
