import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EncounterConditionValuesUpdateOneRequiredWithoutConditionValueMapNestedInput } from "../inputs/EncounterConditionValuesUpdateOneRequiredWithoutConditionValueMapNestedInput";
import { EncountersUpdateOneRequiredWithoutConditionValueMapNestedInput } from "../inputs/EncountersUpdateOneRequiredWithoutConditionValueMapNestedInput";

@TypeGraphQL.InputType("EncounterConditionValueMapUpdateInput", {})
export class EncounterConditionValueMapUpdateInput {
  @TypeGraphQL.Field(_type => EncountersUpdateOneRequiredWithoutConditionValueMapNestedInput, {
    nullable: true
  })
  encounter?: EncountersUpdateOneRequiredWithoutConditionValueMapNestedInput | undefined;

  @TypeGraphQL.Field(_type => EncounterConditionValuesUpdateOneRequiredWithoutConditionValueMapNestedInput, {
    nullable: true
  })
  conditionValue?: EncounterConditionValuesUpdateOneRequiredWithoutConditionValueMapNestedInput | undefined;
}
