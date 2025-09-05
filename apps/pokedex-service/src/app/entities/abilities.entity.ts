import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Abilities as PrismaAbilities } from '@prisma/client';

@ObjectType()
export class Abilities implements PrismaAbilities {
  @Field(() => Int)
  id: number;

  @Field()
  identifier: string;

  @Field(() => Int)
  generation_id: number;

  @Field(() => Int)
  is_main_series: number;
}
