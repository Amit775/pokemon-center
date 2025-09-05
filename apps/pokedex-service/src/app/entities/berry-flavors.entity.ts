import { Field, Int, ObjectType } from '@nestjs/graphql';
import { BerryFlavors as PrismaBerryFlavors } from '@prisma/client';

@ObjectType()
export class BerryFlavors implements PrismaBerryFlavors {
  @Field(() => Int)
  berry_id: Int;

  @Field(() => Int)
  contest_type_id: Int;

  @Field(() => Int)
  flavor: Int;

}
