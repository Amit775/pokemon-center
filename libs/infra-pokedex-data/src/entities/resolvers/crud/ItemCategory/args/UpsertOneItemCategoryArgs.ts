import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ItemCategoryCreateInput } from "../../../inputs/ItemCategoryCreateInput";
import { ItemCategoryUpdateInput } from "../../../inputs/ItemCategoryUpdateInput";
import { ItemCategoryWhereUniqueInput } from "../../../inputs/ItemCategoryWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneItemCategoryArgs {
  @TypeGraphQL.Field(_type => ItemCategoryWhereUniqueInput, {
    nullable: false
  })
  where!: ItemCategoryWhereUniqueInput;

  @TypeGraphQL.Field(_type => ItemCategoryCreateInput, {
    nullable: false
  })
  create!: ItemCategoryCreateInput;

  @TypeGraphQL.Field(_type => ItemCategoryUpdateInput, {
    nullable: false
  })
  update!: ItemCategoryUpdateInput;
}
