import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MoveMetaCategoryOrderByWithAggregationInput } from "../../../inputs/MoveMetaCategoryOrderByWithAggregationInput";
import { MoveMetaCategoryScalarWhereWithAggregatesInput } from "../../../inputs/MoveMetaCategoryScalarWhereWithAggregatesInput";
import { MoveMetaCategoryWhereInput } from "../../../inputs/MoveMetaCategoryWhereInput";
import { MoveMetaCategoryScalarFieldEnum } from "../../../../enums/MoveMetaCategoryScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByMoveMetaCategoryArgs {
  @TypeGraphQL.Field(_type => MoveMetaCategoryWhereInput, {
    nullable: true
  })
  where?: MoveMetaCategoryWhereInput | undefined;

  @TypeGraphQL.Field(_type => [MoveMetaCategoryOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: MoveMetaCategoryOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [MoveMetaCategoryScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "identifier">;

  @TypeGraphQL.Field(_type => MoveMetaCategoryScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: MoveMetaCategoryScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
