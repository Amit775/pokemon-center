import * as TypeGraphQL from "type-graphql";

export enum BerryScalarFieldEnum {
  id = "id",
  item_id = "item_id",
  firmness_id = "firmness_id",
  natural_gift_power = "natural_gift_power",
  natural_gift_type_id = "natural_gift_type_id",
  size = "size",
  max_harvest = "max_harvest",
  growth_time = "growth_time",
  soil_dryness = "soil_dryness",
  smoothness = "smoothness"
}
TypeGraphQL.registerEnumType(BerryScalarFieldEnum, {
  name: "BerryScalarFieldEnum",
  description: undefined,
});
