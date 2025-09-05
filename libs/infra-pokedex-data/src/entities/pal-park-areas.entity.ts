import { Field, Int, ObjectType } from '@nestjs/graphql';
import { PalParkAreas as PrismaPalParkAreas } from '@prisma/client';

@ObjectType()
export class PalParkAreas implements PrismaPalParkAreas {
  @Field(() => Int)
  id!: number;

  @Field(() => String)
  identifier!: string;
}
