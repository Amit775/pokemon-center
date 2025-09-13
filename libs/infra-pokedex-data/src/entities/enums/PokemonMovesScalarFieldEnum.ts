import * as TypeGraphQL from "type-graphql";

export enum PokemonMovesScalarFieldEnum {
  pokemon_id = "pokemon_id",
  version_group_id = "version_group_id",
  move_id = "move_id",
  pokemon_move_method_id = "pokemon_move_method_id",
  level = "level",
  order = "order",
  mastery = "mastery"
}
TypeGraphQL.registerEnumType(PokemonMovesScalarFieldEnum, {
  name: "PokemonMovesScalarFieldEnum",
  description: undefined,
});
