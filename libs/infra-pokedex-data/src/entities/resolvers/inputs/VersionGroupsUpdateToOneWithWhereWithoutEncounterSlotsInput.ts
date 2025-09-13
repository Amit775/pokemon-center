import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VersionGroupsUpdateWithoutEncounterSlotsInput } from "../inputs/VersionGroupsUpdateWithoutEncounterSlotsInput";
import { VersionGroupsWhereInput } from "../inputs/VersionGroupsWhereInput";

@TypeGraphQL.InputType("VersionGroupsUpdateToOneWithWhereWithoutEncounterSlotsInput", {})
export class VersionGroupsUpdateToOneWithWhereWithoutEncounterSlotsInput {
  @TypeGraphQL.Field(_type => VersionGroupsWhereInput, {
    nullable: true
  })
  where?: VersionGroupsWhereInput | undefined;

  @TypeGraphQL.Field(_type => VersionGroupsUpdateWithoutEncounterSlotsInput, {
    nullable: false
  })
  data!: VersionGroupsUpdateWithoutEncounterSlotsInput;
}
