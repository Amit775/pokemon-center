import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EncountersAvgOrderByAggregateInput } from "../inputs/EncountersAvgOrderByAggregateInput";
import { EncountersCountOrderByAggregateInput } from "../inputs/EncountersCountOrderByAggregateInput";
import { EncountersMaxOrderByAggregateInput } from "../inputs/EncountersMaxOrderByAggregateInput";
import { EncountersMinOrderByAggregateInput } from "../inputs/EncountersMinOrderByAggregateInput";
import { EncountersSumOrderByAggregateInput } from "../inputs/EncountersSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("EncountersOrderByWithAggregationInput", {})
export class EncountersOrderByWithAggregationInput {
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

  @TypeGraphQL.Field(_type => EncountersCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: EncountersCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => EncountersAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: EncountersAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => EncountersMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: EncountersMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => EncountersMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: EncountersMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => EncountersSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: EncountersSumOrderByAggregateInput | undefined;
}
