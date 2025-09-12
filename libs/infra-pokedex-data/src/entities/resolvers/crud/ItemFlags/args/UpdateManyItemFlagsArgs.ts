import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ItemFlagsUpdateManyMutationInput } from "../../../inputs/ItemFlagsUpdateManyMutationInput";
import { ItemFlagsWhereInput } from "../../../inputs/ItemFlagsWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyItemFlagsArgs {
  @TypeGraphQL.Field(_type => ItemFlagsUpdateManyMutationInput, {
    nullable: false
  })
  data!: ItemFlagsUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => ItemFlagsWhereInput, {
    nullable: true
  })
  where?: ItemFlagsWhereInput | undefined;
}
