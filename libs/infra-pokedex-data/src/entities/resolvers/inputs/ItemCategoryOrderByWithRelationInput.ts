import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ItemOrderByRelationAggregateInput } from "../inputs/ItemOrderByRelationAggregateInput";
import { ItemPocketOrderByWithRelationInput } from "../inputs/ItemPocketOrderByWithRelationInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("ItemCategoryOrderByWithRelationInput", {})
export class ItemCategoryOrderByWithRelationInput {
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

  @TypeGraphQL.Field(_type => ItemPocketOrderByWithRelationInput, {
    nullable: true
  })
  pocket?: ItemPocketOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => ItemOrderByRelationAggregateInput, {
    nullable: true
  })
  items?: ItemOrderByRelationAggregateInput | undefined;
}
