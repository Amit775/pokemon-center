import { Field, Int, ObjectType } from '@nestjs/graphql';
import { TypeNames as PrismaTypeNames } from '@prisma/client';

@ObjectType()
export class TypeNames implements PrismaTypeNames {
  @Field(() => Int)
  type_id: number;

  @Field(() => Int)
  local_language_id: number;

  @Field()
  name: string;
}
