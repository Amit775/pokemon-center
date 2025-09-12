import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ItemCategoriesWhereUniqueInput } from "../../../inputs/ItemCategoriesWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteOneItemCategoriesArgs {
  @TypeGraphQL.Field(_type => ItemCategoriesWhereUniqueInput, {
    nullable: false
  })
  where!: ItemCategoriesWhereUniqueInput;
}
