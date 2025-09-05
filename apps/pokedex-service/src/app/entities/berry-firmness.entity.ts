import { Field, Int, ObjectType } from '@nestjs/graphql';
import { BerryFirmness as PrismaBerryFirmness } from '@prisma/client';

@ObjectType()
export class BerryFirmness implements PrismaBerryFirmness {
  @Field(() => Int)
  id: Int;

  @Field()
  identifier: String;

}
