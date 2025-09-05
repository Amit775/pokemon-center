import { Field, Int, ObjectType } from '@nestjs/graphql';
import { ConquestStats as PrismaConquestStats } from '@prisma/client';

@ObjectType()
export class ConquestStats implements PrismaConquestStats {
  @Field(() => Int)
  id: Int;

  @Field()
  identifier: String;

  @Field(() => Int)
  is_base: Int;

}
