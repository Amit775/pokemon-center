import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { StatOrderByWithAggregationInput } from "../../../inputs/StatOrderByWithAggregationInput";
import { StatScalarWhereWithAggregatesInput } from "../../../inputs/StatScalarWhereWithAggregatesInput";
import { StatWhereInput } from "../../../inputs/StatWhereInput";
import { StatScalarFieldEnum } from "../../../../enums/StatScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByStatArgs {
  @TypeGraphQL.Field(_type => StatWhereInput, {
    nullable: true
  })
  where?: StatWhereInput | undefined;

  @TypeGraphQL.Field(_type => [StatOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: StatOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [StatScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "damage_class_id" | "identifier" | "is_battle_only" | "game_index">;

  @TypeGraphQL.Field(_type => StatScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: StatScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
