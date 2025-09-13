import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MoveEffectsAvgOrderByAggregateInput } from "../inputs/MoveEffectsAvgOrderByAggregateInput";
import { MoveEffectsCountOrderByAggregateInput } from "../inputs/MoveEffectsCountOrderByAggregateInput";
import { MoveEffectsMaxOrderByAggregateInput } from "../inputs/MoveEffectsMaxOrderByAggregateInput";
import { MoveEffectsMinOrderByAggregateInput } from "../inputs/MoveEffectsMinOrderByAggregateInput";
import { MoveEffectsSumOrderByAggregateInput } from "../inputs/MoveEffectsSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("MoveEffectsOrderByWithAggregationInput", {})
export class MoveEffectsOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => MoveEffectsCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: MoveEffectsCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => MoveEffectsAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: MoveEffectsAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => MoveEffectsMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: MoveEffectsMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => MoveEffectsMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: MoveEffectsMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => MoveEffectsSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: MoveEffectsSumOrderByAggregateInput | undefined;
}
