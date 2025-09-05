import { Field, Int, ObjectType } from '@nestjs/graphql';
import { TypeGameIndices as PrismaTypeGameIndices } from '@prisma/client';

@ObjectType()
export class TypeGameIndices implements PrismaTypeGameIndices {
  @Field(() => Int)
  type_id!: number;

  @Field(() => Int)
  generation_id!: number;

  @Field(() => Int)
  game_index!: number;
}
