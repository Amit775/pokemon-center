import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ItemFlingEffectsOrderByWithAggregationInput } from "../../../inputs/ItemFlingEffectsOrderByWithAggregationInput";
import { ItemFlingEffectsScalarWhereWithAggregatesInput } from "../../../inputs/ItemFlingEffectsScalarWhereWithAggregatesInput";
import { ItemFlingEffectsWhereInput } from "../../../inputs/ItemFlingEffectsWhereInput";
import { ItemFlingEffectsScalarFieldEnum } from "../../../../enums/ItemFlingEffectsScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByItemFlingEffectsArgs {
  @TypeGraphQL.Field(_type => ItemFlingEffectsWhereInput, {
    nullable: true
  })
  where?: ItemFlingEffectsWhereInput | undefined;

  @TypeGraphQL.Field(_type => [ItemFlingEffectsOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: ItemFlingEffectsOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [ItemFlingEffectsScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "identifier">;

  @TypeGraphQL.Field(_type => ItemFlingEffectsScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: ItemFlingEffectsScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
