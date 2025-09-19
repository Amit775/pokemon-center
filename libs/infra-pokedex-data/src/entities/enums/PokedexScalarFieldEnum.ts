import * as TypeGraphQL from "type-graphql";

export enum PokedexScalarFieldEnum {
  id = "id",
  region_id = "region_id",
  identifier = "identifier",
  is_main_series = "is_main_series"
}
TypeGraphQL.registerEnumType(PokedexScalarFieldEnum, {
  name: "PokedexScalarFieldEnum",
  description: undefined,
});
