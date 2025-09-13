import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VersionGroupsCreateOrConnectWithoutEncounterSlotsInput } from "../inputs/VersionGroupsCreateOrConnectWithoutEncounterSlotsInput";
import { VersionGroupsCreateWithoutEncounterSlotsInput } from "../inputs/VersionGroupsCreateWithoutEncounterSlotsInput";
import { VersionGroupsUpdateToOneWithWhereWithoutEncounterSlotsInput } from "../inputs/VersionGroupsUpdateToOneWithWhereWithoutEncounterSlotsInput";
import { VersionGroupsUpsertWithoutEncounterSlotsInput } from "../inputs/VersionGroupsUpsertWithoutEncounterSlotsInput";
import { VersionGroupsWhereUniqueInput } from "../inputs/VersionGroupsWhereUniqueInput";

@TypeGraphQL.InputType("VersionGroupsUpdateOneRequiredWithoutEncounterSlotsNestedInput", {})
export class VersionGroupsUpdateOneRequiredWithoutEncounterSlotsNestedInput {
  @TypeGraphQL.Field(_type => VersionGroupsCreateWithoutEncounterSlotsInput, {
    nullable: true
  })
  create?: VersionGroupsCreateWithoutEncounterSlotsInput | undefined;

  @TypeGraphQL.Field(_type => VersionGroupsCreateOrConnectWithoutEncounterSlotsInput, {
    nullable: true
  })
  connectOrCreate?: VersionGroupsCreateOrConnectWithoutEncounterSlotsInput | undefined;

  @TypeGraphQL.Field(_type => VersionGroupsUpsertWithoutEncounterSlotsInput, {
    nullable: true
  })
  upsert?: VersionGroupsUpsertWithoutEncounterSlotsInput | undefined;

  @TypeGraphQL.Field(_type => VersionGroupsWhereUniqueInput, {
    nullable: true
  })
  connect?: VersionGroupsWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => VersionGroupsUpdateToOneWithWhereWithoutEncounterSlotsInput, {
    nullable: true
  })
  update?: VersionGroupsUpdateToOneWithWhereWithoutEncounterSlotsInput | undefined;
}
