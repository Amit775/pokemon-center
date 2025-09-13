import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MoveMetaCategoriesOrderByWithAggregationInput } from "../../../inputs/MoveMetaCategoriesOrderByWithAggregationInput";
import { MoveMetaCategoriesScalarWhereWithAggregatesInput } from "../../../inputs/MoveMetaCategoriesScalarWhereWithAggregatesInput";
import { MoveMetaCategoriesWhereInput } from "../../../inputs/MoveMetaCategoriesWhereInput";
import { MoveMetaCategoriesScalarFieldEnum } from "../../../../enums/MoveMetaCategoriesScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByMoveMetaCategoriesArgs {
  @TypeGraphQL.Field(_type => MoveMetaCategoriesWhereInput, {
    nullable: true
  })
  where?: MoveMetaCategoriesWhereInput | undefined;

  @TypeGraphQL.Field(_type => [MoveMetaCategoriesOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: MoveMetaCategoriesOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [MoveMetaCategoriesScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "identifier">;

  @TypeGraphQL.Field(_type => MoveMetaCategoriesScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: MoveMetaCategoriesScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
