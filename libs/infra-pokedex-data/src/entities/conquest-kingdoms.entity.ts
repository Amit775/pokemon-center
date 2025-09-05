import { Field, Int, ObjectType } from '@nestjs/graphql';
import { ConquestKingdoms as PrismaConquestKingdoms } from '@prisma/client';

@ObjectType()
export class ConquestKingdoms implements PrismaConquestKingdoms {
  @Field(() => Int)
  id!: number;

  @Field(() => String)
  identifier!: string;

  @Field(() => Int)
  type_id!: number;
}
