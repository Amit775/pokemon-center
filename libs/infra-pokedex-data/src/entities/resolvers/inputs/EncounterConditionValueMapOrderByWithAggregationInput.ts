import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EncounterConditionValueMapAvgOrderByAggregateInput } from "../inputs/EncounterConditionValueMapAvgOrderByAggregateInput";
import { EncounterConditionValueMapCountOrderByAggregateInput } from "../inputs/EncounterConditionValueMapCountOrderByAggregateInput";
import { EncounterConditionValueMapMaxOrderByAggregateInput } from "../inputs/EncounterConditionValueMapMaxOrderByAggregateInput";
import { EncounterConditionValueMapMinOrderByAggregateInput } from "../inputs/EncounterConditionValueMapMinOrderByAggregateInput";
import { EncounterConditionValueMapSumOrderByAggregateInput } from "../inputs/EncounterConditionValueMapSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("EncounterConditionValueMapOrderByWithAggregationInput", {})
export class EncounterConditionValueMapOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  encounter_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  encounter_condition_value_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => EncounterConditionValueMapCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: EncounterConditionValueMapCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => EncounterConditionValueMapAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: EncounterConditionValueMapAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => EncounterConditionValueMapMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: EncounterConditionValueMapMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => EncounterConditionValueMapMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: EncounterConditionValueMapMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => EncounterConditionValueMapSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: EncounterConditionValueMapSumOrderByAggregateInput | undefined;
}
