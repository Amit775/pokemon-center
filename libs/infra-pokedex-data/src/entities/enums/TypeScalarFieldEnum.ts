import * as TypeGraphQL from "type-graphql";

export enum TypeScalarFieldEnum {
  id = "id",
  identifier = "identifier",
  generation_id = "generation_id",
  damage_class_id = "damage_class_id"
}
TypeGraphQL.registerEnumType(TypeScalarFieldEnum, {
  name: "TypeScalarFieldEnum",
  description: undefined,
});
