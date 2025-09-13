import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ItemPocketsUpdateOneRequiredWithoutCategoriesNestedInput } from "../inputs/ItemPocketsUpdateOneRequiredWithoutCategoriesNestedInput";
import { ItemsUpdateManyWithoutCategoryNestedInput } from "../inputs/ItemsUpdateManyWithoutCategoryNestedInput";

@TypeGraphQL.InputType("ItemCategoriesUpdateInput", {})
export class ItemCategoriesUpdateInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  id?: number | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  identifier?: string | undefined;

  @TypeGraphQL.Field(_type => ItemPocketsUpdateOneRequiredWithoutCategoriesNestedInput, {
    nullable: true
  })
  pocket?: ItemPocketsUpdateOneRequiredWithoutCategoriesNestedInput | undefined;

  @TypeGraphQL.Field(_type => ItemsUpdateManyWithoutCategoryNestedInput, {
    nullable: true
  })
  items?: ItemsUpdateManyWithoutCategoryNestedInput | undefined;
}
