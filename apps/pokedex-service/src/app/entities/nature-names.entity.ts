import { Field, Int, ObjectType } from '@nestjs/graphql';
import { NatureNames as PrismaNatureNames } from '@prisma/client';

@ObjectType()
export class NatureNames implements PrismaNatureNames {
  @Field(() => Int)
  nature_id: Int;

  @Field(() => Int)
  local_language_id: Int;

  @Field()
  name: String;

}
