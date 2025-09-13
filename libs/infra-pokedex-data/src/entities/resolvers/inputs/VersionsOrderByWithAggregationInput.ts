import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VersionsAvgOrderByAggregateInput } from "../inputs/VersionsAvgOrderByAggregateInput";
import { VersionsCountOrderByAggregateInput } from "../inputs/VersionsCountOrderByAggregateInput";
import { VersionsMaxOrderByAggregateInput } from "../inputs/VersionsMaxOrderByAggregateInput";
import { VersionsMinOrderByAggregateInput } from "../inputs/VersionsMinOrderByAggregateInput";
import { VersionsSumOrderByAggregateInput } from "../inputs/VersionsSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("VersionsOrderByWithAggregationInput", {})
export class VersionsOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  version_group_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  identifier?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => VersionsCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: VersionsCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => VersionsAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: VersionsAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => VersionsMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: VersionsMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => VersionsMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: VersionsMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => VersionsSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: VersionsSumOrderByAggregateInput | undefined;
}
