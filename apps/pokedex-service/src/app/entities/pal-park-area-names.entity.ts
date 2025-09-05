import { Field, Int, ObjectType } from '@nestjs/graphql';
import { PalParkAreaNames as PrismaPalParkAreaNames } from '@prisma/client';

@ObjectType()
export class PalParkAreaNames implements PrismaPalParkAreaNames {
  @Field(() => Int)
  pal_park_area_id: number;

  @Field(() => Int)
  local_language_id: number;

  @Field(() => String)
  name: string;

}
