import { Field, Int, ObjectType } from '@nestjs/graphql';
import { ConquestStatNames as PrismaConquestStatNames } from '@prisma/client';

@ObjectType()
export class ConquestStatNames implements PrismaConquestStatNames {
  @Field(() => Int)
  conquest_stat_id!: number;

  @Field(() => Int)
  local_language_id!: number;

  @Field(() => String)
  name!: string;
}
