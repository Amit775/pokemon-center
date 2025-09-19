import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MoveFlagOrderByWithAggregationInput } from "../../../inputs/MoveFlagOrderByWithAggregationInput";
import { MoveFlagScalarWhereWithAggregatesInput } from "../../../inputs/MoveFlagScalarWhereWithAggregatesInput";
import { MoveFlagWhereInput } from "../../../inputs/MoveFlagWhereInput";
import { MoveFlagScalarFieldEnum } from "../../../../enums/MoveFlagScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByMoveFlagArgs {
  @TypeGraphQL.Field(_type => MoveFlagWhereInput, {
    nullable: true
  })
  where?: MoveFlagWhereInput | undefined;

  @TypeGraphQL.Field(_type => [MoveFlagOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: MoveFlagOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [MoveFlagScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "identifier">;

  @TypeGraphQL.Field(_type => MoveFlagScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: MoveFlagScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
