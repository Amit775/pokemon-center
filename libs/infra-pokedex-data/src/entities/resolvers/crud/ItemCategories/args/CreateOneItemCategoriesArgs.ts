import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ItemCategoriesCreateInput } from "../../../inputs/ItemCategoriesCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneItemCategoriesArgs {
  @TypeGraphQL.Field(_type => ItemCategoriesCreateInput, {
    nullable: false
  })
  data!: ItemCategoriesCreateInput;
}
