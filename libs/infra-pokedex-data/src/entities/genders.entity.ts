import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Genders as PrismaGenders } from '@prisma/client';

@ObjectType()
export class Genders implements PrismaGenders {
  @Field(() => Int)
  id!: number;

  @Field(() => String)
  identifier!: string;
}
