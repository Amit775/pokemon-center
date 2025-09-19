import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ItemCategoryCreateInput } from "../../../inputs/ItemCategoryCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneItemCategoryArgs {
  @TypeGraphQL.Field(_type => ItemCategoryCreateInput, {
    nullable: false
  })
  data!: ItemCategoryCreateInput;
}
