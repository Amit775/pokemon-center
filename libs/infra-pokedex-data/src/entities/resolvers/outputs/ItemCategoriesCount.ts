import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ItemCategoriesCountItemsArgs } from "./args/ItemCategoriesCountItemsArgs";

@TypeGraphQL.ObjectType("ItemCategoriesCount", {})
export class ItemCategoriesCount {
  items!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "items",
    nullable: false
  })
  getItems(@TypeGraphQL.Root() root: ItemCategoriesCount, @TypeGraphQL.Args() args: ItemCategoriesCountItemsArgs): number {
    return root.items;
  }
}
