import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ItemPocketCountCategoriesArgs } from "./args/ItemPocketCountCategoriesArgs";

@TypeGraphQL.ObjectType("ItemPocketCount", {})
export class ItemPocketCount {
  categories!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "categories",
    nullable: false
  })
  getCategories(@TypeGraphQL.Root() root: ItemPocketCount, @TypeGraphQL.Args() args: ItemPocketCountCategoriesArgs): number {
    return root.categories;
  }
}
