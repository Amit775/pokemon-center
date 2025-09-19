import * as TypeGraphQL from "type-graphql";

export enum PokemonTypeScalarFieldEnum {
  pokemon_id = "pokemon_id",
  type_id = "type_id",
  slot = "slot"
}
TypeGraphQL.registerEnumType(PokemonTypeScalarFieldEnum, {
  name: "PokemonTypeScalarFieldEnum",
  description: undefined,
});
