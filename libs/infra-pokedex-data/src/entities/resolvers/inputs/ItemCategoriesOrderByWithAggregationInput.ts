import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ItemCategoriesAvgOrderByAggregateInput } from "../inputs/ItemCategoriesAvgOrderByAggregateInput";
import { ItemCategoriesCountOrderByAggregateInput } from "../inputs/ItemCategoriesCountOrderByAggregateInput";
import { ItemCategoriesMaxOrderByAggregateInput } from "../inputs/ItemCategoriesMaxOrderByAggregateInput";
import { ItemCategoriesMinOrderByAggregateInput } from "../inputs/ItemCategoriesMinOrderByAggregateInput";
import { ItemCategoriesSumOrderByAggregateInput } from "../inputs/ItemCategoriesSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("ItemCategoriesOrderByWithAggregationInput", {})
export class ItemCategoriesOrderByWithAggregationInput {
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

  @TypeGraphQL.Field(_type => ItemCategoriesCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: ItemCategoriesCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ItemCategoriesAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: ItemCategoriesAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ItemCategoriesMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: ItemCategoriesMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ItemCategoriesMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: ItemCategoriesMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ItemCategoriesSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: ItemCategoriesSumOrderByAggregateInput | undefined;
}
