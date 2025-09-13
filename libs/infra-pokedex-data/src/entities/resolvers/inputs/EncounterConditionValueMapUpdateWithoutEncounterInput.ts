import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EncounterConditionValuesUpdateOneRequiredWithoutConditionValueMapNestedInput } from "../inputs/EncounterConditionValuesUpdateOneRequiredWithoutConditionValueMapNestedInput";

@TypeGraphQL.InputType("EncounterConditionValueMapUpdateWithoutEncounterInput", {})
export class EncounterConditionValueMapUpdateWithoutEncounterInput {
  @TypeGraphQL.Field(_type => EncounterConditionValuesUpdateOneRequiredWithoutConditionValueMapNestedInput, {
    nullable: true
  })
  conditionValue?: EncounterConditionValuesUpdateOneRequiredWithoutConditionValueMapNestedInput | undefined;
}
