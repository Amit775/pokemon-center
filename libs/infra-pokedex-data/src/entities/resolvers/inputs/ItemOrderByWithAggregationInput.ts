import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ItemAvgOrderByAggregateInput } from "../inputs/ItemAvgOrderByAggregateInput";
import { ItemCountOrderByAggregateInput } from "../inputs/ItemCountOrderByAggregateInput";
import { ItemMaxOrderByAggregateInput } from "../inputs/ItemMaxOrderByAggregateInput";
import { ItemMinOrderByAggregateInput } from "../inputs/ItemMinOrderByAggregateInput";
import { ItemSumOrderByAggregateInput } from "../inputs/ItemSumOrderByAggregateInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("ItemOrderByWithAggregationInput", {})
export class ItemOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  identifier?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  category_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  cost?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  fling_power?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  fling_effect_id?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => ItemCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: ItemCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ItemAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: ItemAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ItemMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: ItemMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ItemMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: ItemMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ItemSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: ItemSumOrderByAggregateInput | undefined;
}
