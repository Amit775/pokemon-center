import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ContestEffectAvgOrderByAggregateInput } from "../inputs/ContestEffectAvgOrderByAggregateInput";
import { ContestEffectCountOrderByAggregateInput } from "../inputs/ContestEffectCountOrderByAggregateInput";
import { ContestEffectMaxOrderByAggregateInput } from "../inputs/ContestEffectMaxOrderByAggregateInput";
import { ContestEffectMinOrderByAggregateInput } from "../inputs/ContestEffectMinOrderByAggregateInput";
import { ContestEffectSumOrderByAggregateInput } from "../inputs/ContestEffectSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("ContestEffectOrderByWithAggregationInput", {})
export class ContestEffectOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  appeal?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  jam?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => ContestEffectCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: ContestEffectCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ContestEffectAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: ContestEffectAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ContestEffectMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: ContestEffectMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ContestEffectMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: ContestEffectMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ContestEffectSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: ContestEffectSumOrderByAggregateInput | undefined;
}
