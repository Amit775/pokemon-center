import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ItemPocketCreateOrConnectWithoutCategoriesInput } from "../inputs/ItemPocketCreateOrConnectWithoutCategoriesInput";
import { ItemPocketCreateWithoutCategoriesInput } from "../inputs/ItemPocketCreateWithoutCategoriesInput";
import { ItemPocketWhereUniqueInput } from "../inputs/ItemPocketWhereUniqueInput";

@TypeGraphQL.InputType("ItemPocketCreateNestedOneWithoutCategoriesInput", {})
export class ItemPocketCreateNestedOneWithoutCategoriesInput {
  @TypeGraphQL.Field(_type => ItemPocketCreateWithoutCategoriesInput, {
    nullable: true
  })
  create?: ItemPocketCreateWithoutCategoriesInput | undefined;

  @TypeGraphQL.Field(_type => ItemPocketCreateOrConnectWithoutCategoriesInput, {
    nullable: true
  })
  connectOrCreate?: ItemPocketCreateOrConnectWithoutCategoriesInput | undefined;

  @TypeGraphQL.Field(_type => ItemPocketWhereUniqueInput, {
    nullable: true
  })
  connect?: ItemPocketWhereUniqueInput | undefined;
}
