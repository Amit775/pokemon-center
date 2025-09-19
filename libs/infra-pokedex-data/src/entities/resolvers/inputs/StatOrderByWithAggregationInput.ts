import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SortOrderInput } from "../inputs/SortOrderInput";
import { StatAvgOrderByAggregateInput } from "../inputs/StatAvgOrderByAggregateInput";
import { StatCountOrderByAggregateInput } from "../inputs/StatCountOrderByAggregateInput";
import { StatMaxOrderByAggregateInput } from "../inputs/StatMaxOrderByAggregateInput";
import { StatMinOrderByAggregateInput } from "../inputs/StatMinOrderByAggregateInput";
import { StatSumOrderByAggregateInput } from "../inputs/StatSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("StatOrderByWithAggregationInput", {})
export class StatOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  damage_class_id?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  identifier?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  is_battle_only?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  game_index?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => StatCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: StatCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => StatAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: StatAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => StatMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: StatMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => StatMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: StatMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => StatSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: StatSumOrderByAggregateInput | undefined;
}
