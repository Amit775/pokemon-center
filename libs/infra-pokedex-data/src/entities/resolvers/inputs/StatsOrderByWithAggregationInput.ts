import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SortOrderInput } from "../inputs/SortOrderInput";
import { StatsAvgOrderByAggregateInput } from "../inputs/StatsAvgOrderByAggregateInput";
import { StatsCountOrderByAggregateInput } from "../inputs/StatsCountOrderByAggregateInput";
import { StatsMaxOrderByAggregateInput } from "../inputs/StatsMaxOrderByAggregateInput";
import { StatsMinOrderByAggregateInput } from "../inputs/StatsMinOrderByAggregateInput";
import { StatsSumOrderByAggregateInput } from "../inputs/StatsSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("StatsOrderByWithAggregationInput", {})
export class StatsOrderByWithAggregationInput {
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

  @TypeGraphQL.Field(_type => StatsCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: StatsCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => StatsAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: StatsAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => StatsMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: StatsMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => StatsMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: StatsMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => StatsSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: StatsSumOrderByAggregateInput | undefined;
}
