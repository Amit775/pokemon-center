import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ItemCategoriesWhereInput } from "../../../inputs/ItemCategoriesWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyItemCategoriesArgs {
  @TypeGraphQL.Field(_type => ItemCategoriesWhereInput, {
    nullable: true
  })
  where?: ItemCategoriesWhereInput | undefined;
}
