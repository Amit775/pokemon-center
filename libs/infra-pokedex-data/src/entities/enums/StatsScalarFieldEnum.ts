import * as TypeGraphQL from "type-graphql";

export enum StatsScalarFieldEnum {
  id = "id",
  damage_class_id = "damage_class_id",
  identifier = "identifier",
  is_battle_only = "is_battle_only",
  game_index = "game_index"
}
TypeGraphQL.registerEnumType(StatsScalarFieldEnum, {
  name: "StatsScalarFieldEnum",
  description: undefined,
});
