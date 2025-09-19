import * as TypeGraphQL from "type-graphql";

export enum GenderScalarFieldEnum {
  id = "id",
  identifier = "identifier"
}
TypeGraphQL.registerEnumType(GenderScalarFieldEnum, {
  name: "GenderScalarFieldEnum",
  description: undefined,
});
