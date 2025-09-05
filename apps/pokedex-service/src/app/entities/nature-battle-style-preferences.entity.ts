import { Field, Int, ObjectType } from '@nestjs/graphql';
import { NatureBattleStylePreferences as PrismaNatureBattleStylePreferences } from '@prisma/client';

@ObjectType()
export class NatureBattleStylePreferences implements PrismaNatureBattleStylePreferences {
  @Field(() => Int)
  nature_id: Int;

  @Field(() => Int)
  move_battle_style_id: Int;

  @Field(() => Int)
  low_hp_preference: Int;

  @Field(() => Int)
  high_hp_preference: Int;

}
