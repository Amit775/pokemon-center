import { Field, Int, ObjectType } from '@nestjs/graphql';
import { PalPark as PrismaPalPark } from '@prisma/client';

@ObjectType()
export class PalPark implements PrismaPalPark {
  @Field(() => Int)
  species_id: Int;

  @Field(() => Int)
  area_id: Int;

  @Field(() => Int)
  base_score: Int;

  @Field(() => Int)
  rate: Int;

}
