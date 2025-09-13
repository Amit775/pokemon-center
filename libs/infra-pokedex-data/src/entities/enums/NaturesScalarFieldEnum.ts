import * as TypeGraphQL from "type-graphql";

export enum NaturesScalarFieldEnum {
  id = "id",
  identifier = "identifier",
  decreased_stat_id = "decreased_stat_id",
  increased_stat_id = "increased_stat_id",
  hates_flavor_id = "hates_flavor_id",
  likes_flavor_id = "likes_flavor_id",
  game_index = "game_index"
}
TypeGraphQL.registerEnumType(NaturesScalarFieldEnum, {
  name: "NaturesScalarFieldEnum",
  description: undefined,
});
