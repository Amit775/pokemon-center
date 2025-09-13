import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MoveEffectsOrderByWithAggregationInput } from "../../../inputs/MoveEffectsOrderByWithAggregationInput";
import { MoveEffectsScalarWhereWithAggregatesInput } from "../../../inputs/MoveEffectsScalarWhereWithAggregatesInput";
import { MoveEffectsWhereInput } from "../../../inputs/MoveEffectsWhereInput";
import { MoveEffectsScalarFieldEnum } from "../../../../enums/MoveEffectsScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByMoveEffectsArgs {
  @TypeGraphQL.Field(_type => MoveEffectsWhereInput, {
    nullable: true
  })
  where?: MoveEffectsWhereInput | undefined;

  @TypeGraphQL.Field(_type => [MoveEffectsOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: MoveEffectsOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [MoveEffectsScalarFieldEnum], {
    nullable: false
  })
  by!: "id"[];

  @TypeGraphQL.Field(_type => MoveEffectsScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: MoveEffectsScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
