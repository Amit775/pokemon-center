import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ItemCategoryOrderByWithAggregationInput } from "../../../inputs/ItemCategoryOrderByWithAggregationInput";
import { ItemCategoryScalarWhereWithAggregatesInput } from "../../../inputs/ItemCategoryScalarWhereWithAggregatesInput";
import { ItemCategoryWhereInput } from "../../../inputs/ItemCategoryWhereInput";
import { ItemCategoryScalarFieldEnum } from "../../../../enums/ItemCategoryScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByItemCategoryArgs {
  @TypeGraphQL.Field(_type => ItemCategoryWhereInput, {
    nullable: true
  })
  where?: ItemCategoryWhereInput | undefined;

  @TypeGraphQL.Field(_type => [ItemCategoryOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: ItemCategoryOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [ItemCategoryScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "pocket_id" | "identifier">;

  @TypeGraphQL.Field(_type => ItemCategoryScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: ItemCategoryScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
