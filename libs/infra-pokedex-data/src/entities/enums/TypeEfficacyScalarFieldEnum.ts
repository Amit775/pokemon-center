import * as TypeGraphQL from "type-graphql";

export enum TypeEfficacyScalarFieldEnum {
  damage_type_id = "damage_type_id",
  target_type_id = "target_type_id",
  damage_factor = "damage_factor"
}
TypeGraphQL.registerEnumType(TypeEfficacyScalarFieldEnum, {
  name: "TypeEfficacyScalarFieldEnum",
  description: undefined,
});
