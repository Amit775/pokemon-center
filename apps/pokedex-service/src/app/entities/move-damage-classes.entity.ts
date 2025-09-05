import { Field, Int, ObjectType } from '@nestjs/graphql';
import { MoveDamageClasses as PrismaMoveDamageClasses } from '@prisma/client';

@ObjectType()
export class MoveDamageClasses implements PrismaMoveDamageClasses {
  @Field(() => Int)
  id: number;

  @Field()
  identifier: string;
}
