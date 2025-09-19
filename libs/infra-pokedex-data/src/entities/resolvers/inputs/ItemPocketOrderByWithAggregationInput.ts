import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ItemPocketAvgOrderByAggregateInput } from "../inputs/ItemPocketAvgOrderByAggregateInput";
import { ItemPocketCountOrderByAggregateInput } from "../inputs/ItemPocketCountOrderByAggregateInput";
import { ItemPocketMaxOrderByAggregateInput } from "../inputs/ItemPocketMaxOrderByAggregateInput";
import { ItemPocketMinOrderByAggregateInput } from "../inputs/ItemPocketMinOrderByAggregateInput";
import { ItemPocketSumOrderByAggregateInput } from "../inputs/ItemPocketSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("ItemPocketOrderByWithAggregationInput", {})
export class ItemPocketOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  identifier?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => ItemPocketCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: ItemPocketCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ItemPocketAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: ItemPocketAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ItemPocketMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: ItemPocketMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ItemPocketMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: ItemPocketMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ItemPocketSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: ItemPocketSumOrderByAggregateInput | undefined;
}
