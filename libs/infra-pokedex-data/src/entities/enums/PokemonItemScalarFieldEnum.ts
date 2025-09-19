import * as TypeGraphQL from "type-graphql";

export enum PokemonItemScalarFieldEnum {
  pokemon_id = "pokemon_id",
  version_id = "version_id",
  item_id = "item_id",
  rarity = "rarity"
}
TypeGraphQL.registerEnumType(PokemonItemScalarFieldEnum, {
  name: "PokemonItemScalarFieldEnum",
  description: undefined,
});
