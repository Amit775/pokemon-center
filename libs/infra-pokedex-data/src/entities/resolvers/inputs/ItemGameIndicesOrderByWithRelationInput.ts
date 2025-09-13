import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GenerationsOrderByWithRelationInput } from "../inputs/GenerationsOrderByWithRelationInput";
import { ItemsOrderByWithRelationInput } from "../inputs/ItemsOrderByWithRelationInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("ItemGameIndicesOrderByWithRelationInput", {})
export class ItemGameIndicesOrderByWithRelationInput {
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

  @TypeGraphQL.Field(_type => ItemsOrderByWithRelationInput, {
    nullable: true
  })
  item?: ItemsOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => GenerationsOrderByWithRelationInput, {
    nullable: true
  })
  generation?: GenerationsOrderByWithRelationInput | undefined;
}
