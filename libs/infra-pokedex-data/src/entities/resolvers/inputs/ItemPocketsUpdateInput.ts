import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";
import { ItemCategoriesUpdateManyWithoutPocketNestedInput } from "../inputs/ItemCategoriesUpdateManyWithoutPocketNestedInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";

@TypeGraphQL.InputType("ItemPocketsUpdateInput", {})
export class ItemPocketsUpdateInput {
  @TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput, {
    nullable: true
  })
  id?: IntFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  identifier?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => ItemCategoriesUpdateManyWithoutPocketNestedInput, {
    nullable: true
  })
  categories?: ItemCategoriesUpdateManyWithoutPocketNestedInput | undefined;
}
