import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EncounterMethodOrderByWithRelationInput } from "../inputs/EncounterMethodOrderByWithRelationInput";
import { LocationAreaOrderByWithRelationInput } from "../inputs/LocationAreaOrderByWithRelationInput";
import { VersionOrderByWithRelationInput } from "../inputs/VersionOrderByWithRelationInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("LocationAreaEncounterRateOrderByWithRelationInput", {})
export class LocationAreaEncounterRateOrderByWithRelationInput {
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

  @TypeGraphQL.Field(_type => LocationAreaOrderByWithRelationInput, {
    nullable: true
  })
  locationArea?: LocationAreaOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => EncounterMethodOrderByWithRelationInput, {
    nullable: true
  })
  encounterMethod?: EncounterMethodOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => VersionOrderByWithRelationInput, {
    nullable: true
  })
  version?: VersionOrderByWithRelationInput | undefined;
}
