import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EncounterConditionValueUpdateManyWithoutConditionNestedInput } from "../inputs/EncounterConditionValueUpdateManyWithoutConditionNestedInput";

@TypeGraphQL.InputType("EncounterConditionUpdateInput", {})
export class EncounterConditionUpdateInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  id?: number | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  identifier?: string | undefined;

  @TypeGraphQL.Field(_type => EncounterConditionValueUpdateManyWithoutConditionNestedInput, {
    nullable: true
  })
  values?: EncounterConditionValueUpdateManyWithoutConditionNestedInput | undefined;
}
