import { Field, Int, ObjectType } from '@nestjs/graphql';
import { BerryFirmnessNames as PrismaBerryFirmnessNames } from '@prisma/client';

@ObjectType()
export class BerryFirmnessNames implements PrismaBerryFirmnessNames {
  @Field(() => Int)
  berry_firmness_id: Int;

  @Field(() => Int)
  local_language_id: Int;

  @Field()
  name: String;

}
