import { Field, Int, ObjectType } from '@nestjs/graphql';
import { NatureNames as PrismaNatureNames } from '@prisma/client';

@ObjectType()
export class NatureNames implements PrismaNatureNames {
  @Field(() => Int)
  nature_id!: number;

  @Field(() => Int)
  local_language_id!: number;

  @Field(() => String)
  name!: string;
}
