import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EncounterConditionValueMapCreateWithoutEncounterInput } from "../inputs/EncounterConditionValueMapCreateWithoutEncounterInput";
import { EncounterConditionValueMapWhereUniqueInput } from "../inputs/EncounterConditionValueMapWhereUniqueInput";

@TypeGraphQL.InputType("EncounterConditionValueMapCreateOrConnectWithoutEncounterInput", {})
export class EncounterConditionValueMapCreateOrConnectWithoutEncounterInput {
  @TypeGraphQL.Field(_type => EncounterConditionValueMapWhereUniqueInput, {
    nullable: false
  })
  where!: EncounterConditionValueMapWhereUniqueInput;

  @TypeGraphQL.Field(_type => EncounterConditionValueMapCreateWithoutEncounterInput, {
    nullable: false
  })
  create!: EncounterConditionValueMapCreateWithoutEncounterInput;
}
