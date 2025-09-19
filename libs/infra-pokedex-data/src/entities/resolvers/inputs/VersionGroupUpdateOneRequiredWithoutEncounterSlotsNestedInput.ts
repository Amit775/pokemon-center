import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VersionGroupCreateOrConnectWithoutEncounterSlotsInput } from "../inputs/VersionGroupCreateOrConnectWithoutEncounterSlotsInput";
import { VersionGroupCreateWithoutEncounterSlotsInput } from "../inputs/VersionGroupCreateWithoutEncounterSlotsInput";
import { VersionGroupUpdateToOneWithWhereWithoutEncounterSlotsInput } from "../inputs/VersionGroupUpdateToOneWithWhereWithoutEncounterSlotsInput";
import { VersionGroupUpsertWithoutEncounterSlotsInput } from "../inputs/VersionGroupUpsertWithoutEncounterSlotsInput";
import { VersionGroupWhereUniqueInput } from "../inputs/VersionGroupWhereUniqueInput";

@TypeGraphQL.InputType("VersionGroupUpdateOneRequiredWithoutEncounterSlotsNestedInput", {})
export class VersionGroupUpdateOneRequiredWithoutEncounterSlotsNestedInput {
  @TypeGraphQL.Field(_type => VersionGroupCreateWithoutEncounterSlotsInput, {
    nullable: true
  })
  create?: VersionGroupCreateWithoutEncounterSlotsInput | undefined;

  @TypeGraphQL.Field(_type => VersionGroupCreateOrConnectWithoutEncounterSlotsInput, {
    nullable: true
  })
  connectOrCreate?: VersionGroupCreateOrConnectWithoutEncounterSlotsInput | undefined;

  @TypeGraphQL.Field(_type => VersionGroupUpsertWithoutEncounterSlotsInput, {
    nullable: true
  })
  upsert?: VersionGroupUpsertWithoutEncounterSlotsInput | undefined;

  @TypeGraphQL.Field(_type => VersionGroupWhereUniqueInput, {
    nullable: true
  })
  connect?: VersionGroupWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => VersionGroupUpdateToOneWithWhereWithoutEncounterSlotsInput, {
    nullable: true
  })
  update?: VersionGroupUpdateToOneWithWhereWithoutEncounterSlotsInput | undefined;
}
