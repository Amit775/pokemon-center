import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Natures as PrismaNatures } from '@prisma/client';

@ObjectType()
export class Natures implements PrismaNatures {
  @Field(() => Int)
  id: Int;

  @Field()
  identifier: String;

  @Field(() => Int)
  decreased_stat_id: Int;

  @Field(() => Int)
  increased_stat_id: Int;

  @Field(() => Int)
  hates_flavor_id: Int;

  @Field(() => Int)
  likes_flavor_id: Int;

  @Field(() => Int)
  game_index: Int;

}
