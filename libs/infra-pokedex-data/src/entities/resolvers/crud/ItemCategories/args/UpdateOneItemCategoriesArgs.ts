import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ItemCategoriesUpdateInput } from "../../../inputs/ItemCategoriesUpdateInput";
import { ItemCategoriesWhereUniqueInput } from "../../../inputs/ItemCategoriesWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneItemCategoriesArgs {
  @TypeGraphQL.Field(_type => ItemCategoriesUpdateInput, {
    nullable: false
  })
  data!: ItemCategoriesUpdateInput;

  @TypeGraphQL.Field(_type => ItemCategoriesWhereUniqueInput, {
    nullable: false
  })
  where!: ItemCategoriesWhereUniqueInput;
}
