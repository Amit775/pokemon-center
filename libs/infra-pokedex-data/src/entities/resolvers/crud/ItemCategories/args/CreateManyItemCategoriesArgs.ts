import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ItemCategoriesCreateManyInput } from "../../../inputs/ItemCategoriesCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyItemCategoriesArgs {
  @TypeGraphQL.Field(_type => [ItemCategoriesCreateManyInput], {
    nullable: false
  })
  data!: ItemCategoriesCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
