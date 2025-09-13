import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MoveMetaAvgOrderByAggregateInput } from "../inputs/MoveMetaAvgOrderByAggregateInput";
import { MoveMetaCountOrderByAggregateInput } from "../inputs/MoveMetaCountOrderByAggregateInput";
import { MoveMetaMaxOrderByAggregateInput } from "../inputs/MoveMetaMaxOrderByAggregateInput";
import { MoveMetaMinOrderByAggregateInput } from "../inputs/MoveMetaMinOrderByAggregateInput";
import { MoveMetaSumOrderByAggregateInput } from "../inputs/MoveMetaSumOrderByAggregateInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("MoveMetaOrderByWithAggregationInput", {})
export class MoveMetaOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  move_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  meta_category_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  meta_ailment_id?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  min_hits?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  max_hits?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  min_turns?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  max_turns?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  drain?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  healing?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  crit_rate?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  ailment_chance?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  flinch_chance?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  stat_chance?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => MoveMetaCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: MoveMetaCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => MoveMetaAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: MoveMetaAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => MoveMetaMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: MoveMetaMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => MoveMetaMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: MoveMetaMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => MoveMetaSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: MoveMetaSumOrderByAggregateInput | undefined;
}
