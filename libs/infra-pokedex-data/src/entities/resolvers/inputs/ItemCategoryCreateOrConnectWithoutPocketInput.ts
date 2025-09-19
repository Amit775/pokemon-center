import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ItemCategoryCreateWithoutPocketInput } from "../inputs/ItemCategoryCreateWithoutPocketInput";
import { ItemCategoryWhereUniqueInput } from "../inputs/ItemCategoryWhereUniqueInput";

@TypeGraphQL.InputType("ItemCategoryCreateOrConnectWithoutPocketInput", {})
export class ItemCategoryCreateOrConnectWithoutPocketInput {
  @TypeGraphQL.Field(_type => ItemCategoryWhereUniqueInput, {
    nullable: false
  })
  where!: ItemCategoryWhereUniqueInput;

  @TypeGraphQL.Field(_type => ItemCategoryCreateWithoutPocketInput, {
    nullable: false
  })
  create!: ItemCategoryCreateWithoutPocketInput;
}
