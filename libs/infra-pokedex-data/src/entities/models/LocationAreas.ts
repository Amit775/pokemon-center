import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Encounters } from "../models/Encounters";
import { LocationAreaEncounterRates } from "../models/LocationAreaEncounterRates";
import { Locations } from "../models/Locations";
import { LocationAreasCount } from "../resolvers/outputs/LocationAreasCount";

@TypeGraphQL.ObjectType("LocationAreas", {})
export class LocationAreas {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  location_id!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  game_index!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  identifier?: string | null;

  location?: Locations;

  encounters?: Encounters[];

  encounterRates?: LocationAreaEncounterRates[];

  @TypeGraphQL.Field(_type => LocationAreasCount, {
    nullable: true
  })
  _count?: LocationAreasCount | null;
}
