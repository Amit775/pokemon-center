import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MoveTargetOrderByWithAggregationInput } from "../../../inputs/MoveTargetOrderByWithAggregationInput";
import { MoveTargetScalarWhereWithAggregatesInput } from "../../../inputs/MoveTargetScalarWhereWithAggregatesInput";
import { MoveTargetWhereInput } from "../../../inputs/MoveTargetWhereInput";
import { MoveTargetScalarFieldEnum } from "../../../../enums/MoveTargetScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByMoveTargetArgs {
  @TypeGraphQL.Field(_type => MoveTargetWhereInput, {
    nullable: true
  })
  where?: MoveTargetWhereInput | undefined;

  @TypeGraphQL.Field(_type => [MoveTargetOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: MoveTargetOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [MoveTargetScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "identifier">;

  @TypeGraphQL.Field(_type => MoveTargetScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: MoveTargetScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
