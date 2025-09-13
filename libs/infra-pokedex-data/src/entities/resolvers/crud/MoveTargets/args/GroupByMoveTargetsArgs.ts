import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MoveTargetsOrderByWithAggregationInput } from "../../../inputs/MoveTargetsOrderByWithAggregationInput";
import { MoveTargetsScalarWhereWithAggregatesInput } from "../../../inputs/MoveTargetsScalarWhereWithAggregatesInput";
import { MoveTargetsWhereInput } from "../../../inputs/MoveTargetsWhereInput";
import { MoveTargetsScalarFieldEnum } from "../../../../enums/MoveTargetsScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByMoveTargetsArgs {
  @TypeGraphQL.Field(_type => MoveTargetsWhereInput, {
    nullable: true
  })
  where?: MoveTargetsWhereInput | undefined;

  @TypeGraphQL.Field(_type => [MoveTargetsOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: MoveTargetsOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [MoveTargetsScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "identifier">;

  @TypeGraphQL.Field(_type => MoveTargetsScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: MoveTargetsScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
