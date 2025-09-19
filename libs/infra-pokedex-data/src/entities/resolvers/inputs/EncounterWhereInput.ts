import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EncounterConditionValueMapListRelationFilter } from "../inputs/EncounterConditionValueMapListRelationFilter";
import { EncounterSlotRelationFilter } from "../inputs/EncounterSlotRelationFilter";
import { IntFilter } from "../inputs/IntFilter";
import { LocationAreaRelationFilter } from "../inputs/LocationAreaRelationFilter";
import { PokemonRelationFilter } from "../inputs/PokemonRelationFilter";
import { VersionRelationFilter } from "../inputs/VersionRelationFilter";

@TypeGraphQL.InputType("EncounterWhereInput", {})
export class EncounterWhereInput {
  @TypeGraphQL.Field(_type => [EncounterWhereInput], {
    nullable: true
  })
  AND?: EncounterWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [EncounterWhereInput], {
    nullable: true
  })
  OR?: EncounterWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [EncounterWhereInput], {
    nullable: true
  })
  NOT?: EncounterWhereInput[] | undefined;

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

  @TypeGraphQL.Field(_type => VersionRelationFilter, {
    nullable: true
  })
  version?: VersionRelationFilter | undefined;

  @TypeGraphQL.Field(_type => LocationAreaRelationFilter, {
    nullable: true
  })
  locationArea?: LocationAreaRelationFilter | undefined;

  @TypeGraphQL.Field(_type => EncounterSlotRelationFilter, {
    nullable: true
  })
  encounterSlot?: EncounterSlotRelationFilter | undefined;

  @TypeGraphQL.Field(_type => PokemonRelationFilter, {
    nullable: true
  })
  pokemon?: PokemonRelationFilter | undefined;

  @TypeGraphQL.Field(_type => EncounterConditionValueMapListRelationFilter, {
    nullable: true
  })
  conditionValueMap?: EncounterConditionValueMapListRelationFilter | undefined;
}
