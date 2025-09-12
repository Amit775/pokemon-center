import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ItemFlagsAvgOrderByAggregateInput } from "../inputs/ItemFlagsAvgOrderByAggregateInput";
import { ItemFlagsCountOrderByAggregateInput } from "../inputs/ItemFlagsCountOrderByAggregateInput";
import { ItemFlagsMaxOrderByAggregateInput } from "../inputs/ItemFlagsMaxOrderByAggregateInput";
import { ItemFlagsMinOrderByAggregateInput } from "../inputs/ItemFlagsMinOrderByAggregateInput";
import { ItemFlagsSumOrderByAggregateInput } from "../inputs/ItemFlagsSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("ItemFlagsOrderByWithAggregationInput", {})
export class ItemFlagsOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  identifier?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => ItemFlagsCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: ItemFlagsCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ItemFlagsAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: ItemFlagsAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ItemFlagsMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: ItemFlagsMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ItemFlagsMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: ItemFlagsMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ItemFlagsSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: ItemFlagsSumOrderByAggregateInput | undefined;
}
