import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EncounterUpdateOneRequiredWithoutConditionValueMapNestedInput } from "../inputs/EncounterUpdateOneRequiredWithoutConditionValueMapNestedInput";

@TypeGraphQL.InputType("EncounterConditionValueMapUpdateWithoutConditionValueInput", {})
export class EncounterConditionValueMapUpdateWithoutConditionValueInput {
  @TypeGraphQL.Field(_type => EncounterUpdateOneRequiredWithoutConditionValueMapNestedInput, {
    nullable: true
  })
  encounter?: EncounterUpdateOneRequiredWithoutConditionValueMapNestedInput | undefined;
}
