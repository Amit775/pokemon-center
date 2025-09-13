import * as TypeGraphQL from "type-graphql";

export enum PokemonTypesScalarFieldEnum {
  pokemon_id = "pokemon_id",
  type_id = "type_id",
  slot = "slot"
}
TypeGraphQL.registerEnumType(PokemonTypesScalarFieldEnum, {
  name: "PokemonTypesScalarFieldEnum",
  description: undefined,
});
