import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VersionGroupCreateWithoutEncounterSlotsInput } from "../inputs/VersionGroupCreateWithoutEncounterSlotsInput";
import { VersionGroupWhereUniqueInput } from "../inputs/VersionGroupWhereUniqueInput";

@TypeGraphQL.InputType("VersionGroupCreateOrConnectWithoutEncounterSlotsInput", {})
export class VersionGroupCreateOrConnectWithoutEncounterSlotsInput {
  @TypeGraphQL.Field(_type => VersionGroupWhereUniqueInput, {
    nullable: false
  })
  where!: VersionGroupWhereUniqueInput;

  @TypeGraphQL.Field(_type => VersionGroupCreateWithoutEncounterSlotsInput, {
    nullable: false
  })
  create!: VersionGroupCreateWithoutEncounterSlotsInput;
}
