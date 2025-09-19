import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ItemCategoryCreateWithoutItemsInput } from "../inputs/ItemCategoryCreateWithoutItemsInput";
import { ItemCategoryUpdateWithoutItemsInput } from "../inputs/ItemCategoryUpdateWithoutItemsInput";
import { ItemCategoryWhereInput } from "../inputs/ItemCategoryWhereInput";

@TypeGraphQL.InputType("ItemCategoryUpsertWithoutItemsInput", {})
export class ItemCategoryUpsertWithoutItemsInput {
  @TypeGraphQL.Field(_type => ItemCategoryUpdateWithoutItemsInput, {
    nullable: false
  })
  update!: ItemCategoryUpdateWithoutItemsInput;

  @TypeGraphQL.Field(_type => ItemCategoryCreateWithoutItemsInput, {
    nullable: false
  })
  create!: ItemCategoryCreateWithoutItemsInput;

  @TypeGraphQL.Field(_type => ItemCategoryWhereInput, {
    nullable: true
  })
  where?: ItemCategoryWhereInput | undefined;
}
