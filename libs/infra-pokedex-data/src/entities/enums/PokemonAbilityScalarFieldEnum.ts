import * as TypeGraphQL from "type-graphql";

export enum PokemonAbilityScalarFieldEnum {
  pokemon_id = "pokemon_id",
  ability_id = "ability_id",
  is_hidden = "is_hidden",
  slot = "slot"
}
TypeGraphQL.registerEnumType(PokemonAbilityScalarFieldEnum, {
  name: "PokemonAbilityScalarFieldEnum",
  description: undefined,
});
