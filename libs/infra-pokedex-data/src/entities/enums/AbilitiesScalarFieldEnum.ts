import * as TypeGraphQL from "type-graphql";

export enum AbilitiesScalarFieldEnum {
  id = "id",
  identifier = "identifier",
  generation_id = "generation_id",
  is_main_series = "is_main_series"
}
TypeGraphQL.registerEnumType(AbilitiesScalarFieldEnum, {
  name: "AbilitiesScalarFieldEnum",
  description: undefined,
});
