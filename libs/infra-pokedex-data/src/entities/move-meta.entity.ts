import { Field, Int, ObjectType } from '@nestjs/graphql';
import { MoveMeta as PrismaMoveMeta } from '@prisma/client';

@ObjectType()
export class MoveMeta implements PrismaMoveMeta {
  @Field(() => Int)
  move_id!: number;

  @Field(() => Int)
  meta_category_id!: number;

  @Field(() => Int, { nullable: true })
  meta_ailment_id!: number | null;

  @Field(() => Int, { nullable: true })
  min_hits!: number | null;

  @Field(() => Int, { nullable: true })
  max_hits!: number | null;

  @Field(() => Int, { nullable: true })
  min_turns!: number | null;

  @Field(() => Int, { nullable: true })
  max_turns!: number | null;

  @Field(() => Int)
  drain!: number;

  @Field(() => Int)
  healing!: number;

  @Field(() => Int)
  crit_rate!: number;

  @Field(() => Int)
  ailment_chance!: number;

  @Field(() => Int)
  flinch_chance!: number;

  @Field(() => Int)
  stat_chance!: number;
}
