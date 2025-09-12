import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MoveFlagMapAvgOrderByAggregateInput } from "../inputs/MoveFlagMapAvgOrderByAggregateInput";
import { MoveFlagMapCountOrderByAggregateInput } from "../inputs/MoveFlagMapCountOrderByAggregateInput";
import { MoveFlagMapMaxOrderByAggregateInput } from "../inputs/MoveFlagMapMaxOrderByAggregateInput";
import { MoveFlagMapMinOrderByAggregateInput } from "../inputs/MoveFlagMapMinOrderByAggregateInput";
import { MoveFlagMapSumOrderByAggregateInput } from "../inputs/MoveFlagMapSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("MoveFlagMapOrderByWithAggregationInput", {})
export class MoveFlagMapOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  move_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  move_flag_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => MoveFlagMapCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: MoveFlagMapCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => MoveFlagMapAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: MoveFlagMapAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => MoveFlagMapMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: MoveFlagMapMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => MoveFlagMapMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: MoveFlagMapMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => MoveFlagMapSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: MoveFlagMapSumOrderByAggregateInput | undefined;
}
