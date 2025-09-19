import * as TypeGraphQL from "type-graphql";

export enum PokemonStatScalarFieldEnum {
  pokemon_id = "pokemon_id",
  stat_id = "stat_id",
  base_stat = "base_stat",
  effort = "effort"
}
TypeGraphQL.registerEnumType(PokemonStatScalarFieldEnum, {
  name: "PokemonStatScalarFieldEnum",
  description: undefined,
});
