import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EncounterConditionValueUpdateOneRequiredWithoutConditionValueMapNestedInput } from "../inputs/EncounterConditionValueUpdateOneRequiredWithoutConditionValueMapNestedInput";
import { EncounterUpdateOneRequiredWithoutConditionValueMapNestedInput } from "../inputs/EncounterUpdateOneRequiredWithoutConditionValueMapNestedInput";

@TypeGraphQL.InputType("EncounterConditionValueMapUpdateInput", {})
export class EncounterConditionValueMapUpdateInput {
  @TypeGraphQL.Field(_type => EncounterUpdateOneRequiredWithoutConditionValueMapNestedInput, {
    nullable: true
  })
  encounter?: EncounterUpdateOneRequiredWithoutConditionValueMapNestedInput | undefined;

  @TypeGraphQL.Field(_type => EncounterConditionValueUpdateOneRequiredWithoutConditionValueMapNestedInput, {
    nullable: true
  })
  conditionValue?: EncounterConditionValueUpdateOneRequiredWithoutConditionValueMapNestedInput | undefined;
}
