import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MoveMetaOrderByWithAggregationInput } from "../../../inputs/MoveMetaOrderByWithAggregationInput";
import { MoveMetaScalarWhereWithAggregatesInput } from "../../../inputs/MoveMetaScalarWhereWithAggregatesInput";
import { MoveMetaWhereInput } from "../../../inputs/MoveMetaWhereInput";
import { MoveMetaScalarFieldEnum } from "../../../../enums/MoveMetaScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByMoveMetaArgs {
  @TypeGraphQL.Field(_type => MoveMetaWhereInput, {
    nullable: true
  })
  where?: MoveMetaWhereInput | undefined;

  @TypeGraphQL.Field(_type => [MoveMetaOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: MoveMetaOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [MoveMetaScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"move_id" | "meta_category_id" | "meta_ailment_id" | "min_hits" | "max_hits" | "min_turns" | "max_turns" | "drain" | "healing" | "crit_rate" | "ailment_chance" | "flinch_chance" | "stat_chance">;

  @TypeGraphQL.Field(_type => MoveMetaScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: MoveMetaScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
