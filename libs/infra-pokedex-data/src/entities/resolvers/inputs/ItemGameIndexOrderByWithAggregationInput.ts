import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ItemGameIndexAvgOrderByAggregateInput } from "../inputs/ItemGameIndexAvgOrderByAggregateInput";
import { ItemGameIndexCountOrderByAggregateInput } from "../inputs/ItemGameIndexCountOrderByAggregateInput";
import { ItemGameIndexMaxOrderByAggregateInput } from "../inputs/ItemGameIndexMaxOrderByAggregateInput";
import { ItemGameIndexMinOrderByAggregateInput } from "../inputs/ItemGameIndexMinOrderByAggregateInput";
import { ItemGameIndexSumOrderByAggregateInput } from "../inputs/ItemGameIndexSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("ItemGameIndexOrderByWithAggregationInput", {})
export class ItemGameIndexOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  item_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  generation_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  game_index?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => ItemGameIndexCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: ItemGameIndexCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ItemGameIndexAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: ItemGameIndexAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ItemGameIndexMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: ItemGameIndexMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ItemGameIndexMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: ItemGameIndexMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ItemGameIndexSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: ItemGameIndexSumOrderByAggregateInput | undefined;
}
