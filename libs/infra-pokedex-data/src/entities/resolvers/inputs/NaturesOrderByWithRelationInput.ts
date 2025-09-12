import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NatureBattleStylePreferencesOrderByRelationAggregateInput } from "../inputs/NatureBattleStylePreferencesOrderByRelationAggregateInput";
import { StatsOrderByWithRelationInput } from "../inputs/StatsOrderByWithRelationInput";
import { TypesOrderByRelationAggregateInput } from "../inputs/TypesOrderByRelationAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("NaturesOrderByWithRelationInput", {})
export class NaturesOrderByWithRelationInput {
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
  decreased_stat_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  increased_stat_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  hates_flavor_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  likes_flavor_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  game_index?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => StatsOrderByWithRelationInput, {
    nullable: true
  })
  decreasedStat?: StatsOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => StatsOrderByWithRelationInput, {
    nullable: true
  })
  increasedStat?: StatsOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => NatureBattleStylePreferencesOrderByRelationAggregateInput, {
    nullable: true
  })
  battleStylePreferences?: NatureBattleStylePreferencesOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => TypesOrderByRelationAggregateInput, {
    nullable: true
  })
  decreasedStatTypes?: TypesOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => TypesOrderByRelationAggregateInput, {
    nullable: true
  })
  increasedStatTypes?: TypesOrderByRelationAggregateInput | undefined;
}
