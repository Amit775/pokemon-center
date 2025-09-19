import * as TypeGraphQL from "type-graphql";

export enum NatureBattleStylePreferenceScalarFieldEnum {
  nature_id = "nature_id",
  move_battle_style_id = "move_battle_style_id",
  low_hp_preference = "low_hp_preference",
  high_hp_preference = "high_hp_preference"
}
TypeGraphQL.registerEnumType(NatureBattleStylePreferenceScalarFieldEnum, {
  name: "NatureBattleStylePreferenceScalarFieldEnum",
  description: undefined,
});
