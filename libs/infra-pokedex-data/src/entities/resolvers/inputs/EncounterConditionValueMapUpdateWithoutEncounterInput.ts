import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EncounterConditionValueUpdateOneRequiredWithoutConditionValueMapNestedInput } from "../inputs/EncounterConditionValueUpdateOneRequiredWithoutConditionValueMapNestedInput";

@TypeGraphQL.InputType("EncounterConditionValueMapUpdateWithoutEncounterInput", {})
export class EncounterConditionValueMapUpdateWithoutEncounterInput {
  @TypeGraphQL.Field(_type => EncounterConditionValueUpdateOneRequiredWithoutConditionValueMapNestedInput, {
    nullable: true
  })
  conditionValue?: EncounterConditionValueUpdateOneRequiredWithoutConditionValueMapNestedInput | undefined;
}
