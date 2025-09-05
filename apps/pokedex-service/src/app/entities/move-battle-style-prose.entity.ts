import { Field, Int, ObjectType } from '@nestjs/graphql';
import { MoveBattleStyleProse as PrismaMoveBattleStyleProse } from '@prisma/client';

@ObjectType()
export class MoveBattleStyleProse implements PrismaMoveBattleStyleProse {
  @Field(() => Int)
  move_battle_style_id: Int;

  @Field(() => Int)
  local_language_id: Int;

  @Field()
  name: String;

}
