import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ItemPocketsCountCategoriesArgs } from "./args/ItemPocketsCountCategoriesArgs";

@TypeGraphQL.ObjectType("ItemPocketsCount", {})
export class ItemPocketsCount {
  categories!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "categories",
    nullable: false
  })
  getCategories(@TypeGraphQL.Root() root: ItemPocketsCount, @TypeGraphQL.Args() args: ItemPocketsCountCategoriesArgs): number {
    return root.categories;
  }
}
