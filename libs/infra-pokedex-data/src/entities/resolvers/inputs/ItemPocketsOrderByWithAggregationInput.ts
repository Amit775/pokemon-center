import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ItemPocketsAvgOrderByAggregateInput } from "../inputs/ItemPocketsAvgOrderByAggregateInput";
import { ItemPocketsCountOrderByAggregateInput } from "../inputs/ItemPocketsCountOrderByAggregateInput";
import { ItemPocketsMaxOrderByAggregateInput } from "../inputs/ItemPocketsMaxOrderByAggregateInput";
import { ItemPocketsMinOrderByAggregateInput } from "../inputs/ItemPocketsMinOrderByAggregateInput";
import { ItemPocketsSumOrderByAggregateInput } from "../inputs/ItemPocketsSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("ItemPocketsOrderByWithAggregationInput", {})
export class ItemPocketsOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  identifier?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => ItemPocketsCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: ItemPocketsCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ItemPocketsAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: ItemPocketsAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ItemPocketsMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: ItemPocketsMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ItemPocketsMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: ItemPocketsMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ItemPocketsSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: ItemPocketsSumOrderByAggregateInput | undefined;
}
