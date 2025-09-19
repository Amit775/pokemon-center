import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ItemPocketOrderByWithAggregationInput } from "../../../inputs/ItemPocketOrderByWithAggregationInput";
import { ItemPocketScalarWhereWithAggregatesInput } from "../../../inputs/ItemPocketScalarWhereWithAggregatesInput";
import { ItemPocketWhereInput } from "../../../inputs/ItemPocketWhereInput";
import { ItemPocketScalarFieldEnum } from "../../../../enums/ItemPocketScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByItemPocketArgs {
  @TypeGraphQL.Field(_type => ItemPocketWhereInput, {
    nullable: true
  })
  where?: ItemPocketWhereInput | undefined;

  @TypeGraphQL.Field(_type => [ItemPocketOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: ItemPocketOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [ItemPocketScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "identifier">;

  @TypeGraphQL.Field(_type => ItemPocketScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: ItemPocketScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
