import { Field, Int, ObjectType } from '@nestjs/graphql';
import { ConquestStats as PrismaConquestStats } from '@prisma/client';

@ObjectType()
export class ConquestStats implements PrismaConquestStats {
  @Field(() => Int)
  id!: number;

  @Field(() => String)
  identifier!: string;

  @Field(() => Int)
  is_base!: number;
}
