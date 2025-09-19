import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EncounterCreateNestedOneWithoutConditionValueMapInput } from "../inputs/EncounterCreateNestedOneWithoutConditionValueMapInput";

@TypeGraphQL.InputType("EncounterConditionValueMapCreateWithoutConditionValueInput", {})
export class EncounterConditionValueMapCreateWithoutConditionValueInput {
  @TypeGraphQL.Field(_type => EncounterCreateNestedOneWithoutConditionValueMapInput, {
    nullable: false
  })
  encounter!: EncounterCreateNestedOneWithoutConditionValueMapInput;
}
