import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SuperContestEffectOrderByWithAggregationInput } from "../../../inputs/SuperContestEffectOrderByWithAggregationInput";
import { SuperContestEffectScalarWhereWithAggregatesInput } from "../../../inputs/SuperContestEffectScalarWhereWithAggregatesInput";
import { SuperContestEffectWhereInput } from "../../../inputs/SuperContestEffectWhereInput";
import { SuperContestEffectScalarFieldEnum } from "../../../../enums/SuperContestEffectScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupBySuperContestEffectArgs {
  @TypeGraphQL.Field(_type => SuperContestEffectWhereInput, {
    nullable: true
  })
  where?: SuperContestEffectWhereInput | undefined;

  @TypeGraphQL.Field(_type => [SuperContestEffectOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: SuperContestEffectOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [SuperContestEffectScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "appeal">;

  @TypeGraphQL.Field(_type => SuperContestEffectScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: SuperContestEffectScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
