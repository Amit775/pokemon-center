import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MoveFlagMapOrderByWithAggregationInput } from "../../../inputs/MoveFlagMapOrderByWithAggregationInput";
import { MoveFlagMapScalarWhereWithAggregatesInput } from "../../../inputs/MoveFlagMapScalarWhereWithAggregatesInput";
import { MoveFlagMapWhereInput } from "../../../inputs/MoveFlagMapWhereInput";
import { MoveFlagMapScalarFieldEnum } from "../../../../enums/MoveFlagMapScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByMoveFlagMapArgs {
  @TypeGraphQL.Field(_type => MoveFlagMapWhereInput, {
    nullable: true
  })
  where?: MoveFlagMapWhereInput | undefined;

  @TypeGraphQL.Field(_type => [MoveFlagMapOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: MoveFlagMapOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [MoveFlagMapScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"move_id" | "move_flag_id">;

  @TypeGraphQL.Field(_type => MoveFlagMapScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: MoveFlagMapScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
