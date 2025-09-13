import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ItemFlagMapAvgOrderByAggregateInput } from "../inputs/ItemFlagMapAvgOrderByAggregateInput";
import { ItemFlagMapCountOrderByAggregateInput } from "../inputs/ItemFlagMapCountOrderByAggregateInput";
import { ItemFlagMapMaxOrderByAggregateInput } from "../inputs/ItemFlagMapMaxOrderByAggregateInput";
import { ItemFlagMapMinOrderByAggregateInput } from "../inputs/ItemFlagMapMinOrderByAggregateInput";
import { ItemFlagMapSumOrderByAggregateInput } from "../inputs/ItemFlagMapSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("ItemFlagMapOrderByWithAggregationInput", {})
export class ItemFlagMapOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  item_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  item_flag_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => ItemFlagMapCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: ItemFlagMapCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ItemFlagMapAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: ItemFlagMapAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ItemFlagMapMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: ItemFlagMapMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ItemFlagMapMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: ItemFlagMapMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ItemFlagMapSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: ItemFlagMapSumOrderByAggregateInput | undefined;
}
