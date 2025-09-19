import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ContestComboOrderByWithAggregationInput } from "../../../inputs/ContestComboOrderByWithAggregationInput";
import { ContestComboScalarWhereWithAggregatesInput } from "../../../inputs/ContestComboScalarWhereWithAggregatesInput";
import { ContestComboWhereInput } from "../../../inputs/ContestComboWhereInput";
import { ContestComboScalarFieldEnum } from "../../../../enums/ContestComboScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByContestComboArgs {
  @TypeGraphQL.Field(_type => ContestComboWhereInput, {
    nullable: true
  })
  where?: ContestComboWhereInput | undefined;

  @TypeGraphQL.Field(_type => [ContestComboOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: ContestComboOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [ContestComboScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"first_move_id" | "second_move_id">;

  @TypeGraphQL.Field(_type => ContestComboScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: ContestComboScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
