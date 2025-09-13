import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EncounterConditionValuesUpdateManyWithoutConditionNestedInput } from "../inputs/EncounterConditionValuesUpdateManyWithoutConditionNestedInput";

@TypeGraphQL.InputType("EncounterConditionsUpdateInput", {})
export class EncounterConditionsUpdateInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  id?: number | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  identifier?: string | undefined;

  @TypeGraphQL.Field(_type => EncounterConditionValuesUpdateManyWithoutConditionNestedInput, {
    nullable: true
  })
  values?: EncounterConditionValuesUpdateManyWithoutConditionNestedInput | undefined;
}
