import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MoveBattleStyleAvgOrderByAggregateInput } from "../inputs/MoveBattleStyleAvgOrderByAggregateInput";
import { MoveBattleStyleCountOrderByAggregateInput } from "../inputs/MoveBattleStyleCountOrderByAggregateInput";
import { MoveBattleStyleMaxOrderByAggregateInput } from "../inputs/MoveBattleStyleMaxOrderByAggregateInput";
import { MoveBattleStyleMinOrderByAggregateInput } from "../inputs/MoveBattleStyleMinOrderByAggregateInput";
import { MoveBattleStyleSumOrderByAggregateInput } from "../inputs/MoveBattleStyleSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("MoveBattleStyleOrderByWithAggregationInput", {})
export class MoveBattleStyleOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  identifier?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => MoveBattleStyleCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: MoveBattleStyleCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => MoveBattleStyleAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: MoveBattleStyleAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => MoveBattleStyleMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: MoveBattleStyleMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => MoveBattleStyleMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: MoveBattleStyleMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => MoveBattleStyleSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: MoveBattleStyleSumOrderByAggregateInput | undefined;
}
