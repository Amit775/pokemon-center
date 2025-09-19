import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ItemCategoryUpdateInput } from "../../../inputs/ItemCategoryUpdateInput";
import { ItemCategoryWhereUniqueInput } from "../../../inputs/ItemCategoryWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneItemCategoryArgs {
  @TypeGraphQL.Field(_type => ItemCategoryUpdateInput, {
    nullable: false
  })
  data!: ItemCategoryUpdateInput;

  @TypeGraphQL.Field(_type => ItemCategoryWhereUniqueInput, {
    nullable: false
  })
  where!: ItemCategoryWhereUniqueInput;
}
