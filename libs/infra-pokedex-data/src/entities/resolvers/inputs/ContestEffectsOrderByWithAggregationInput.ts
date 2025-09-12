import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ContestEffectsAvgOrderByAggregateInput } from "../inputs/ContestEffectsAvgOrderByAggregateInput";
import { ContestEffectsCountOrderByAggregateInput } from "../inputs/ContestEffectsCountOrderByAggregateInput";
import { ContestEffectsMaxOrderByAggregateInput } from "../inputs/ContestEffectsMaxOrderByAggregateInput";
import { ContestEffectsMinOrderByAggregateInput } from "../inputs/ContestEffectsMinOrderByAggregateInput";
import { ContestEffectsSumOrderByAggregateInput } from "../inputs/ContestEffectsSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("ContestEffectsOrderByWithAggregationInput", {})
export class ContestEffectsOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  appeal?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  jam?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => ContestEffectsCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: ContestEffectsCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ContestEffectsAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: ContestEffectsAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ContestEffectsMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: ContestEffectsMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ContestEffectsMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: ContestEffectsMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ContestEffectsSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: ContestEffectsSumOrderByAggregateInput | undefined;
}
