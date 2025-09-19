import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { EncounterMethod } from "../models/EncounterMethod";
import { LocationArea } from "../models/LocationArea";
import { Version } from "../models/Version";

@TypeGraphQL.ObjectType("LocationAreaEncounterRate", {})
export class LocationAreaEncounterRate {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  location_area_id!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  encounter_method_id!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  version_id!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  rate!: number;

  locationArea?: LocationArea;

  encounterMethod?: EncounterMethod;

  version?: Version;
}
