import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NatureBattleStylePreferencesAvgOrderByAggregateInput } from "../inputs/NatureBattleStylePreferencesAvgOrderByAggregateInput";
import { NatureBattleStylePreferencesCountOrderByAggregateInput } from "../inputs/NatureBattleStylePreferencesCountOrderByAggregateInput";
import { NatureBattleStylePreferencesMaxOrderByAggregateInput } from "../inputs/NatureBattleStylePreferencesMaxOrderByAggregateInput";
import { NatureBattleStylePreferencesMinOrderByAggregateInput } from "../inputs/NatureBattleStylePreferencesMinOrderByAggregateInput";
import { NatureBattleStylePreferencesSumOrderByAggregateInput } from "../inputs/NatureBattleStylePreferencesSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("NatureBattleStylePreferencesOrderByWithAggregationInput", {})
export class NatureBattleStylePreferencesOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  nature_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  move_battle_style_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  low_hp_preference?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  high_hp_preference?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => NatureBattleStylePreferencesCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: NatureBattleStylePreferencesCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => NatureBattleStylePreferencesAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: NatureBattleStylePreferencesAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => NatureBattleStylePreferencesMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: NatureBattleStylePreferencesMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => NatureBattleStylePreferencesMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: NatureBattleStylePreferencesMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => NatureBattleStylePreferencesSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: NatureBattleStylePreferencesSumOrderByAggregateInput | undefined;
}
