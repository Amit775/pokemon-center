import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { NatureBattleStylePreferencesOrderByWithAggregationInput } from "../../../inputs/NatureBattleStylePreferencesOrderByWithAggregationInput";
import { NatureBattleStylePreferencesScalarWhereWithAggregatesInput } from "../../../inputs/NatureBattleStylePreferencesScalarWhereWithAggregatesInput";
import { NatureBattleStylePreferencesWhereInput } from "../../../inputs/NatureBattleStylePreferencesWhereInput";
import { NatureBattleStylePreferencesScalarFieldEnum } from "../../../../enums/NatureBattleStylePreferencesScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByNatureBattleStylePreferencesArgs {
  @TypeGraphQL.Field(_type => NatureBattleStylePreferencesWhereInput, {
    nullable: true
  })
  where?: NatureBattleStylePreferencesWhereInput | undefined;

  @TypeGraphQL.Field(_type => [NatureBattleStylePreferencesOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: NatureBattleStylePreferencesOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [NatureBattleStylePreferencesScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"nature_id" | "move_battle_style_id" | "low_hp_preference" | "high_hp_preference">;

  @TypeGraphQL.Field(_type => NatureBattleStylePreferencesScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: NatureBattleStylePreferencesScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
