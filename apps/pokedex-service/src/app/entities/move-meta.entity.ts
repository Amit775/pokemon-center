import { Field, Int, ObjectType } from '@nestjs/graphql';
import { MoveMeta as PrismaMoveMeta } from '@prisma/client';

@ObjectType()
export class MoveMeta implements PrismaMoveMeta {
  @Field(() => Int)
  move_id: Int;

  @Field(() => Int)
  meta_category_id: Int;

  @Field(() => Int, { nullable: true })
  meta_ailment_id: Int;

  @Field(() => Int, { nullable: true })
  min_hits: Int;

  @Field(() => Int, { nullable: true })
  max_hits: Int;

  @Field(() => Int, { nullable: true })
  min_turns: Int;

  @Field(() => Int, { nullable: true })
  max_turns: Int;

  @Field(() => Int)
  drain: Int;

  @Field(() => Int)
  healing: Int;

  @Field(() => Int)
  crit_rate: Int;

  @Field(() => Int)
  ailment_chance: Int;

  @Field(() => Int)
  flinch_chance: Int;

  @Field(() => Int)
  stat_chance: Int;

}
