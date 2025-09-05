import { Field, Int, ObjectType } from '@nestjs/graphql';
import { ConquestStatNames as PrismaConquestStatNames } from '@prisma/client';

@ObjectType()
export class ConquestStatNames implements PrismaConquestStatNames {
  @Field(() => Int)
  conquest_stat_id: Int;

  @Field(() => Int)
  local_language_id: Int;

  @Field()
  name: String;

}
