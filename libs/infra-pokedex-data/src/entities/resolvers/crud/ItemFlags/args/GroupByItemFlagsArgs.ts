import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ItemFlagsOrderByWithAggregationInput } from "../../../inputs/ItemFlagsOrderByWithAggregationInput";
import { ItemFlagsScalarWhereWithAggregatesInput } from "../../../inputs/ItemFlagsScalarWhereWithAggregatesInput";
import { ItemFlagsWhereInput } from "../../../inputs/ItemFlagsWhereInput";
import { ItemFlagsScalarFieldEnum } from "../../../../enums/ItemFlagsScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByItemFlagsArgs {
  @TypeGraphQL.Field(_type => ItemFlagsWhereInput, {
    nullable: true
  })
  where?: ItemFlagsWhereInput | undefined;

  @TypeGraphQL.Field(_type => [ItemFlagsOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: ItemFlagsOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [ItemFlagsScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "identifier">;

  @TypeGraphQL.Field(_type => ItemFlagsScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: ItemFlagsScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
