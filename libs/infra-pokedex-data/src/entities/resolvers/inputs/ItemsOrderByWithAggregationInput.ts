import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ItemsAvgOrderByAggregateInput } from "../inputs/ItemsAvgOrderByAggregateInput";
import { ItemsCountOrderByAggregateInput } from "../inputs/ItemsCountOrderByAggregateInput";
import { ItemsMaxOrderByAggregateInput } from "../inputs/ItemsMaxOrderByAggregateInput";
import { ItemsMinOrderByAggregateInput } from "../inputs/ItemsMinOrderByAggregateInput";
import { ItemsSumOrderByAggregateInput } from "../inputs/ItemsSumOrderByAggregateInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("ItemsOrderByWithAggregationInput", {})
export class ItemsOrderByWithAggregationInput {
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

  @TypeGraphQL.Field(_type => ItemsCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: ItemsCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ItemsAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: ItemsAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ItemsMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: ItemsMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ItemsMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: ItemsMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ItemsSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: ItemsSumOrderByAggregateInput | undefined;
}
