import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ItemFlagMapOrderByWithAggregationInput } from "../../../inputs/ItemFlagMapOrderByWithAggregationInput";
import { ItemFlagMapScalarWhereWithAggregatesInput } from "../../../inputs/ItemFlagMapScalarWhereWithAggregatesInput";
import { ItemFlagMapWhereInput } from "../../../inputs/ItemFlagMapWhereInput";
import { ItemFlagMapScalarFieldEnum } from "../../../../enums/ItemFlagMapScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByItemFlagMapArgs {
  @TypeGraphQL.Field(_type => ItemFlagMapWhereInput, {
    nullable: true
  })
  where?: ItemFlagMapWhereInput | undefined;

  @TypeGraphQL.Field(_type => [ItemFlagMapOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: ItemFlagMapOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [ItemFlagMapScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"item_id" | "item_flag_id">;

  @TypeGraphQL.Field(_type => ItemFlagMapScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: ItemFlagMapScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
