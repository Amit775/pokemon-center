import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ItemPocketsOrderByWithRelationInput } from "../inputs/ItemPocketsOrderByWithRelationInput";
import { ItemsOrderByRelationAggregateInput } from "../inputs/ItemsOrderByRelationAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("ItemCategoriesOrderByWithRelationInput", {})
export class ItemCategoriesOrderByWithRelationInput {
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

  @TypeGraphQL.Field(_type => ItemPocketsOrderByWithRelationInput, {
    nullable: true
  })
  pocket?: ItemPocketsOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => ItemsOrderByRelationAggregateInput, {
    nullable: true
  })
  items?: ItemsOrderByRelationAggregateInput | undefined;
}
