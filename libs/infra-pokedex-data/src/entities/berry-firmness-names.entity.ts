import { Field, Int, ObjectType } from '@nestjs/graphql';
import { BerryFirmnessNames as PrismaBerryFirmnessNames } from '@prisma/client';

@ObjectType()
export class BerryFirmnessNames implements PrismaBerryFirmnessNames {
  @Field(() => Int)
  berry_firmness_id!: number;

  @Field(() => Int)
  local_language_id!: number;

  @Field(() => String)
  name!: string;
}
