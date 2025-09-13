import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EncountersUpdateOneRequiredWithoutConditionValueMapNestedInput } from "../inputs/EncountersUpdateOneRequiredWithoutConditionValueMapNestedInput";

@TypeGraphQL.InputType("EncounterConditionValueMapUpdateWithoutConditionValueInput", {})
export class EncounterConditionValueMapUpdateWithoutConditionValueInput {
  @TypeGraphQL.Field(_type => EncountersUpdateOneRequiredWithoutConditionValueMapNestedInput, {
    nullable: true
  })
  encounter?: EncountersUpdateOneRequiredWithoutConditionValueMapNestedInput | undefined;
}
