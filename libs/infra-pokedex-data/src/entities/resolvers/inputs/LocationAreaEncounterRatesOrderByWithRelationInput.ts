import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EncounterMethodsOrderByWithRelationInput } from "../inputs/EncounterMethodsOrderByWithRelationInput";
import { LocationAreasOrderByWithRelationInput } from "../inputs/LocationAreasOrderByWithRelationInput";
import { VersionsOrderByWithRelationInput } from "../inputs/VersionsOrderByWithRelationInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("LocationAreaEncounterRatesOrderByWithRelationInput", {})
export class LocationAreaEncounterRatesOrderByWithRelationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  location_area_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  encounter_method_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  version_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  rate?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => LocationAreasOrderByWithRelationInput, {
    nullable: true
  })
  locationArea?: LocationAreasOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => EncounterMethodsOrderByWithRelationInput, {
    nullable: true
  })
  encounterMethod?: EncounterMethodsOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => VersionsOrderByWithRelationInput, {
    nullable: true
  })
  version?: VersionsOrderByWithRelationInput | undefined;
}
