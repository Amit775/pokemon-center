import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MoveMetaStatChangesOrderByWithAggregationInput } from "../../../inputs/MoveMetaStatChangesOrderByWithAggregationInput";
import { MoveMetaStatChangesScalarWhereWithAggregatesInput } from "../../../inputs/MoveMetaStatChangesScalarWhereWithAggregatesInput";
import { MoveMetaStatChangesWhereInput } from "../../../inputs/MoveMetaStatChangesWhereInput";
import { MoveMetaStatChangesScalarFieldEnum } from "../../../../enums/MoveMetaStatChangesScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByMoveMetaStatChangesArgs {
  @TypeGraphQL.Field(_type => MoveMetaStatChangesWhereInput, {
    nullable: true
  })
  where?: MoveMetaStatChangesWhereInput | undefined;

  @TypeGraphQL.Field(_type => [MoveMetaStatChangesOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: MoveMetaStatChangesOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [MoveMetaStatChangesScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"move_id" | "stat_id" | "change">;

  @TypeGraphQL.Field(_type => MoveMetaStatChangesScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: MoveMetaStatChangesScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
