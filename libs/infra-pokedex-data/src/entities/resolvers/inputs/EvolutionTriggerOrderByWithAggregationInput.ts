import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EvolutionTriggerAvgOrderByAggregateInput } from "../inputs/EvolutionTriggerAvgOrderByAggregateInput";
import { EvolutionTriggerCountOrderByAggregateInput } from "../inputs/EvolutionTriggerCountOrderByAggregateInput";
import { EvolutionTriggerMaxOrderByAggregateInput } from "../inputs/EvolutionTriggerMaxOrderByAggregateInput";
import { EvolutionTriggerMinOrderByAggregateInput } from "../inputs/EvolutionTriggerMinOrderByAggregateInput";
import { EvolutionTriggerSumOrderByAggregateInput } from "../inputs/EvolutionTriggerSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("EvolutionTriggerOrderByWithAggregationInput", {})
export class EvolutionTriggerOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  identifier?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => EvolutionTriggerCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: EvolutionTriggerCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => EvolutionTriggerAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: EvolutionTriggerAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => EvolutionTriggerMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: EvolutionTriggerMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => EvolutionTriggerMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: EvolutionTriggerMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => EvolutionTriggerSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: EvolutionTriggerSumOrderByAggregateInput | undefined;
}
