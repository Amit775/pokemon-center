import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VersionGroupsCreateWithoutEncounterSlotsInput } from "../inputs/VersionGroupsCreateWithoutEncounterSlotsInput";
import { VersionGroupsUpdateWithoutEncounterSlotsInput } from "../inputs/VersionGroupsUpdateWithoutEncounterSlotsInput";
import { VersionGroupsWhereInput } from "../inputs/VersionGroupsWhereInput";

@TypeGraphQL.InputType("VersionGroupsUpsertWithoutEncounterSlotsInput", {})
export class VersionGroupsUpsertWithoutEncounterSlotsInput {
  @TypeGraphQL.Field(_type => VersionGroupsUpdateWithoutEncounterSlotsInput, {
    nullable: false
  })
  update!: VersionGroupsUpdateWithoutEncounterSlotsInput;

  @TypeGraphQL.Field(_type => VersionGroupsCreateWithoutEncounterSlotsInput, {
    nullable: false
  })
  create!: VersionGroupsCreateWithoutEncounterSlotsInput;

  @TypeGraphQL.Field(_type => VersionGroupsWhereInput, {
    nullable: true
  })
  where?: VersionGroupsWhereInput | undefined;
}
