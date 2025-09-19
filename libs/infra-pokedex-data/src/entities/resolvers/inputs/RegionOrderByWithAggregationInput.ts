import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RegionAvgOrderByAggregateInput } from "../inputs/RegionAvgOrderByAggregateInput";
import { RegionCountOrderByAggregateInput } from "../inputs/RegionCountOrderByAggregateInput";
import { RegionMaxOrderByAggregateInput } from "../inputs/RegionMaxOrderByAggregateInput";
import { RegionMinOrderByAggregateInput } from "../inputs/RegionMinOrderByAggregateInput";
import { RegionSumOrderByAggregateInput } from "../inputs/RegionSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("RegionOrderByWithAggregationInput", {})
export class RegionOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  identifier?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => RegionCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: RegionCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => RegionAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: RegionAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => RegionMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: RegionMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => RegionMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: RegionMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => RegionSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: RegionSumOrderByAggregateInput | undefined;
}
