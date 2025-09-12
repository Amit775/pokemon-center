import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EncounterConditionsAvgOrderByAggregateInput } from "../inputs/EncounterConditionsAvgOrderByAggregateInput";
import { EncounterConditionsCountOrderByAggregateInput } from "../inputs/EncounterConditionsCountOrderByAggregateInput";
import { EncounterConditionsMaxOrderByAggregateInput } from "../inputs/EncounterConditionsMaxOrderByAggregateInput";
import { EncounterConditionsMinOrderByAggregateInput } from "../inputs/EncounterConditionsMinOrderByAggregateInput";
import { EncounterConditionsSumOrderByAggregateInput } from "../inputs/EncounterConditionsSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("EncounterConditionsOrderByWithAggregationInput", {})
export class EncounterConditionsOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  identifier?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => EncounterConditionsCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: EncounterConditionsCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => EncounterConditionsAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: EncounterConditionsAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => EncounterConditionsMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: EncounterConditionsMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => EncounterConditionsMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: EncounterConditionsMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => EncounterConditionsSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: EncounterConditionsSumOrderByAggregateInput | undefined;
}
