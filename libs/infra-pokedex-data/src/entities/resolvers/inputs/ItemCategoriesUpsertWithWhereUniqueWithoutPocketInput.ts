import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ItemCategoriesCreateWithoutPocketInput } from "../inputs/ItemCategoriesCreateWithoutPocketInput";
import { ItemCategoriesUpdateWithoutPocketInput } from "../inputs/ItemCategoriesUpdateWithoutPocketInput";
import { ItemCategoriesWhereUniqueInput } from "../inputs/ItemCategoriesWhereUniqueInput";

@TypeGraphQL.InputType("ItemCategoriesUpsertWithWhereUniqueWithoutPocketInput", {})
export class ItemCategoriesUpsertWithWhereUniqueWithoutPocketInput {
  @TypeGraphQL.Field(_type => ItemCategoriesWhereUniqueInput, {
    nullable: false
  })
  where!: ItemCategoriesWhereUniqueInput;

  @TypeGraphQL.Field(_type => ItemCategoriesUpdateWithoutPocketInput, {
    nullable: false
  })
  update!: ItemCategoriesUpdateWithoutPocketInput;

  @TypeGraphQL.Field(_type => ItemCategoriesCreateWithoutPocketInput, {
    nullable: false
  })
  create!: ItemCategoriesCreateWithoutPocketInput;
}
