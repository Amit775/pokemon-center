import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VersionGroupsAvgOrderByAggregateInput } from "../inputs/VersionGroupsAvgOrderByAggregateInput";
import { VersionGroupsCountOrderByAggregateInput } from "../inputs/VersionGroupsCountOrderByAggregateInput";
import { VersionGroupsMaxOrderByAggregateInput } from "../inputs/VersionGroupsMaxOrderByAggregateInput";
import { VersionGroupsMinOrderByAggregateInput } from "../inputs/VersionGroupsMinOrderByAggregateInput";
import { VersionGroupsSumOrderByAggregateInput } from "../inputs/VersionGroupsSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("VersionGroupsOrderByWithAggregationInput", {})
export class VersionGroupsOrderByWithAggregationInput {
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
  generation_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  order?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => VersionGroupsCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: VersionGroupsCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => VersionGroupsAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: VersionGroupsAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => VersionGroupsMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: VersionGroupsMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => VersionGroupsMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: VersionGroupsMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => VersionGroupsSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: VersionGroupsSumOrderByAggregateInput | undefined;
}
