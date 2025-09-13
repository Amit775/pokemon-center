import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MoveBattleStylesOrderByWithAggregationInput } from "../../../inputs/MoveBattleStylesOrderByWithAggregationInput";
import { MoveBattleStylesScalarWhereWithAggregatesInput } from "../../../inputs/MoveBattleStylesScalarWhereWithAggregatesInput";
import { MoveBattleStylesWhereInput } from "../../../inputs/MoveBattleStylesWhereInput";
import { MoveBattleStylesScalarFieldEnum } from "../../../../enums/MoveBattleStylesScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByMoveBattleStylesArgs {
  @TypeGraphQL.Field(_type => MoveBattleStylesWhereInput, {
    nullable: true
  })
  where?: MoveBattleStylesWhereInput | undefined;

  @TypeGraphQL.Field(_type => [MoveBattleStylesOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: MoveBattleStylesOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [MoveBattleStylesScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "identifier">;

  @TypeGraphQL.Field(_type => MoveBattleStylesScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: MoveBattleStylesScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
