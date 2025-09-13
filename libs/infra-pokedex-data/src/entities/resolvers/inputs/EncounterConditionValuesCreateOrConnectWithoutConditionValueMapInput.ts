import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EncounterConditionValuesCreateWithoutConditionValueMapInput } from "../inputs/EncounterConditionValuesCreateWithoutConditionValueMapInput";
import { EncounterConditionValuesWhereUniqueInput } from "../inputs/EncounterConditionValuesWhereUniqueInput";

@TypeGraphQL.InputType("EncounterConditionValuesCreateOrConnectWithoutConditionValueMapInput", {})
export class EncounterConditionValuesCreateOrConnectWithoutConditionValueMapInput {
  @TypeGraphQL.Field(_type => EncounterConditionValuesWhereUniqueInput, {
    nullable: false
  })
  where!: EncounterConditionValuesWhereUniqueInput;

  @TypeGraphQL.Field(_type => EncounterConditionValuesCreateWithoutConditionValueMapInput, {
    nullable: false
  })
  create!: EncounterConditionValuesCreateWithoutConditionValueMapInput;
}
