import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ItemPocketsOrderByWithAggregationInput } from "../../../inputs/ItemPocketsOrderByWithAggregationInput";
import { ItemPocketsScalarWhereWithAggregatesInput } from "../../../inputs/ItemPocketsScalarWhereWithAggregatesInput";
import { ItemPocketsWhereInput } from "../../../inputs/ItemPocketsWhereInput";
import { ItemPocketsScalarFieldEnum } from "../../../../enums/ItemPocketsScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByItemPocketsArgs {
  @TypeGraphQL.Field(_type => ItemPocketsWhereInput, {
    nullable: true
  })
  where?: ItemPocketsWhereInput | undefined;

  @TypeGraphQL.Field(_type => [ItemPocketsOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: ItemPocketsOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [ItemPocketsScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "identifier">;

  @TypeGraphQL.Field(_type => ItemPocketsScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: ItemPocketsScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
