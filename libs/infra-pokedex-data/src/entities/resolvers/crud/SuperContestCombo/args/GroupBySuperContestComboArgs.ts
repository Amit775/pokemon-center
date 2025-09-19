import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SuperContestComboOrderByWithAggregationInput } from "../../../inputs/SuperContestComboOrderByWithAggregationInput";
import { SuperContestComboScalarWhereWithAggregatesInput } from "../../../inputs/SuperContestComboScalarWhereWithAggregatesInput";
import { SuperContestComboWhereInput } from "../../../inputs/SuperContestComboWhereInput";
import { SuperContestComboScalarFieldEnum } from "../../../../enums/SuperContestComboScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupBySuperContestComboArgs {
  @TypeGraphQL.Field(_type => SuperContestComboWhereInput, {
    nullable: true
  })
  where?: SuperContestComboWhereInput | undefined;

  @TypeGraphQL.Field(_type => [SuperContestComboOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: SuperContestComboOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [SuperContestComboScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"first_move_id" | "second_move_id">;

  @TypeGraphQL.Field(_type => SuperContestComboScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: SuperContestComboScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
