import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ItemFlingEffectUpdateManyMutationInput } from "../../../inputs/ItemFlingEffectUpdateManyMutationInput";
import { ItemFlingEffectWhereInput } from "../../../inputs/ItemFlingEffectWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyItemFlingEffectArgs {
  @TypeGraphQL.Field(_type => ItemFlingEffectUpdateManyMutationInput, {
    nullable: false
  })
  data!: ItemFlingEffectUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => ItemFlingEffectWhereInput, {
    nullable: true
  })
  where?: ItemFlingEffectWhereInput | undefined;
}
