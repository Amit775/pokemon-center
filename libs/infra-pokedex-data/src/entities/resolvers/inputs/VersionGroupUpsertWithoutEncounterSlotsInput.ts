import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VersionGroupCreateWithoutEncounterSlotsInput } from "../inputs/VersionGroupCreateWithoutEncounterSlotsInput";
import { VersionGroupUpdateWithoutEncounterSlotsInput } from "../inputs/VersionGroupUpdateWithoutEncounterSlotsInput";
import { VersionGroupWhereInput } from "../inputs/VersionGroupWhereInput";

@TypeGraphQL.InputType("VersionGroupUpsertWithoutEncounterSlotsInput", {})
export class VersionGroupUpsertWithoutEncounterSlotsInput {
  @TypeGraphQL.Field(_type => VersionGroupUpdateWithoutEncounterSlotsInput, {
    nullable: false
  })
  update!: VersionGroupUpdateWithoutEncounterSlotsInput;

  @TypeGraphQL.Field(_type => VersionGroupCreateWithoutEncounterSlotsInput, {
    nullable: false
  })
  create!: VersionGroupCreateWithoutEncounterSlotsInput;

  @TypeGraphQL.Field(_type => VersionGroupWhereInput, {
    nullable: true
  })
  where?: VersionGroupWhereInput | undefined;
}
