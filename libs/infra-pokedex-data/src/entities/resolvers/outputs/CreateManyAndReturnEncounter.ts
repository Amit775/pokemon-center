import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EncounterSlot } from "../../models/EncounterSlot";
import { LocationArea } from "../../models/LocationArea";
import { Pokemon } from "../../models/Pokemon";
import { Version } from "../../models/Version";

@TypeGraphQL.ObjectType("CreateManyAndReturnEncounter", {})
export class CreateManyAndReturnEncounter {
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

  @TypeGraphQL.Field(_type => Version, {
    nullable: false
  })
  version!: Version;

  @TypeGraphQL.Field(_type => LocationArea, {
    nullable: false
  })
  locationArea!: LocationArea;

  @TypeGraphQL.Field(_type => EncounterSlot, {
    nullable: false
  })
  encounterSlot!: EncounterSlot;

  @TypeGraphQL.Field(_type => Pokemon, {
    nullable: false
  })
  pokemon!: Pokemon;
}
