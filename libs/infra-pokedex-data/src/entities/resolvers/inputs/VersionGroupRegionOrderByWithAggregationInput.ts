import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VersionGroupRegionAvgOrderByAggregateInput } from "../inputs/VersionGroupRegionAvgOrderByAggregateInput";
import { VersionGroupRegionCountOrderByAggregateInput } from "../inputs/VersionGroupRegionCountOrderByAggregateInput";
import { VersionGroupRegionMaxOrderByAggregateInput } from "../inputs/VersionGroupRegionMaxOrderByAggregateInput";
import { VersionGroupRegionMinOrderByAggregateInput } from "../inputs/VersionGroupRegionMinOrderByAggregateInput";
import { VersionGroupRegionSumOrderByAggregateInput } from "../inputs/VersionGroupRegionSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("VersionGroupRegionOrderByWithAggregationInput", {})
export class VersionGroupRegionOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  version_group_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  region_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => VersionGroupRegionCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: VersionGroupRegionCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => VersionGroupRegionAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: VersionGroupRegionAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => VersionGroupRegionMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: VersionGroupRegionMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => VersionGroupRegionMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: VersionGroupRegionMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => VersionGroupRegionSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: VersionGroupRegionSumOrderByAggregateInput | undefined;
}
