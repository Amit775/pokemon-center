import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EncounterConditionValuesCreateNestedOneWithoutConditionValueMapInput } from "../inputs/EncounterConditionValuesCreateNestedOneWithoutConditionValueMapInput";

@TypeGraphQL.InputType("EncounterConditionValueMapCreateWithoutEncounterInput", {})
export class EncounterConditionValueMapCreateWithoutEncounterInput {
  @TypeGraphQL.Field(_type => EncounterConditionValuesCreateNestedOneWithoutConditionValueMapInput, {
    nullable: false
  })
  conditionValue!: EncounterConditionValuesCreateNestedOneWithoutConditionValueMapInput;
}
