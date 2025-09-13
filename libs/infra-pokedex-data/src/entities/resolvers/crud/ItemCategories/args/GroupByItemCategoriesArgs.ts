import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ItemCategoriesOrderByWithAggregationInput } from "../../../inputs/ItemCategoriesOrderByWithAggregationInput";
import { ItemCategoriesScalarWhereWithAggregatesInput } from "../../../inputs/ItemCategoriesScalarWhereWithAggregatesInput";
import { ItemCategoriesWhereInput } from "../../../inputs/ItemCategoriesWhereInput";
import { ItemCategoriesScalarFieldEnum } from "../../../../enums/ItemCategoriesScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByItemCategoriesArgs {
  @TypeGraphQL.Field(_type => ItemCategoriesWhereInput, {
    nullable: true
  })
  where?: ItemCategoriesWhereInput | undefined;

  @TypeGraphQL.Field(_type => [ItemCategoriesOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: ItemCategoriesOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [ItemCategoriesScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "pocket_id" | "identifier">;

  @TypeGraphQL.Field(_type => ItemCategoriesScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: ItemCategoriesScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
