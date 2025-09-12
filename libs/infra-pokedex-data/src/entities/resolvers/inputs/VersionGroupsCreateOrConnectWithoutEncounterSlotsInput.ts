import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VersionGroupsCreateWithoutEncounterSlotsInput } from "../inputs/VersionGroupsCreateWithoutEncounterSlotsInput";
import { VersionGroupsWhereUniqueInput } from "../inputs/VersionGroupsWhereUniqueInput";

@TypeGraphQL.InputType("VersionGroupsCreateOrConnectWithoutEncounterSlotsInput", {})
export class VersionGroupsCreateOrConnectWithoutEncounterSlotsInput {
  @TypeGraphQL.Field(_type => VersionGroupsWhereUniqueInput, {
    nullable: false
  })
  where!: VersionGroupsWhereUniqueInput;

  @TypeGraphQL.Field(_type => VersionGroupsCreateWithoutEncounterSlotsInput, {
    nullable: false
  })
  create!: VersionGroupsCreateWithoutEncounterSlotsInput;
}
