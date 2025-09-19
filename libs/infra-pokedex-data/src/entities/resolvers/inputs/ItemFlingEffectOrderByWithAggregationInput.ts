import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ItemFlingEffectAvgOrderByAggregateInput } from "../inputs/ItemFlingEffectAvgOrderByAggregateInput";
import { ItemFlingEffectCountOrderByAggregateInput } from "../inputs/ItemFlingEffectCountOrderByAggregateInput";
import { ItemFlingEffectMaxOrderByAggregateInput } from "../inputs/ItemFlingEffectMaxOrderByAggregateInput";
import { ItemFlingEffectMinOrderByAggregateInput } from "../inputs/ItemFlingEffectMinOrderByAggregateInput";
import { ItemFlingEffectSumOrderByAggregateInput } from "../inputs/ItemFlingEffectSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("ItemFlingEffectOrderByWithAggregationInput", {})
export class ItemFlingEffectOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  identifier?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => ItemFlingEffectCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: ItemFlingEffectCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ItemFlingEffectAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: ItemFlingEffectAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ItemFlingEffectMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: ItemFlingEffectMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ItemFlingEffectMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: ItemFlingEffectMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ItemFlingEffectSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: ItemFlingEffectSumOrderByAggregateInput | undefined;
}
