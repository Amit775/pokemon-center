import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ItemCategoryCreateWithoutItemsInput } from "../inputs/ItemCategoryCreateWithoutItemsInput";
import { ItemCategoryWhereUniqueInput } from "../inputs/ItemCategoryWhereUniqueInput";

@TypeGraphQL.InputType("ItemCategoryCreateOrConnectWithoutItemsInput", {})
export class ItemCategoryCreateOrConnectWithoutItemsInput {
  @TypeGraphQL.Field(_type => ItemCategoryWhereUniqueInput, {
    nullable: false
  })
  where!: ItemCategoryWhereUniqueInput;

  @TypeGraphQL.Field(_type => ItemCategoryCreateWithoutItemsInput, {
    nullable: false
  })
  create!: ItemCategoryCreateWithoutItemsInput;
}
