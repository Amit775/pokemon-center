import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ItemGameIndicesOrderByWithAggregationInput } from "../../../inputs/ItemGameIndicesOrderByWithAggregationInput";
import { ItemGameIndicesScalarWhereWithAggregatesInput } from "../../../inputs/ItemGameIndicesScalarWhereWithAggregatesInput";
import { ItemGameIndicesWhereInput } from "../../../inputs/ItemGameIndicesWhereInput";
import { ItemGameIndicesScalarFieldEnum } from "../../../../enums/ItemGameIndicesScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByItemGameIndicesArgs {
  @TypeGraphQL.Field(_type => ItemGameIndicesWhereInput, {
    nullable: true
  })
  where?: ItemGameIndicesWhereInput | undefined;

  @TypeGraphQL.Field(_type => [ItemGameIndicesOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: ItemGameIndicesOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [ItemGameIndicesScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"item_id" | "generation_id" | "game_index">;

  @TypeGraphQL.Field(_type => ItemGameIndicesScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: ItemGameIndicesScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
