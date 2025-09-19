import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ItemCategoryAvgOrderByAggregateInput } from "../inputs/ItemCategoryAvgOrderByAggregateInput";
import { ItemCategoryCountOrderByAggregateInput } from "../inputs/ItemCategoryCountOrderByAggregateInput";
import { ItemCategoryMaxOrderByAggregateInput } from "../inputs/ItemCategoryMaxOrderByAggregateInput";
import { ItemCategoryMinOrderByAggregateInput } from "../inputs/ItemCategoryMinOrderByAggregateInput";
import { ItemCategorySumOrderByAggregateInput } from "../inputs/ItemCategorySumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("ItemCategoryOrderByWithAggregationInput", {})
export class ItemCategoryOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  pocket_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  identifier?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => ItemCategoryCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: ItemCategoryCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ItemCategoryAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: ItemCategoryAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ItemCategoryMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: ItemCategoryMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ItemCategoryMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: ItemCategoryMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ItemCategorySumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: ItemCategorySumOrderByAggregateInput | undefined;
}
