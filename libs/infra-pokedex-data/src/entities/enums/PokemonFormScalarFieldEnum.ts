import * as TypeGraphQL from "type-graphql";

export enum PokemonFormScalarFieldEnum {
  id = "id",
  identifier = "identifier",
  form_identifier = "form_identifier",
  pokemon_id = "pokemon_id",
  introduced_in_version_group_id = "introduced_in_version_group_id",
  is_default = "is_default",
  is_battle_only = "is_battle_only",
  is_mega = "is_mega",
  form_order = "form_order",
  order = "order"
}
TypeGraphQL.registerEnumType(PokemonFormScalarFieldEnum, {
  name: "PokemonFormScalarFieldEnum",
  description: undefined,
});
