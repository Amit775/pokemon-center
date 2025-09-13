import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EncounterConditionsUpdateOneRequiredWithoutValuesNestedInput } from "../inputs/EncounterConditionsUpdateOneRequiredWithoutValuesNestedInput";

@TypeGraphQL.InputType("EncounterConditionValuesUpdateWithoutConditionValueMapInput", {})
export class EncounterConditionValuesUpdateWithoutConditionValueMapInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  id?: number | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  identifier?: string | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  is_default?: number | undefined;

  @TypeGraphQL.Field(_type => EncounterConditionsUpdateOneRequiredWithoutValuesNestedInput, {
    nullable: true
  })
  condition?: EncounterConditionsUpdateOneRequiredWithoutValuesNestedInput | undefined;
}
