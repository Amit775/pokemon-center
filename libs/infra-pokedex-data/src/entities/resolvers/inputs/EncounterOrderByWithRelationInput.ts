import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EncounterConditionValueMapOrderByRelationAggregateInput } from "../inputs/EncounterConditionValueMapOrderByRelationAggregateInput";
import { EncounterSlotOrderByWithRelationInput } from "../inputs/EncounterSlotOrderByWithRelationInput";
import { LocationAreaOrderByWithRelationInput } from "../inputs/LocationAreaOrderByWithRelationInput";
import { PokemonOrderByWithRelationInput } from "../inputs/PokemonOrderByWithRelationInput";
import { VersionOrderByWithRelationInput } from "../inputs/VersionOrderByWithRelationInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("EncounterOrderByWithRelationInput", {})
export class EncounterOrderByWithRelationInput {
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

  @TypeGraphQL.Field(_type => VersionOrderByWithRelationInput, {
    nullable: true
  })
  version?: VersionOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => LocationAreaOrderByWithRelationInput, {
    nullable: true
  })
  locationArea?: LocationAreaOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => EncounterSlotOrderByWithRelationInput, {
    nullable: true
  })
  encounterSlot?: EncounterSlotOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => PokemonOrderByWithRelationInput, {
    nullable: true
  })
  pokemon?: PokemonOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => EncounterConditionValueMapOrderByRelationAggregateInput, {
    nullable: true
  })
  conditionValueMap?: EncounterConditionValueMapOrderByRelationAggregateInput | undefined;
}
