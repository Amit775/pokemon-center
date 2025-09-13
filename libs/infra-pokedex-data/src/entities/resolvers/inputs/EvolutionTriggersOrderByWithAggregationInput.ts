import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EvolutionTriggersAvgOrderByAggregateInput } from "../inputs/EvolutionTriggersAvgOrderByAggregateInput";
import { EvolutionTriggersCountOrderByAggregateInput } from "../inputs/EvolutionTriggersCountOrderByAggregateInput";
import { EvolutionTriggersMaxOrderByAggregateInput } from "../inputs/EvolutionTriggersMaxOrderByAggregateInput";
import { EvolutionTriggersMinOrderByAggregateInput } from "../inputs/EvolutionTriggersMinOrderByAggregateInput";
import { EvolutionTriggersSumOrderByAggregateInput } from "../inputs/EvolutionTriggersSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("EvolutionTriggersOrderByWithAggregationInput", {})
export class EvolutionTriggersOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  identifier?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => EvolutionTriggersCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: EvolutionTriggersCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => EvolutionTriggersAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: EvolutionTriggersAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => EvolutionTriggersMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: EvolutionTriggersMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => EvolutionTriggersMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: EvolutionTriggersMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => EvolutionTriggersSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: EvolutionTriggersSumOrderByAggregateInput | undefined;
}
