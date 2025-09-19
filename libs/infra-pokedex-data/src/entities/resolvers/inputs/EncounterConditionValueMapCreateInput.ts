import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EncounterConditionValueCreateNestedOneWithoutConditionValueMapInput } from "../inputs/EncounterConditionValueCreateNestedOneWithoutConditionValueMapInput";
import { EncounterCreateNestedOneWithoutConditionValueMapInput } from "../inputs/EncounterCreateNestedOneWithoutConditionValueMapInput";

@TypeGraphQL.InputType("EncounterConditionValueMapCreateInput", {})
export class EncounterConditionValueMapCreateInput {
  @TypeGraphQL.Field(_type => EncounterCreateNestedOneWithoutConditionValueMapInput, {
    nullable: false
  })
  encounter!: EncounterCreateNestedOneWithoutConditionValueMapInput;

  @TypeGraphQL.Field(_type => EncounterConditionValueCreateNestedOneWithoutConditionValueMapInput, {
    nullable: false
  })
  conditionValue!: EncounterConditionValueCreateNestedOneWithoutConditionValueMapInput;
}
