import { Field, Int, ObjectType } from '@nestjs/graphql';
import { MoveBattleStyleProse as PrismaMoveBattleStyleProse } from '@prisma/client';

@ObjectType()
export class MoveBattleStyleProse implements PrismaMoveBattleStyleProse {
  @Field(() => Int)
  move_battle_style_id!: number;

  @Field(() => Int)
  local_language_id!: number;

  @Field(() => String)
  name!: string;
}
