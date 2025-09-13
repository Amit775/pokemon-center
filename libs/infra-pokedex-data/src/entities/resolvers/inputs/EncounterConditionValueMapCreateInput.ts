import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EncounterConditionValuesCreateNestedOneWithoutConditionValueMapInput } from "../inputs/EncounterConditionValuesCreateNestedOneWithoutConditionValueMapInput";
import { EncountersCreateNestedOneWithoutConditionValueMapInput } from "../inputs/EncountersCreateNestedOneWithoutConditionValueMapInput";

@TypeGraphQL.InputType("EncounterConditionValueMapCreateInput", {})
export class EncounterConditionValueMapCreateInput {
  @TypeGraphQL.Field(_type => EncountersCreateNestedOneWithoutConditionValueMapInput, {
    nullable: false
  })
  encounter!: EncountersCreateNestedOneWithoutConditionValueMapInput;

  @TypeGraphQL.Field(_type => EncounterConditionValuesCreateNestedOneWithoutConditionValueMapInput, {
    nullable: false
  })
  conditionValue!: EncounterConditionValuesCreateNestedOneWithoutConditionValueMapInput;
}
