import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EncounterConditionAvgOrderByAggregateInput } from "../inputs/EncounterConditionAvgOrderByAggregateInput";
import { EncounterConditionCountOrderByAggregateInput } from "../inputs/EncounterConditionCountOrderByAggregateInput";
import { EncounterConditionMaxOrderByAggregateInput } from "../inputs/EncounterConditionMaxOrderByAggregateInput";
import { EncounterConditionMinOrderByAggregateInput } from "../inputs/EncounterConditionMinOrderByAggregateInput";
import { EncounterConditionSumOrderByAggregateInput } from "../inputs/EncounterConditionSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("EncounterConditionOrderByWithAggregationInput", {})
export class EncounterConditionOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  identifier?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => EncounterConditionCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: EncounterConditionCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => EncounterConditionAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: EncounterConditionAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => EncounterConditionMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: EncounterConditionMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => EncounterConditionMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: EncounterConditionMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => EncounterConditionSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: EncounterConditionSumOrderByAggregateInput | undefined;
}
