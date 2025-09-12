import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EncounterConditionValueMapCreateWithoutConditionValueInput } from "../inputs/EncounterConditionValueMapCreateWithoutConditionValueInput";
import { EncounterConditionValueMapWhereUniqueInput } from "../inputs/EncounterConditionValueMapWhereUniqueInput";

@TypeGraphQL.InputType("EncounterConditionValueMapCreateOrConnectWithoutConditionValueInput", {})
export class EncounterConditionValueMapCreateOrConnectWithoutConditionValueInput {
  @TypeGraphQL.Field(_type => EncounterConditionValueMapWhereUniqueInput, {
    nullable: false
  })
  where!: EncounterConditionValueMapWhereUniqueInput;

  @TypeGraphQL.Field(_type => EncounterConditionValueMapCreateWithoutConditionValueInput, {
    nullable: false
  })
  create!: EncounterConditionValueMapCreateWithoutConditionValueInput;
}
