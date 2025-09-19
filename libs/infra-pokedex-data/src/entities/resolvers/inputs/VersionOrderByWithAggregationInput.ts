import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VersionAvgOrderByAggregateInput } from "../inputs/VersionAvgOrderByAggregateInput";
import { VersionCountOrderByAggregateInput } from "../inputs/VersionCountOrderByAggregateInput";
import { VersionMaxOrderByAggregateInput } from "../inputs/VersionMaxOrderByAggregateInput";
import { VersionMinOrderByAggregateInput } from "../inputs/VersionMinOrderByAggregateInput";
import { VersionSumOrderByAggregateInput } from "../inputs/VersionSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("VersionOrderByWithAggregationInput", {})
export class VersionOrderByWithAggregationInput {
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

  @TypeGraphQL.Field(_type => VersionCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: VersionCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => VersionAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: VersionAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => VersionMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: VersionMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => VersionMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: VersionMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => VersionSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: VersionSumOrderByAggregateInput | undefined;
}
