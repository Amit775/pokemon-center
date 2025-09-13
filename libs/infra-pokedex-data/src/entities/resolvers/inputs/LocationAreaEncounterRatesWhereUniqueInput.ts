import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EncounterMethodsRelationFilter } from "../inputs/EncounterMethodsRelationFilter";
import { IntFilter } from "../inputs/IntFilter";
import { LocationAreaEncounterRatesLocation_area_idEncounter_method_idVersion_idCompoundUniqueInput } from "../inputs/LocationAreaEncounterRatesLocation_area_idEncounter_method_idVersion_idCompoundUniqueInput";
import { LocationAreaEncounterRatesWhereInput } from "../inputs/LocationAreaEncounterRatesWhereInput";
import { LocationAreasRelationFilter } from "../inputs/LocationAreasRelationFilter";
import { VersionsRelationFilter } from "../inputs/VersionsRelationFilter";

@TypeGraphQL.InputType("LocationAreaEncounterRatesWhereUniqueInput", {})
export class LocationAreaEncounterRatesWhereUniqueInput {
  @TypeGraphQL.Field(_type => LocationAreaEncounterRatesLocation_area_idEncounter_method_idVersion_idCompoundUniqueInput, {
    nullable: true
  })
  location_area_id_encounter_method_id_version_id?: LocationAreaEncounterRatesLocation_area_idEncounter_method_idVersion_idCompoundUniqueInput | undefined;

  @TypeGraphQL.Field(_type => [LocationAreaEncounterRatesWhereInput], {
    nullable: true
  })
  AND?: LocationAreaEncounterRatesWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [LocationAreaEncounterRatesWhereInput], {
    nullable: true
  })
  OR?: LocationAreaEncounterRatesWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [LocationAreaEncounterRatesWhereInput], {
    nullable: true
  })
  NOT?: LocationAreaEncounterRatesWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  location_area_id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  encounter_method_id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  version_id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  rate?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => LocationAreasRelationFilter, {
    nullable: true
  })
  locationArea?: LocationAreasRelationFilter | undefined;

  @TypeGraphQL.Field(_type => EncounterMethodsRelationFilter, {
    nullable: true
  })
  encounterMethod?: EncounterMethodsRelationFilter | undefined;

  @TypeGraphQL.Field(_type => VersionsRelationFilter, {
    nullable: true
  })
  version?: VersionsRelationFilter | undefined;
}
