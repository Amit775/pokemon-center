import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EncounterConditionValuesCreateWithoutConditionInput } from "../inputs/EncounterConditionValuesCreateWithoutConditionInput";
import { EncounterConditionValuesWhereUniqueInput } from "../inputs/EncounterConditionValuesWhereUniqueInput";

@TypeGraphQL.InputType("EncounterConditionValuesCreateOrConnectWithoutConditionInput", {})
export class EncounterConditionValuesCreateOrConnectWithoutConditionInput {
  @TypeGraphQL.Field(_type => EncounterConditionValuesWhereUniqueInput, {
    nullable: false
  })
  where!: EncounterConditionValuesWhereUniqueInput;

  @TypeGraphQL.Field(_type => EncounterConditionValuesCreateWithoutConditionInput, {
    nullable: false
  })
  create!: EncounterConditionValuesCreateWithoutConditionInput;
}
