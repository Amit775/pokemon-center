import * as TypeGraphQL from "type-graphql";

export enum PokemonAbilitiesScalarFieldEnum {
  pokemon_id = "pokemon_id",
  ability_id = "ability_id",
  is_hidden = "is_hidden",
  slot = "slot"
}
TypeGraphQL.registerEnumType(PokemonAbilitiesScalarFieldEnum, {
  name: "PokemonAbilitiesScalarFieldEnum",
  description: undefined,
});
