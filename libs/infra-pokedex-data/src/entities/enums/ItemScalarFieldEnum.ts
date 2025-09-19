import * as TypeGraphQL from "type-graphql";

export enum ItemScalarFieldEnum {
  id = "id",
  identifier = "identifier",
  category_id = "category_id",
  cost = "cost",
  fling_power = "fling_power",
  fling_effect_id = "fling_effect_id"
}
TypeGraphQL.registerEnumType(ItemScalarFieldEnum, {
  name: "ItemScalarFieldEnum",
  description: undefined,
});
