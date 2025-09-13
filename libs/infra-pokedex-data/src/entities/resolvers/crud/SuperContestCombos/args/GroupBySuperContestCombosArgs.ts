import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SuperContestCombosOrderByWithAggregationInput } from "../../../inputs/SuperContestCombosOrderByWithAggregationInput";
import { SuperContestCombosScalarWhereWithAggregatesInput } from "../../../inputs/SuperContestCombosScalarWhereWithAggregatesInput";
import { SuperContestCombosWhereInput } from "../../../inputs/SuperContestCombosWhereInput";
import { SuperContestCombosScalarFieldEnum } from "../../../../enums/SuperContestCombosScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupBySuperContestCombosArgs {
  @TypeGraphQL.Field(_type => SuperContestCombosWhereInput, {
    nullable: true
  })
  where?: SuperContestCombosWhereInput | undefined;

  @TypeGraphQL.Field(_type => [SuperContestCombosOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: SuperContestCombosOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [SuperContestCombosScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"first_move_id" | "second_move_id">;

  @TypeGraphQL.Field(_type => SuperContestCombosScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: SuperContestCombosScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
