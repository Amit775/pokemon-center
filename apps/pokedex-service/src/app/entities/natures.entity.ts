import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Natures as PrismaNatures } from '@prisma/client';

@ObjectType()
export class Natures implements PrismaNatures {
  @Field(() => Int)
  id: number;

  @Field(() => String)
  identifier: string;

  @Field(() => Int)
  decreased_stat_id: number;

  @Field(() => Int)
  increased_stat_id: number;

  @Field(() => Int)
  hates_flavor_id: number;

  @Field(() => Int)
  likes_flavor_id: number;

  @Field(() => Int)
  game_index: number;

}
