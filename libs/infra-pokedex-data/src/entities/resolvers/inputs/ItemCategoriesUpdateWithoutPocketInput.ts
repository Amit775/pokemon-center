import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ItemsUpdateManyWithoutCategoryNestedInput } from "../inputs/ItemsUpdateManyWithoutCategoryNestedInput";

@TypeGraphQL.InputType("ItemCategoriesUpdateWithoutPocketInput", {})
export class ItemCategoriesUpdateWithoutPocketInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  id?: number | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  identifier?: string | undefined;

  @TypeGraphQL.Field(_type => ItemsUpdateManyWithoutCategoryNestedInput, {
    nullable: true
  })
  items?: ItemsUpdateManyWithoutCategoryNestedInput | undefined;
}
