import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NatureBattleStylePreferenceAvgOrderByAggregateInput } from "../inputs/NatureBattleStylePreferenceAvgOrderByAggregateInput";
import { NatureBattleStylePreferenceCountOrderByAggregateInput } from "../inputs/NatureBattleStylePreferenceCountOrderByAggregateInput";
import { NatureBattleStylePreferenceMaxOrderByAggregateInput } from "../inputs/NatureBattleStylePreferenceMaxOrderByAggregateInput";
import { NatureBattleStylePreferenceMinOrderByAggregateInput } from "../inputs/NatureBattleStylePreferenceMinOrderByAggregateInput";
import { NatureBattleStylePreferenceSumOrderByAggregateInput } from "../inputs/NatureBattleStylePreferenceSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("NatureBattleStylePreferenceOrderByWithAggregationInput", {})
export class NatureBattleStylePreferenceOrderByWithAggregationInput {
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

  @TypeGraphQL.Field(_type => NatureBattleStylePreferenceCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: NatureBattleStylePreferenceCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => NatureBattleStylePreferenceAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: NatureBattleStylePreferenceAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => NatureBattleStylePreferenceMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: NatureBattleStylePreferenceMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => NatureBattleStylePreferenceMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: NatureBattleStylePreferenceMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => NatureBattleStylePreferenceSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: NatureBattleStylePreferenceSumOrderByAggregateInput | undefined;
}
