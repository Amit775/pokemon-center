import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BerriesAvgOrderByAggregateInput } from "../inputs/BerriesAvgOrderByAggregateInput";
import { BerriesCountOrderByAggregateInput } from "../inputs/BerriesCountOrderByAggregateInput";
import { BerriesMaxOrderByAggregateInput } from "../inputs/BerriesMaxOrderByAggregateInput";
import { BerriesMinOrderByAggregateInput } from "../inputs/BerriesMinOrderByAggregateInput";
import { BerriesSumOrderByAggregateInput } from "../inputs/BerriesSumOrderByAggregateInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("BerriesOrderByWithAggregationInput", {})
export class BerriesOrderByWithAggregationInput {
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

  @TypeGraphQL.Field(_type => BerriesCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: BerriesCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => BerriesAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: BerriesAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => BerriesMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: BerriesMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => BerriesMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: BerriesMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => BerriesSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: BerriesSumOrderByAggregateInput | undefined;
}
