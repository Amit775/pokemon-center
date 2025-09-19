import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ItemCategoryCreateOrConnectWithoutItemsInput } from "../inputs/ItemCategoryCreateOrConnectWithoutItemsInput";
import { ItemCategoryCreateWithoutItemsInput } from "../inputs/ItemCategoryCreateWithoutItemsInput";
import { ItemCategoryWhereUniqueInput } from "../inputs/ItemCategoryWhereUniqueInput";

@TypeGraphQL.InputType("ItemCategoryCreateNestedOneWithoutItemsInput", {})
export class ItemCategoryCreateNestedOneWithoutItemsInput {
  @TypeGraphQL.Field(_type => ItemCategoryCreateWithoutItemsInput, {
    nullable: true
  })
  create?: ItemCategoryCreateWithoutItemsInput | undefined;

  @TypeGraphQL.Field(_type => ItemCategoryCreateOrConnectWithoutItemsInput, {
    nullable: true
  })
  connectOrCreate?: ItemCategoryCreateOrConnectWithoutItemsInput | undefined;

  @TypeGraphQL.Field(_type => ItemCategoryWhereUniqueInput, {
    nullable: true
  })
  connect?: ItemCategoryWhereUniqueInput | undefined;
}
