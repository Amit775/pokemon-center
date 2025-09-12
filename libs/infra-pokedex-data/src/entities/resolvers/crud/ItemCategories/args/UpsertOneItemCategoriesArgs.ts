import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ItemCategoriesCreateInput } from "../../../inputs/ItemCategoriesCreateInput";
import { ItemCategoriesUpdateInput } from "../../../inputs/ItemCategoriesUpdateInput";
import { ItemCategoriesWhereUniqueInput } from "../../../inputs/ItemCategoriesWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneItemCategoriesArgs {
  @TypeGraphQL.Field(_type => ItemCategoriesWhereUniqueInput, {
    nullable: false
  })
  where!: ItemCategoriesWhereUniqueInput;

  @TypeGraphQL.Field(_type => ItemCategoriesCreateInput, {
    nullable: false
  })
  create!: ItemCategoriesCreateInput;

  @TypeGraphQL.Field(_type => ItemCategoriesUpdateInput, {
    nullable: false
  })
  update!: ItemCategoriesUpdateInput;
}
