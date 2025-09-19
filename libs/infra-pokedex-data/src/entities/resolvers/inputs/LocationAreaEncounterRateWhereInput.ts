import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EncounterMethodRelationFilter } from "../inputs/EncounterMethodRelationFilter";
import { IntFilter } from "../inputs/IntFilter";
import { LocationAreaRelationFilter } from "../inputs/LocationAreaRelationFilter";
import { VersionRelationFilter } from "../inputs/VersionRelationFilter";

@TypeGraphQL.InputType("LocationAreaEncounterRateWhereInput", {})
export class LocationAreaEncounterRateWhereInput {
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
