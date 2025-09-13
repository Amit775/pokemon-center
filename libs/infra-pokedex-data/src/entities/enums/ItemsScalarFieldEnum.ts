import * as TypeGraphQL from "type-graphql";

export enum ItemsScalarFieldEnum {
  id = "id",
  identifier = "identifier",
  category_id = "category_id",
  cost = "cost",
  fling_power = "fling_power",
  fling_effect_id = "fling_effect_id"
}
TypeGraphQL.registerEnumType(ItemsScalarFieldEnum, {
  name: "ItemsScalarFieldEnum",
  description: undefined,
});
