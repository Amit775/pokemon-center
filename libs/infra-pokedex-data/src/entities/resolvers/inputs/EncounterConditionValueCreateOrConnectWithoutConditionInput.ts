import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EncounterConditionValueCreateWithoutConditionInput } from "../inputs/EncounterConditionValueCreateWithoutConditionInput";
import { EncounterConditionValueWhereUniqueInput } from "../inputs/EncounterConditionValueWhereUniqueInput";

@TypeGraphQL.InputType("EncounterConditionValueCreateOrConnectWithoutConditionInput", {})
export class EncounterConditionValueCreateOrConnectWithoutConditionInput {
  @TypeGraphQL.Field(_type => EncounterConditionValueWhereUniqueInput, {
    nullable: false
  })
  where!: EncounterConditionValueWhereUniqueInput;

  @TypeGraphQL.Field(_type => EncounterConditionValueCreateWithoutConditionInput, {
    nullable: false
  })
  create!: EncounterConditionValueCreateWithoutConditionInput;
}
