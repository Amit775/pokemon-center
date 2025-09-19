import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ItemCategoryCreateManyInput } from "../../../inputs/ItemCategoryCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyItemCategoryArgs {
  @TypeGraphQL.Field(_type => [ItemCategoryCreateManyInput], {
    nullable: false
  })
  data!: ItemCategoryCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
