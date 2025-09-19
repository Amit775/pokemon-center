import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SuperContestEffectAvgOrderByAggregateInput } from "../inputs/SuperContestEffectAvgOrderByAggregateInput";
import { SuperContestEffectCountOrderByAggregateInput } from "../inputs/SuperContestEffectCountOrderByAggregateInput";
import { SuperContestEffectMaxOrderByAggregateInput } from "../inputs/SuperContestEffectMaxOrderByAggregateInput";
import { SuperContestEffectMinOrderByAggregateInput } from "../inputs/SuperContestEffectMinOrderByAggregateInput";
import { SuperContestEffectSumOrderByAggregateInput } from "../inputs/SuperContestEffectSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("SuperContestEffectOrderByWithAggregationInput", {})
export class SuperContestEffectOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  appeal?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SuperContestEffectCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: SuperContestEffectCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => SuperContestEffectAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: SuperContestEffectAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => SuperContestEffectMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: SuperContestEffectMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => SuperContestEffectMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: SuperContestEffectMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => SuperContestEffectSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: SuperContestEffectSumOrderByAggregateInput | undefined;
}
