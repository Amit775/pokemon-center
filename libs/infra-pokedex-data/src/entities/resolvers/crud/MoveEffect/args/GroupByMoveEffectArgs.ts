import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MoveEffectOrderByWithAggregationInput } from "../../../inputs/MoveEffectOrderByWithAggregationInput";
import { MoveEffectScalarWhereWithAggregatesInput } from "../../../inputs/MoveEffectScalarWhereWithAggregatesInput";
import { MoveEffectWhereInput } from "../../../inputs/MoveEffectWhereInput";
import { MoveEffectScalarFieldEnum } from "../../../../enums/MoveEffectScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByMoveEffectArgs {
  @TypeGraphQL.Field(_type => MoveEffectWhereInput, {
    nullable: true
  })
  where?: MoveEffectWhereInput | undefined;

  @TypeGraphQL.Field(_type => [MoveEffectOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: MoveEffectOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [MoveEffectScalarFieldEnum], {
    nullable: false
  })
  by!: "id"[];

  @TypeGraphQL.Field(_type => MoveEffectScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: MoveEffectScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
