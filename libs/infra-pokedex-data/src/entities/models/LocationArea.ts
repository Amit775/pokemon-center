import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Encounter } from "../models/Encounter";
import { Location } from "../models/Location";
import { LocationAreaEncounterRate } from "../models/LocationAreaEncounterRate";
import { LocationAreaCount } from "../resolvers/outputs/LocationAreaCount";

@TypeGraphQL.ObjectType("LocationArea", {})
export class LocationArea {
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

  location?: Location;

  encounters?: Encounter[];

  encounterRates?: LocationAreaEncounterRate[];

  @TypeGraphQL.Field(_type => LocationAreaCount, {
    nullable: true
  })
  _count?: LocationAreaCount | null;
}
