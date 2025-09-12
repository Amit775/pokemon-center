import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EncounterConditionValueMapListRelationFilter } from "../inputs/EncounterConditionValueMapListRelationFilter";
import { EncounterSlotsRelationFilter } from "../inputs/EncounterSlotsRelationFilter";
import { IntFilter } from "../inputs/IntFilter";
import { LocationAreasRelationFilter } from "../inputs/LocationAreasRelationFilter";
import { PokemonRelationFilter } from "../inputs/PokemonRelationFilter";
import { VersionsRelationFilter } from "../inputs/VersionsRelationFilter";

@TypeGraphQL.InputType("EncountersWhereInput", {})
export class EncountersWhereInput {
  @TypeGraphQL.Field(_type => [EncountersWhereInput], {
    nullable: true
  })
  AND?: EncountersWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [EncountersWhereInput], {
    nullable: true
  })
  OR?: EncountersWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [EncountersWhereInput], {
    nullable: true
  })
  NOT?: EncountersWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  version_id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  location_area_id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  encounter_slot_id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  pokemon_id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  min_level?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  max_level?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => VersionsRelationFilter, {
    nullable: true
  })
  version?: VersionsRelationFilter | undefined;

  @TypeGraphQL.Field(_type => LocationAreasRelationFilter, {
    nullable: true
  })
  locationArea?: LocationAreasRelationFilter | undefined;

  @TypeGraphQL.Field(_type => EncounterSlotsRelationFilter, {
    nullable: true
  })
  encounterSlot?: EncounterSlotsRelationFilter | undefined;

  @TypeGraphQL.Field(_type => PokemonRelationFilter, {
    nullable: true
  })
  pokemon?: PokemonRelationFilter | undefined;

  @TypeGraphQL.Field(_type => EncounterConditionValueMapListRelationFilter, {
    nullable: true
  })
  conditionValueMap?: EncounterConditionValueMapListRelationFilter | undefined;
}
