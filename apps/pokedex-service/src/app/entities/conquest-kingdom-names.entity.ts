import { Field, Int, ObjectType } from '@nestjs/graphql';
import { ConquestKingdomNames as PrismaConquestKingdomNames } from '@prisma/client';

@ObjectType()
export class ConquestKingdomNames implements PrismaConquestKingdomNames {
  @Field(() => Int)
  kingdom_id: number;

  @Field(() => Int)
  local_language_id: number;

  @Field(() => String)
  name: string;

}
