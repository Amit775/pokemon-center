import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ItemPocketsCreateWithoutCategoriesInput } from "../inputs/ItemPocketsCreateWithoutCategoriesInput";
import { ItemPocketsWhereUniqueInput } from "../inputs/ItemPocketsWhereUniqueInput";

@TypeGraphQL.InputType("ItemPocketsCreateOrConnectWithoutCategoriesInput", {})
export class ItemPocketsCreateOrConnectWithoutCategoriesInput {
  @TypeGraphQL.Field(_type => ItemPocketsWhereUniqueInput, {
    nullable: false
  })
  where!: ItemPocketsWhereUniqueInput;

  @TypeGraphQL.Field(_type => ItemPocketsCreateWithoutCategoriesInput, {
    nullable: false
  })
  create!: ItemPocketsCreateWithoutCategoriesInput;
}
