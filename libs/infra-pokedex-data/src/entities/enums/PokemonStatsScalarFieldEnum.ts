import * as TypeGraphQL from "type-graphql";

export enum PokemonStatsScalarFieldEnum {
  pokemon_id = "pokemon_id",
  stat_id = "stat_id",
  base_stat = "base_stat",
  effort = "effort"
}
TypeGraphQL.registerEnumType(PokemonStatsScalarFieldEnum, {
  name: "PokemonStatsScalarFieldEnum",
  description: undefined,
});
