import * as TypeGraphQL from "type-graphql";

export enum AbilityScalarFieldEnum {
  id = "id",
  identifier = "identifier",
  generation_id = "generation_id",
  is_main_series = "is_main_series"
}
TypeGraphQL.registerEnumType(AbilityScalarFieldEnum, {
  name: "AbilityScalarFieldEnum",
  description: undefined,
});
