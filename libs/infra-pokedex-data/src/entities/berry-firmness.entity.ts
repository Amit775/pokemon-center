import { Field, Int, ObjectType } from '@nestjs/graphql';
import { BerryFirmness as PrismaBerryFirmness } from '@prisma/client';

@ObjectType()
export class BerryFirmness implements PrismaBerryFirmness {
  @Field(() => Int)
  id!: number;

  @Field(() => String)
  identifier!: string;
}
