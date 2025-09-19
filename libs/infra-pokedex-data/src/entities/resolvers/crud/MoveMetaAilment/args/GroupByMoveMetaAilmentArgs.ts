import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MoveMetaAilmentOrderByWithAggregationInput } from "../../../inputs/MoveMetaAilmentOrderByWithAggregationInput";
import { MoveMetaAilmentScalarWhereWithAggregatesInput } from "../../../inputs/MoveMetaAilmentScalarWhereWithAggregatesInput";
import { MoveMetaAilmentWhereInput } from "../../../inputs/MoveMetaAilmentWhereInput";
import { MoveMetaAilmentScalarFieldEnum } from "../../../../enums/MoveMetaAilmentScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByMoveMetaAilmentArgs {
  @TypeGraphQL.Field(_type => MoveMetaAilmentWhereInput, {
    nullable: true
  })
  where?: MoveMetaAilmentWhereInput | undefined;

  @TypeGraphQL.Field(_type => [MoveMetaAilmentOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: MoveMetaAilmentOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [MoveMetaAilmentScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "identifier">;

  @TypeGraphQL.Field(_type => MoveMetaAilmentScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: MoveMetaAilmentScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
