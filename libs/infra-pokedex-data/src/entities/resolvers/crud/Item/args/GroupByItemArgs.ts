import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ItemOrderByWithAggregationInput } from "../../../inputs/ItemOrderByWithAggregationInput";
import { ItemScalarWhereWithAggregatesInput } from "../../../inputs/ItemScalarWhereWithAggregatesInput";
import { ItemWhereInput } from "../../../inputs/ItemWhereInput";
import { ItemScalarFieldEnum } from "../../../../enums/ItemScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByItemArgs {
  @TypeGraphQL.Field(_type => ItemWhereInput, {
    nullable: true
  })
  where?: ItemWhereInput | undefined;

  @TypeGraphQL.Field(_type => [ItemOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: ItemOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [ItemScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "identifier" | "category_id" | "cost" | "fling_power" | "fling_effect_id">;

  @TypeGraphQL.Field(_type => ItemScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: ItemScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
