import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { EncounterConditionValueMap } from "../models/EncounterConditionValueMap";
import { EncounterSlot } from "../models/EncounterSlot";
import { LocationArea } from "../models/LocationArea";
import { Pokemon } from "../models/Pokemon";
import { Version } from "../models/Version";
import { EncounterCount } from "../resolvers/outputs/EncounterCount";

@TypeGraphQL.ObjectType("Encounter", {})
export class Encounter {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  version_id!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  location_area_id!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  encounter_slot_id!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  pokemon_id!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  min_level!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  max_level!: number;

  version?: Version;

  locationArea?: LocationArea;

  encounterSlot?: EncounterSlot;

  pokemon?: Pokemon;

  conditionValueMap?: EncounterConditionValueMap[];

  @TypeGraphQL.Field(_type => EncounterCount, {
    nullable: true
  })
  _count?: EncounterCount | null;
}
