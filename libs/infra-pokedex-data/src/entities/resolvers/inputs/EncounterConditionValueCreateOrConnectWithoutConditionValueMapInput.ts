import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EncounterConditionValueCreateWithoutConditionValueMapInput } from "../inputs/EncounterConditionValueCreateWithoutConditionValueMapInput";
import { EncounterConditionValueWhereUniqueInput } from "../inputs/EncounterConditionValueWhereUniqueInput";

@TypeGraphQL.InputType("EncounterConditionValueCreateOrConnectWithoutConditionValueMapInput", {})
export class EncounterConditionValueCreateOrConnectWithoutConditionValueMapInput {
  @TypeGraphQL.Field(_type => EncounterConditionValueWhereUniqueInput, {
    nullable: false
  })
  where!: EncounterConditionValueWhereUniqueInput;

  @TypeGraphQL.Field(_type => EncounterConditionValueCreateWithoutConditionValueMapInput, {
    nullable: false
  })
  create!: EncounterConditionValueCreateWithoutConditionValueMapInput;
}
