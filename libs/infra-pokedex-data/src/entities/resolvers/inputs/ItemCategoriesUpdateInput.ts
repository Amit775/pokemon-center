import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";
import { ItemPocketsUpdateOneRequiredWithoutCategoriesNestedInput } from "../inputs/ItemPocketsUpdateOneRequiredWithoutCategoriesNestedInput";
import { ItemsUpdateManyWithoutCategoryNestedInput } from "../inputs/ItemsUpdateManyWithoutCategoryNestedInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";

@TypeGraphQL.InputType("ItemCategoriesUpdateInput", {})
export class ItemCategoriesUpdateInput {
  @TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput, {
    nullable: true
  })
  id?: IntFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  identifier?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => ItemPocketsUpdateOneRequiredWithoutCategoriesNestedInput, {
    nullable: true
  })
  pocket?: ItemPocketsUpdateOneRequiredWithoutCategoriesNestedInput | undefined;

  @TypeGraphQL.Field(_type => ItemsUpdateManyWithoutCategoryNestedInput, {
    nullable: true
  })
  items?: ItemsUpdateManyWithoutCategoryNestedInput | undefined;
}
