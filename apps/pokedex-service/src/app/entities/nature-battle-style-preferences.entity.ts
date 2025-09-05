import { Field, Int, ObjectType } from '@nestjs/graphql';
import { NatureBattleStylePreferences as PrismaNatureBattleStylePreferences } from '@prisma/client';

@ObjectType()
export class NatureBattleStylePreferences implements PrismaNatureBattleStylePreferences {
  @Field(() => Int)
  nature_id: number;

  @Field(() => Int)
  move_battle_style_id: number;

  @Field(() => Int)
  low_hp_preference: number;

  @Field(() => Int)
  high_hp_preference: number;

}
