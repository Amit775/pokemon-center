import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MoveFlagsOrderByWithAggregationInput } from "../../../inputs/MoveFlagsOrderByWithAggregationInput";
import { MoveFlagsScalarWhereWithAggregatesInput } from "../../../inputs/MoveFlagsScalarWhereWithAggregatesInput";
import { MoveFlagsWhereInput } from "../../../inputs/MoveFlagsWhereInput";
import { MoveFlagsScalarFieldEnum } from "../../../../enums/MoveFlagsScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByMoveFlagsArgs {
  @TypeGraphQL.Field(_type => MoveFlagsWhereInput, {
    nullable: true
  })
  where?: MoveFlagsWhereInput | undefined;

  @TypeGraphQL.Field(_type => [MoveFlagsOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: MoveFlagsOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [MoveFlagsScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "identifier">;

  @TypeGraphQL.Field(_type => MoveFlagsScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: MoveFlagsScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
