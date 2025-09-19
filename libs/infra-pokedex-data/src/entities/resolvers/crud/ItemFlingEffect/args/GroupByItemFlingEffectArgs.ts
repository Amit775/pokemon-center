import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ItemFlingEffectOrderByWithAggregationInput } from "../../../inputs/ItemFlingEffectOrderByWithAggregationInput";
import { ItemFlingEffectScalarWhereWithAggregatesInput } from "../../../inputs/ItemFlingEffectScalarWhereWithAggregatesInput";
import { ItemFlingEffectWhereInput } from "../../../inputs/ItemFlingEffectWhereInput";
import { ItemFlingEffectScalarFieldEnum } from "../../../../enums/ItemFlingEffectScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByItemFlingEffectArgs {
  @TypeGraphQL.Field(_type => ItemFlingEffectWhereInput, {
    nullable: true
  })
  where?: ItemFlingEffectWhereInput | undefined;

  @TypeGraphQL.Field(_type => [ItemFlingEffectOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: ItemFlingEffectOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [ItemFlingEffectScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "identifier">;

  @TypeGraphQL.Field(_type => ItemFlingEffectScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: ItemFlingEffectScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
