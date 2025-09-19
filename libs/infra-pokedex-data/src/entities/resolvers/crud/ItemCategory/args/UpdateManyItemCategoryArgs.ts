import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ItemCategoryUpdateManyMutationInput } from "../../../inputs/ItemCategoryUpdateManyMutationInput";
import { ItemCategoryWhereInput } from "../../../inputs/ItemCategoryWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyItemCategoryArgs {
  @TypeGraphQL.Field(_type => ItemCategoryUpdateManyMutationInput, {
    nullable: false
  })
  data!: ItemCategoryUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => ItemCategoryWhereInput, {
    nullable: true
  })
  where?: ItemCategoryWhereInput | undefined;
}
