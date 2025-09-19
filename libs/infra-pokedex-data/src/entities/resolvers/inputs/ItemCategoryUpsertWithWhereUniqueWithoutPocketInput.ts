import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ItemCategoryCreateWithoutPocketInput } from "../inputs/ItemCategoryCreateWithoutPocketInput";
import { ItemCategoryUpdateWithoutPocketInput } from "../inputs/ItemCategoryUpdateWithoutPocketInput";
import { ItemCategoryWhereUniqueInput } from "../inputs/ItemCategoryWhereUniqueInput";

@TypeGraphQL.InputType("ItemCategoryUpsertWithWhereUniqueWithoutPocketInput", {})
export class ItemCategoryUpsertWithWhereUniqueWithoutPocketInput {
  @TypeGraphQL.Field(_type => ItemCategoryWhereUniqueInput, {
    nullable: false
  })
  where!: ItemCategoryWhereUniqueInput;

  @TypeGraphQL.Field(_type => ItemCategoryUpdateWithoutPocketInput, {
    nullable: false
  })
  update!: ItemCategoryUpdateWithoutPocketInput;

  @TypeGraphQL.Field(_type => ItemCategoryCreateWithoutPocketInput, {
    nullable: false
  })
  create!: ItemCategoryCreateWithoutPocketInput;
}
