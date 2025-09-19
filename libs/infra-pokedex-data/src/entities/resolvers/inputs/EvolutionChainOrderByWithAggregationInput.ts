import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EvolutionChainAvgOrderByAggregateInput } from "../inputs/EvolutionChainAvgOrderByAggregateInput";
import { EvolutionChainCountOrderByAggregateInput } from "../inputs/EvolutionChainCountOrderByAggregateInput";
import { EvolutionChainMaxOrderByAggregateInput } from "../inputs/EvolutionChainMaxOrderByAggregateInput";
import { EvolutionChainMinOrderByAggregateInput } from "../inputs/EvolutionChainMinOrderByAggregateInput";
import { EvolutionChainSumOrderByAggregateInput } from "../inputs/EvolutionChainSumOrderByAggregateInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("EvolutionChainOrderByWithAggregationInput", {})
export class EvolutionChainOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  baby_trigger_item_id?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => EvolutionChainCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: EvolutionChainCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => EvolutionChainAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: EvolutionChainAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => EvolutionChainMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: EvolutionChainMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => EvolutionChainMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: EvolutionChainMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => EvolutionChainSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: EvolutionChainSumOrderByAggregateInput | undefined;
}
