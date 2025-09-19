import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EncounterCreateWithoutConditionValueMapInput } from "../inputs/EncounterCreateWithoutConditionValueMapInput";
import { EncounterWhereUniqueInput } from "../inputs/EncounterWhereUniqueInput";

@TypeGraphQL.InputType("EncounterCreateOrConnectWithoutConditionValueMapInput", {})
export class EncounterCreateOrConnectWithoutConditionValueMapInput {
  @TypeGraphQL.Field(_type => EncounterWhereUniqueInput, {
    nullable: false
  })
  where!: EncounterWhereUniqueInput;

  @TypeGraphQL.Field(_type => EncounterCreateWithoutConditionValueMapInput, {
    nullable: false
  })
  create!: EncounterCreateWithoutConditionValueMapInput;
}
