import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ItemCategoryWhereUniqueInput } from "../../../inputs/ItemCategoryWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteOneItemCategoryArgs {
  @TypeGraphQL.Field(_type => ItemCategoryWhereUniqueInput, {
    nullable: false
  })
  where!: ItemCategoryWhereUniqueInput;
}
