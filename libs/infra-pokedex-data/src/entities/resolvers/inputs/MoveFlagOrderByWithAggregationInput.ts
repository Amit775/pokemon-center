import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MoveFlagAvgOrderByAggregateInput } from "../inputs/MoveFlagAvgOrderByAggregateInput";
import { MoveFlagCountOrderByAggregateInput } from "../inputs/MoveFlagCountOrderByAggregateInput";
import { MoveFlagMaxOrderByAggregateInput } from "../inputs/MoveFlagMaxOrderByAggregateInput";
import { MoveFlagMinOrderByAggregateInput } from "../inputs/MoveFlagMinOrderByAggregateInput";
import { MoveFlagSumOrderByAggregateInput } from "../inputs/MoveFlagSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("MoveFlagOrderByWithAggregationInput", {})
export class MoveFlagOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  identifier?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => MoveFlagCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: MoveFlagCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => MoveFlagAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: MoveFlagAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => MoveFlagMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: MoveFlagMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => MoveFlagMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: MoveFlagMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => MoveFlagSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: MoveFlagSumOrderByAggregateInput | undefined;
}
