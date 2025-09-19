import * as TypeGraphQL from "type-graphql";

export enum StatScalarFieldEnum {
  id = "id",
  damage_class_id = "damage_class_id",
  identifier = "identifier",
  is_battle_only = "is_battle_only",
  game_index = "game_index"
}
TypeGraphQL.registerEnumType(StatScalarFieldEnum, {
  name: "StatScalarFieldEnum",
  description: undefined,
});
