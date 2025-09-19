import * as TypeGraphQL from "type-graphql";

export enum GenerationScalarFieldEnum {
  id = "id",
  main_region_id = "main_region_id",
  identifier = "identifier"
}
TypeGraphQL.registerEnumType(GenerationScalarFieldEnum, {
  name: "GenerationScalarFieldEnum",
  description: undefined,
});
