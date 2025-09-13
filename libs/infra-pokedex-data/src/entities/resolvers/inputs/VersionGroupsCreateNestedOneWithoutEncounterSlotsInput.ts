import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VersionGroupsCreateOrConnectWithoutEncounterSlotsInput } from "../inputs/VersionGroupsCreateOrConnectWithoutEncounterSlotsInput";
import { VersionGroupsCreateWithoutEncounterSlotsInput } from "../inputs/VersionGroupsCreateWithoutEncounterSlotsInput";
import { VersionGroupsWhereUniqueInput } from "../inputs/VersionGroupsWhereUniqueInput";

@TypeGraphQL.InputType("VersionGroupsCreateNestedOneWithoutEncounterSlotsInput", {})
export class VersionGroupsCreateNestedOneWithoutEncounterSlotsInput {
  @TypeGraphQL.Field(_type => VersionGroupsCreateWithoutEncounterSlotsInput, {
    nullable: true
  })
  create?: VersionGroupsCreateWithoutEncounterSlotsInput | undefined;

  @TypeGraphQL.Field(_type => VersionGroupsCreateOrConnectWithoutEncounterSlotsInput, {
    nullable: true
  })
  connectOrCreate?: VersionGroupsCreateOrConnectWithoutEncounterSlotsInput | undefined;

  @TypeGraphQL.Field(_type => VersionGroupsWhereUniqueInput, {
    nullable: true
  })
  connect?: VersionGroupsWhereUniqueInput | undefined;
}
