import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EncounterMethodRelationFilter } from "../inputs/EncounterMethodRelationFilter";
import { IntFilter } from "../inputs/IntFilter";
import { LocationAreaEncounterRateWhereInput } from "../inputs/LocationAreaEncounterRateWhereInput";
import { LocationAreaEncounterRatesLocation_area_idEncounter_method_idVersion_idCompoundUniqueInput } from "../inputs/LocationAreaEncounterRatesLocation_area_idEncounter_method_idVersion_idCompoundUniqueInput";
import { LocationAreaRelationFilter } from "../inputs/LocationAreaRelationFilter";
import { VersionRelationFilter } from "../inputs/VersionRelationFilter";

@TypeGraphQL.InputType("LocationAreaEncounterRateWhereUniqueInput", {})
export class LocationAreaEncounterRateWhereUniqueInput {
  @TypeGraphQL.Field(_type => LocationAreaEncounterRatesLocation_area_idEncounter_method_idVersion_idCompoundUniqueInput, {
    nullable: true
  })
  location_area_id_encounter_method_id_version_id?: LocationAreaEncounterRatesLocation_area_idEncounter_method_idVersion_idCompoundUniqueInput | undefined;

  @TypeGraphQL.Field(_type => [LocationAreaEncounterRateWhereInput], {
    nullable: true
  })
  AND?: LocationAreaEncounterRateWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [LocationAreaEncounterRateWhereInput], {
    nullable: true
  })
  OR?: LocationAreaEncounterRateWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [LocationAreaEncounterRateWhereInput], {
    nullable: true
  })
  NOT?: LocationAreaEncounterRateWhereInput[] | undefined;

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

  @TypeGraphQL.Field(_type => LocationAreaRelationFilter, {
    nullable: true
  })
  locationArea?: LocationAreaRelationFilter | undefined;

  @TypeGraphQL.Field(_type => EncounterMethodRelationFilter, {
    nullable: true
  })
  encounterMethod?: EncounterMethodRelationFilter | undefined;

  @TypeGraphQL.Field(_type => VersionRelationFilter, {
    nullable: true
  })
  version?: VersionRelationFilter | undefined;
}
