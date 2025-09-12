import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EncounterConditionsUpdateOneRequiredWithoutValuesNestedInput } from "../inputs/EncounterConditionsUpdateOneRequiredWithoutValuesNestedInput";
import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";

@TypeGraphQL.InputType("EncounterConditionValuesUpdateWithoutConditionValueMapInput", {})
export class EncounterConditionValuesUpdateWithoutConditionValueMapInput {
  @TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput, {
    nullable: true
  })
  id?: IntFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  identifier?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput, {
    nullable: true
  })
  is_default?: IntFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => EncounterConditionsUpdateOneRequiredWithoutValuesNestedInput, {
    nullable: true
  })
  condition?: EncounterConditionsUpdateOneRequiredWithoutValuesNestedInput | undefined;
}
