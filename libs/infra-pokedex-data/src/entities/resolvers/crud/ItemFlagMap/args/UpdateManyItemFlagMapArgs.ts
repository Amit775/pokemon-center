import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ItemFlagMapUpdateManyMutationInput } from "../../../inputs/ItemFlagMapUpdateManyMutationInput";
import { ItemFlagMapWhereInput } from "../../../inputs/ItemFlagMapWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyItemFlagMapArgs {
  @TypeGraphQL.Field(_type => ItemFlagMapUpdateManyMutationInput, {
    nullable: false
  })
  data!: ItemFlagMapUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => ItemFlagMapWhereInput, {
    nullable: true
  })
  where?: ItemFlagMapWhereInput | undefined;
}
