import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EvolutionChainsAvgOrderByAggregateInput } from "../inputs/EvolutionChainsAvgOrderByAggregateInput";
import { EvolutionChainsCountOrderByAggregateInput } from "../inputs/EvolutionChainsCountOrderByAggregateInput";
import { EvolutionChainsMaxOrderByAggregateInput } from "../inputs/EvolutionChainsMaxOrderByAggregateInput";
import { EvolutionChainsMinOrderByAggregateInput } from "../inputs/EvolutionChainsMinOrderByAggregateInput";
import { EvolutionChainsSumOrderByAggregateInput } from "../inputs/EvolutionChainsSumOrderByAggregateInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("EvolutionChainsOrderByWithAggregationInput", {})
export class EvolutionChainsOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  baby_trigger_item_id?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => EvolutionChainsCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: EvolutionChainsCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => EvolutionChainsAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: EvolutionChainsAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => EvolutionChainsMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: EvolutionChainsMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => EvolutionChainsMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: EvolutionChainsMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => EvolutionChainsSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: EvolutionChainsSumOrderByAggregateInput | undefined;
}
