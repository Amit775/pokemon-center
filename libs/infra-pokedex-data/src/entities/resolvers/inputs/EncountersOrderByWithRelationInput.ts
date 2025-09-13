import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EncounterConditionValueMapOrderByRelationAggregateInput } from "../inputs/EncounterConditionValueMapOrderByRelationAggregateInput";
import { EncounterSlotsOrderByWithRelationInput } from "../inputs/EncounterSlotsOrderByWithRelationInput";
import { LocationAreasOrderByWithRelationInput } from "../inputs/LocationAreasOrderByWithRelationInput";
import { PokemonOrderByWithRelationInput } from "../inputs/PokemonOrderByWithRelationInput";
import { VersionsOrderByWithRelationInput } from "../inputs/VersionsOrderByWithRelationInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("EncountersOrderByWithRelationInput", {})
export class EncountersOrderByWithRelationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  version_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  location_area_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  encounter_slot_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  pokemon_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  min_level?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  max_level?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => VersionsOrderByWithRelationInput, {
    nullable: true
  })
  version?: VersionsOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => LocationAreasOrderByWithRelationInput, {
    nullable: true
  })
  locationArea?: LocationAreasOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => EncounterSlotsOrderByWithRelationInput, {
    nullable: true
  })
  encounterSlot?: EncounterSlotsOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => PokemonOrderByWithRelationInput, {
    nullable: true
  })
  pokemon?: PokemonOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => EncounterConditionValueMapOrderByRelationAggregateInput, {
    nullable: true
  })
  conditionValueMap?: EncounterConditionValueMapOrderByRelationAggregateInput | undefined;
}
