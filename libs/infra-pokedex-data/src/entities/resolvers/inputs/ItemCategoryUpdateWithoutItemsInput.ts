import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ItemPocketUpdateOneRequiredWithoutCategoriesNestedInput } from "../inputs/ItemPocketUpdateOneRequiredWithoutCategoriesNestedInput";

@TypeGraphQL.InputType("ItemCategoryUpdateWithoutItemsInput", {})
export class ItemCategoryUpdateWithoutItemsInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  id?: number | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  identifier?: string | undefined;

  @TypeGraphQL.Field(_type => ItemPocketUpdateOneRequiredWithoutCategoriesNestedInput, {
    nullable: true
  })
  pocket?: ItemPocketUpdateOneRequiredWithoutCategoriesNestedInput | undefined;
}
