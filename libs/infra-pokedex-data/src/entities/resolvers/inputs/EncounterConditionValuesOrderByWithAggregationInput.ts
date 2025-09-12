import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EncounterConditionValuesAvgOrderByAggregateInput } from "../inputs/EncounterConditionValuesAvgOrderByAggregateInput";
import { EncounterConditionValuesCountOrderByAggregateInput } from "../inputs/EncounterConditionValuesCountOrderByAggregateInput";
import { EncounterConditionValuesMaxOrderByAggregateInput } from "../inputs/EncounterConditionValuesMaxOrderByAggregateInput";
import { EncounterConditionValuesMinOrderByAggregateInput } from "../inputs/EncounterConditionValuesMinOrderByAggregateInput";
import { EncounterConditionValuesSumOrderByAggregateInput } from "../inputs/EncounterConditionValuesSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("EncounterConditionValuesOrderByWithAggregationInput", {})
export class EncounterConditionValuesOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  encounter_condition_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  identifier?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  is_default?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => EncounterConditionValuesCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: EncounterConditionValuesCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => EncounterConditionValuesAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: EncounterConditionValuesAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => EncounterConditionValuesMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: EncounterConditionValuesMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => EncounterConditionValuesMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: EncounterConditionValuesMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => EncounterConditionValuesSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: EncounterConditionValuesSumOrderByAggregateInput | undefined;
}
