import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ItemPocketsCreateOrConnectWithoutCategoriesInput } from "../inputs/ItemPocketsCreateOrConnectWithoutCategoriesInput";
import { ItemPocketsCreateWithoutCategoriesInput } from "../inputs/ItemPocketsCreateWithoutCategoriesInput";
import { ItemPocketsWhereUniqueInput } from "../inputs/ItemPocketsWhereUniqueInput";

@TypeGraphQL.InputType("ItemPocketsCreateNestedOneWithoutCategoriesInput", {})
export class ItemPocketsCreateNestedOneWithoutCategoriesInput {
  @TypeGraphQL.Field(_type => ItemPocketsCreateWithoutCategoriesInput, {
    nullable: true
  })
  create?: ItemPocketsCreateWithoutCategoriesInput | undefined;

  @TypeGraphQL.Field(_type => ItemPocketsCreateOrConnectWithoutCategoriesInput, {
    nullable: true
  })
  connectOrCreate?: ItemPocketsCreateOrConnectWithoutCategoriesInput | undefined;

  @TypeGraphQL.Field(_type => ItemPocketsWhereUniqueInput, {
    nullable: true
  })
  connect?: ItemPocketsWhereUniqueInput | undefined;
}
