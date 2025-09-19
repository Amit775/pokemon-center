import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EncounterAvgOrderByAggregateInput } from "../inputs/EncounterAvgOrderByAggregateInput";
import { EncounterCountOrderByAggregateInput } from "../inputs/EncounterCountOrderByAggregateInput";
import { EncounterMaxOrderByAggregateInput } from "../inputs/EncounterMaxOrderByAggregateInput";
import { EncounterMinOrderByAggregateInput } from "../inputs/EncounterMinOrderByAggregateInput";
import { EncounterSumOrderByAggregateInput } from "../inputs/EncounterSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("EncounterOrderByWithAggregationInput", {})
export class EncounterOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  version_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  location_area_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  encounter_slot_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  pokemon_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  min_level?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  max_level?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => EncounterCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: EncounterCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => EncounterAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: EncounterAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => EncounterMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: EncounterMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => EncounterMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: EncounterMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => EncounterSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: EncounterSumOrderByAggregateInput | undefined;
}
