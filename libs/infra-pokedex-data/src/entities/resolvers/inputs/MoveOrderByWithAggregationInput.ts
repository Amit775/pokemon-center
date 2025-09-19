import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MoveAvgOrderByAggregateInput } from "../inputs/MoveAvgOrderByAggregateInput";
import { MoveCountOrderByAggregateInput } from "../inputs/MoveCountOrderByAggregateInput";
import { MoveMaxOrderByAggregateInput } from "../inputs/MoveMaxOrderByAggregateInput";
import { MoveMinOrderByAggregateInput } from "../inputs/MoveMinOrderByAggregateInput";
import { MoveSumOrderByAggregateInput } from "../inputs/MoveSumOrderByAggregateInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("MoveOrderByWithAggregationInput", {})
export class MoveOrderByWithAggregationInput {
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

  @TypeGraphQL.Field(_type => MoveCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: MoveCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => MoveAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: MoveAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => MoveMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: MoveMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => MoveMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: MoveMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => MoveSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: MoveSumOrderByAggregateInput | undefined;
}
