import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ItemFlingEffectsCountItemsArgs } from "./args/ItemFlingEffectsCountItemsArgs";

@TypeGraphQL.ObjectType("ItemFlingEffectsCount", {})
export class ItemFlingEffectsCount {
  items!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "items",
    nullable: false
  })
  getItems(@TypeGraphQL.Root() root: ItemFlingEffectsCount, @TypeGraphQL.Args() args: ItemFlingEffectsCountItemsArgs): number {
    return root.items;
  }
}
