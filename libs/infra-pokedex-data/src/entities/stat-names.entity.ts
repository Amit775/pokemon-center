import { Field, Int, ObjectType } from '@nestjs/graphql';
import { StatNames as PrismaStatNames } from '@prisma/client';

@ObjectType()
export class StatNames implements PrismaStatNames {
  @Field(() => Int)
  stat_id!: number;

  @Field(() => Int)
  local_language_id!: number;

  @Field(() => String)
  name!: string;
}
