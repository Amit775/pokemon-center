import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ItemCategoryWhereInput } from "../../../inputs/ItemCategoryWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyItemCategoryArgs {
  @TypeGraphQL.Field(_type => ItemCategoryWhereInput, {
    nullable: true
  })
  where?: ItemCategoryWhereInput | undefined;
}
