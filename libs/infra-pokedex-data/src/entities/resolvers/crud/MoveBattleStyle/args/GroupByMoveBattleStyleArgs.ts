import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MoveBattleStyleOrderByWithAggregationInput } from "../../../inputs/MoveBattleStyleOrderByWithAggregationInput";
import { MoveBattleStyleScalarWhereWithAggregatesInput } from "../../../inputs/MoveBattleStyleScalarWhereWithAggregatesInput";
import { MoveBattleStyleWhereInput } from "../../../inputs/MoveBattleStyleWhereInput";
import { MoveBattleStyleScalarFieldEnum } from "../../../../enums/MoveBattleStyleScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByMoveBattleStyleArgs {
  @TypeGraphQL.Field(_type => MoveBattleStyleWhereInput, {
    nullable: true
  })
  where?: MoveBattleStyleWhereInput | undefined;

  @TypeGraphQL.Field(_type => [MoveBattleStyleOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: MoveBattleStyleOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [MoveBattleStyleScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "identifier">;

  @TypeGraphQL.Field(_type => MoveBattleStyleScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: MoveBattleStyleScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
