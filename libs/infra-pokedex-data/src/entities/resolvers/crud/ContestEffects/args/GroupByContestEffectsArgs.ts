import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ContestEffectsOrderByWithAggregationInput } from "../../../inputs/ContestEffectsOrderByWithAggregationInput";
import { ContestEffectsScalarWhereWithAggregatesInput } from "../../../inputs/ContestEffectsScalarWhereWithAggregatesInput";
import { ContestEffectsWhereInput } from "../../../inputs/ContestEffectsWhereInput";
import { ContestEffectsScalarFieldEnum } from "../../../../enums/ContestEffectsScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByContestEffectsArgs {
  @TypeGraphQL.Field(_type => ContestEffectsWhereInput, {
    nullable: true
  })
  where?: ContestEffectsWhereInput | undefined;

  @TypeGraphQL.Field(_type => [ContestEffectsOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: ContestEffectsOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [ContestEffectsScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "appeal" | "jam">;

  @TypeGraphQL.Field(_type => ContestEffectsScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: ContestEffectsScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
