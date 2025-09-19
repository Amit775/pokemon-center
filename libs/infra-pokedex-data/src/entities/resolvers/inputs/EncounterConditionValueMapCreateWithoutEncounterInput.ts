import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EncounterConditionValueCreateNestedOneWithoutConditionValueMapInput } from "../inputs/EncounterConditionValueCreateNestedOneWithoutConditionValueMapInput";

@TypeGraphQL.InputType("EncounterConditionValueMapCreateWithoutEncounterInput", {})
export class EncounterConditionValueMapCreateWithoutEncounterInput {
  @TypeGraphQL.Field(_type => EncounterConditionValueCreateNestedOneWithoutConditionValueMapInput, {
    nullable: false
  })
  conditionValue!: EncounterConditionValueCreateNestedOneWithoutConditionValueMapInput;
}
