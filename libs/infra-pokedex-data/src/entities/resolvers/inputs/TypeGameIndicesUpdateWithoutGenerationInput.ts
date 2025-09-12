import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";
import { TypesUpdateOneRequiredWithoutGameIndicesNestedInput } from "../inputs/TypesUpdateOneRequiredWithoutGameIndicesNestedInput";

@TypeGraphQL.InputType("TypeGameIndicesUpdateWithoutGenerationInput", {})
export class TypeGameIndicesUpdateWithoutGenerationInput {
  @TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput, {
    nullable: true
  })
  game_index?: IntFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => TypesUpdateOneRequiredWithoutGameIndicesNestedInput, {
    nullable: true
  })
  type?: TypesUpdateOneRequiredWithoutGameIndicesNestedInput | undefined;
}
