import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ItemCategoriesCreateOrConnectWithoutItemsInput } from "../inputs/ItemCategoriesCreateOrConnectWithoutItemsInput";
import { ItemCategoriesCreateWithoutItemsInput } from "../inputs/ItemCategoriesCreateWithoutItemsInput";
import { ItemCategoriesWhereUniqueInput } from "../inputs/ItemCategoriesWhereUniqueInput";

@TypeGraphQL.InputType("ItemCategoriesCreateNestedOneWithoutItemsInput", {})
export class ItemCategoriesCreateNestedOneWithoutItemsInput {
  @TypeGraphQL.Field(_type => ItemCategoriesCreateWithoutItemsInput, {
    nullable: true
  })
  create?: ItemCategoriesCreateWithoutItemsInput | undefined;

  @TypeGraphQL.Field(_type => ItemCategoriesCreateOrConnectWithoutItemsInput, {
    nullable: true
  })
  connectOrCreate?: ItemCategoriesCreateOrConnectWithoutItemsInput | undefined;

  @TypeGraphQL.Field(_type => ItemCategoriesWhereUniqueInput, {
    nullable: true
  })
  connect?: ItemCategoriesWhereUniqueInput | undefined;
}
