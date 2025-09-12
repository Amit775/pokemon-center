import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GenerationsUpdateOneRequiredWithoutTypeGameIndicesNestedInput } from "../inputs/GenerationsUpdateOneRequiredWithoutTypeGameIndicesNestedInput";
import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";

@TypeGraphQL.InputType("TypeGameIndicesUpdateWithoutTypeInput", {})
export class TypeGameIndicesUpdateWithoutTypeInput {
  @TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput, {
    nullable: true
  })
  game_index?: IntFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => GenerationsUpdateOneRequiredWithoutTypeGameIndicesNestedInput, {
    nullable: true
  })
  generation?: GenerationsUpdateOneRequiredWithoutTypeGameIndicesNestedInput | undefined;
}
