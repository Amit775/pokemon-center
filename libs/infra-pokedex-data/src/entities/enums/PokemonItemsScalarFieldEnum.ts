import * as TypeGraphQL from "type-graphql";

export enum PokemonItemsScalarFieldEnum {
  pokemon_id = "pokemon_id",
  version_id = "version_id",
  item_id = "item_id",
  rarity = "rarity"
}
TypeGraphQL.registerEnumType(PokemonItemsScalarFieldEnum, {
  name: "PokemonItemsScalarFieldEnum",
  description: undefined,
});
