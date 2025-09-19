import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MoveEffectAvgOrderByAggregateInput } from "../inputs/MoveEffectAvgOrderByAggregateInput";
import { MoveEffectCountOrderByAggregateInput } from "../inputs/MoveEffectCountOrderByAggregateInput";
import { MoveEffectMaxOrderByAggregateInput } from "../inputs/MoveEffectMaxOrderByAggregateInput";
import { MoveEffectMinOrderByAggregateInput } from "../inputs/MoveEffectMinOrderByAggregateInput";
import { MoveEffectSumOrderByAggregateInput } from "../inputs/MoveEffectSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("MoveEffectOrderByWithAggregationInput", {})
export class MoveEffectOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => MoveEffectCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: MoveEffectCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => MoveEffectAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: MoveEffectAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => MoveEffectMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: MoveEffectMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => MoveEffectMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: MoveEffectMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => MoveEffectSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: MoveEffectSumOrderByAggregateInput | undefined;
}
