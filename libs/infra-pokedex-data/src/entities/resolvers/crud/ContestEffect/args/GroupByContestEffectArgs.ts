import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ContestEffectOrderByWithAggregationInput } from "../../../inputs/ContestEffectOrderByWithAggregationInput";
import { ContestEffectScalarWhereWithAggregatesInput } from "../../../inputs/ContestEffectScalarWhereWithAggregatesInput";
import { ContestEffectWhereInput } from "../../../inputs/ContestEffectWhereInput";
import { ContestEffectScalarFieldEnum } from "../../../../enums/ContestEffectScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByContestEffectArgs {
  @TypeGraphQL.Field(_type => ContestEffectWhereInput, {
    nullable: true
  })
  where?: ContestEffectWhereInput | undefined;

  @TypeGraphQL.Field(_type => [ContestEffectOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: ContestEffectOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [ContestEffectScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "appeal" | "jam">;

  @TypeGraphQL.Field(_type => ContestEffectScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: ContestEffectScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
