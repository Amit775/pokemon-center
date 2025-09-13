import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EncountersOrderByRelationAggregateInput } from "../inputs/EncountersOrderByRelationAggregateInput";
import { LocationAreaEncounterRatesOrderByRelationAggregateInput } from "../inputs/LocationAreaEncounterRatesOrderByRelationAggregateInput";
import { LocationsOrderByWithRelationInput } from "../inputs/LocationsOrderByWithRelationInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("LocationAreasOrderByWithRelationInput", {})
export class LocationAreasOrderByWithRelationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  location_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  game_index?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  identifier?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => LocationsOrderByWithRelationInput, {
    nullable: true
  })
  location?: LocationsOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => EncountersOrderByRelationAggregateInput, {
    nullable: true
  })
  encounters?: EncountersOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => LocationAreaEncounterRatesOrderByRelationAggregateInput, {
    nullable: true
  })
  encounterRates?: LocationAreaEncounterRatesOrderByRelationAggregateInput | undefined;
}
