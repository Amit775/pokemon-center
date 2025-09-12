import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ItemGameIndicesAvgOrderByAggregateInput } from "../inputs/ItemGameIndicesAvgOrderByAggregateInput";
import { ItemGameIndicesCountOrderByAggregateInput } from "../inputs/ItemGameIndicesCountOrderByAggregateInput";
import { ItemGameIndicesMaxOrderByAggregateInput } from "../inputs/ItemGameIndicesMaxOrderByAggregateInput";
import { ItemGameIndicesMinOrderByAggregateInput } from "../inputs/ItemGameIndicesMinOrderByAggregateInput";
import { ItemGameIndicesSumOrderByAggregateInput } from "../inputs/ItemGameIndicesSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("ItemGameIndicesOrderByWithAggregationInput", {})
export class ItemGameIndicesOrderByWithAggregationInput {
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

  @TypeGraphQL.Field(_type => ItemGameIndicesCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: ItemGameIndicesCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ItemGameIndicesAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: ItemGameIndicesAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ItemGameIndicesMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: ItemGameIndicesMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ItemGameIndicesMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: ItemGameIndicesMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ItemGameIndicesSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: ItemGameIndicesSumOrderByAggregateInput | undefined;
}
