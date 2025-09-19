import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { NatureBattleStylePreferenceOrderByWithAggregationInput } from "../../../inputs/NatureBattleStylePreferenceOrderByWithAggregationInput";
import { NatureBattleStylePreferenceScalarWhereWithAggregatesInput } from "../../../inputs/NatureBattleStylePreferenceScalarWhereWithAggregatesInput";
import { NatureBattleStylePreferenceWhereInput } from "../../../inputs/NatureBattleStylePreferenceWhereInput";
import { NatureBattleStylePreferenceScalarFieldEnum } from "../../../../enums/NatureBattleStylePreferenceScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByNatureBattleStylePreferenceArgs {
  @TypeGraphQL.Field(_type => NatureBattleStylePreferenceWhereInput, {
    nullable: true
  })
  where?: NatureBattleStylePreferenceWhereInput | undefined;

  @TypeGraphQL.Field(_type => [NatureBattleStylePreferenceOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: NatureBattleStylePreferenceOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [NatureBattleStylePreferenceScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"nature_id" | "move_battle_style_id" | "low_hp_preference" | "high_hp_preference">;

  @TypeGraphQL.Field(_type => NatureBattleStylePreferenceScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: NatureBattleStylePreferenceScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
