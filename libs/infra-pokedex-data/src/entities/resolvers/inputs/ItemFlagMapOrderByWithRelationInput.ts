import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ItemFlagOrderByWithRelationInput } from "../inputs/ItemFlagOrderByWithRelationInput";
import { ItemOrderByWithRelationInput } from "../inputs/ItemOrderByWithRelationInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("ItemFlagMapOrderByWithRelationInput", {})
export class ItemFlagMapOrderByWithRelationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  item_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  item_flag_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => ItemOrderByWithRelationInput, {
    nullable: true
  })
  item?: ItemOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => ItemFlagOrderByWithRelationInput, {
    nullable: true
  })
  flag?: ItemFlagOrderByWithRelationInput | undefined;
}
