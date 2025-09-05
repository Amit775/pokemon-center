import { Field, Int, ObjectType } from '@nestjs/graphql';
import { ConquestKingdoms as PrismaConquestKingdoms } from '@prisma/client';

@ObjectType()
export class ConquestKingdoms implements PrismaConquestKingdoms {
  @Field(() => Int)
  id: Int;

  @Field()
  identifier: String;

  @Field(() => Int)
  type_id: Int;

}
