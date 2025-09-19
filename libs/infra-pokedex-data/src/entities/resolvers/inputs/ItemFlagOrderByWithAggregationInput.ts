import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ItemFlagAvgOrderByAggregateInput } from "../inputs/ItemFlagAvgOrderByAggregateInput";
import { ItemFlagCountOrderByAggregateInput } from "../inputs/ItemFlagCountOrderByAggregateInput";
import { ItemFlagMaxOrderByAggregateInput } from "../inputs/ItemFlagMaxOrderByAggregateInput";
import { ItemFlagMinOrderByAggregateInput } from "../inputs/ItemFlagMinOrderByAggregateInput";
import { ItemFlagSumOrderByAggregateInput } from "../inputs/ItemFlagSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("ItemFlagOrderByWithAggregationInput", {})
export class ItemFlagOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  identifier?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => ItemFlagCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: ItemFlagCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ItemFlagAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: ItemFlagAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ItemFlagMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: ItemFlagMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ItemFlagMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: ItemFlagMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ItemFlagSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: ItemFlagSumOrderByAggregateInput | undefined;
}
