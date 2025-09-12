import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LocationAreaEncounterRatesAvgOrderByAggregateInput } from "../inputs/LocationAreaEncounterRatesAvgOrderByAggregateInput";
import { LocationAreaEncounterRatesCountOrderByAggregateInput } from "../inputs/LocationAreaEncounterRatesCountOrderByAggregateInput";
import { LocationAreaEncounterRatesMaxOrderByAggregateInput } from "../inputs/LocationAreaEncounterRatesMaxOrderByAggregateInput";
import { LocationAreaEncounterRatesMinOrderByAggregateInput } from "../inputs/LocationAreaEncounterRatesMinOrderByAggregateInput";
import { LocationAreaEncounterRatesSumOrderByAggregateInput } from "../inputs/LocationAreaEncounterRatesSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("LocationAreaEncounterRatesOrderByWithAggregationInput", {})
export class LocationAreaEncounterRatesOrderByWithAggregationInput {
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

  @TypeGraphQL.Field(_type => LocationAreaEncounterRatesCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: LocationAreaEncounterRatesCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => LocationAreaEncounterRatesAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: LocationAreaEncounterRatesAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => LocationAreaEncounterRatesMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: LocationAreaEncounterRatesMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => LocationAreaEncounterRatesMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: LocationAreaEncounterRatesMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => LocationAreaEncounterRatesSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: LocationAreaEncounterRatesSumOrderByAggregateInput | undefined;
}
