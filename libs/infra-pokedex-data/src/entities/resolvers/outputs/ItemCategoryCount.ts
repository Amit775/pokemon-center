import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ItemCategoryCountItemsArgs } from "./args/ItemCategoryCountItemsArgs";

@TypeGraphQL.ObjectType("ItemCategoryCount", {})
export class ItemCategoryCount {
  items!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "items",
    nullable: false
  })
  getItems(@TypeGraphQL.Root() root: ItemCategoryCount, @TypeGraphQL.Args() args: ItemCategoryCountItemsArgs): number {
    return root.items;
  }
}
