import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ItemCategoriesCreateWithoutItemsInput } from "../inputs/ItemCategoriesCreateWithoutItemsInput";
import { ItemCategoriesUpdateWithoutItemsInput } from "../inputs/ItemCategoriesUpdateWithoutItemsInput";
import { ItemCategoriesWhereInput } from "../inputs/ItemCategoriesWhereInput";

@TypeGraphQL.InputType("ItemCategoriesUpsertWithoutItemsInput", {})
export class ItemCategoriesUpsertWithoutItemsInput {
  @TypeGraphQL.Field(_type => ItemCategoriesUpdateWithoutItemsInput, {
    nullable: false
  })
  update!: ItemCategoriesUpdateWithoutItemsInput;

  @TypeGraphQL.Field(_type => ItemCategoriesCreateWithoutItemsInput, {
    nullable: false
  })
  create!: ItemCategoriesCreateWithoutItemsInput;

  @TypeGraphQL.Field(_type => ItemCategoriesWhereInput, {
    nullable: true
  })
  where?: ItemCategoriesWhereInput | undefined;
}
