import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EncounterConditionValueAvgOrderByAggregateInput } from "../inputs/EncounterConditionValueAvgOrderByAggregateInput";
import { EncounterConditionValueCountOrderByAggregateInput } from "../inputs/EncounterConditionValueCountOrderByAggregateInput";
import { EncounterConditionValueMaxOrderByAggregateInput } from "../inputs/EncounterConditionValueMaxOrderByAggregateInput";
import { EncounterConditionValueMinOrderByAggregateInput } from "../inputs/EncounterConditionValueMinOrderByAggregateInput";
import { EncounterConditionValueSumOrderByAggregateInput } from "../inputs/EncounterConditionValueSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("EncounterConditionValueOrderByWithAggregationInput", {})
export class EncounterConditionValueOrderByWithAggregationInput {
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

  @TypeGraphQL.Field(_type => EncounterConditionValueCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: EncounterConditionValueCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => EncounterConditionValueAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: EncounterConditionValueAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => EncounterConditionValueMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: EncounterConditionValueMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => EncounterConditionValueMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: EncounterConditionValueMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => EncounterConditionValueSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: EncounterConditionValueSumOrderByAggregateInput | undefined;
}
