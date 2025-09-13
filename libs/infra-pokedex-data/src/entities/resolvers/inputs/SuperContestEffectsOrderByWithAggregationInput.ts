import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SuperContestEffectsAvgOrderByAggregateInput } from "../inputs/SuperContestEffectsAvgOrderByAggregateInput";
import { SuperContestEffectsCountOrderByAggregateInput } from "../inputs/SuperContestEffectsCountOrderByAggregateInput";
import { SuperContestEffectsMaxOrderByAggregateInput } from "../inputs/SuperContestEffectsMaxOrderByAggregateInput";
import { SuperContestEffectsMinOrderByAggregateInput } from "../inputs/SuperContestEffectsMinOrderByAggregateInput";
import { SuperContestEffectsSumOrderByAggregateInput } from "../inputs/SuperContestEffectsSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("SuperContestEffectsOrderByWithAggregationInput", {})
export class SuperContestEffectsOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  appeal?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SuperContestEffectsCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: SuperContestEffectsCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => SuperContestEffectsAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: SuperContestEffectsAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => SuperContestEffectsMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: SuperContestEffectsMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => SuperContestEffectsMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: SuperContestEffectsMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => SuperContestEffectsSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: SuperContestEffectsSumOrderByAggregateInput | undefined;
}
