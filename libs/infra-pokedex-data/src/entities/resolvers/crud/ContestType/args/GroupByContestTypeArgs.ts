import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ContestTypeOrderByWithAggregationInput } from "../../../inputs/ContestTypeOrderByWithAggregationInput";
import { ContestTypeScalarWhereWithAggregatesInput } from "../../../inputs/ContestTypeScalarWhereWithAggregatesInput";
import { ContestTypeWhereInput } from "../../../inputs/ContestTypeWhereInput";
import { ContestTypeScalarFieldEnum } from "../../../../enums/ContestTypeScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByContestTypeArgs {
  @TypeGraphQL.Field(_type => ContestTypeWhereInput, {
    nullable: true
  })
  where?: ContestTypeWhereInput | undefined;

  @TypeGraphQL.Field(_type => [ContestTypeOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: ContestTypeOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [ContestTypeScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "identifier">;

  @TypeGraphQL.Field(_type => ContestTypeScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: ContestTypeScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
