import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EncounterSlots } from "../../models/EncounterSlots";
import { LocationAreas } from "../../models/LocationAreas";
import { Pokemon } from "../../models/Pokemon";
import { Versions } from "../../models/Versions";

@TypeGraphQL.ObjectType("CreateManyAndReturnEncounters", {})
export class CreateManyAndReturnEncounters {
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

  @TypeGraphQL.Field(_type => Versions, {
    nullable: false
  })
  version!: Versions;

  @TypeGraphQL.Field(_type => LocationAreas, {
    nullable: false
  })
  locationArea!: LocationAreas;

  @TypeGraphQL.Field(_type => EncounterSlots, {
    nullable: false
  })
  encounterSlot!: EncounterSlots;

  @TypeGraphQL.Field(_type => Pokemon, {
    nullable: false
  })
  pokemon!: Pokemon;
}
