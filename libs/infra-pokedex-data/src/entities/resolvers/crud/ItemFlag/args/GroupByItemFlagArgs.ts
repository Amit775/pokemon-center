import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ItemFlagOrderByWithAggregationInput } from "../../../inputs/ItemFlagOrderByWithAggregationInput";
import { ItemFlagScalarWhereWithAggregatesInput } from "../../../inputs/ItemFlagScalarWhereWithAggregatesInput";
import { ItemFlagWhereInput } from "../../../inputs/ItemFlagWhereInput";
import { ItemFlagScalarFieldEnum } from "../../../../enums/ItemFlagScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByItemFlagArgs {
  @TypeGraphQL.Field(_type => ItemFlagWhereInput, {
    nullable: true
  })
  where?: ItemFlagWhereInput | undefined;

  @TypeGraphQL.Field(_type => [ItemFlagOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: ItemFlagOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [ItemFlagScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "identifier">;

  @TypeGraphQL.Field(_type => ItemFlagScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: ItemFlagScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
