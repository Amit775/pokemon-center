import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";
import { ItemPocketsUpdateOneRequiredWithoutCategoriesNestedInput } from "../inputs/ItemPocketsUpdateOneRequiredWithoutCategoriesNestedInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";

@TypeGraphQL.InputType("ItemCategoriesUpdateWithoutItemsInput", {})
export class ItemCategoriesUpdateWithoutItemsInput {
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
}
