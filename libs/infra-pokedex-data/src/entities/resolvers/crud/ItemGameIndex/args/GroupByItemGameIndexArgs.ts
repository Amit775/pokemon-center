import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ItemGameIndexOrderByWithAggregationInput } from "../../../inputs/ItemGameIndexOrderByWithAggregationInput";
import { ItemGameIndexScalarWhereWithAggregatesInput } from "../../../inputs/ItemGameIndexScalarWhereWithAggregatesInput";
import { ItemGameIndexWhereInput } from "../../../inputs/ItemGameIndexWhereInput";
import { ItemGameIndexScalarFieldEnum } from "../../../../enums/ItemGameIndexScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByItemGameIndexArgs {
  @TypeGraphQL.Field(_type => ItemGameIndexWhereInput, {
    nullable: true
  })
  where?: ItemGameIndexWhereInput | undefined;

  @TypeGraphQL.Field(_type => [ItemGameIndexOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: ItemGameIndexOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [ItemGameIndexScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"item_id" | "generation_id" | "game_index">;

  @TypeGraphQL.Field(_type => ItemGameIndexScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: ItemGameIndexScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
