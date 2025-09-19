import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ItemCategoryUpdateWithoutPocketInput } from "../inputs/ItemCategoryUpdateWithoutPocketInput";
import { ItemCategoryWhereUniqueInput } from "../inputs/ItemCategoryWhereUniqueInput";

@TypeGraphQL.InputType("ItemCategoryUpdateWithWhereUniqueWithoutPocketInput", {})
export class ItemCategoryUpdateWithWhereUniqueWithoutPocketInput {
  @TypeGraphQL.Field(_type => ItemCategoryWhereUniqueInput, {
    nullable: false
  })
  where!: ItemCategoryWhereUniqueInput;

  @TypeGraphQL.Field(_type => ItemCategoryUpdateWithoutPocketInput, {
    nullable: false
  })
  data!: ItemCategoryUpdateWithoutPocketInput;
}
