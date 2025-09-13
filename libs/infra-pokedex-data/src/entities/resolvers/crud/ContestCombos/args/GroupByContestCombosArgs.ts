import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ContestCombosOrderByWithAggregationInput } from "../../../inputs/ContestCombosOrderByWithAggregationInput";
import { ContestCombosScalarWhereWithAggregatesInput } from "../../../inputs/ContestCombosScalarWhereWithAggregatesInput";
import { ContestCombosWhereInput } from "../../../inputs/ContestCombosWhereInput";
import { ContestCombosScalarFieldEnum } from "../../../../enums/ContestCombosScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByContestCombosArgs {
  @TypeGraphQL.Field(_type => ContestCombosWhereInput, {
    nullable: true
  })
  where?: ContestCombosWhereInput | undefined;

  @TypeGraphQL.Field(_type => [ContestCombosOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: ContestCombosOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [ContestCombosScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"first_move_id" | "second_move_id">;

  @TypeGraphQL.Field(_type => ContestCombosScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: ContestCombosScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
