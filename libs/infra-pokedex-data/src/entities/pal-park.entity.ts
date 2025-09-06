import { Field, Int, ObjectType } from '@nestjs/graphql';
import { PalPark as PrismaPalPark } from '@prisma/client';

@ObjectType()
export class PalPark implements PrismaPalPark {
  @Field(() => Int)
  species_id!: number;

  @Field(() => Int)
  area_id!: number;

  @Field(() => Int)
  base_score!: number;

  @Field(() => Int)
  rate!: number;
}
