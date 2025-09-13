import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ItemFlagsOrderByWithRelationInput } from "../inputs/ItemFlagsOrderByWithRelationInput";
import { ItemsOrderByWithRelationInput } from "../inputs/ItemsOrderByWithRelationInput";
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

  @TypeGraphQL.Field(_type => ItemsOrderByWithRelationInput, {
    nullable: true
  })
  item?: ItemsOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => ItemFlagsOrderByWithRelationInput, {
    nullable: true
  })
  flag?: ItemFlagsOrderByWithRelationInput | undefined;
}
