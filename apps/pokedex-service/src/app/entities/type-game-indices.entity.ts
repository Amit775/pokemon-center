import { Field, Int, ObjectType } from '@nestjs/graphql';
import { TypeGameIndices as PrismaTypeGameIndices } from '@prisma/client';

@ObjectType()
export class TypeGameIndices implements PrismaTypeGameIndices {
  @Field(() => Int)
  type_id: Int;

  @Field(() => Int)
  generation_id: Int;

  @Field(() => Int)
  game_index: Int;

}
