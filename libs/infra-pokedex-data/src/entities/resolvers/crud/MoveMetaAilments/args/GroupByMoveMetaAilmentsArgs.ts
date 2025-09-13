import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MoveMetaAilmentsOrderByWithAggregationInput } from "../../../inputs/MoveMetaAilmentsOrderByWithAggregationInput";
import { MoveMetaAilmentsScalarWhereWithAggregatesInput } from "../../../inputs/MoveMetaAilmentsScalarWhereWithAggregatesInput";
import { MoveMetaAilmentsWhereInput } from "../../../inputs/MoveMetaAilmentsWhereInput";
import { MoveMetaAilmentsScalarFieldEnum } from "../../../../enums/MoveMetaAilmentsScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByMoveMetaAilmentsArgs {
  @TypeGraphQL.Field(_type => MoveMetaAilmentsWhereInput, {
    nullable: true
  })
  where?: MoveMetaAilmentsWhereInput | undefined;

  @TypeGraphQL.Field(_type => [MoveMetaAilmentsOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: MoveMetaAilmentsOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [MoveMetaAilmentsScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "identifier">;

  @TypeGraphQL.Field(_type => MoveMetaAilmentsScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: MoveMetaAilmentsScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
