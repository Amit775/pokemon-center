import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { StatsOrderByWithAggregationInput } from "../../../inputs/StatsOrderByWithAggregationInput";
import { StatsScalarWhereWithAggregatesInput } from "../../../inputs/StatsScalarWhereWithAggregatesInput";
import { StatsWhereInput } from "../../../inputs/StatsWhereInput";
import { StatsScalarFieldEnum } from "../../../../enums/StatsScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByStatsArgs {
  @TypeGraphQL.Field(_type => StatsWhereInput, {
    nullable: true
  })
  where?: StatsWhereInput | undefined;

  @TypeGraphQL.Field(_type => [StatsOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: StatsOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [StatsScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "damage_class_id" | "identifier" | "is_battle_only" | "game_index">;

  @TypeGraphQL.Field(_type => StatsScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: StatsScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
