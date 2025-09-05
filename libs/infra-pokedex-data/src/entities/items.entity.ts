import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Items as PrismaItems } from '@prisma/client';

@ObjectType()
export class Items implements PrismaItems {
  @Field(() => Int)
  id!: number;

  @Field(() => String)
  identifier!: string;

  @Field(() => Int)
  category_id!: number;

  @Field(() => Int)
  cost!: number;

  @Field(() => Int, { nullable: true })
  fling_power!: number | null;

  @Field(() => Int, { nullable: true })
  fling_effect_id!: number | null;
}
