import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MoveMetaAilmentOrderByWithRelationInput } from "../inputs/MoveMetaAilmentOrderByWithRelationInput";
import { MoveMetaCategoryOrderByWithRelationInput } from "../inputs/MoveMetaCategoryOrderByWithRelationInput";
import { MoveMetaStatChangesOrderByRelationAggregateInput } from "../inputs/MoveMetaStatChangesOrderByRelationAggregateInput";
import { MoveOrderByWithRelationInput } from "../inputs/MoveOrderByWithRelationInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("MoveMetaOrderByWithRelationInput", {})
export class MoveMetaOrderByWithRelationInput {
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

  @TypeGraphQL.Field(_type => MoveOrderByWithRelationInput, {
    nullable: true
  })
  move?: MoveOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => MoveMetaCategoryOrderByWithRelationInput, {
    nullable: true
  })
  metaCategory?: MoveMetaCategoryOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => MoveMetaAilmentOrderByWithRelationInput, {
    nullable: true
  })
  metaAilment?: MoveMetaAilmentOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => MoveMetaStatChangesOrderByRelationAggregateInput, {
    nullable: true
  })
  statChanges?: MoveMetaStatChangesOrderByRelationAggregateInput | undefined;
}
