import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VersionGroupAvgOrderByAggregateInput } from "../inputs/VersionGroupAvgOrderByAggregateInput";
import { VersionGroupCountOrderByAggregateInput } from "../inputs/VersionGroupCountOrderByAggregateInput";
import { VersionGroupMaxOrderByAggregateInput } from "../inputs/VersionGroupMaxOrderByAggregateInput";
import { VersionGroupMinOrderByAggregateInput } from "../inputs/VersionGroupMinOrderByAggregateInput";
import { VersionGroupSumOrderByAggregateInput } from "../inputs/VersionGroupSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("VersionGroupOrderByWithAggregationInput", {})
export class VersionGroupOrderByWithAggregationInput {
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

  @TypeGraphQL.Field(_type => VersionGroupCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: VersionGroupCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => VersionGroupAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: VersionGroupAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => VersionGroupMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: VersionGroupMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => VersionGroupMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: VersionGroupMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => VersionGroupSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: VersionGroupSumOrderByAggregateInput | undefined;
}
