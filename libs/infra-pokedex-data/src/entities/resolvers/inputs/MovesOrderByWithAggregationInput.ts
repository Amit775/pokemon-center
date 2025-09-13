import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovesAvgOrderByAggregateInput } from "../inputs/MovesAvgOrderByAggregateInput";
import { MovesCountOrderByAggregateInput } from "../inputs/MovesCountOrderByAggregateInput";
import { MovesMaxOrderByAggregateInput } from "../inputs/MovesMaxOrderByAggregateInput";
import { MovesMinOrderByAggregateInput } from "../inputs/MovesMinOrderByAggregateInput";
import { MovesSumOrderByAggregateInput } from "../inputs/MovesSumOrderByAggregateInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("MovesOrderByWithAggregationInput", {})
export class MovesOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  identifier?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  generation_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  type_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  power?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  pp?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  accuracy?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  priority?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  target_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  damage_class_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  effect_id?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  effect_chance?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  contest_type_id?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  contest_effect_id?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  super_contest_effect_id?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => MovesCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: MovesCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => MovesAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: MovesAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => MovesMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: MovesMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => MovesMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: MovesMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => MovesSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: MovesSumOrderByAggregateInput | undefined;
}
