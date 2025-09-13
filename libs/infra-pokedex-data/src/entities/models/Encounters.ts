import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { EncounterConditionValueMap } from "../models/EncounterConditionValueMap";
import { EncounterSlots } from "../models/EncounterSlots";
import { LocationAreas } from "../models/LocationAreas";
import { Pokemon } from "../models/Pokemon";
import { Versions } from "../models/Versions";
import { EncountersCount } from "../resolvers/outputs/EncountersCount";

@TypeGraphQL.ObjectType("Encounters", {})
export class Encounters {
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

  version?: Versions;

  locationArea?: LocationAreas;

  encounterSlot?: EncounterSlots;

  pokemon?: Pokemon;

  conditionValueMap?: EncounterConditionValueMap[];

  @TypeGraphQL.Field(_type => EncountersCount, {
    nullable: true
  })
  _count?: EncountersCount | null;
}
