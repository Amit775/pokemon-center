import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ItemsOrderByWithAggregationInput } from "../../../inputs/ItemsOrderByWithAggregationInput";
import { ItemsScalarWhereWithAggregatesInput } from "../../../inputs/ItemsScalarWhereWithAggregatesInput";
import { ItemsWhereInput } from "../../../inputs/ItemsWhereInput";
import { ItemsScalarFieldEnum } from "../../../../enums/ItemsScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByItemsArgs {
  @TypeGraphQL.Field(_type => ItemsWhereInput, {
    nullable: true
  })
  where?: ItemsWhereInput | undefined;

  @TypeGraphQL.Field(_type => [ItemsOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: ItemsOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [ItemsScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "identifier" | "category_id" | "cost" | "fling_power" | "fling_effect_id">;

  @TypeGraphQL.Field(_type => ItemsScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: ItemsScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
