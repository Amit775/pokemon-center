import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ItemFlingEffectCountItemsArgs } from "./args/ItemFlingEffectCountItemsArgs";

@TypeGraphQL.ObjectType("ItemFlingEffectCount", {})
export class ItemFlingEffectCount {
  items!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "items",
    nullable: false
  })
  getItems(@TypeGraphQL.Root() root: ItemFlingEffectCount, @TypeGraphQL.Args() args: ItemFlingEffectCountItemsArgs): number {
    return root.items;
  }
}
