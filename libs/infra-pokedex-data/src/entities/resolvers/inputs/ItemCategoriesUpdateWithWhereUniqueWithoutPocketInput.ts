import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ItemCategoriesUpdateWithoutPocketInput } from "../inputs/ItemCategoriesUpdateWithoutPocketInput";
import { ItemCategoriesWhereUniqueInput } from "../inputs/ItemCategoriesWhereUniqueInput";

@TypeGraphQL.InputType("ItemCategoriesUpdateWithWhereUniqueWithoutPocketInput", {})
export class ItemCategoriesUpdateWithWhereUniqueWithoutPocketInput {
  @TypeGraphQL.Field(_type => ItemCategoriesWhereUniqueInput, {
    nullable: false
  })
  where!: ItemCategoriesWhereUniqueInput;

  @TypeGraphQL.Field(_type => ItemCategoriesUpdateWithoutPocketInput, {
    nullable: false
  })
  data!: ItemCategoriesUpdateWithoutPocketInput;
}
