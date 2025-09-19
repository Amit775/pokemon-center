import * as TypeGraphQL from "type-graphql";

export enum NatureScalarFieldEnum {
  id = "id",
  identifier = "identifier",
  decreased_stat_id = "decreased_stat_id",
  increased_stat_id = "increased_stat_id",
  hates_flavor_id = "hates_flavor_id",
  likes_flavor_id = "likes_flavor_id",
  game_index = "game_index"
}
TypeGraphQL.registerEnumType(NatureScalarFieldEnum, {
  name: "NatureScalarFieldEnum",
  description: undefined,
});
