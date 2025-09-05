import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Generations as PrismaGenerations } from '@prisma/client';

@ObjectType()
export class Generations implements PrismaGenerations {
  @Field(() => Int)
  id: number;

  @Field(() => Int)
  main_region_id: number;

  @Field()
  identifier: string;
}
