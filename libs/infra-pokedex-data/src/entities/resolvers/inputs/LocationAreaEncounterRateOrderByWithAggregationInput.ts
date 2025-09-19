import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LocationAreaEncounterRateAvgOrderByAggregateInput } from "../inputs/LocationAreaEncounterRateAvgOrderByAggregateInput";
import { LocationAreaEncounterRateCountOrderByAggregateInput } from "../inputs/LocationAreaEncounterRateCountOrderByAggregateInput";
import { LocationAreaEncounterRateMaxOrderByAggregateInput } from "../inputs/LocationAreaEncounterRateMaxOrderByAggregateInput";
import { LocationAreaEncounterRateMinOrderByAggregateInput } from "../inputs/LocationAreaEncounterRateMinOrderByAggregateInput";
import { LocationAreaEncounterRateSumOrderByAggregateInput } from "../inputs/LocationAreaEncounterRateSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("LocationAreaEncounterRateOrderByWithAggregationInput", {})
export class LocationAreaEncounterRateOrderByWithAggregationInput {
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

  @TypeGraphQL.Field(_type => LocationAreaEncounterRateCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: LocationAreaEncounterRateCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => LocationAreaEncounterRateAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: LocationAreaEncounterRateAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => LocationAreaEncounterRateMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: LocationAreaEncounterRateMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => LocationAreaEncounterRateMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: LocationAreaEncounterRateMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => LocationAreaEncounterRateSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: LocationAreaEncounterRateSumOrderByAggregateInput | undefined;
}
