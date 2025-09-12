import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GrowthRatesAvgOrderByAggregateInput } from "../inputs/GrowthRatesAvgOrderByAggregateInput";
import { GrowthRatesCountOrderByAggregateInput } from "../inputs/GrowthRatesCountOrderByAggregateInput";
import { GrowthRatesMaxOrderByAggregateInput } from "../inputs/GrowthRatesMaxOrderByAggregateInput";
import { GrowthRatesMinOrderByAggregateInput } from "../inputs/GrowthRatesMinOrderByAggregateInput";
import { GrowthRatesSumOrderByAggregateInput } from "../inputs/GrowthRatesSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("GrowthRatesOrderByWithAggregationInput", {})
export class GrowthRatesOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  identifier?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  formula?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => GrowthRatesCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: GrowthRatesCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => GrowthRatesAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: GrowthRatesAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => GrowthRatesMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: GrowthRatesMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => GrowthRatesMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: GrowthRatesMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => GrowthRatesSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: GrowthRatesSumOrderByAggregateInput | undefined;
}
