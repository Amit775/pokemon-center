import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ItemFlingEffectsAvgOrderByAggregateInput } from "../inputs/ItemFlingEffectsAvgOrderByAggregateInput";
import { ItemFlingEffectsCountOrderByAggregateInput } from "../inputs/ItemFlingEffectsCountOrderByAggregateInput";
import { ItemFlingEffectsMaxOrderByAggregateInput } from "../inputs/ItemFlingEffectsMaxOrderByAggregateInput";
import { ItemFlingEffectsMinOrderByAggregateInput } from "../inputs/ItemFlingEffectsMinOrderByAggregateInput";
import { ItemFlingEffectsSumOrderByAggregateInput } from "../inputs/ItemFlingEffectsSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("ItemFlingEffectsOrderByWithAggregationInput", {})
export class ItemFlingEffectsOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  identifier?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => ItemFlingEffectsCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: ItemFlingEffectsCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ItemFlingEffectsAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: ItemFlingEffectsAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ItemFlingEffectsMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: ItemFlingEffectsMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ItemFlingEffectsMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: ItemFlingEffectsMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ItemFlingEffectsSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: ItemFlingEffectsSumOrderByAggregateInput | undefined;
}
