import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ItemCategoriesCreateWithoutItemsInput } from "../inputs/ItemCategoriesCreateWithoutItemsInput";
import { ItemCategoriesWhereUniqueInput } from "../inputs/ItemCategoriesWhereUniqueInput";

@TypeGraphQL.InputType("ItemCategoriesCreateOrConnectWithoutItemsInput", {})
export class ItemCategoriesCreateOrConnectWithoutItemsInput {
  @TypeGraphQL.Field(_type => ItemCategoriesWhereUniqueInput, {
    nullable: false
  })
  where!: ItemCategoriesWhereUniqueInput;

  @TypeGraphQL.Field(_type => ItemCategoriesCreateWithoutItemsInput, {
    nullable: false
  })
  create!: ItemCategoriesCreateWithoutItemsInput;
}
