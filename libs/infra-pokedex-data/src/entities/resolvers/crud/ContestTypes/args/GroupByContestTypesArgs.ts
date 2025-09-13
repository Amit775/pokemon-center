import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ContestTypesOrderByWithAggregationInput } from "../../../inputs/ContestTypesOrderByWithAggregationInput";
import { ContestTypesScalarWhereWithAggregatesInput } from "../../../inputs/ContestTypesScalarWhereWithAggregatesInput";
import { ContestTypesWhereInput } from "../../../inputs/ContestTypesWhereInput";
import { ContestTypesScalarFieldEnum } from "../../../../enums/ContestTypesScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByContestTypesArgs {
  @TypeGraphQL.Field(_type => ContestTypesWhereInput, {
    nullable: true
  })
  where?: ContestTypesWhereInput | undefined;

  @TypeGraphQL.Field(_type => [ContestTypesOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: ContestTypesOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [ContestTypesScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "identifier">;

  @TypeGraphQL.Field(_type => ContestTypesScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: ContestTypesScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
