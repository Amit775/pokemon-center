import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { EncounterMethods } from "../models/EncounterMethods";
import { LocationAreas } from "../models/LocationAreas";
import { Versions } from "../models/Versions";

@TypeGraphQL.ObjectType("LocationAreaEncounterRates", {})
export class LocationAreaEncounterRates {
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

  locationArea?: LocationAreas;

  encounterMethod?: EncounterMethods;

  version?: Versions;
}
