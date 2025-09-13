import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { EncounterMethods } from "../models/EncounterMethods";
import { Encounters } from "../models/Encounters";
import { VersionGroups } from "../models/VersionGroups";
import { EncounterSlotsCount } from "../resolvers/outputs/EncounterSlotsCount";

@TypeGraphQL.ObjectType("EncounterSlots", {})
export class EncounterSlots {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  version_group_id!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  encounter_method_id!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  slot?: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  rarity!: number;

  versionGroup?: VersionGroups;

  encounterMethod?: EncounterMethods;

  encounters?: Encounters[];

  @TypeGraphQL.Field(_type => EncounterSlotsCount, {
    nullable: true
  })
  _count?: EncounterSlotsCount | null;
}
