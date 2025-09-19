import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EncounterConditionValueMapUpdateManyWithoutConditionValueNestedInput } from "../inputs/EncounterConditionValueMapUpdateManyWithoutConditionValueNestedInput";

@TypeGraphQL.InputType("EncounterConditionValueUpdateWithoutConditionInput", {})
export class EncounterConditionValueUpdateWithoutConditionInput {
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

  @TypeGraphQL.Field(_type => EncounterConditionValueMapUpdateManyWithoutConditionValueNestedInput, {
    nullable: true
  })
  conditionValueMap?: EncounterConditionValueMapUpdateManyWithoutConditionValueNestedInput | undefined;
}
