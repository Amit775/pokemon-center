import * as TypeGraphQL from "type-graphql";

export enum TypesScalarFieldEnum {
  id = "id",
  identifier = "identifier",
  generation_id = "generation_id",
  damage_class_id = "damage_class_id"
}
TypeGraphQL.registerEnumType(TypesScalarFieldEnum, {
  name: "TypesScalarFieldEnum",
  description: undefined,
});
