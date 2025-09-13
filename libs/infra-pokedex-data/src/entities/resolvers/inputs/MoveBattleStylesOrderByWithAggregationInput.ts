import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MoveBattleStylesAvgOrderByAggregateInput } from "../inputs/MoveBattleStylesAvgOrderByAggregateInput";
import { MoveBattleStylesCountOrderByAggregateInput } from "../inputs/MoveBattleStylesCountOrderByAggregateInput";
import { MoveBattleStylesMaxOrderByAggregateInput } from "../inputs/MoveBattleStylesMaxOrderByAggregateInput";
import { MoveBattleStylesMinOrderByAggregateInput } from "../inputs/MoveBattleStylesMinOrderByAggregateInput";
import { MoveBattleStylesSumOrderByAggregateInput } from "../inputs/MoveBattleStylesSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("MoveBattleStylesOrderByWithAggregationInput", {})
export class MoveBattleStylesOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  identifier?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => MoveBattleStylesCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: MoveBattleStylesCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => MoveBattleStylesAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: MoveBattleStylesAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => MoveBattleStylesMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: MoveBattleStylesMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => MoveBattleStylesMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: MoveBattleStylesMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => MoveBattleStylesSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: MoveBattleStylesSumOrderByAggregateInput | undefined;
}
