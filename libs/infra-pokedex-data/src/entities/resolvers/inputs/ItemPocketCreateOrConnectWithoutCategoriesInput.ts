import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ItemPocketCreateWithoutCategoriesInput } from "../inputs/ItemPocketCreateWithoutCategoriesInput";
import { ItemPocketWhereUniqueInput } from "../inputs/ItemPocketWhereUniqueInput";

@TypeGraphQL.InputType("ItemPocketCreateOrConnectWithoutCategoriesInput", {})
export class ItemPocketCreateOrConnectWithoutCategoriesInput {
  @TypeGraphQL.Field(_type => ItemPocketWhereUniqueInput, {
    nullable: false
  })
  where!: ItemPocketWhereUniqueInput;

  @TypeGraphQL.Field(_type => ItemPocketCreateWithoutCategoriesInput, {
    nullable: false
  })
  create!: ItemPocketCreateWithoutCategoriesInput;
}
