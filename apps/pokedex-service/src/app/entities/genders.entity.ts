import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Genders as PrismaGenders } from '@prisma/client';

@ObjectType()
export class Genders implements PrismaGenders {
  @Field(() => Int)
  id: Int;

  @Field()
  identifier: String;

}
