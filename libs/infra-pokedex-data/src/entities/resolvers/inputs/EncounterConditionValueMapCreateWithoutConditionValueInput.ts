import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EncountersCreateNestedOneWithoutConditionValueMapInput } from "../inputs/EncountersCreateNestedOneWithoutConditionValueMapInput";

@TypeGraphQL.InputType("EncounterConditionValueMapCreateWithoutConditionValueInput", {})
export class EncounterConditionValueMapCreateWithoutConditionValueInput {
  @TypeGraphQL.Field(_type => EncountersCreateNestedOneWithoutConditionValueMapInput, {
    nullable: false
  })
  encounter!: EncountersCreateNestedOneWithoutConditionValueMapInput;
}
