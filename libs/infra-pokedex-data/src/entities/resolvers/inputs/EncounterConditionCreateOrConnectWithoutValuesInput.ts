import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EncounterConditionCreateWithoutValuesInput } from "../inputs/EncounterConditionCreateWithoutValuesInput";
import { EncounterConditionWhereUniqueInput } from "../inputs/EncounterConditionWhereUniqueInput";

@TypeGraphQL.InputType("EncounterConditionCreateOrConnectWithoutValuesInput", {})
export class EncounterConditionCreateOrConnectWithoutValuesInput {
  @TypeGraphQL.Field(_type => EncounterConditionWhereUniqueInput, {
    nullable: false
  })
  where!: EncounterConditionWhereUniqueInput;

  @TypeGraphQL.Field(_type => EncounterConditionCreateWithoutValuesInput, {
    nullable: false
  })
  create!: EncounterConditionCreateWithoutValuesInput;
}
