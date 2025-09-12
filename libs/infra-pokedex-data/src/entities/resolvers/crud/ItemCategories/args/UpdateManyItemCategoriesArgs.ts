import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ItemCategoriesUpdateManyMutationInput } from "../../../inputs/ItemCategoriesUpdateManyMutationInput";
import { ItemCategoriesWhereInput } from "../../../inputs/ItemCategoriesWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyItemCategoriesArgs {
  @TypeGraphQL.Field(_type => ItemCategoriesUpdateManyMutationInput, {
    nullable: false
  })
  data!: ItemCategoriesUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => ItemCategoriesWhereInput, {
    nullable: true
  })
  where?: ItemCategoriesWhereInput | undefined;
}
