import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ItemPocketsUpdateOneRequiredWithoutCategoriesNestedInput } from "../inputs/ItemPocketsUpdateOneRequiredWithoutCategoriesNestedInput";

@TypeGraphQL.InputType("ItemCategoriesUpdateWithoutItemsInput", {})
export class ItemCategoriesUpdateWithoutItemsInput {
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
}
