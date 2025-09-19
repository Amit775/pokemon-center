import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Encounter } from "../models/Encounter";
import { EncounterMethod } from "../models/EncounterMethod";
import { VersionGroup } from "../models/VersionGroup";
import { EncounterSlotCount } from "../resolvers/outputs/EncounterSlotCount";

@TypeGraphQL.ObjectType("EncounterSlot", {})
export class EncounterSlot {
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

  versionGroup?: VersionGroup;

  encounterMethod?: EncounterMethod;

  encounters?: Encounter[];

  @TypeGraphQL.Field(_type => EncounterSlotCount, {
    nullable: true
  })
  _count?: EncounterSlotCount | null;
}
