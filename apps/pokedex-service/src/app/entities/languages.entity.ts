import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Languages as PrismaLanguages } from '@prisma/client';

@ObjectType()
export class Languages implements PrismaLanguages {
  @Field(() => Int)
  id: number;

  @Field(() => String)
  iso639: string;

  @Field(() => String)
  iso3166: string;

  @Field(() => String)
  identifier: string;

  @Field(() => Int)
  official: number;

  @Field(() => Int)
  order: number;

}
