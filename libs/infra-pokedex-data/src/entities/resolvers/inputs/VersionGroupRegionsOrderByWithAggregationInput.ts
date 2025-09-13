import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VersionGroupRegionsAvgOrderByAggregateInput } from "../inputs/VersionGroupRegionsAvgOrderByAggregateInput";
import { VersionGroupRegionsCountOrderByAggregateInput } from "../inputs/VersionGroupRegionsCountOrderByAggregateInput";
import { VersionGroupRegionsMaxOrderByAggregateInput } from "../inputs/VersionGroupRegionsMaxOrderByAggregateInput";
import { VersionGroupRegionsMinOrderByAggregateInput } from "../inputs/VersionGroupRegionsMinOrderByAggregateInput";
import { VersionGroupRegionsSumOrderByAggregateInput } from "../inputs/VersionGroupRegionsSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("VersionGroupRegionsOrderByWithAggregationInput", {})
export class VersionGroupRegionsOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  version_group_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  region_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => VersionGroupRegionsCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: VersionGroupRegionsCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => VersionGroupRegionsAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: VersionGroupRegionsAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => VersionGroupRegionsMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: VersionGroupRegionsMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => VersionGroupRegionsMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: VersionGroupRegionsMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => VersionGroupRegionsSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: VersionGroupRegionsSumOrderByAggregateInput | undefined;
}
