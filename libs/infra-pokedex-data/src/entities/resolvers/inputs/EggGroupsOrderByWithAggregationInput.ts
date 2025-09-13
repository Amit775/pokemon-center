import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EggGroupsAvgOrderByAggregateInput } from "../inputs/EggGroupsAvgOrderByAggregateInput";
import { EggGroupsCountOrderByAggregateInput } from "../inputs/EggGroupsCountOrderByAggregateInput";
import { EggGroupsMaxOrderByAggregateInput } from "../inputs/EggGroupsMaxOrderByAggregateInput";
import { EggGroupsMinOrderByAggregateInput } from "../inputs/EggGroupsMinOrderByAggregateInput";
import { EggGroupsSumOrderByAggregateInput } from "../inputs/EggGroupsSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("EggGroupsOrderByWithAggregationInput", {})
export class EggGroupsOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  identifier?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => EggGroupsCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: EggGroupsCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => EggGroupsAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: EggGroupsAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => EggGroupsMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: EggGroupsMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => EggGroupsMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: EggGroupsMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => EggGroupsSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: EggGroupsSumOrderByAggregateInput | undefined;
}
