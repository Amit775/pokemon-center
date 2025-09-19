import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BerryAvgOrderByAggregateInput } from "../inputs/BerryAvgOrderByAggregateInput";
import { BerryCountOrderByAggregateInput } from "../inputs/BerryCountOrderByAggregateInput";
import { BerryMaxOrderByAggregateInput } from "../inputs/BerryMaxOrderByAggregateInput";
import { BerryMinOrderByAggregateInput } from "../inputs/BerryMinOrderByAggregateInput";
import { BerrySumOrderByAggregateInput } from "../inputs/BerrySumOrderByAggregateInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("BerryOrderByWithAggregationInput", {})
export class BerryOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  item_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  firmness_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  natural_gift_power?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  natural_gift_type_id?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  size?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  max_harvest?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  growth_time?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  soil_dryness?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  smoothness?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => BerryCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: BerryCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => BerryAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: BerryAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => BerryMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: BerryMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => BerryMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: BerryMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => BerrySumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: BerrySumOrderByAggregateInput | undefined;
}
